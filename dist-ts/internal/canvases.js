"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcStartPosition = exports.calcBasePosition = exports.getFontSize = void 0;
const fontSizeCache = {};
function getFontSize(ctx, font) {
    const fontName = font || ctx.font;
    if (fontSizeCache[fontName]) {
        return fontSizeCache[fontName];
    }
    const bk = ctx.font;
    try {
        ctx.font = fontName;
        const em = ctx.measureText("あ").width;
        return (fontSizeCache[fontName] = {
            width: em,
            height: em,
        });
    }
    finally {
        ctx.font = bk;
    }
}
exports.getFontSize = getFontSize;
function calcBasePosition(ctx, rect, { offset = 0, padding: { left: paddingLeft = 0, right: paddingRight = 0, top: paddingTop = 0, bottom: paddingBottom = 0, } = {}, } = {}) {
    return calcStartPosition(ctx, rect, 0, 0, {
        offset,
        padding: {
            left: paddingLeft,
            right: paddingRight,
            top: paddingTop,
            bottom: paddingBottom,
        },
    });
}
exports.calcBasePosition = calcBasePosition;
function calcStartPosition(ctx, rect, width, height, { offset = 0, padding: { left: paddingLeft = 0, right: paddingRight = 0, top: paddingTop = 0, bottom: paddingBottom = 0, } = {}, } = {}) {
    const textAlign = ctx.textAlign || "left";
    const textBaseline = ctx.textBaseline || "middle";
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    let x = rect.left + offset + paddingLeft;
    if (textAlign === "right" || textAlign === "end") {
        x = rect.right - width - offset - paddingRight;
    }
    else if (textAlign === "center") {
        x = rect.left + (rect.width - width + paddingLeft - paddingRight) / 2;
    }
    let y = rect.top + offset + paddingTop;
    if (textBaseline === "bottom" ||
        textBaseline === "alphabetic" ||
        textBaseline === "ideographic") {
        y = rect.bottom - height - offset - paddingBottom;
    }
    else if (textBaseline === "middle") {
        y = rect.top + (rect.height - height + paddingTop - paddingBottom) / 2;
    }
    return { x, y };
}
exports.calcStartPosition = calcStartPosition;
