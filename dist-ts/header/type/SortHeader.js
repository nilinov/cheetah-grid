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
exports.SortHeader = void 0;
const utils = __importStar(require("../../columns/type/columnUtils"));
const BaseHeader_1 = require("./BaseHeader");
const SortHeaderStyle_1 = require("../style/SortHeaderStyle");
const utils_1 = require("../../internal/utils");
const canvases_1 = require("../../internal/canvases");
class SortHeader extends BaseHeader_1.BaseHeader {
    get StyleClass() {
        return SortHeaderStyle_1.SortHeaderStyle;
    }
    drawInternal(value, context, style, helper, grid, { drawCellBase, getIcon }) {
        const { textAlign, textBaseline = "middle", color, bgColor, font, padding, textOverflow, lineHeight, autoWrapText, lineClamp, sortArrowColor, multiline, } = style;
        if (bgColor) {
            drawCellBase({
                bgColor,
            });
        }
        const textValue = value != null ? String(value) : "";
        helper.testFontLoad(font, textValue, context);
        utils.loadIcons(getIcon(), context, helper, (icons, context) => {
            const state = grid.sortState;
            let order = undefined;
            const { col, row } = context;
            const range = grid.getCellRange(col, row);
            if ((0, utils_1.cellInRange)(range, state.col, state.row)) {
                ({ order } = state);
            }
            const ctx = context.getContext();
            const arrowSize = (0, canvases_1.getFontSize)(ctx, font).width * 1.2;
            const trailingIcon = {
                name: order != null
                    ? order === "asc"
                        ? "arrow_downward"
                        : "arrow_upward"
                    : undefined,
                width: arrowSize,
                color: helper.getColor(sortArrowColor || helper.theme.header.sortArrowColor, col, row, ctx) || "rgba(0, 0, 0, 0.38)",
            };
            if (multiline) {
                const multilines = textValue
                    .replace(/\r?\n/g, "\n")
                    .replace(/\r/g, "\n")
                    .split("\n");
                helper.multilineText(multilines, context, {
                    textAlign,
                    textBaseline,
                    color,
                    font,
                    padding,
                    lineHeight,
                    autoWrapText,
                    lineClamp,
                    textOverflow,
                    icons,
                    trailingIcon,
                });
            }
            else {
                helper.text(textValue, context, {
                    textAlign,
                    textBaseline,
                    color,
                    font,
                    padding,
                    textOverflow,
                    icons,
                    trailingIcon,
                });
            }
        });
    }
}
exports.SortHeader = SortHeader;
