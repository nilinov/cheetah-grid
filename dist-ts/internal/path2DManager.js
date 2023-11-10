"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fill = exports.getPath2D = void 0;
const utils_1 = require("./utils");
function getPath2D() {
    if (typeof Path2D !== "undefined" && !utils_1.browser.Edge) {
        return Path2D;
    }
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("./legacy/canvas/Path2DShim").Path2DShim;
}
exports.getPath2D = getPath2D;
function fill(pathModule, ctx, x, y, w, h) {
    ctx.save();
    try {
        const { width, height } = pathModule;
        const { ud: upsideDown, x: offsetX = 0, y: offsetY = 0 } = pathModule;
        w = w || width;
        h = h || height;
        const xrate = w / width;
        const yrate = h / (upsideDown ? -height : height);
        x = x || 0;
        y = upsideDown ? (y || 0) + -height * yrate : y || 0;
        ctx.translate(x, y);
        ctx.scale(xrate, yrate);
        if (offsetX !== 0 || offsetY !== 0) {
            ctx.translate(offsetX, offsetY);
        }
        const Path2D = getPath2D();
        const path2d = (pathModule.path2d =
            pathModule.path2d || new Path2D(pathModule.d));
        ctx.fill(path2d);
    }
    finally {
        ctx.restore();
    }
}
exports.fill = fill;
