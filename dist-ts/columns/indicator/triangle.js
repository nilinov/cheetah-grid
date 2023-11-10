"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawTriangleIndicator = void 0;
const KIND_PROCESS_MAP = {
    [0 /* DrawIndicatorKind.topLeft */]: {
        themeColor(helper) {
            return helper.theme.indicators.topLeftColor;
        },
        themeSize(helper) {
            return helper.theme.indicators.topLeftSize;
        },
        drawPath(ctx, rect, size) {
            const baseLeft = rect.left + 1;
            const baseTop = rect.top + 1;
            ctx.moveTo(baseLeft, baseTop);
            ctx.lineTo(baseLeft + size, baseTop);
            ctx.lineTo(baseLeft, baseTop + size);
        },
    },
    [1 /* DrawIndicatorKind.topRight */]: {
        themeColor(helper) {
            return helper.theme.indicators.topRightColor;
        },
        themeSize(helper) {
            return helper.theme.indicators.topRightSize;
        },
        drawPath(ctx, rect, size) {
            const baseRight = rect.right - 2;
            const baseTop = rect.top + 1;
            ctx.moveTo(baseRight, baseTop);
            ctx.lineTo(baseRight - size, baseTop);
            ctx.lineTo(baseRight, baseTop + size);
        },
    },
    [2 /* DrawIndicatorKind.bottomRight */]: {
        themeColor(helper) {
            return helper.theme.indicators.bottomRightColor;
        },
        themeSize(helper) {
            return helper.theme.indicators.bottomRightSize;
        },
        drawPath(ctx, rect, size) {
            const baseRight = rect.right - 2;
            const baseBottom = rect.bottom - 2;
            ctx.moveTo(baseRight, baseBottom);
            ctx.lineTo(baseRight - size, baseBottom);
            ctx.lineTo(baseRight, baseBottom - size);
        },
    },
    [3 /* DrawIndicatorKind.bottomLeft */]: {
        themeColor(helper) {
            return helper.theme.indicators.bottomLeftColor;
        },
        themeSize(helper) {
            return helper.theme.indicators.bottomLeftSize;
        },
        drawPath(ctx, rect, size) {
            const baseLeft = rect.left + 1;
            const baseBottom = rect.bottom - 2;
            ctx.moveTo(baseLeft, baseBottom);
            ctx.lineTo(baseLeft + size, baseBottom);
            ctx.lineTo(baseLeft, baseBottom - size);
        },
    },
};
function drawTriangleIndicator(context, style, kind, helper) {
    const process = KIND_PROCESS_MAP[kind];
    if (!process) {
        return;
    }
    helper.drawBorderWithClip(context, (ctx) => {
        const rect = context.getRect();
        const color = style.color ||
            helper.getColor(process.themeColor(helper), context.col, context.row, ctx);
        const size = (style.size && Number(style.size)) ||
            process.themeSize(helper) ||
            rect.height / 6;
        // draw triangle
        ctx.fillStyle = color;
        ctx.beginPath();
        process.drawPath(ctx, rect, size);
        ctx.closePath();
        ctx.fill();
    });
}
exports.drawTriangleIndicator = drawTriangleIndicator;
