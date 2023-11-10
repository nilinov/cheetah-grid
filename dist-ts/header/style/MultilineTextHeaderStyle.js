"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultilineTextHeaderStyle = void 0;
const StdMultilineTextBaseStyle_1 = require("./StdMultilineTextBaseStyle");
let defaultStyle;
class MultilineTextHeaderStyle extends StdMultilineTextBaseStyle_1.StdMultilineTextBaseStyle {
    static get DEFAULT() {
        return defaultStyle
            ? defaultStyle
            : (defaultStyle = new MultilineTextHeaderStyle());
    }
    constructor(style = {}) {
        super(style);
    }
    clone() {
        return new MultilineTextHeaderStyle(this);
    }
}
exports.MultilineTextHeaderStyle = MultilineTextHeaderStyle;
