"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortHeaderStyle = void 0;
const StdMultilineTextBaseStyle_1 = require("./StdMultilineTextBaseStyle");
let defaultStyle;
class SortHeaderStyle extends StdMultilineTextBaseStyle_1.StdMultilineTextBaseStyle {
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new SortHeaderStyle());
    }
    constructor(style = {}) {
        super(style);
        this._sortArrowColor = style.sortArrowColor;
        this._multiline = style.multiline;
    }
    get sortArrowColor() {
        return this._sortArrowColor;
    }
    set sortArrowColor(sortArrowColor) {
        this._sortArrowColor = sortArrowColor;
        this.doChangeStyle();
    }
    get multiline() {
        return !!this._multiline;
    }
    set multiline(multiline) {
        this._multiline = multiline;
        this.doChangeStyle();
    }
    clone() {
        return new SortHeaderStyle(this);
    }
}
exports.SortHeaderStyle = SortHeaderStyle;
