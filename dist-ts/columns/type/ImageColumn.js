"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageColumn = void 0;
const BaseColumn_1 = require("./BaseColumn");
const ImageStyle_1 = require("../style/ImageStyle");
const canvases_1 = require("../../internal/canvases");
const imgs_1 = require("../../internal/imgs");
const MAX_LRU_CACHE_SIZE = 50;
function getImage(url) {
    return (0, imgs_1.getCacheOrLoad)("ImageColumn", MAX_LRU_CACHE_SIZE, url);
}
function calcKeepAspectRatioSize(width, height, maxWidth, maxHeight) {
    let newWidth = width;
    let newHeight = height;
    if (newWidth > maxWidth) {
        newWidth = maxWidth;
        newHeight = (newWidth * height) / width;
    }
    if (newHeight > maxHeight) {
        newHeight = maxHeight;
        newWidth = (newHeight * width) / height;
    }
    return {
        width: newWidth,
        height: newHeight,
    };
}
class ImageColumn extends BaseColumn_1.BaseColumn {
    get StyleClass() {
        return ImageStyle_1.ImageStyle;
    }
    onDrawCell(cellValue, info, context, grid) {
        return super.onDrawCell(getImage(cellValue), info, context, grid);
    }
    clone() {
        return new ImageColumn(this);
    }
    drawInternal(value, context, style, helper, _grid, { drawCellBase }) {
        if (value) {
            const { textAlign, textBaseline, margin, bgColor } = style;
            if (bgColor) {
                drawCellBase({
                    bgColor,
                });
            }
            helper.drawWithClip(context, (ctx) => {
                ctx.textAlign = textAlign;
                ctx.textBaseline = textBaseline;
                const rect = context.getRect();
                if (style.imageSizing === "keep-aspect-ratio") {
                    const { width, height } = calcKeepAspectRatioSize(value.width, value.height, rect.width - margin * 2, rect.height - margin * 2);
                    const pos = (0, canvases_1.calcStartPosition)(ctx, rect, width, height, {
                        offset: margin,
                    });
                    ctx.drawImage(value, 0, 0, value.width, value.height, pos.x, pos.y, width, height);
                }
                else {
                    ctx.drawImage(value, 0, 0, value.width, value.height, rect.left + margin, rect.top + margin, rect.width - margin * 2, rect.height - margin * 2);
                }
            });
        }
    }
}
exports.ImageColumn = ImageColumn;
