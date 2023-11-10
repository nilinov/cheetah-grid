"use strict";
//see https://github.com/typekit/webfontloader
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontRuler = void 0;
function computeStyle(font) {
    return [
        {
            display: "block",
            position: "absolute",
            top: "-9999px",
            left: "-9999px",
            width: "auto",
            height: "auto",
            margin: "0",
            padding: "0",
            "white-space": "nowrap",
            font,
        },
        {
            "font-variant": "normal",
            "font-size": "300px",
            "font-style": "normal",
            "font-weight": "400",
            "line-height": "normal",
        },
    ];
}
class FontRuler {
    constructor(font, testStr) {
        const e = document.createElement("span");
        e.setAttribute("aria-hidden", "true");
        e.textContent = testStr || "BESbswy";
        computeStyle(font).forEach((style) => {
            for (const k in style) {
                const key = k;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                e.style[key] = style[key];
            }
        });
        document.body.appendChild(e);
        this.el_ = e;
    }
    getWidth() {
        return this.el_.offsetWidth;
    }
    remove() {
        document.body.removeChild(this.el_);
    }
}
exports.FontRuler = FontRuler;
