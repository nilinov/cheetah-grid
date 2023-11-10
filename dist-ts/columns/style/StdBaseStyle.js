"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StdBaseStyle = void 0;
const BaseStyle_1 = require("./BaseStyle");
let defaultStyle;
class StdBaseStyle extends BaseStyle_1.BaseStyle {
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new StdBaseStyle());
    }
    constructor(style = {}) {
        super(style);
        this._textAlign = style.textAlign || "left";
        this._textBaseline = style.textBaseline || "middle";
    }
    get textAlign() {
        return this._textAlign;
    }
    set textAlign(textAlign) {
        this._textAlign = textAlign;
        this.doChangeStyle();
    }
    get textBaseline() {
        return this._textBaseline;
    }
    set textBaseline(textBaseline) {
        this._textBaseline = textBaseline;
        this.doChangeStyle();
    }
    clone() {
        return new StdBaseStyle(this);
    }
}
exports.StdBaseStyle = StdBaseStyle;
