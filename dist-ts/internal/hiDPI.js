"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const EventHandler_1 = require("./EventHandler");
const utils_1 = require("./utils");
const handler = new EventHandler_1.EventHandler();
let ratio = 1;
function setRatio() {
    if (utils_1.isNode) {
        ratio = 1;
    }
    else {
        ratio = Math.ceil(window.devicePixelRatio || 1);
        if (ratio > 1 && ratio % 2 !== 0) {
            ratio += 1;
        }
    }
}
setRatio();
if (!utils_1.isNode) {
    handler.on(window, "resize", setRatio);
}
function transform(canvas) {
    const ctx = canvas.getContext("2d");
    const { getAttribute, setAttribute } = canvas;
    canvas.getAttribute = function (name) {
        let result = getAttribute.call(this, name);
        if (name === "width" || name === "height") {
            result = `${Number(result) / ratio}`;
        }
        return result;
    };
    canvas.setAttribute = function (name, val) {
        const wh = name === "width" || name === "height";
        if (wh) {
            val = `${Number(val) * ratio}`;
        }
        const result = setAttribute.call(this, name, val);
        if (wh) {
            ctx.scale(ratio, ratio);
        }
        return result;
    };
    Object.defineProperty(canvas, "width", {
        get() {
            return Number(canvas.getAttribute("width"));
        },
        set: (val) => {
            canvas.setAttribute("width", `${Math.floor(val)}`);
        },
        configurable: true,
        enumerable: true,
    });
    Object.defineProperty(canvas, "height", {
        get() {
            return Number(canvas.getAttribute("height"));
        },
        set: (val) => {
            canvas.setAttribute("height", `${Math.floor(val)}`);
        },
        configurable: true,
        enumerable: true,
    });
    const { drawImage } = ctx;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ctx.drawImage = function (img, ...args) {
        if (img !== canvas || ratio === 1) {
            return drawImage.call(this, img, ...args);
        }
        this.save();
        try {
            this.scale(1 / ratio, 1 / ratio);
            if (args.length > 4) {
                args[4] *= ratio;
                args[5] *= ratio;
            }
            else {
                args[0] *= ratio;
                args[1] *= ratio;
            }
            return drawImage.call(this, img, ...args);
        }
        finally {
            this.restore();
        }
    };
    return canvas;
}
exports.transform = transform;
