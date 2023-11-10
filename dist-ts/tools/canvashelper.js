"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawButton = exports.drawRadioButton = exports.drawCheckbox = exports.measureRadioButton = exports.measureCheckbox = exports.drawInlineImageRect = exports.fillTextRect = exports.strokeCircle = exports.fillCircle = exports.strokeRoundRect = exports.fillRoundRect = exports.roundRect = exports.strokeColorsRect = void 0;
const canvases_1 = require("../internal/canvases");
const { ceil, PI } = Math;
function strokeColorsRect(ctx, borderColors, left, top, width, height) {
    function strokeRectLines(positions) {
        for (let i = 0; i < borderColors.length; i++) {
            const color = borderColors[i];
            const preColor = borderColors[i - 1];
            if (color) {
                if (preColor !== color) {
                    if (preColor) {
                        ctx.strokeStyle = preColor;
                        ctx.stroke();
                    }
                    const pos1 = positions[i];
                    ctx.beginPath();
                    ctx.moveTo(pos1.x, pos1.y);
                }
                const pos2 = positions[i + 1];
                ctx.lineTo(pos2.x, pos2.y);
            }
            else {
                if (preColor) {
                    ctx.strokeStyle = preColor;
                    ctx.stroke();
                }
            }
        }
        const preColor = borderColors[borderColors.length - 1];
        if (preColor) {
            ctx.strokeStyle = preColor;
            ctx.stroke();
        }
    }
    if (borderColors[0] === borderColors[1] &&
        borderColors[0] === borderColors[2] &&
        borderColors[0] === borderColors[3]) {
        if (borderColors[0]) {
            ctx.strokeStyle = borderColors[0];
            ctx.strokeRect(left, top, width, height);
        }
    }
    else {
        strokeRectLines([
            { x: left, y: top },
            { x: left + width, y: top },
            { x: left + width, y: top + height },
            { x: left, y: top + height },
            { x: left, y: top },
        ]);
    }
}
exports.strokeColorsRect = strokeColorsRect;
function roundRect(ctx, left, top, width, height, radius) {
    ctx.beginPath();
    ctx.arc(left + radius, top + radius, radius, -PI, -0.5 * PI, false);
    ctx.arc(left + width - radius, top + radius, radius, -0.5 * PI, 0, false);
    ctx.arc(left + width - radius, top + height - radius, radius, 0, 0.5 * PI, false);
    ctx.arc(left + radius, top + height - radius, radius, 0.5 * PI, PI, false);
    ctx.closePath();
}
exports.roundRect = roundRect;
function fillRoundRect(ctx, left, top, width, height, radius) {
    roundRect(ctx, left, top, width, height, radius);
    ctx.fill();
}
exports.fillRoundRect = fillRoundRect;
function strokeRoundRect(ctx, left, top, width, height, radius) {
    roundRect(ctx, left, top, width, height, radius);
    ctx.stroke();
}
exports.strokeRoundRect = strokeRoundRect;
function fillCircle(ctx, left, top, width, height) {
    const min = Math.min(width, height) / 2;
    ctx.beginPath();
    ctx.arc(left + min, top + min, min, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}
exports.fillCircle = fillCircle;
function strokeCircle(ctx, left, top, width, height) {
    const min = Math.min(width, height) / 2;
    ctx.beginPath();
    ctx.arc(left + min, top + min, min, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
}
exports.strokeCircle = strokeCircle;
function fillTextRect(ctx, text, left, top, width, height, { offset = 2, padding } = {}) {
    const rect = {
        left,
        top,
        width,
        height,
        right: left + width,
        bottom: top + height,
    };
    ctx.save();
    try {
        ctx.beginPath();
        ctx.rect(rect.left, rect.top, rect.width, rect.height);
        //clip
        ctx.clip();
        //文字描画
        const pos = (0, canvases_1.calcBasePosition)(ctx, rect, {
            offset,
            padding,
        });
        ctx.fillText(text, pos.x, pos.y);
    }
    finally {
        ctx.restore();
    }
}
exports.fillTextRect = fillTextRect;
function drawInlineImageRect(ctx, image, srcLeft, srcTop, srcWidth, srcHeight, destWidth, destHeight, left, top, width, height, { offset = 2, padding } = {}) {
    const rect = {
        left,
        top,
        width,
        height,
        right: left + width,
        bottom: top + height,
    };
    ctx.save();
    try {
        ctx.beginPath();
        ctx.rect(rect.left, rect.top, rect.width, rect.height);
        //clip
        ctx.clip();
        //文字描画
        const pos = (0, canvases_1.calcStartPosition)(ctx, rect, destWidth, destHeight, {
            offset,
            padding,
        });
        ctx.drawImage(image, srcLeft, srcTop, srcWidth, srcHeight, pos.x, pos.y, destWidth, destHeight);
    }
    finally {
        ctx.restore();
    }
}
exports.drawInlineImageRect = drawInlineImageRect;
/**
 * Returns an object containing the width of the checkbox.
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @return {Object} Object containing the width of the checkbox
 * @memberof cheetahGrid.tools.canvashelper
 */
function measureCheckbox(ctx) {
    return {
        width: (0, canvases_1.getFontSize)(ctx, null).width,
    };
}
exports.measureCheckbox = measureCheckbox;
/**
 * Returns an object containing the width of the radio button.
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @return {Object} Object containing the width of the radio button
 * @memberof cheetahGrid.tools.canvashelper
 */
function measureRadioButton(ctx) {
    return {
        width: (0, canvases_1.getFontSize)(ctx, null).width,
    };
}
exports.measureRadioButton = measureRadioButton;
/**
 * draw Checkbox
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @param  {number} x The x coordinate where to start drawing the checkbox (relative to the canvas)
 * @param  {number} y The y coordinate where to start drawing the checkbox (relative to the canvas)
 * @param  {boolean|number} check checkbox check status
 * @param  {object} option option
 * @return {void}
 * @memberof cheetahGrid.tools.canvashelper
 */
function drawCheckbox(ctx, x, y, check, { uncheckBgColor = "#FFF", checkBgColor = "rgb(76, 73, 72)", borderColor = "#000", boxSize = measureCheckbox(ctx).width, } = {}) {
    const checkPoint = typeof check === "number" ? (check > 1 ? 1 : check) : 1;
    ctx.save();
    try {
        ctx.fillStyle = check ? checkBgColor : uncheckBgColor;
        const leftX = ceil(x);
        const topY = ceil(y);
        const size = ceil(boxSize);
        fillRoundRect(ctx, leftX - 1, topY - 1, size + 1, size + 1, boxSize / 5);
        ctx.lineWidth = 1;
        ctx.strokeStyle = borderColor;
        strokeRoundRect(ctx, leftX - 0.5, topY - 0.5, size, size, boxSize / 5);
        if (check) {
            ctx.lineWidth = ceil(boxSize / 10);
            ctx.strokeStyle = uncheckBgColor;
            let leftWidth = boxSize / 4;
            let rightWidth = (boxSize / 2) * 0.9;
            const leftLeftPos = x + boxSize * 0.2;
            const leftTopPos = y + boxSize / 2;
            if (checkPoint < 0.5) {
                leftWidth *= checkPoint * 2;
            }
            ctx.beginPath();
            ctx.moveTo(leftLeftPos, leftTopPos);
            ctx.lineTo(leftLeftPos + leftWidth, leftTopPos + leftWidth);
            if (checkPoint > 0.5) {
                if (checkPoint < 1) {
                    rightWidth *= (checkPoint - 0.5) * 2;
                }
                ctx.lineTo(leftLeftPos + leftWidth + rightWidth, leftTopPos + leftWidth - rightWidth);
            }
            ctx.stroke();
        }
    }
    finally {
        ctx.restore();
    }
}
exports.drawCheckbox = drawCheckbox;
/**
 * draw Radio button
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @param  {number} x The x coordinate where to start drawing the radio button (relative to the canvas)
 * @param  {number} y The y coordinate where to start drawing the radio button (relative to the canvas)
 * @param  {boolean|number} check radio button check status
 * @param  {object} option option
 * @return {void}
 * @memberof cheetahGrid.tools.canvashelper
 */
function drawRadioButton(ctx, x, y, check, { checkColor = "rgb(76, 73, 72)", borderColor = "#000", bgColor = "#FFF", boxSize = measureRadioButton(ctx).width, } = {}) {
    const ratio = typeof check === "number" ? (check > 1 ? 1 : check) : 1;
    ctx.save();
    try {
        ctx.fillStyle = bgColor;
        const leftX = ceil(x);
        const topY = ceil(y);
        const size = ceil(boxSize);
        fillCircle(ctx, leftX - 1, topY - 1, size + 1, size + 1);
        ctx.lineWidth = 1;
        ctx.strokeStyle = borderColor;
        strokeCircle(ctx, leftX - 0.5, topY - 0.5, size, size);
        if (check) {
            const checkSize = (size * ratio) / 2;
            const padding = (size - checkSize) / 2;
            ctx.fillStyle = checkColor;
            fillCircle(ctx, ceil((leftX - 0.5 + padding) * 100) / 100, ceil((topY - 0.5 + padding) * 100) / 100, ceil(checkSize * 100) / 100, ceil(checkSize * 100) / 100);
        }
    }
    finally {
        ctx.restore();
    }
}
exports.drawRadioButton = drawRadioButton;
/**
 * draw Button
 */
function drawButton(ctx, left, top, width, height, option = {}) {
    const { backgroundColor = "#FFF", bgColor = backgroundColor, radius = 4, shadow = {}, } = option;
    ctx.save();
    try {
        ctx.fillStyle = bgColor;
        if (shadow) {
            const { color = "rgba(0, 0, 0, 0.24)", blur = 1, offsetX = 0, offsetY = 2, offset: { x: ox = offsetX, y: oy = offsetY } = {}, } = shadow;
            ctx.shadowColor = color;
            ctx.shadowBlur = blur; //ぼかし
            ctx.shadowOffsetX = ox;
            ctx.shadowOffsetY = oy;
        }
        fillRoundRect(ctx, ceil(left), ceil(top), ceil(width), ceil(height), radius);
    }
    finally {
        ctx.restore();
    }
}
exports.drawButton = drawButton;
