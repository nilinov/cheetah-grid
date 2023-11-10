"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberStyle = void 0;
const Style_1 = require("./Style");
const utils_1 = require("../../internal/utils");
let defaultStyle;
class NumberStyle extends Style_1.Style {
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new NumberStyle());
    }
    constructor(style = {}) {
        super((0, utils_1.defaults)(style, { textAlign: "right" }));
    }
    clone() {
        return new NumberStyle(this);
    }
}
exports.NumberStyle = NumberStyle;
