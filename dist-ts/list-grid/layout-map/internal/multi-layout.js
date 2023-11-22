"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiLayoutMap = void 0;
const columns = __importStar(require("../../../columns"));
const headerAction = __importStar(require("../../../header/action"));
const headerType = __importStar(require("../../../header/type"));
const utils_1 = require("./utils");
function normalizeLayout(layout) {
    if (Array.isArray(layout)) {
        return {
            header: layout,
            body: layout,
        };
    }
    return layout;
}
let seqId = 0;
class LayoutObjectGrid {
    constructor(layout, transform) {
        this.objects = [];
        this.objectGrid = [];
        this.objectMap = {};
        this.columnCount = 0;
        this.columnWidths = [];
        layout.forEach((rowLayout, row) => {
            let col = 0;
            rowLayout.forEach((cell, indexCell) => {
                var _a, _b, _c;
                const id = seqId++;
                const obj = transform(cell, id);
                this.objects.push(obj);
                this.objectMap[id] = obj;
                col = this._findStartCell(col, row);
                const rowSpan = Number((_a = cell.rowSpan) !== null && _a !== void 0 ? _a : 1);
                const colSpan = typeof cell.colSpan === 'function' ? Number((_b = cell.colSpan(indexCell, row)) !== null && _b !== void 0 ? _b : 1) : Number((_c = cell.colSpan) !== null && _c !== void 0 ? _c : 1);
                const endRow = row + rowSpan;
                const endCol = col + colSpan;
                for (let rowIndex = row; rowIndex < endRow; rowIndex++) {
                    const objectGridRow = this._getObjectGridRow(rowIndex);
                    for (let colIndex = col; colIndex < endCol; colIndex++) {
                        objectGridRow[colIndex] = obj;
                    }
                }
                if (colSpan === 1) {
                    this._setWidthDataIfAbsent(col, cell);
                }
                this._useColumnIndex(endCol - 1);
                col = endCol;
            });
        });
    }
    get rowCount() {
        return this.objectGrid.length;
    }
    _findStartCell(col, row) {
        const objectGridRow = this._getObjectGridRow(row);
        for (let index = col; index < objectGridRow.length; index++) {
            if (!objectGridRow[index]) {
                return index;
            }
        }
        return objectGridRow.length;
    }
    _getObjectGridRow(row) {
        return this.objectGrid[row] || (this.objectGrid[row] = []);
    }
    _useColumnIndex(col) {
        if (this.columnCount > col) {
            return;
        }
        this.columnCount = col + 1;
    }
    _setWidthDataIfAbsent(col, cell) {
        if (!this.columnWidths[col]) {
            if (cell.width != null ||
                cell.maxWidth != null ||
                cell.minWidth != null) {
                this.columnWidths[col] = {
                    width: cell.width,
                    maxWidth: cell.maxWidth,
                    minWidth: cell.minWidth,
                };
            }
        }
    }
}
class MultiLayoutMap {
    constructor(layout) {
        this._columnWidths = [];
        this._emptyDataCache = new utils_1.EmptyDataCache();
        const hbLayouut = normalizeLayout(layout);
        const header = (this._header = new LayoutObjectGrid(hbLayouut.header, (hd, id) => {
            return {
                id,
                caption: hd.caption,
                field: hd.headerField || hd.field,
                headerIcon: hd.headerIcon,
                style: hd.headerStyle,
                headerType: headerType.ofCell(hd),
                action: headerAction.ofCell(hd),
                define: hd,
            };
        }));
        const body = (this._body = new LayoutObjectGrid(hbLayouut.body, (colDef, id) => {
            return {
                id,
                field: colDef.field,
                width: colDef.width,
                minWidth: colDef.minWidth,
                maxWidth: colDef.maxWidth,
                icon: colDef.icon,
                message: colDef.message,
                columnType: columns.type.of(colDef.columnType),
                action: columns.action.of(colDef.action),
                style: colDef.style,
                define: colDef,
            };
        }));
        const columnCount = (this._columnCount = Math.max(header.columnCount, body.columnCount));
        for (let col = 0; col < columnCount; col++) {
            const widthDef = header.columnWidths[col] || body.columnWidths[col] || {};
            this._columnWidths[col] = widthDef;
        }
    }
    get columnWidths() {
        return this._columnWidths;
    }
    get headerRowCount() {
        return this._header.rowCount;
    }
    get bodyRowCount() {
        return this._body.rowCount;
    }
    get colCount() {
        return this._columnCount;
    }
    get headerObjects() {
        return this._header.objects;
    }
    get columnObjects() {
        return this._body.objects;
    }
    getCellId(col, row) {
        var _a, _b, _c, _d;
        if (this.headerRowCount <= row) {
            const bodyRow = row - this.headerRowCount;
            const bodyLayoutRow = bodyRow % this.bodyRowCount;
            return (_b = (_a = this._body.objectGrid[bodyLayoutRow]) === null || _a === void 0 ? void 0 : _a[col]) === null || _b === void 0 ? void 0 : _b.id;
        }
        //in header
        return (_d = (_c = this._header.objectGrid[row]) === null || _c === void 0 ? void 0 : _c[col]) === null || _d === void 0 ? void 0 : _d.id;
    }
    getHeader(col, row) {
        const id = this.getCellId(col, row);
        return (this._header.objectMap[id] ||
            this._emptyDataCache.getHeader(col, row));
    }
    getBody(col, row) {
        const id = this.getCellId(col, row);
        return (this._body.objectMap[id] ||
            this._emptyDataCache.getBody(col, row));
    }
    getBodyLayoutRangeById(id) {
        var _a;
        for (let row = 0; row < this.bodyRowCount; row++) {
            const objectGridRow = this._body.objectGrid[row];
            if (!objectGridRow) {
                continue;
            }
            for (let col = 0; col < this.colCount; col++) {
                if (id === ((_a = objectGridRow[col]) === null || _a === void 0 ? void 0 : _a.id)) {
                    return this._getCellRange(this._body, col, row, 0);
                }
            }
        }
        throw new Error(`can not found body layout @id=${id}`);
    }
    getCellRange(col, row) {
        if (this.headerRowCount <= row) {
            const recordIndex = this.getRecordIndexByRow(row);
            const startRow = this.getRecordStartRowByRecordIndex(recordIndex);
            const bodyRow = row - this.headerRowCount;
            const bodyLayoutRow = bodyRow % this.bodyRowCount;
            return this._getCellRange(this._body, col, bodyLayoutRow, startRow);
        }
        //in header
        return this._getCellRange(this._header, col, row, 0);
    }
    getRecordIndexByRow(row) {
        if (row < this.headerRowCount) {
            return -1;
        }
        else {
            const bodyRow = row - this.headerRowCount;
            return Math.floor(bodyRow / this.bodyRowCount);
        }
    }
    getRecordStartRowByRecordIndex(index) {
        return this.headerRowCount + index * this.bodyRowCount;
    }
    _getCellRange(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    layout, col, layoutRow, offsetRow) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const result = {
            start: { col, row: layoutRow + offsetRow },
            end: { col, row: layoutRow + offsetRow },
        };
        const { objectGrid } = layout;
        const id = (_b = (_a = objectGrid[layoutRow]) === null || _a === void 0 ? void 0 : _a[col]) === null || _b === void 0 ? void 0 : _b.id;
        if (id == null) {
            return result;
        }
        for (let c = col - 1; c >= 0; c--) {
            if (id !== ((_d = (_c = objectGrid[layoutRow]) === null || _c === void 0 ? void 0 : _c[c]) === null || _d === void 0 ? void 0 : _d.id)) {
                break;
            }
            result.start.col = c;
        }
        for (let c = col + 1; c < layout.columnCount; c++) {
            if (id !== ((_f = (_e = objectGrid[layoutRow]) === null || _e === void 0 ? void 0 : _e[c]) === null || _f === void 0 ? void 0 : _f.id)) {
                break;
            }
            result.end.col = c;
        }
        for (let r = layoutRow - 1; r >= 0; r--) {
            if (id !== ((_h = (_g = objectGrid[r]) === null || _g === void 0 ? void 0 : _g[col]) === null || _h === void 0 ? void 0 : _h.id)) {
                break;
            }
            result.start.row = r + offsetRow;
        }
        for (let r = layoutRow + 1; r < layout.rowCount; r++) {
            if (id !== ((_k = (_j = objectGrid[r]) === null || _j === void 0 ? void 0 : _j[col]) === null || _k === void 0 ? void 0 : _k.id)) {
                break;
            }
            result.end.row = r + offsetRow;
        }
        return result;
    }
}
exports.MultiLayoutMap = MultiLayoutMap;
