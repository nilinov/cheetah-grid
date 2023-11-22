"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridCanvasHelper = void 0;
const calc = __importStar(require("./internal/calc"));
const canvashelper = __importStar(require("./tools/canvashelper"));
const fonts = __importStar(require("./internal/fonts"));
const inlineUtils = __importStar(require("./element/inlines"));
const themes = __importStar(require("./themes"));
const canvases_1 = require("./internal/canvases");
const utils_1 = require("./internal/utils");
const InlineDrawer_1 = require("./element/InlineDrawer");
const Rect_1 = require("./internal/Rect");
const color_1 = require("./internal/color");
const { toBoxArray } = utils_1.style;
const INLINE_ELLIPSIS = inlineUtils.of("\u2026");
const TEXT_OFFSET = 2;
const CHECKBOX_OFFSET = TEXT_OFFSET + 1;
function invalidateCell(context, grid) {
    const { col, row } = context;
    grid.invalidateCell(col, row);
}
function getColor(color, col, row, grid, context) {
    return (0, utils_1.getOrApply)(color, {
        col,
        row,
        grid,
        context,
    });
}
function getFont(font, col, row, grid, context) {
    if (font == null) {
        return undefined;
    }
    return (0, utils_1.getOrApply)(font, {
        col,
        row,
        grid,
        context,
    });
}
function getThemeColor(grid, ...names) {
    const gridThemeColor = (0, utils_1.getChainSafe)(grid.theme, ...names);
    if (gridThemeColor == null) {
        // use default theme
        return (0, utils_1.getChainSafe)(themes.getDefault(), ...names);
    }
    if (typeof gridThemeColor !== "function") {
        return gridThemeColor;
    }
    let defaultThemeColor;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((args) => {
        const color = gridThemeColor(args);
        if (color != null) {
            // use grid theme
            return color;
        }
        // use default theme
        defaultThemeColor =
            defaultThemeColor || (0, utils_1.getChainSafe)(themes.getDefault(), ...names);
        return (0, utils_1.getOrApply)(defaultThemeColor, args);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    });
}
function testFontLoad(font, value, context, grid) {
    if (font) {
        if (!fonts.check(font, value)) {
            fonts.load(font, value, () => invalidateCell(context, grid));
            return false;
        }
    }
    return true;
}
function drawInlines(ctx, inlines, rect, offset, offsetTop, offsetBottom, col, row, grid) {
    function drawInline(inline, offsetLeft, offsetRight) {
        if (inline.canDraw()) {
            ctx.save();
            try {
                ctx.fillStyle = getColor(inline.color() || ctx.fillStyle, col, row, grid, ctx);
                ctx.font = inline.font() || ctx.font;
                inline.draw({
                    ctx,
                    canvashelper,
                    rect,
                    offset,
                    offsetLeft,
                    offsetRight,
                    offsetTop,
                    offsetBottom,
                });
            }
            finally {
                ctx.restore();
            }
        }
        else {
            inline.onReady(() => grid.invalidateCell(col, row));
            //noop
        }
    }
    if (inlines.length === 1) {
        //1件の場合は幅計算が不要なため分岐
        const inline = inlines[0];
        drawInline(inline, 0, 0);
    }
    else {
        const inlineWidths = inlines.map((inline) => (inline.width({ ctx }) || 0) - 0);
        let offsetRight = inlineWidths.reduce((a, b) => a + b);
        let offsetLeft = 0;
        inlines.forEach((inline, index) => {
            const inlineWidth = inlineWidths[index];
            offsetRight -= inlineWidth;
            drawInline(inline, offsetLeft, offsetRight);
            offsetLeft += inlineWidth;
        });
    }
}
function buildInlines(icons, inline) {
    return inlineUtils.buildInlines(icons, inline || "");
}
function inlineToString(inline) {
    return inlineUtils.string(inline);
}
function getOverflowInline(textOverflow) {
    if (!isAllowOverflow(textOverflow) || textOverflow === "ellipsis") {
        return INLINE_ELLIPSIS;
    }
    textOverflow = textOverflow.trim();
    if (textOverflow.length === 1) {
        return inlineUtils.of(textOverflow[0]);
    }
    return INLINE_ELLIPSIS;
}
function isAllowOverflow(textOverflow) {
    return Boolean(textOverflow && textOverflow !== "clip" && typeof textOverflow === "string");
}
function getOverflowInlinesIndex(ctx, inlines, width) {
    const maxWidth = width - 3; /*buffer*/
    let lineWidth = 0;
    for (let i = 0; i < inlines.length; i++) {
        const inline = inlines[i];
        const inlineWidth = (inline.width({ ctx }) || 0) - 0;
        if (lineWidth + inlineWidth > maxWidth) {
            return {
                index: i,
                lineWidth,
                remWidth: maxWidth - lineWidth,
            };
        }
        lineWidth += inlineWidth;
    }
    return null;
}
function isOverflowInlines(ctx, inlines, width) {
    return !!getOverflowInlinesIndex(ctx, inlines, width);
}
function breakWidthInlines(ctx, inlines, width) {
    const indexData = getOverflowInlinesIndex(ctx, inlines, width);
    if (!indexData) {
        return {
            beforeInlines: inlines,
            overflow: false,
            afterInlines: [],
        };
    }
    const { index, remWidth } = indexData;
    const inline = inlines[index];
    const beforeInlines = inlines.slice(0, index);
    const afterInlines = [];
    if (inline.canBreak()) {
        let { before, after } = inline.breakWord(ctx, remWidth);
        if (!before && !beforeInlines.length) {
            ({ before, after } = inline.breakAll(ctx, remWidth));
        }
        if (!before && !beforeInlines.length) {
            // Always return one char
            ({ before, after } = inline.splitIndex(1));
        }
        if (before) {
            beforeInlines.push(before);
        }
        if (after) {
            afterInlines.push(after);
        }
        afterInlines.push(...inlines.slice(index + 1));
    }
    else {
        if (!beforeInlines.length) {
            // Always return one char
            beforeInlines.push(inline);
        }
        afterInlines.push(...inlines.slice(beforeInlines.length));
    }
    return {
        beforeInlines,
        overflow: true,
        afterInlines,
    };
}
function truncateInlines(ctx, inlines, width, option) {
    const indexData = getOverflowInlinesIndex(ctx, inlines, width);
    if (!indexData) {
        return {
            inlines,
            overflow: false,
        };
    }
    const { index, lineWidth } = indexData;
    const inline = inlines[index];
    const overflowInline = getOverflowInline(option);
    const ellipsisWidth = overflowInline.width({ ctx });
    const remWidth = width - lineWidth - ellipsisWidth;
    const result = inlines.slice(0, index);
    if (inline.canBreak()) {
        const { before } = inline.breakAll(ctx, remWidth);
        if (before) {
            result.push(before);
        }
    }
    result.push(overflowInline);
    return {
        inlines: result,
        overflow: true,
    };
}
function _inlineRect(grid, ctx, inline, drawRect, col, row, { offset, color, textAlign, textBaseline, font, textOverflow, icons, trailingIcon, }) {
    //文字style
    ctx.fillStyle = getColor(color || ctx.fillStyle, col, row, grid, ctx);
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font || ctx.font;
    let inlines = buildInlines(icons, inline);
    const trailingIconInline = trailingIcon
        ? inlineUtils.iconOf(trailingIcon)
        : null;
    let inlineDrawRect = drawRect;
    let { width } = drawRect;
    let trailingIconWidth = 0;
    if (trailingIconInline) {
        trailingIconWidth = trailingIconInline.width({ ctx });
        width -= trailingIconWidth;
        inlineDrawRect = new Rect_1.Rect(drawRect.left, drawRect.top, width, drawRect.height);
    }
    if (isAllowOverflow(textOverflow) && isOverflowInlines(ctx, inlines, width)) {
        const { inlines: truncInlines, overflow } = truncateInlines(ctx, inlines, width, textOverflow);
        inlines = truncInlines;
        grid.setCellOverflowText(col, row, overflow && inlineToString(inline));
    }
    else {
        grid.setCellOverflowText(col, row, false);
    }
    drawInlines(ctx, inlines, inlineDrawRect, offset, 0, 0, col, row, grid);
    if (trailingIconInline) {
        // Draw trailing icon
        let sumWidth = 0;
        inlines.forEach((inline) => {
            sumWidth += inline.width({ ctx });
        });
        const baseRect = new Rect_1.Rect(drawRect.left, drawRect.top, drawRect.width, drawRect.height);
        const trailingIconRect = baseRect.copy();
        if (width < sumWidth) {
            trailingIconRect.left =
                trailingIconRect.right - trailingIconWidth - offset;
        }
        else {
            trailingIconRect.left += sumWidth;
        }
        trailingIconRect.right = baseRect.right;
        drawInlines(ctx, [trailingIconInline], trailingIconRect, offset, 0, 0, col, row, grid);
    }
}
// eslint-disable-next-line complexity
function _multiInlineRect(grid, ctx, multiInlines, drawRect, col, row, { offset, color, textAlign, textBaseline, font, lineHeight, autoWrapText, lineClamp, textOverflow, icons, trailingIcon, }) {
    //文字style
    ctx.fillStyle = getColor(color || ctx.fillStyle, col, row, grid, ctx);
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font || ctx.font;
    if (lineClamp === "auto") {
        const rectHeight = drawRect.height - offset * 2 - 2; /*offset added by Inline#draw*/
        lineClamp = Math.max(Math.floor(rectHeight / lineHeight), 1);
    }
    const trailingIconInline = trailingIcon
        ? inlineUtils.iconOf(trailingIcon)
        : null;
    let { width } = drawRect;
    let trailingIconWidth = 0;
    if (trailingIconInline) {
        trailingIconWidth = trailingIconInline.width({ ctx });
        width -= trailingIconWidth;
    }
    let buildedMultiInlines;
    if (autoWrapText || lineClamp > 0 || isAllowOverflow(textOverflow)) {
        buildedMultiInlines = [];
        const procLineClamp = lineClamp > 0
            ? (inlines, hasNext) => {
                if (buildedMultiInlines.length + 1 >= Number(lineClamp)) {
                    if (inlines.length === 0 && hasNext) {
                        buildedMultiInlines.push([getOverflowInline(textOverflow)]);
                        grid.setCellOverflowText(col, row, multiInlines.map(inlineToString).join("\n"));
                    }
                    else {
                        const { inlines: truncInlines, overflow } = truncateInlines(ctx, inlines, width, textOverflow);
                        buildedMultiInlines.push(hasNext && !overflow
                            ? truncInlines.concat([getOverflowInline(textOverflow)])
                            : truncInlines);
                        if (overflow || hasNext) {
                            grid.setCellOverflowText(col, row, multiInlines.map(inlineToString).join("\n"));
                        }
                    }
                    return false;
                }
                return true;
            }
            : () => true;
        const procLine = autoWrapText
            ? (inlines, hasNext) => {
                if (!procLineClamp(inlines, hasNext)) {
                    return false;
                }
                while (inlines.length) {
                    if (!procLineClamp(inlines, hasNext)) {
                        return false;
                    }
                    const { beforeInlines, afterInlines } = breakWidthInlines(ctx, inlines, width);
                    buildedMultiInlines.push(beforeInlines);
                    inlines = afterInlines;
                }
                return true;
            }
            : isAllowOverflow(textOverflow)
                ? (inlines, hasNext) => {
                    if (!procLineClamp(inlines, hasNext)) {
                        return false;
                    }
                    const { inlines: truncInlines, overflow } = truncateInlines(ctx, inlines, width, textOverflow);
                    buildedMultiInlines.push(truncInlines);
                    if (overflow) {
                        grid.setCellOverflowText(col, row, multiInlines.map(inlineToString).join("\n"));
                    }
                    return true;
                }
                : (inlines, hasNext) => {
                    if (!procLineClamp(inlines, hasNext)) {
                        return false;
                    }
                    buildedMultiInlines.push(inlines);
                    return true;
                };
        grid.setCellOverflowText(col, row, false);
        for (let lineRow = 0; lineRow < multiInlines.length; lineRow++) {
            const inline = multiInlines[lineRow];
            const buildedInline = buildInlines(lineRow === 0 ? icons : undefined, inline);
            if (!procLine(buildedInline, lineRow + 1 < multiInlines.length)) {
                break;
            }
        }
    }
    else {
        grid.setCellOverflowText(col, row, false);
        buildedMultiInlines = multiInlines.map((inline, lineRow) => buildInlines(lineRow === 0 ? icons : undefined, inline));
    }
    let paddingTop = 0;
    let paddingBottom = lineHeight * (buildedMultiInlines.length - 1);
    if (ctx.textBaseline === "top" || ctx.textBaseline === "hanging") {
        const em = (0, canvases_1.getFontSize)(ctx, ctx.font).height;
        const pad = (lineHeight - em) / 2;
        paddingTop += pad;
        paddingBottom -= pad;
    }
    else if (ctx.textBaseline === "bottom" ||
        ctx.textBaseline === "alphabetic" ||
        ctx.textBaseline === "ideographic") {
        const em = (0, canvases_1.getFontSize)(ctx, ctx.font).height;
        const pad = (lineHeight - em) / 2;
        paddingTop -= pad;
        paddingBottom += pad;
    }
    buildedMultiInlines.forEach((buildedInline) => {
        drawInlines(ctx, buildedInline, drawRect, offset, paddingTop, paddingBottom, col, row, grid);
        paddingTop += lineHeight;
        paddingBottom -= lineHeight;
    });
    if (trailingIconInline) {
        // Draw trailing icon
        let maxWidth = 0;
        buildedMultiInlines.forEach((buildedInline) => {
            let sumWidth = 0;
            buildedInline.forEach((inline) => {
                sumWidth += inline.width({ ctx });
            });
            maxWidth = Math.max(maxWidth, sumWidth);
        });
        const baseRect = new Rect_1.Rect(drawRect.left, drawRect.top, drawRect.width, drawRect.height);
        const trailingIconRect = baseRect.copy();
        if (width < maxWidth) {
            trailingIconRect.left =
                trailingIconRect.right - trailingIconWidth - offset;
        }
        else {
            trailingIconRect.left += maxWidth;
        }
        trailingIconRect.right = baseRect.right;
        drawInlines(ctx, [trailingIconInline], trailingIconRect, offset, 0, 0, col, row, grid);
    }
}
function calcElapsedColor(startColor, endColor, elapsedTime) {
    const startColorRGB = (0, color_1.colorToRGB)(startColor);
    const endColorRGB = (0, color_1.colorToRGB)(endColor);
    const getRGB = (colorName) => {
        const start = startColorRGB[colorName];
        const end = endColorRGB[colorName];
        if (elapsedTime >= 1) {
            return end;
        }
        if (elapsedTime <= 0) {
            return start;
        }
        const diff = start - end;
        return Math.ceil(start - diff * elapsedTime);
    };
    return `rgb(${getRGB("r")}, ${getRGB("g")}, ${getRGB("b")})`;
}
function drawCheckbox(ctx, rect, col, row, check, helper, { animElapsedTime = 1, uncheckBgColor = helper.theme.checkbox.uncheckBgColor, checkBgColor = helper.theme.checkbox.checkBgColor, borderColor = helper.theme.checkbox.borderColor, textAlign = "center", textBaseline = "middle", }, positionOpt = {}) {
    const boxWidth = canvashelper.measureCheckbox(ctx).width;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    const pos = (0, canvases_1.calcStartPosition)(ctx, rect, boxWidth + 1 /*罫線分+1*/, boxWidth + 1 /*罫線分+1*/, positionOpt);
    uncheckBgColor = helper.getColor(uncheckBgColor, col, row, ctx);
    checkBgColor = helper.getColor(checkBgColor, col, row, ctx);
    borderColor = helper.getColor(borderColor, col, row, ctx);
    if (0 < animElapsedTime && animElapsedTime < 1) {
        uncheckBgColor = check
            ? uncheckBgColor
            : calcElapsedColor(checkBgColor, uncheckBgColor, animElapsedTime);
        checkBgColor = check
            ? calcElapsedColor(uncheckBgColor, checkBgColor, animElapsedTime)
            : checkBgColor;
    }
    canvashelper.drawCheckbox(ctx, pos.x, pos.y, check ? animElapsedTime : false, {
        uncheckBgColor,
        checkBgColor,
        borderColor,
    });
}
function drawRadioButton(ctx, rect, col, row, check, helper, { animElapsedTime = 1, checkColor = helper.theme.radioButton.checkColor, uncheckBorderColor = helper.theme.radioButton.uncheckBorderColor, checkBorderColor = helper.theme.radioButton.checkBorderColor, uncheckBgColor = helper.theme.radioButton.uncheckBgColor, checkBgColor = helper.theme.radioButton.checkBgColor, textAlign = "center", textBaseline = "middle", }, positionOpt = {}) {
    const boxWidth = canvashelper.measureRadioButton(ctx).width;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    const pos = (0, canvases_1.calcStartPosition)(ctx, rect, boxWidth + 1 /*罫線分+1*/, boxWidth + 1 /*罫線分+1*/, positionOpt);
    checkColor = helper.getColor(checkColor, col, row, ctx);
    uncheckBorderColor = helper.getColor(uncheckBorderColor, col, row, ctx);
    checkBorderColor = helper.getColor(checkBorderColor, col, row, ctx);
    uncheckBgColor = helper.getColor(uncheckBgColor, col, row, ctx);
    checkBgColor = helper.getColor(checkBgColor, col, row, ctx);
    let borderColor = check ? checkBorderColor : uncheckBorderColor;
    let bgColor = check ? checkBgColor : uncheckBgColor;
    if (0 < animElapsedTime && animElapsedTime < 1) {
        borderColor = check
            ? calcElapsedColor(uncheckBorderColor, checkBorderColor, animElapsedTime)
            : calcElapsedColor(checkBorderColor, uncheckBorderColor, animElapsedTime);
        bgColor = check
            ? calcElapsedColor(uncheckBgColor, checkBgColor, animElapsedTime)
            : calcElapsedColor(checkBgColor, uncheckBgColor, animElapsedTime);
    }
    canvashelper.drawRadioButton(ctx, pos.x, pos.y, check ? animElapsedTime : 1 - animElapsedTime, {
        checkColor,
        borderColor,
        bgColor,
    });
}
class ThemeResolver {
    constructor(grid) {
        this._checkbox = null;
        this._radioButton = null;
        this._button = null;
        this._header = null;
        this._messages = null;
        this._indicators = null;
        this._grid = grid;
    }
    getThemeColor(...name) {
        return getThemeColor(this._grid, ...name);
    }
    get font() {
        return getThemeColor(this._grid, "font");
    }
    get underlayBackgroundColor() {
        return getThemeColor(this._grid, "underlayBackgroundColor");
    }
    // color
    get color() {
        return getThemeColor(this._grid, "color");
    }
    get frozenRowsColor() {
        return getThemeColor(this._grid, "frozenRowsColor");
    }
    // background
    get defaultBgColor() {
        return getThemeColor(this._grid, "defaultBgColor");
    }
    get frozenRowsBgColor() {
        return getThemeColor(this._grid, "frozenRowsBgColor");
    }
    get selectionBgColor() {
        return getThemeColor(this._grid, "selectionBgColor");
    }
    get highlightBgColor() {
        return getThemeColor(this._grid, "highlightBgColor");
    }
    // border
    get borderColor() {
        return getThemeColor(this._grid, "borderColor");
    }
    get frozenRowsBorderColor() {
        return getThemeColor(this._grid, "frozenRowsBorderColor");
    }
    get highlightBorderColor() {
        return getThemeColor(this._grid, "highlightBorderColor");
    }
    get checkbox() {
        const grid = this._grid;
        return (this._checkbox ||
            (this._checkbox = {
                get uncheckBgColor() {
                    return getCheckboxProp("uncheckBgColor");
                },
                get checkBgColor() {
                    return getCheckboxProp("checkBgColor");
                },
                get borderColor() {
                    return getCheckboxProp("borderColor");
                },
            }));
        function getCheckboxProp(prop) {
            return getThemeColor(grid, "checkbox", prop);
        }
    }
    get radioButton() {
        const grid = this._grid;
        return (this._radioButton ||
            (this._radioButton = {
                get checkColor() {
                    return getRadioButtonProp("checkColor");
                },
                get uncheckBorderColor() {
                    return getRadioButtonProp("uncheckBorderColor");
                },
                get checkBorderColor() {
                    return getRadioButtonProp("checkBorderColor");
                },
                get uncheckBgColor() {
                    return getRadioButtonProp("uncheckBgColor");
                },
                get checkBgColor() {
                    return getRadioButtonProp("checkBgColor");
                },
            }));
        function getRadioButtonProp(prop) {
            return getThemeColor(grid, "radioButton", prop);
        }
    }
    get button() {
        const grid = this._grid;
        return (this._button ||
            (this._button = {
                get color() {
                    return getButtonProp("color");
                },
                get bgColor() {
                    return getButtonProp("bgColor");
                },
            }));
        function getButtonProp(prop) {
            return getThemeColor(grid, "button", prop);
        }
    }
    get header() {
        const grid = this._grid;
        return (this._header ||
            (this._header = {
                get sortArrowColor() {
                    return getThemeColor(grid, "header", "sortArrowColor");
                },
            }));
    }
    get messages() {
        const grid = this._grid;
        return (this._messages ||
            (this._messages = {
                get infoBgColor() {
                    return getMessageProp("infoBgColor");
                },
                get errorBgColor() {
                    return getMessageProp("errorBgColor");
                },
                get warnBgColor() {
                    return getMessageProp("warnBgColor");
                },
                get boxWidth() {
                    return getMessageProp("boxWidth");
                },
                get markHeight() {
                    return getMessageProp("markHeight");
                },
            }));
        function getMessageProp(prop) {
            return getThemeColor(grid, "messages", prop);
        }
    }
    get indicators() {
        const grid = this._grid;
        return (this._indicators ||
            (this._indicators = {
                get topLeftColor() {
                    return getIndicatorsProp("topLeftColor");
                },
                get topLeftSize() {
                    return getIndicatorsProp("topLeftSize");
                },
                get topRightColor() {
                    return getIndicatorsProp("topRightColor");
                },
                get topRightSize() {
                    return getIndicatorsProp("topRightSize");
                },
                get bottomRightColor() {
                    return getIndicatorsProp("bottomRightColor");
                },
                get bottomRightSize() {
                    return getIndicatorsProp("bottomRightSize");
                },
                get bottomLeftColor() {
                    return getIndicatorsProp("bottomLeftColor");
                },
                get bottomLeftSize() {
                    return getIndicatorsProp("bottomLeftSize");
                },
            }));
        function getIndicatorsProp(prop) {
            return getThemeColor(grid, "indicators", prop);
        }
    }
}
function strokeRect(ctx, color, left, top, width, height) {
    if (!Array.isArray(color)) {
        if (color) {
            ctx.strokeStyle = color;
            ctx.strokeRect(left, top, width, height);
        }
    }
    else {
        const borderColors = toBoxArray(color);
        canvashelper.strokeColorsRect(ctx, borderColors, left, top, width, height);
    }
}
class GridCanvasHelper {
    constructor(grid) {
        this._grid = grid;
        this._theme = new ThemeResolver(grid);
    }
    createCalculator(context, font) {
        return {
            calcWidth(width) {
                return calc.toPx(width, {
                    get full() {
                        const rect = context.getRect();
                        return rect.width;
                    },
                    get em() {
                        return (0, canvases_1.getFontSize)(context.getContext(), font).width;
                    },
                });
            },
            calcHeight(height) {
                return calc.toPx(height, {
                    get full() {
                        const rect = context.getRect();
                        return rect.height;
                    },
                    get em() {
                        return (0, canvases_1.getFontSize)(context.getContext(), font).height;
                    },
                });
            },
        };
    }
    getColor(color, col, row, ctx) {
        return getColor(color, col, row, this._grid, ctx);
    }
    toBoxArray(obj) {
        return toBoxArray(obj);
    }
    toBoxPixelArray(value, context, font) {
        if (typeof value === "string" || Array.isArray(value)) {
            const calculator = this.createCalculator(context, font);
            const box = toBoxArray(value);
            return [
                calculator.calcHeight(box[0]),
                calculator.calcWidth(box[1]),
                calculator.calcHeight(box[2]),
                calculator.calcWidth(box[3]),
            ];
        }
        return toBoxArray(value);
    }
    get theme() {
        return this._theme;
    }
    drawWithClip(context, draw) {
        const drawRect = context.getDrawRect();
        if (!drawRect) {
            return;
        }
        const ctx = context.getContext();
        ctx.save();
        try {
            ctx.beginPath();
            ctx.rect(drawRect.left, drawRect.top, drawRect.width, drawRect.height);
            //clip
            ctx.clip();
            draw(ctx);
        }
        finally {
            ctx.restore();
        }
    }
    drawBorderWithClip(context, draw) {
        const drawRect = context.getDrawRect();
        if (!drawRect) {
            return;
        }
        const rect = context.getRect();
        const ctx = context.getContext();
        ctx.save();
        try {
            //罫線用clip
            ctx.beginPath();
            let clipLeft = drawRect.left;
            let clipWidth = drawRect.width;
            if (drawRect.left === rect.left) {
                clipLeft += -1;
                clipWidth += 1;
            }
            let clipTop = drawRect.top;
            let clipHeight = drawRect.height;
            if (drawRect.top === rect.top) {
                clipTop += -1;
                clipHeight += 1;
            }
            ctx.rect(clipLeft, clipTop, clipWidth, clipHeight);
            ctx.clip();
            draw(ctx);
        }
        finally {
            ctx.restore();
        }
    }
    text(text, context, { padding, offset = TEXT_OFFSET, color, textAlign = "left", textBaseline = "middle", font, textOverflow = "clip", icons, trailingIcon, appendRightPx, } = {}) {
        let rect = context.getRect();
        rect.width += appendRightPx !== null && appendRightPx !== void 0 ? appendRightPx : 0;
        const { col, row } = context;
        if (!color) {
            ({ color } = this.theme);
            // header color
            const isFrozenCell = this._grid.isFrozenCell(col, row);
            if (isFrozenCell && isFrozenCell.row) {
                color = this.theme.frozenRowsColor;
            }
        }
        this.drawWithClip(context, (ctx) => {
            font = getFont(font, context.col, context.row, this._grid, ctx);
            if (padding) {
                const paddingNums = this.toBoxPixelArray(padding, context, font);
                const left = rect.left + paddingNums[3];
                const top = rect.top + paddingNums[0];
                const width = rect.width - paddingNums[1] - paddingNums[3];
                const height = rect.height - paddingNums[0] - paddingNums[2];
                rect = new Rect_1.Rect(left, top, width + (appendRightPx !== null && appendRightPx !== void 0 ? appendRightPx : 0), height);
            }
            _inlineRect(this._grid, ctx, text, rect, col, row, {
                offset,
                color,
                textAlign,
                textBaseline,
                font,
                textOverflow,
                icons,
                trailingIcon,
            });
        });
    }
    multilineText(multilines, context, { padding, offset = TEXT_OFFSET, color, textAlign = "left", textBaseline = "middle", font, lineHeight = "1em", autoWrapText = false, lineClamp = 0, textOverflow = "clip", icons, trailingIcon, } = {}) {
        let rect = context.getRect();
        const { col, row } = context;
        if (!color) {
            ({ color } = this.theme);
            // header color
            const isFrozenCell = this._grid.isFrozenCell(col, row);
            if (isFrozenCell && isFrozenCell.row) {
                color = this.theme.frozenRowsColor;
            }
        }
        this.drawWithClip(context, (ctx) => {
            font = getFont(font, context.col, context.row, this._grid, ctx);
            if (padding) {
                const paddingNums = this.toBoxPixelArray(padding, context, font);
                const left = rect.left + paddingNums[3];
                const top = rect.top + paddingNums[0];
                const width = rect.width - paddingNums[1] - paddingNums[3];
                const height = rect.height - paddingNums[0] - paddingNums[2];
                rect = new Rect_1.Rect(left, top, width, height);
            }
            const calculator = this.createCalculator(context, font);
            lineHeight = calculator.calcHeight(lineHeight);
            _multiInlineRect(this._grid, ctx, multilines, rect, col, row, {
                offset,
                color,
                textAlign,
                textBaseline,
                font,
                lineHeight,
                autoWrapText,
                lineClamp,
                textOverflow,
                icons,
                trailingIcon,
            });
        });
    }
    fillText(text, x, y, context, { color, textAlign = "left", textBaseline = "top", font, } = {}) {
        const { col, row } = context;
        if (!color) {
            ({ color } = this.theme);
            // header color
            const isFrozenCell = this._grid.isFrozenCell(col, row);
            if (isFrozenCell && isFrozenCell.row) {
                color = this.theme.frozenRowsColor;
            }
        }
        const ctx = context.getContext();
        ctx.save();
        try {
            font = getFont(font, context.col, context.row, this._grid, ctx);
            ctx.fillStyle = getColor(color, col, row, this._grid, ctx);
            ctx.textAlign = textAlign;
            ctx.textBaseline = textBaseline;
            ctx.font = font || ctx.font;
            ctx.fillText(text, x, y);
        }
        finally {
            ctx.restore();
        }
    }
    fillCell(context, { fillColor = this.theme.defaultBgColor, } = {}) {
        const rect = context.getRect();
        this.drawWithClip(context, (ctx) => {
            const { col, row } = context;
            ctx.fillStyle = getColor(fillColor, col, row, this._grid, ctx);
            ctx.beginPath();
            ctx.rect(rect.left, rect.top, rect.width, rect.height);
            ctx.fill();
        });
    }
    fillCellWithState(context, option = {}) {
        option.fillColor = this.getFillColorState(context, option);
        this.fillCell(context, option);
    }
    fillRect(rect, context, { fillColor = this.theme.defaultBgColor, } = {}) {
        const ctx = context.getContext();
        ctx.save();
        try {
            const { col, row } = context;
            ctx.fillStyle = getColor(fillColor, col, row, this._grid, ctx);
            ctx.beginPath();
            ctx.rect(rect.left, rect.top, rect.width, rect.height);
            ctx.fill();
        }
        finally {
            ctx.restore();
        }
    }
    fillRectWithState(rect, context, option = {}) {
        option.fillColor = this.getFillColorState(context, option);
        this.fillRect(rect, context, option);
    }
    getFillColorState(context, option = {}) {
        const sel = context.getSelection();
        const { col, row } = context;
        if (!(0, utils_1.cellEquals)(sel.select, context) && (0, utils_1.cellInRange)(sel.range, col, row)) {
            return this.theme.selectionBgColor;
        }
        if (option.fillColor) {
            return option.fillColor;
        }
        if ((0, utils_1.cellEquals)(sel.select, context)) {
            return this.theme.highlightBgColor;
        }
        const isFrozenCell = this._grid.isFrozenCell(col, row);
        if (isFrozenCell && isFrozenCell.row) {
            return this.theme.frozenRowsBgColor;
        }
        return this.theme.defaultBgColor;
    }
    border(context, { borderColor = this.theme.borderColor, lineWidth = 1, } = {}) {
        const rect = context.getRect();
        this.drawBorderWithClip(context, (ctx) => {
            const { col, row } = context;
            const borderColors = getColor(borderColor, col, row, this._grid, ctx);
            if (lineWidth === 1) {
                ctx.lineWidth = 1;
                strokeRect(ctx, borderColors, rect.left - 0.5, rect.top - 0.5, rect.width, rect.height);
            }
            else if (lineWidth === 2) {
                ctx.lineWidth = 2;
                strokeRect(ctx, borderColors, rect.left, rect.top, rect.width - 1, rect.height - 1);
            }
            else {
                ctx.lineWidth = lineWidth;
                const startOffset = lineWidth / 2 - 1;
                strokeRect(ctx, borderColors, rect.left + startOffset, rect.top + startOffset, rect.width - lineWidth + 1, rect.height - lineWidth + 1);
            }
        });
    }
    // Unused in main
    borderWithState(context, option = {}) {
        const rect = context.getRect();
        const sel = context.getSelection();
        const { col, row } = context;
        //罫線
        if ((0, utils_1.cellEquals)(sel.select, context)) {
            option.borderColor = this.theme.highlightBorderColor;
            option.lineWidth = 2;
            this.border(context, option);
        }
        else {
            // header color
            const isFrozenCell = this._grid.isFrozenCell(col, row);
            if (isFrozenCell === null || isFrozenCell === void 0 ? void 0 : isFrozenCell.row) {
                option.borderColor = this.theme.frozenRowsBorderColor;
            }
            option.lineWidth = 1;
            this.border(context, option);
            //追加処理
            const sel = this._grid.selection.select;
            if (sel.col + 1 === col && sel.row === row) {
                //右が選択されている
                this.drawBorderWithClip(context, (ctx) => {
                    const borderColors = toBoxArray(getColor(this.theme.highlightBorderColor, sel.col, sel.row, this._grid, ctx));
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = borderColors[1] || ctx.strokeStyle;
                    ctx.beginPath();
                    ctx.moveTo(rect.left - 0.5, rect.top);
                    ctx.lineTo(rect.left - 0.5, rect.bottom);
                    ctx.stroke();
                });
            }
            else if (sel.col === col && sel.row + 1 === row) {
                //上が選択されている
                this.drawBorderWithClip(context, (ctx) => {
                    const borderColors = toBoxArray(getColor(this.theme.highlightBorderColor, sel.col, sel.row, this._grid, ctx));
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = borderColors[0] || ctx.strokeStyle;
                    ctx.beginPath();
                    ctx.moveTo(rect.left, rect.top - 0.5);
                    ctx.lineTo(rect.right, rect.top - 0.5);
                    ctx.stroke();
                });
            }
        }
    }
    buildCheckBoxInline(check, context, option = {}) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        const ctx = context.getContext();
        const boxWidth = canvashelper.measureCheckbox(ctx).width;
        return new InlineDrawer_1.InlineDrawer({
            draw,
            width: boxWidth + 3,
            height: boxWidth + 1,
            color: undefined,
        });
        function draw({ ctx, rect, offset, offsetLeft, offsetRight, offsetTop, offsetBottom, }) {
            const { col, row } = context;
            drawCheckbox(ctx, rect, col, row, check, self, option, {
                offset: offset + (CHECKBOX_OFFSET - TEXT_OFFSET),
                padding: {
                    left: offsetLeft + (CHECKBOX_OFFSET - TEXT_OFFSET),
                    right: offsetRight,
                    top: offsetTop,
                    bottom: offsetBottom,
                },
            });
        }
    }
    checkbox(check, context, { animElapsedTime, offset = CHECKBOX_OFFSET, uncheckBgColor, checkBgColor, borderColor, textAlign, textBaseline, } = {}) {
        this.drawWithClip(context, (ctx) => {
            const { col, row } = context;
            drawCheckbox(ctx, context.getRect(), col, row, check, this, {
                animElapsedTime,
                uncheckBgColor,
                checkBgColor,
                borderColor,
                textAlign,
                textBaseline,
            }, { offset, padding: { left: CHECKBOX_OFFSET - TEXT_OFFSET } });
        });
    }
    radioButton(check, context, { animElapsedTime, offset = CHECKBOX_OFFSET, checkColor, uncheckBorderColor, checkBorderColor, uncheckBgColor, checkBgColor, textAlign, textBaseline, } = {}) {
        this.drawWithClip(context, (ctx) => {
            const { col, row } = context;
            drawRadioButton(ctx, context.getRect(), col, row, check, this, {
                animElapsedTime,
                checkColor,
                uncheckBorderColor,
                checkBorderColor,
                uncheckBgColor,
                checkBgColor,
                textAlign,
                textBaseline,
            }, { offset, padding: { left: CHECKBOX_OFFSET - TEXT_OFFSET } });
        });
    }
    button(caption, context, { bgColor = this.theme.button.bgColor, padding, offset = TEXT_OFFSET, color = this.theme.button.color, textAlign = "center", textBaseline = "middle", shadow, font, textOverflow = "clip", icons, } = {}) {
        const rect = context.getRect();
        this.drawWithClip(context, (ctx) => {
            font = getFont(font, context.col, context.row, this._grid, ctx);
            const { col, row } = context;
            const paddingNums = this.toBoxPixelArray(padding || rect.height / 8, context, font);
            const left = rect.left + paddingNums[3];
            const top = rect.top + paddingNums[0];
            const width = rect.width - paddingNums[1] - paddingNums[3];
            const height = rect.height - paddingNums[0] - paddingNums[2];
            bgColor = getColor(bgColor, context.col, context.row, this._grid, ctx);
            canvashelper.drawButton(ctx, left, top, width, height, {
                bgColor,
                radius: rect.height / 8,
                // offset,
                shadow,
            });
            _inlineRect(this._grid, ctx, caption, new Rect_1.Rect(left, top, width, height), col, row, {
                offset,
                color,
                textAlign,
                textBaseline,
                font,
                textOverflow,
                icons,
            });
        });
    }
    testFontLoad(font, value, context) {
        return testFontLoad(font, value, context, this._grid);
    }
}
exports.GridCanvasHelper = GridCanvasHelper;
