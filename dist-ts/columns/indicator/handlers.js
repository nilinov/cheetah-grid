"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDrawIndicator = void 0;
const triangle_1 = require("./triangle");
function getDrawIndicator(indicatorStyle) {
    const { style } = indicatorStyle;
    if (style === "triangle") {
        return triangle_1.drawTriangleIndicator;
    }
    return null;
}
exports.getDrawIndicator = getDrawIndicator;
