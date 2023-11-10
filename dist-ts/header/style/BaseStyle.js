"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseStyle = void 0;
const EventTarget_1 = require("../../core/EventTarget");
const EVENT_TYPE = {
    CHANGE_STYLE: "change_style",
};
let defaultStyle;
class BaseStyle extends EventTarget_1.EventTarget {
    static get EVENT_TYPE() {
        return EVENT_TYPE;
    }
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new BaseStyle());
    }
    constructor({ bgColor } = {}) {
        super();
        this._bgColor = bgColor;
    }
    get bgColor() {
        return this._bgColor;
    }
    set bgColor(bgColor) {
        this._bgColor = bgColor;
        this.doChangeStyle();
    }
    doChangeStyle() {
        this.fireListeners(EVENT_TYPE.CHANGE_STYLE);
    }
    clone() {
        return new BaseStyle(this);
    }
}
exports.BaseStyle = BaseStyle;
