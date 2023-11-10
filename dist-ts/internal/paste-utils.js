"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePasteRangeBoxValues = exports.normalizePasteValue = void 0;
function normalizePasteValue(text) {
    return text[text.length - 1] !== "\n"
        ? text
        : text[text.length - 2] === "\r"
            ? text.slice(0, -2)
            : text.slice(0, -1);
}
exports.normalizePasteValue = normalizePasteValue;
function parsePasteRangeBoxValues(value, option) {
    const normalizedValue = normalizePasteValue(value);
    const { values, colCount } = parseValues(normalizedValue, option);
    return {
        colCount,
        rowCount: values.length,
        getCellValue(offsetCol, offsetRow) {
            var _a, _b;
            return (_b = (_a = values[offsetRow]) === null || _a === void 0 ? void 0 : _a[offsetCol]) !== null && _b !== void 0 ? _b : "";
        },
    };
}
exports.parsePasteRangeBoxValues = parsePasteRangeBoxValues;
function parseValues(text, { trimOnPaste }) {
    const len = text.length;
    const adjustCell = trimOnPaste
        ? (cell) => cell.trim()
        : (cell) => cell;
    let colCount = 1;
    let line = [];
    const values = [line];
    let cell = "";
    for (let index = 0; index < len; index++) {
        const char = text[index];
        if (char === "\t") {
            line.push(adjustCell(cell));
            cell = "";
            continue;
        }
        if (char === "\n") {
            // End of line
            cell = adjustCell(cell);
            if (cell[cell.length - 1] === "\r") {
                cell = cell.slice(0, -1);
            }
            line.push(cell);
            colCount = Math.max(colCount, line.length);
            line = [];
            values.push(line);
            cell = "";
            continue;
        }
        if (char === '"' && !cell.trim()) {
            const quoted = processQuotedCell(index + 1);
            if (quoted) {
                ({ cell } = quoted);
                index = quoted.next - 1;
                continue;
            }
        }
        cell += char;
    }
    // End of text
    line.push(adjustCell(cell));
    colCount = Math.max(colCount, line.length);
    return { values, colCount };
    function processQuotedCell(start) {
        let cell = "";
        let index = start;
        while (index < len) {
            const char = text[index];
            if (char !== '"') {
                cell += char;
                index++;
                continue;
            }
            if (text[index + 1] === '"') {
                // Escape
                cell += '"';
                index += 2;
                continue;
            }
            // Maybe end quote
            let next = index + 1;
            while (next < len) {
                const c = text[next];
                if (c.trim()) {
                    // Not quoted. e.g. "A"B
                    return null;
                }
                if (c === "\t" || c === "\n") {
                    break;
                }
                // Allow spaces
                next++;
            }
            // End quote
            return { cell, next };
        }
        return null;
    }
}
