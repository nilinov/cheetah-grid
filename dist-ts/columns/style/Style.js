"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
const StdBaseStyle_1 = require("./StdBaseStyle");
let defaultStyle;
class Style extends StdBaseStyle_1.StdBaseStyle {
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new Style());
    }
    constructor(style = {}) {
        super(style);
        this._color = style.color;
        this._font = style.font;
        this._padding = style.padding;
        this._textOverflow = style.textOverflow || "clip";
        this._appendRightPx = style.appendRightPx;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
        this.doChangeStyle();
    }
    get font() {
        return this._font;
    }
    set font(font) {
        this._font = font;
        this.doChangeStyle();
    }
    get padding() {
        return this._padding;
    }
    set padding(padding) {
        this._padding = padding;
        this.doChangeStyle();
    }
    get textOverflow() {
        return this._textOverflow;
    }
    set textOverflow(textOverflow) {
        this._textOverflow = textOverflow;
        this.doChangeStyle();
    }
    get appendRightPx() {
        return this._appendRightPx;
    }
    set appendRightPx(appendRightPx) {
        this._appendRightPx = appendRightPx;
        this.doChangeStyle();
    }
    clone() {
        return new Style(this);
    }
}
exports.Style = Style;
