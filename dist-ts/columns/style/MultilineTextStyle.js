"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultilineTextStyle = void 0;
const Style_1 = require("./Style");
const utils_1 = require("../../internal/utils");
let defaultStyle;
class MultilineTextStyle extends Style_1.Style {
    static get DEFAULT() {
        return defaultStyle
            ? defaultStyle
            : (defaultStyle = new MultilineTextStyle());
    }
    constructor(style = {}) {
        super((0, utils_1.defaults)(style, { textBaseline: "top" }));
        this._lineHeight = style.lineHeight || "1em";
        this._autoWrapText = style.autoWrapText || false;
        this._lineClamp = style.lineClamp;
    }
    clone() {
        return new MultilineTextStyle(this);
    }
    get lineHeight() {
        return this._lineHeight;
    }
    set lineHeight(lineHeight) {
        this._lineHeight = lineHeight;
        this.doChangeStyle();
    }
    get lineClamp() {
        return this._lineClamp;
    }
    set lineClamp(lineClamp) {
        this._lineClamp = lineClamp;
        this.doChangeStyle();
    }
    get autoWrapText() {
        return this._autoWrapText;
    }
    set autoWrapText(autoWrapText) {
        this._autoWrapText = autoWrapText;
        this.doChangeStyle();
    }
}
exports.MultilineTextStyle = MultilineTextStyle;
