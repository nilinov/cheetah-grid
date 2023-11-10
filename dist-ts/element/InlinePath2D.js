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
exports.InlinePath2D = void 0;
const path2DManager = __importStar(require("../internal/path2DManager"));
const Inline_1 = require("./Inline");
const canvases_1 = require("../internal/canvases");
class InlinePath2D extends Inline_1.Inline {
    constructor({ path, width, height, color }) {
        super();
        // このタイミングでないとIEでPath2Dのpolyfillが反映されない
        const Path2D = path2DManager.getPath2D();
        this._path = new Path2D(path);
        this._width = width;
        this._height = height;
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
    draw({ ctx, rect, offset, offsetLeft, offsetRight, offsetTop, offsetBottom, }) {
        offset++;
        const padding = {
            left: offsetLeft,
            right: offsetRight,
            top: offsetTop,
            bottom: offsetBottom,
        };
        ctx.save();
        try {
            ctx.beginPath();
            ctx.rect(rect.left, rect.top, rect.width, rect.height);
            //clip
            ctx.clip();
            //文字描画
            const pos = (0, canvases_1.calcStartPosition)(ctx, rect, this._width, this._height, {
                offset,
                padding,
            });
            ctx.translate(pos.x, pos.y);
            ctx.fill(this._path);
        }
        finally {
            ctx.restore();
        }
    }
    canBreak() {
        return false;
    }
    toString() {
        return "";
    }
}
exports.InlinePath2D = InlinePath2D;
