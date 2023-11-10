"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineSvg = void 0;
const utils_1 = require("../internal/utils");
const InlineImage_1 = require("./InlineImage");
function buildSvgDataUrl(svg) {
    const data = typeof svg === "string" ? svg : new XMLSerializer().serializeToString(svg);
    const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(data)}`; //svgデータをbase64に変換
    return url;
}
function getSvgElement(svg) {
    if (typeof svg === "string") {
        const parser = new DOMParser();
        return parser.parseFromString(svg, "image/svg+xml")
            .children[0];
    }
    else {
        return svg;
    }
}
class InlineSvg extends InlineImage_1.InlineImage {
    constructor({ svg, width, height }) {
        var _a, _b;
        const svgElem = (0, utils_1.then)(svg, getSvgElement);
        const elmWidth = !(0, utils_1.isPromise)(svgElem)
            ? (_a = svgElem.getAttribute("width")) !== null && _a !== void 0 ? _a : undefined
            : undefined;
        const elmHeight = !(0, utils_1.isPromise)(svgElem)
            ? (_b = svgElem.getAttribute("height")) !== null && _b !== void 0 ? _b : undefined
            : undefined;
        const numElmWidth = elmWidth != null ? Number(elmWidth) : undefined;
        const numElmHeight = elmHeight != null ? Number(elmHeight) : undefined;
        super({
            src: (0, utils_1.then)(svg, buildSvgDataUrl),
            width: width || numElmWidth,
            height: height || numElmHeight,
            imageWidth: numElmWidth,
            imageHeight: numElmHeight,
        });
    }
    canBreak() {
        return false;
    }
    toString() {
        return "";
    }
}
exports.InlineSvg = InlineSvg;
