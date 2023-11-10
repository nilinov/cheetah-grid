"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PercentCompleteBarColumn = void 0;
const utils_1 = require("../../internal/utils");
const Column_1 = require("./Column");
const PercentCompleteBarStyle_1 = require("../style/PercentCompleteBarStyle");
const MARGIN = 2;
class PercentCompleteBarColumn extends Column_1.Column {
    constructor(option = {}) {
        super(option);
        this._min = option.min || 0;
        this._max = option.max || this._min + 100;
        this._formatter = option.formatter || ((v) => v);
    }
    get StyleClass() {
        return PercentCompleteBarStyle_1.PercentCompleteBarStyle;
    }
    clone() {
        return new PercentCompleteBarColumn(this);
    }
    drawInternal(value, context, style, helper, grid, info) {
        super.drawInternal(this._formatter(value), context, style, helper, grid, info);
        const { barColor, barBgColor, barHeight } = style;
        let textValue = value != null ? String(value) : "";
        if (utils_1.str.endsWith(textValue, "%")) {
            textValue = textValue.slice(0, -1);
        }
        const num = Number(textValue);
        if (isNaN(num)) {
            return;
        }
        const rate = num < this._min
            ? 0
            : num > this._max
                ? 1
                : (num - this._min) / (this._max - this._min);
        helper.drawWithClip(context, (ctx) => {
            const rect = context.getRect();
            const barMaxWidth = rect.width - MARGIN * 2 - 1; /*罫線*/
            const barTop = rect.bottom - MARGIN - barHeight - 1; /*罫線*/
            const barLeft = rect.left + MARGIN;
            ctx.fillStyle = (0, utils_1.getOrApply)(barBgColor, rate * 100) || "#f0f3f5";
            ctx.beginPath();
            ctx.rect(barLeft, barTop, barMaxWidth, barHeight);
            ctx.fill();
            const barSize = Math.min(barMaxWidth * rate, barMaxWidth);
            ctx.fillStyle = (0, utils_1.getOrApply)(barColor, rate * 100) || "#20a8d8";
            ctx.beginPath();
            ctx.rect(barLeft, barTop, barSize, barHeight);
            ctx.fill();
        });
    }
}
exports.PercentCompleteBarColumn = PercentCompleteBarColumn;
