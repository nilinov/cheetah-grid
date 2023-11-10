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
exports.CheckHeader = void 0;
const inlineUtils = __importStar(require("../../element/inlines"));
const utils = __importStar(require("../../columns/type/columnUtils"));
const BaseHeader_1 = require("./BaseHeader");
const CheckHeaderStyle_1 = require("../style/CheckHeaderStyle");
const symbolManager_1 = require("../../internal/symbolManager");
const utils_1 = require("../../internal/utils");
const CHECK_HEADER_STATE_ID = (0, symbolManager_1.getCheckHeaderStateId)();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getState(grid) {
    let state = grid[CHECK_HEADER_STATE_ID];
    if (!state) {
        state = { elapsed: {}, block: {} };
        utils_1.obj.setReadonly(grid, CHECK_HEADER_STATE_ID, state);
    }
    return state;
}
class CheckHeader extends BaseHeader_1.BaseHeader {
    get StyleClass() {
        return CheckHeaderStyle_1.CheckHeaderStyle;
    }
    clone() {
        return new CheckHeader(this);
    }
    drawInternal(value, context, style, helper, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    grid, { drawCellBase, getIcon }) {
        const { textAlign, textBaseline, borderColor, checkBgColor, uncheckBgColor, bgColor, padding, color, font, textOverflow, } = style;
        if (bgColor) {
            drawCellBase({
                bgColor,
            });
        }
        const { col, row } = context;
        const range = grid.getCellRange(col, row);
        const cellKey = `${range.start.col}:${range.start.row}`;
        const { elapsed: { [cellKey]: elapsed }, } = getState(grid);
        const checked = grid.getHeaderValue(range.start.col, range.start.row);
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
        const inlineCheck = helper.buildCheckBoxInline(!!checked, context, opt);
        utils.loadIcons(getIcon(), context, helper, (icons, context) => {
            let contents = [inlineCheck];
            contents = contents.concat(inlineUtils.buildInlines(icons, value != null ? String(value) : ""));
            helper.text(contents, context, {
                textAlign,
                textBaseline,
                color,
                font,
                padding,
                textOverflow,
            });
        });
    }
}
exports.CheckHeader = CheckHeader;
