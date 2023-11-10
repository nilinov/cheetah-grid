"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path2DShim = void 0;
const PathCommandsParser_1 = require("./PathCommandsParser");
const parser = new PathCommandsParser_1.PathCommandsParser();
class Path2DShim {
    arc(...args) {
        this._ops.push({ op: "arc", args });
    }
    arcTo(...args) {
        this._ops.push({ op: "arcTo", args });
    }
    bezierCurveTo(...args) {
        this._ops.push({ op: "bezierCurveTo", args });
    }
    closePath(...args) {
        this._ops.push({ op: "closePath", args });
    }
    ellipse(...args) {
        this._ops.push({ op: "ellipse", args });
    }
    lineTo(...args) {
        this._ops.push({ op: "lineTo", args });
    }
    moveTo(...args) {
        this._ops.push({ op: "moveTo", args });
    }
    quadraticCurveTo(...args) {
        this._ops.push({ op: "quadraticCurveTo", args });
    }
    rect(...args) {
        this._ops.push({ op: "rect", args });
    }
    constructor(arg) {
        this._ops = [];
        if (arg === undefined) {
            return;
        }
        if (typeof arg === "string") {
            // try {
            this._ops = parser.parse(arg);
            // } catch (e) {
            // 	throw e;
            // }
        }
        else if (arg.hasOwnProperty("_ops")) {
            this._ops = [...arg._ops];
        }
        else {
            throw new Error(`Error: ${typeof arg} is not a valid argument to Path`);
        }
    }
    roundRect(_x, _y, _w, _h, _radii) {
        throw new Error("Method not implemented.");
    }
}
exports.Path2DShim = Path2DShim;
const { CanvasRenderingContext2D } = window;
const originalFill = CanvasRenderingContext2D.prototype.fill;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
CanvasRenderingContext2D.prototype.fill = function (...args) {
    if (args[0] instanceof Path2DShim) {
        const path = args[0];
        this.beginPath();
        path._ops.forEach((op) => {
            const fn = this[op.op];
            fn.apply(this, op.args);
        });
        originalFill.apply(this, Array.prototype.slice.call(args, 1));
    }
    else {
        originalFill.apply(this, args);
    }
};
