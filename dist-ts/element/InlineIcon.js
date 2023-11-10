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
exports.InlineIcon = void 0;
const fonts = __importStar(require("../internal/fonts"));
const Inline_1 = require("./Inline");
class InlineIcon extends Inline_1.Inline {
    constructor(icon) {
        super();
        this._icon = icon || {};
    }
    width({ ctx }) {
        const icon = this._icon;
        if (icon.width) {
            return icon.width;
        }
        if (icon.font && fonts.check(icon.font, icon.content || "")) {
            ctx.save();
            ctx.canvas.style.letterSpacing = "normal";
            try {
                ctx.font = icon.font || ctx.font;
                return ctx.measureText(icon.content || "").width;
            }
            finally {
                ctx.canvas.style.letterSpacing = "";
                ctx.restore();
            }
        }
        return 0; //unknown
    }
    font() {
        var _a;
        return (_a = this._icon.font) !== null && _a !== void 0 ? _a : null;
    }
    color() {
        var _a;
        return (_a = this._icon.color) !== null && _a !== void 0 ? _a : null;
    }
    canDraw() {
        const icon = this._icon;
        return icon.font ? fonts.check(icon.font, icon.content || "") : true;
    }
    onReady(callback) {
        const icon = this._icon;
        if (icon.font && !fonts.check(icon.font, icon.content || "")) {
            fonts.load(icon.font, icon.content || "", callback);
        }
    }
    draw({ ctx, canvashelper, rect, offset, offsetLeft, offsetRight, offsetTop, offsetBottom, }) {
        const icon = this._icon;
        if (icon.content) {
            ctx.canvas.style.letterSpacing = "normal";
            try {
                // eslint-disable-next-line no-self-assign
                ctx.font = ctx.font; // To apply letterSpacing, we need to reset it.
                canvashelper.fillTextRect(ctx, icon.content, rect.left, rect.top, rect.width, rect.height, {
                    offset: offset + 1,
                    padding: {
                        left: offsetLeft + (this._icon.offsetLeft || 0),
                        right: offsetRight,
                        top: offsetTop + (this._icon.offsetTop || 0),
                        bottom: offsetBottom,
                    },
                });
            }
            finally {
                ctx.canvas.style.letterSpacing = "";
            }
        }
    }
    canBreak() {
        return false;
    }
    toString() {
        return "";
    }
}
exports.InlineIcon = InlineIcon;
