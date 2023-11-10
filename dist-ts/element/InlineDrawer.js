"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineDrawer = void 0;
const Inline_1 = require("./Inline");
class InlineDrawer extends Inline_1.Inline {
    constructor({ draw, width, 
    // height,
    color, }) {
        super();
        this._draw = draw;
        this._width = width;
        // this._height = height;
        this._color = color;
    }
    width(_arg) {
        return this._width;
    }
    font() {
        return null;
    }
    color() {
        var _a;
        return (_a = this._color) !== null && _a !== void 0 ? _a : null;
    }
    canDraw() {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onReady(_callback) { }
    draw({ ctx, canvashelper, rect, offset, offsetLeft, offsetRight, offsetTop, offsetBottom, }) {
        this._draw({
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
    canBreak() {
        return false;
    }
    toString() {
        return "";
    }
}
exports.InlineDrawer = InlineDrawer;
