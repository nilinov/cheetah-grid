"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioStyle = void 0;
const StdBaseStyle_1 = require("./StdBaseStyle");
const utils_1 = require("../../internal/utils");
let defaultStyle;
class RadioStyle extends StdBaseStyle_1.StdBaseStyle {
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new RadioStyle());
    }
    constructor(style = {}) {
        super((0, utils_1.defaults)(style, { textAlign: "center" }));
        const { checkColor, uncheckBorderColor, checkBorderColor, uncheckBgColor, checkBgColor, } = style;
        this._checkColor = checkColor;
        this._uncheckBorderColor = uncheckBorderColor;
        this._checkBorderColor = checkBorderColor;
        this._uncheckBgColor = uncheckBgColor;
        this._checkBgColor = checkBgColor;
    }
    get checkColor() {
        return this._checkColor;
    }
    set checkColor(checkColor) {
        this._checkColor = checkColor;
        this.doChangeStyle();
    }
    get uncheckBorderColor() {
        return this._uncheckBorderColor;
    }
    set uncheckBorderColor(uncheckBorderColor) {
        this._uncheckBorderColor = uncheckBorderColor;
        this.doChangeStyle();
    }
    get checkBorderColor() {
        return this._checkBorderColor;
    }
    set checkBorderColor(checkBorderColor) {
        this._checkBorderColor = checkBorderColor;
        this.doChangeStyle();
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
    clone() {
        return new RadioStyle(this);
    }
}
exports.RadioStyle = RadioStyle;
