"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconStyle = void 0;
const Style_1 = require("./Style");
const utils_1 = require("../../internal/utils");
let defaultStyle;
class IconStyle extends Style_1.Style {
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new IconStyle());
    }
    constructor(style = {}) {
        super((0, utils_1.defaults)(style, { textAlign: "center" }));
    }
    clone() {
        return new IconStyle(this);
    }
}
exports.IconStyle = IconStyle;
