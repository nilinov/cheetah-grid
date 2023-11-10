"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StdMultilineTextBaseStyle = void 0;
const StdTextBaseStyle_1 = require("./StdTextBaseStyle");
let defaultStyle;
class StdMultilineTextBaseStyle extends StdTextBaseStyle_1.StdTextBaseStyle {
    static get DEFAULT() {
        return defaultStyle
            ? defaultStyle
            : (defaultStyle = new StdMultilineTextBaseStyle());
    }
    constructor(style = {}) {
        super(style);
        this._lineHeight = style.lineHeight || "1em";
        this._autoWrapText = style.autoWrapText || false;
        this._lineClamp = style.lineClamp;
    }
    clone() {
        return new StdMultilineTextBaseStyle(this);
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
exports.StdMultilineTextBaseStyle = StdMultilineTextBaseStyle;
