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
exports.string = exports.buildInlines = exports.of = exports.iconOf = void 0;
const icons = __importStar(require("../icons"));
const path2DManager = __importStar(require("../internal/path2DManager"));
const Inline_1 = require("./Inline");
const InlineDrawer_1 = require("./InlineDrawer");
const InlineIcon_1 = require("./InlineIcon");
const InlineImage_1 = require("./InlineImage");
const InlinePath2D_1 = require("./InlinePath2D");
const InlineSvg_1 = require("./InlineSvg");
const canvases_1 = require("../internal/canvases");
function drawRegisteredIcon(ctx, icon, drawWidth, drawHeight, left, top, width, height, { offset = 2, padding } = {}) {
    const rect = {
        left,
        top,
        width,
        height,
        right: left + width,
        bottom: top + height,
    };
    ctx.save();
    try {
        ctx.beginPath();
        ctx.rect(rect.left, rect.top, rect.width, rect.height);
        //clip
        ctx.clip();
        //文字描画
        const pos = (0, canvases_1.calcStartPosition)(ctx, rect, drawWidth, drawHeight, {
            offset,
            padding,
        });
        path2DManager.fill(icon, ctx, pos.x, pos.y, drawWidth, drawHeight);
    }
    finally {
        ctx.restore();
    }
}
function isIconConstructorOption(icon) {
    if (icon.font && icon.content) {
        return true;
    }
    return false;
}
function isInlineImageConstructorOption(icon) {
    if (icon.src) {
        return true;
    }
    return false;
}
function isInlineSvgConstructorOption(icon) {
    if (icon.path) {
        return true;
    }
    return false;
}
function iconOf(icon) {
    if (icon instanceof Inline_1.Inline) {
        return icon;
    }
    if (!icon) {
        return null;
    }
    if (isIconConstructorOption(icon)) {
        return new InlineIcon_1.InlineIcon(icon);
    }
    if (isInlineImageConstructorOption(icon)) {
        return new InlineImage_1.InlineImage({
            src: icon.src,
            width: icon.width,
            height: icon.width,
            offsetTop: icon.offsetTop,
            offsetLeft: icon.offsetLeft,
        });
    }
    if (icon.svg) {
        return new InlineSvg_1.InlineSvg({
            svg: icon.svg,
            width: icon.width,
            height: icon.width,
        });
    }
    if (isInlineSvgConstructorOption(icon)) {
        return new InlinePath2D_1.InlinePath2D({
            path: icon.path,
            width: icon.width,
            height: icon.width,
            color: icon.color,
        });
    }
    const registeredIcons = icons.get();
    if (icon.name && registeredIcons[icon.name]) {
        const registeredIcon = registeredIcons[icon.name];
        const width = icon.width || Math.max(registeredIcon.width, registeredIcon.height);
        return new InlineDrawer_1.InlineDrawer({
            draw({ ctx, rect, offset, offsetLeft, offsetRight, offsetTop, offsetBottom, }) {
                drawRegisteredIcon(ctx, registeredIcon, width, width, rect.left, rect.top, rect.width, rect.height, {
                    offset: offset + 1,
                    padding: {
                        left: offsetLeft,
                        right: offsetRight,
                        top: offsetTop,
                        bottom: offsetBottom,
                    },
                });
            },
            width,
            height: width,
            color: icon.color,
        });
    }
    return new InlineIcon_1.InlineIcon(icon);
}
exports.iconOf = iconOf;
function of(content) {
    if (content == null) {
        return null;
    }
    if (content instanceof Inline_1.Inline) {
        return content;
    }
    return new Inline_1.Inline(content);
}
exports.of = of;
function buildInlines(icons, inline) {
    const result = [];
    if (icons) {
        result.push(...icons
            .map((icon) => iconOf(icon))
            .filter((i) => i != null));
    }
    if (Array.isArray(inline)
    // && inline.filter(il => il instanceof Inline).length <- ?
    ) {
        result.push(...inline.map((il) => of(il)).filter((i) => i != null));
    }
    else {
        const il = of(inline);
        if (il) {
            result.push(il);
        }
    }
    return result;
}
exports.buildInlines = buildInlines;
function string(inline) {
    return buildInlines(undefined, inline).join("");
}
exports.string = string;
