"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStyle = void 0;
const Style_1 = require("./Style");
const utils_1 = require("../../internal/utils");
let defaultStyle;
class ButtonStyle extends Style_1.Style {
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new ButtonStyle());
    }
    constructor(style = {}) {
        super((0, utils_1.defaults)(style, { textAlign: "center" }));
        const { buttonBgColor } = style;
        this._buttonBgColor = buttonBgColor;
    }
    get buttonBgColor() {
        return this._buttonBgColor;
    }
    set buttonBgColor(buttonBgColor) {
        this._buttonBgColor = buttonBgColor;
        this.doChangeStyle();
    }
    clone() {
        return new ButtonStyle(this);
    }
}
exports.ButtonStyle = ButtonStyle;
