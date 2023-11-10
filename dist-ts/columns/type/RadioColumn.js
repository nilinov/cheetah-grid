"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioColumn = void 0;
const BaseColumn_1 = require("./BaseColumn");
const RadioStyle_1 = require("../style/RadioStyle");
const symbolManager_1 = require("../../internal/symbolManager");
const utils_1 = require("../utils");
const RADIO_COLUMN_STATE_ID = (0, symbolManager_1.getRadioColumnStateId)();
class RadioColumn extends BaseColumn_1.BaseColumn {
    get StyleClass() {
        return RadioStyle_1.RadioStyle;
    }
    clone() {
        return new RadioColumn(this);
    }
    convertInternal(value) {
        return (0, utils_1.toBoolean)(value);
    }
    drawInternal(value, context, style, helper, grid, { drawCellBase }) {
        var _a;
        const { textAlign, textBaseline, checkColor, uncheckBorderColor, checkBorderColor, uncheckBgColor, checkBgColor, bgColor, } = style;
        if (bgColor) {
            drawCellBase({
                bgColor,
            });
        }
        const { col, row } = context;
        const range = grid.getCellRange(col, row);
        const cellKey = `${range.start.col}:${range.start.row}`;
        const elapsed = (_a = grid[RADIO_COLUMN_STATE_ID]) === null || _a === void 0 ? void 0 : _a.elapsed[cellKey];
        const opt = {
            textAlign,
            textBaseline,
            checkColor,
            uncheckBorderColor,
            checkBorderColor,
            uncheckBgColor,
            checkBgColor,
        };
        if (elapsed != null) {
            opt.animElapsedTime = elapsed;
        }
        helper.radioButton(value, context, opt);
    }
}
exports.RadioColumn = RadioColumn;
