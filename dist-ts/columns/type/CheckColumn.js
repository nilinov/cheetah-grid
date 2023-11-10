"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckColumn = void 0;
const BaseColumn_1 = require("./BaseColumn");
const CheckStyle_1 = require("../style/CheckStyle");
const symbolManager_1 = require("../../internal/symbolManager");
const utils_1 = require("../utils");
const CHECK_COLUMN_STATE_ID = (0, symbolManager_1.getCheckColumnStateId)();
class CheckColumn extends BaseColumn_1.BaseColumn {
    get StyleClass() {
        return CheckStyle_1.CheckStyle;
    }
    clone() {
        return new CheckColumn(this);
    }
    convertInternal(value) {
        return (0, utils_1.toBoolean)(value);
    }
    drawInternal(value, context, style, helper, grid, { drawCellBase }) {
        var _a;
        const { textAlign, textBaseline, borderColor, checkBgColor, uncheckBgColor, bgColor, } = style;
        if (bgColor) {
            drawCellBase({
                bgColor,
            });
        }
        const { col, row } = context;
        const range = grid.getCellRange(col, row);
        const cellKey = `${range.start.col}:${range.start.row}`;
        const elapsed = (_a = grid[CHECK_COLUMN_STATE_ID]) === null || _a === void 0 ? void 0 : _a.elapsed[cellKey];
        const opt = {
            textAlign,
            textBaseline,
            borderColor,
            checkBgColor,
            uncheckBgColor,
        };
        if (elapsed != null) {
            opt.animElapsedTime = elapsed;
        }
        helper.checkbox(value, context, opt);
    }
}
exports.CheckColumn = CheckColumn;
