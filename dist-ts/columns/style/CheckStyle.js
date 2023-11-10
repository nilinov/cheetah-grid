"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckStyle = void 0;
const StdBaseStyle_1 = require("./StdBaseStyle");
const utils_1 = require("../../internal/utils");
let defaultStyle;
class CheckStyle extends StdBaseStyle_1.StdBaseStyle {
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new CheckStyle());
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
        return new CheckStyle(this);
    }
}
exports.CheckStyle = CheckStyle;
