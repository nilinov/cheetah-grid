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
exports.MenuColumn = void 0;
const utils = __importStar(require("./columnUtils"));
const BaseColumn_1 = require("./BaseColumn");
const MenuStyle_1 = require("../style/MenuStyle");
const menu_items_1 = require("../../internal/menu-items");
class MenuColumn extends BaseColumn_1.BaseColumn {
    constructor(option = {}) {
        super(option);
        this._options = (0, menu_items_1.normalize)(option.options);
    }
    get StyleClass() {
        return MenuStyle_1.MenuStyle;
    }
    clone() {
        return new MenuColumn(this);
    }
    get options() {
        return this._options;
    }
    withOptions(options) {
        const c = this.clone();
        c._options = (0, menu_items_1.normalize)(options);
        return c;
    }
    drawInternal(value, context, style, helper, _grid, { drawCellBase, getIcon }) {
        const { textAlign, textBaseline, font, bgColor, padding, textOverflow, appearance, } = style;
        let { color } = style;
        if (bgColor) {
            drawCellBase({
                bgColor,
            });
        }
        const convertedValue = this._convertInternal(value);
        const text = convertedValue != null ? String(convertedValue) : "";
        helper.testFontLoad(font, text, context);
        utils.loadIcons(getIcon(), context, helper, (icons, context) => {
            const basePadding = helper.toBoxPixelArray(padding || 0, context, font);
            const textPadding = basePadding.slice(0);
            textPadding[1] += 26; // icon padding
            const iconPadding = basePadding.slice(0);
            iconPadding[1] += 8;
            if (color == null && (value == null || value === "")) {
                color = "rgba(0, 0, 0, .38)";
            }
            helper.text(text, context, {
                textAlign,
                textBaseline,
                color,
                font,
                padding: textPadding,
                textOverflow,
                icons,
            });
            if (appearance === "menulist-button") {
                // draw dropdown arrow icon
                helper.text("", context, {
                    textAlign: "right",
                    textBaseline,
                    color,
                    font,
                    icons: [
                        {
                            path: "M0 2 5 7 10 2z",
                            width: 10,
                            color: "rgba(0, 0, 0, .54)",
                        },
                    ],
                    padding: iconPadding,
                });
            }
            else if (appearance !== "none") {
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                console.warn(`unsupported appearance:${appearance}`);
            }
        });
    }
    convertInternal(value) {
        return value;
    }
    _convertInternal(value) {
        const options = this._options;
        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            if (option.value === value) {
                value = option.label;
                break;
            }
        }
        return super.convertInternal(value);
    }
    getCopyCellValue(value) {
        return this._convertInternal(value);
    }
}
exports.MenuColumn = MenuColumn;
