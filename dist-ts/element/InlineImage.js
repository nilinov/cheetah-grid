"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineImage = void 0;
const Inline_1 = require("./Inline");
const imgs_1 = require("../internal/imgs");
const utils_1 = require("../internal/utils");
class InlineImage extends Inline_1.Inline {
    constructor({ src, width, height, imageLeft, imageTop, imageWidth, imageHeight, offsetTop, offsetLeft, }) {
        super();
        this._inlineImgPromise = null;
        this._inlineImg = null;
        this._src = src;
        this._width = width;
        this._height = height;
        this._imageLeft = imageLeft;
        this._imageTop = imageTop;
        this._imageWidth = imageWidth;
        this._imageHeight = imageHeight;
        this._offsetTop = offsetTop;
        this._offsetLeft = offsetLeft;
        this._onloaded = [];
        if ((0, utils_1.isPromise)(src)) {
            src.then((s) => {
                this._src = s;
                this._loadImage(s);
            });
        }
        else {
            this._loadImage(src);
        }
    }
    _loadImage(src) {
        const img = (this._inlineImgPromise = (0, imgs_1.getCacheOrLoad)("InlineImage", 50, src));
        if ((0, utils_1.isPromise)(img)) {
            img.then((i) => {
                this._inlineImg = i;
                this._onloaded.forEach((fn) => fn());
            });
        }
        else {
            this._inlineImg = img;
        }
    }
    width(_arg) {
        var _a, _b;
        return this._width || ((_b = (_a = this._inlineImg) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 0);
    }
    font() {
        return null;
    }
    color() {
        return null;
    }
    canDraw() {
        return !!this._inlineImg;
    }
    onReady(callback) {
        if ((0, utils_1.isPromise)(this._src) || (0, utils_1.isPromise)(this._inlineImgPromise)) {
            this._onloaded.push(() => callback());
        }
    }
    draw({ ctx, canvashelper, rect, offset, offsetLeft, offsetRight, offsetTop, offsetBottom, }) {
        var _a, _b;
        const img = this._inlineImg;
        canvashelper.drawInlineImageRect(ctx, img, this._imageLeft || 0, this._imageTop || 0, this._imageWidth || img.width, this._imageHeight || img.height, this._width || img.width, this._height || img.height, rect.left, rect.top, rect.width, rect.height, {
            offset: offset + 1,
            padding: {
                left: offsetLeft + ((_a = this._offsetLeft) !== null && _a !== void 0 ? _a : 0),
                right: offsetRight,
                top: offsetTop + ((_b = this._offsetTop) !== null && _b !== void 0 ? _b : 0),
                bottom: offsetBottom,
            },
        });
    }
    canBreak() {
        return false;
    }
    toString() {
        return "";
    }
}
exports.InlineImage = InlineImage;
