"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorToRGB = void 0;
const rgbMap = {};
function styleColorToRGB(color) {
    const dummy = document.createElement("div");
    const { style } = dummy;
    style.color = color;
    style.position = "fixed";
    style.height = "1px";
    style.width = "1px";
    style.opacity = "0";
    document.body.appendChild(dummy);
    const { color: styleColor } = (document.defaultView || window).getComputedStyle(dummy, "");
    document.body.removeChild(dummy);
    return colorToRGB0(styleColor || "");
}
function hexToNum(hex) {
    return parseInt(hex, 16);
}
function createRGB(r, g, b, a = 1) {
    return { r, g, b, a };
}
function tripleHexToRGB({ 1: r, 2: g, 3: b }) {
    return createRGB(hexToNum(r + r), hexToNum(g + g), hexToNum(b + b));
}
function sextupleHexToRGB({ 1: r1, 2: r2, 3: g1, 4: g2, 5: b1, 6: b2, }) {
    return createRGB(hexToNum(r1 + r2), hexToNum(g1 + g2), hexToNum(b1 + b2));
}
function testRGB({ r, g, b, a }) {
    return (0 <= r &&
        r <= 255 &&
        0 <= g &&
        g <= 255 &&
        0 <= b &&
        b <= 255 &&
        0 <= a &&
        a <= 1);
}
function rateToByte(r) {
    return Math.ceil((r * 255) / 100);
}
const numberPattern = /((?:\+|-)?(?:\d+(?:\.\d+)?|\.\d+))/.source;
const percentPattern = `${numberPattern}%`;
const maybePercentPattern = `${numberPattern}(%?)`;
function buildRgbWithCommaRegExp(bytePattern) {
    return new RegExp(`^rgba?\\(\\s*${bytePattern}\\s*,\\s*${bytePattern}\\s*,\\s*${bytePattern}\\s*\\)$`, "i");
}
function buildRgbLv4RegExp(bytePattern) {
    return new RegExp(`^rgba?\\(\\s*${bytePattern}\\s+${bytePattern}\\s+${bytePattern}\\s*\\)$`, "i");
}
function buildRgbaWithCommaRegExp(bytePattern, alphaPattern) {
    return new RegExp(`^rgba?\\(\\s*${bytePattern}\\s*,\\s*${bytePattern}\\s*,\\s*${bytePattern}\\s*,\\s*${alphaPattern}\\s*\\)$`, "i");
}
function buildRgbaLv4RegExp(bytePattern, alphaPattern) {
    return new RegExp(`^rgba?\\(\\s*${bytePattern}\\s+${bytePattern}\\s+${bytePattern}\\s*/\\s*${alphaPattern}\\s*\\)$`, "i");
}
function colorToRGB0(color) {
    if (/^#[0-9a-f]{3}$/i.exec(color)) {
        return tripleHexToRGB(color);
    }
    if (/^#[0-9a-f]{6}$/i.exec(color)) {
        return sextupleHexToRGB(color);
    }
    let ret = buildRgbWithCommaRegExp(numberPattern).exec(color) ||
        buildRgbLv4RegExp(numberPattern).exec(color);
    if (ret) {
        const rgb = createRGB(Number(ret[1]), Number(ret[2]), Number(ret[3]));
        if (testRGB(rgb)) {
            return rgb;
        }
    }
    ret =
        buildRgbWithCommaRegExp(percentPattern).exec(color) ||
            buildRgbLv4RegExp(percentPattern).exec(color);
    if (ret) {
        const rgb = createRGB(rateToByte(Number(ret[1])), rateToByte(Number(ret[2])), rateToByte(Number(ret[3])));
        if (testRGB(rgb)) {
            return rgb;
        }
    }
    ret =
        buildRgbaWithCommaRegExp(numberPattern, maybePercentPattern).exec(color) ||
            buildRgbaLv4RegExp(numberPattern, maybePercentPattern).exec(color);
    if (ret) {
        const rgb = createRGB(Number(ret[1]), Number(ret[2]), Number(ret[3]), Number(ret[4]) / (ret[5] /* % */ ? 100 : 1));
        if (testRGB(rgb)) {
            return rgb;
        }
    }
    ret =
        buildRgbaWithCommaRegExp(percentPattern, maybePercentPattern).exec(color) ||
            buildRgbaLv4RegExp(percentPattern, maybePercentPattern).exec(color);
    if (ret) {
        const rgb = createRGB(rateToByte(Number(ret[1])), rateToByte(Number(ret[2])), rateToByte(Number(ret[3])), Number(ret[4]) / (ret[5] /* % */ ? 100 : 1));
        if (testRGB(rgb)) {
            return rgb;
        }
    }
    return null;
}
function colorToRGB(color) {
    if (typeof color !== "string") {
        return createRGB(0, 0, 0, 0);
    }
    color = color.toLowerCase().trim();
    if (rgbMap[color]) {
        return rgbMap[color];
    }
    return colorToRGB0(color) || (rgbMap[color] = styleColorToRGB(color));
}
exports.colorToRGB = colorToRGB;
