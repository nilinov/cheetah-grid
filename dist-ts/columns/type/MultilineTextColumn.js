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
exports.MultilineTextColumn = void 0;
const utils = __importStar(require("./columnUtils"));
const BaseColumn_1 = require("./BaseColumn");
const MultilineTextStyle_1 = require("../style/MultilineTextStyle");
class MultilineTextColumn extends BaseColumn_1.BaseColumn {
    constructor(option = {}) {
        super(option);
    }
    get StyleClass() {
        return MultilineTextStyle_1.MultilineTextStyle;
    }
    clone() {
        return new MultilineTextColumn(this);
    }
    drawInternal(value, context, style, helper, _grid, { drawCellBase, getIcon }) {
        const { textAlign, textBaseline, color, font, bgColor, padding, lineHeight, autoWrapText, lineClamp, textOverflow, } = style;
        if (bgColor) {
            drawCellBase({
                bgColor,
            });
        }
        const textValue = value != null ? String(value) : "";
        const multilines = textValue
            .replace(/\r?\n/g, "\n")
            .replace(/\r/g, "\n")
            .split("\n");
        helper.testFontLoad(font, textValue, context);
        utils.loadIcons(getIcon(), context, helper, (icons, context) => {
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
            });
        });
    }
}
exports.MultilineTextColumn = MultilineTextColumn;
