"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseStyle = void 0;
const EventTarget_1 = require("../../core/EventTarget");
const STYLE_EVENT_TYPE = {
    CHANGE_STYLE: "change_style",
};
let defaultStyle;
class BaseStyle extends EventTarget_1.EventTarget {
    static get EVENT_TYPE() {
        return STYLE_EVENT_TYPE;
    }
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new BaseStyle());
    }
    constructor({ bgColor, indicatorTopLeft, indicatorTopRight, indicatorBottomRight, indicatorBottomLeft, } = {}) {
        super();
        this._bgColor = bgColor;
        this._indicatorTopLeft = normalizeIndicator(indicatorTopLeft);
        this._indicatorTopRight = normalizeIndicator(indicatorTopRight);
        this._indicatorBottomRight = normalizeIndicator(indicatorBottomRight);
        this._indicatorBottomLeft = normalizeIndicator(indicatorBottomLeft);
    }
    get bgColor() {
        return this._bgColor;
    }
    set bgColor(bgColor) {
        this._bgColor = bgColor;
        this.doChangeStyle();
    }
    get indicatorTopLeft() {
        return this._indicatorTopLeft;
    }
    set indicatorTopLeft(indicatorTopLeft) {
        this._indicatorTopLeft = normalizeIndicator(indicatorTopLeft);
        this.doChangeStyle();
    }
    get indicatorTopRight() {
        return this._indicatorTopRight;
    }
    set indicatorTopRight(indicatorTopRight) {
        this._indicatorTopRight = normalizeIndicator(indicatorTopRight);
        this.doChangeStyle();
    }
    get indicatorBottomRight() {
        return this._indicatorBottomRight;
    }
    set indicatorBottomRight(indicatorBottomRight) {
        this._indicatorBottomRight = normalizeIndicator(indicatorBottomRight);
        this.doChangeStyle();
    }
    get indicatorBottomLeft() {
        return this._indicatorBottomLeft;
    }
    set indicatorBottomLeft(indicatorBottomLeft) {
        this._indicatorBottomLeft = normalizeIndicator(indicatorBottomLeft);
        this.doChangeStyle();
    }
    doChangeStyle() {
        this.fireListeners(STYLE_EVENT_TYPE.CHANGE_STYLE);
    }
    clone() {
        return new BaseStyle(this);
    }
}
exports.BaseStyle = BaseStyle;
function normalizeIndicator(indicator) {
    if (typeof indicator === "string") {
        return { style: indicator };
    }
    return indicator;
}
