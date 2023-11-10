"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckHeaderStyle = void 0;
const StdTextBaseStyle_1 = require("./StdTextBaseStyle");
const utils_1 = require("../../internal/utils");
let defaultStyle;
class CheckHeaderStyle extends StdTextBaseStyle_1.StdTextBaseStyle {
    static get DEFAULT() {
        return defaultStyle
            ? defaultStyle
            : (defaultStyle = new CheckHeaderStyle());
    }
    constructor(style = {}) {
        super((0, utils_1.defaults)(style, { textAlign: "center" }));
        const { uncheckBgColor, checkBgColor, borderColor } = style;
        this._uncheckBgColor = uncheckBgColor;
        this._checkBgColor = checkBgColor;
        this._borderColor = borderColor;
    }
    get uncheckBgColor() {
        return this._uncheckBgColor;
    }
    set uncheckBgColor(uncheckBgColor) {
        this._uncheckBgColor = uncheckBgColor;
        this.doChangeStyle();
    }
    get checkBgColor() {
        return this._checkBgColor;
    }
    set checkBgColor(checkBgColor) {
        this._checkBgColor = checkBgColor;
        this.doChangeStyle();
    }
    get borderColor() {
        return this._borderColor;
    }
    set borderColor(borderColor) {
        this._borderColor = borderColor;
        this.doChangeStyle();
    }
    clone() {
        return new CheckHeaderStyle(this);
    }
}
exports.CheckHeaderStyle = CheckHeaderStyle;
