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
exports.ButtonColumn = void 0;
const utils = __importStar(require("./columnUtils"));
const ButtonStyle_1 = require("../style/ButtonStyle");
const Column_1 = require("./Column");
const utils_1 = require("../../internal/utils");
const symbolManager_1 = require("../../internal/symbolManager");
const BUTTON_COLUMN_STATE_ID = (0, symbolManager_1.getButtonColumnStateId)();
class ButtonColumn extends Column_1.Column {
    constructor(option = {}) {
        super(option);
        this._caption = option.caption;
    }
    get StyleClass() {
        return ButtonStyle_1.ButtonStyle;
    }
    get caption() {
        return this._caption;
    }
    withCaption(caption) {
        const c = this.clone();
        c._caption = caption;
        return c;
    }
    clone() {
        return new ButtonColumn(this);
    }
    convertInternal(value) {
        return this._caption || super.convertInternal(value);
    }
    getCopyCellValue(value) {
        return this._caption || value;
    }
    drawInternal(value, context, style, helper, grid, { drawCellBase, getIcon }) {
        const { textAlign, textBaseline, bgColor, color, buttonBgColor, font, padding, textOverflow, } = style;
        if (bgColor) {
            drawCellBase({
                bgColor,
            });
        }
        const textValue = value != null ? String(value) : "";
        helper.testFontLoad(font, textValue, context);
        const { col, row } = context;
        const range = grid.getCellRange(col, row);
        let active = false;
        const state = grid[BUTTON_COLUMN_STATE_ID];
        if (state) {
            if (state.mouseActiveCell &&
                (0, utils_1.cellInRange)(range, state.mouseActiveCell.col, state.mouseActiveCell.row)) {
                active = true;
            }
            else {
                const { select } = context.getSelection();
                if ((0, utils_1.cellInRange)(range, select.col, select.row)) {
                    active = true;
                }
            }
        }
        utils.loadIcons(getIcon(), context, helper, (icons, context) => {
            helper.button(textValue, context, {
                textAlign,
                textBaseline,
                bgColor: buttonBgColor,
                color,
                font,
                padding,
                shadow: active
                    ? {
                        color: "rgba(0, 0, 0, 0.48)",
                        blur: 6,
                        offsetY: 3,
                    }
                    : {},
                textOverflow,
                icons,
            });
        });
    }
}
exports.ButtonColumn = ButtonColumn;
