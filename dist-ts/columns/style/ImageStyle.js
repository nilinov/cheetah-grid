"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageStyle = void 0;
const StdBaseStyle_1 = require("./StdBaseStyle");
const utils_1 = require("../../internal/utils");
let defaultStyle;
class ImageStyle extends StdBaseStyle_1.StdBaseStyle {
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new ImageStyle());
    }
    constructor(style = {}) {
        super((0, utils_1.defaults)(style, { textAlign: "center" }));
        this._imageSizing = style.imageSizing;
        this._margin = style.margin || 4;
    }
    get imageSizing() {
        return this._imageSizing;
    }
    set imageSizing(imageSizing) {
        this._imageSizing = imageSizing;
        this.doChangeStyle();
    }
    get margin() {
        return this._margin;
    }
    set margin(margin) {
        this._margin = margin;
        this.doChangeStyle();
    }
    clone() {
        return new ImageStyle(this);
    }
}
exports.ImageStyle = ImageStyle;
