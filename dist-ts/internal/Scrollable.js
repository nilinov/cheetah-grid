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
exports.Scrollable = void 0;
const style = __importStar(require("./style"));
const EventHandler_1 = require("./EventHandler");
const utils_1 = require("./utils");
const MAX_SCROLL = utils_1.browser.heightLimit - 1000;
class Scrollable {
    constructor() {
        this._p = 1;
        this._handler = new EventHandler_1.EventHandler();
        this._scrollable = document.createElement("div");
        this._scrollable.classList.add("grid-scrollable");
        this._height = 0;
        this._width = 0;
        this._endPointElement = document.createElement("div");
        this._endPointElement.classList.add("grid-scroll-end-point");
        this._update();
        this._scrollable.appendChild(this._endPointElement);
        // const mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel'; //FF doesn't recognize mousewheel as of FF3.x
        // this._handler.on(this._scrollable, mousewheelevt, (evt) => {
        // const delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta;
        // const point = Math.min(Math.abs(delta) / 12, this.scrollHeight / 5);
        // this.scrollTop += delta < 0 ? point : -point;
        // });
    }
    calcTop(top) {
        const relativeTop = top - this.scrollTop;
        return this._scrollable.scrollTop + relativeTop;
    }
    getElement() {
        return this._scrollable;
    }
    setScrollSize(width, height) {
        this._width = width;
        this._height = height;
        this._update();
    }
    get scrollWidth() {
        return this._width;
    }
    set scrollWidth(width) {
        this._width = width;
        this._update();
    }
    get scrollHeight() {
        return this._height;
    }
    set scrollHeight(height) {
        this._height = height;
        this._update();
    }
    get scrollLeft() {
        return Math.max(Math.ceil(this._scrollable.scrollLeft), 0);
    }
    set scrollLeft(scrollLeft) {
        this._scrollable.scrollLeft = scrollLeft;
    }
    get scrollTop() {
        return Math.max(Math.ceil(this._scrollable.scrollTop / this._p), 0);
    }
    set scrollTop(scrollTop) {
        this._scrollable.scrollTop = scrollTop * this._p;
    }
    onScroll(fn) {
        this._handler.on(this._scrollable, "scroll", fn);
    }
    dispose() {
        this._handler.dispose();
    }
    _update() {
        let domHeight;
        const { offsetHeight, offsetWidth } = this._scrollable;
        if (this._height > MAX_SCROLL) {
            const sbSize = style.getScrollBarSize();
            const vScrollRange = MAX_SCROLL - offsetHeight + sbSize;
            const rScrollRange = this._height - offsetHeight + sbSize;
            this._p = vScrollRange / rScrollRange;
            domHeight = MAX_SCROLL;
        }
        else {
            this._p = 1;
            domHeight = this._height;
        }
        this._endPointElement.style.top = `${domHeight.toFixed()}px`;
        this._endPointElement.style.left = `${this._width.toFixed()}px`;
        // Sets the maximum value to the scroll position
        // if the current scroll position exceeds the maximum value.
        if (this.scrollTop > this.scrollHeight - offsetHeight) {
            this.scrollTop = this.scrollHeight - offsetHeight;
        }
        if (this.scrollLeft > this.scrollWidth - offsetWidth) {
            this.scrollLeft = this.scrollWidth - offsetWidth;
        }
    }
}
exports.Scrollable = Scrollable;
