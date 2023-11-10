"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
const StdMultilineTextBaseStyle_1 = require("./StdMultilineTextBaseStyle");
let defaultStyle;
class Style extends StdMultilineTextBaseStyle_1.StdMultilineTextBaseStyle {
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new Style());
    }
    constructor(style = {}) {
        super(style);
        this._multiline = style.multiline;
    }
    get multiline() {
        return !!this._multiline;
    }
    set multiline(multiline) {
        this._multiline = multiline;
        this.doChangeStyle();
    }
    clone() {
        return new Style(this);
    }
}
exports.Style = Style;
