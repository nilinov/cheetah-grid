"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathCommandsParser = void 0;
const PathCommands_1 = require("./PathCommands");
function pathTokens(d) {
    let idx = 0;
    return {
        next() {
            let s = "";
            while (d.length > idx) {
                const c = d[idx];
                idx++;
                if (" ,\n\r\t".indexOf(c) > -1) {
                    if (s) {
                        return s;
                    }
                }
                else {
                    const type = ".+-1234567890".indexOf(c) > -1 ? "num" : "str";
                    if (type === "str") {
                        if (s) {
                            idx--;
                            return s;
                        }
                        return c;
                    }
                    if ("-+".indexOf(c) > -1) {
                        if (s) {
                            idx--;
                            return s;
                        }
                    }
                    if (c === ".") {
                        if (s.indexOf(".") > -1) {
                            idx--;
                            return s;
                        }
                    }
                    s += c;
                }
            }
            return s || null;
        },
    };
}
function command(builder, cmd, argsProvider) {
    if (cmd.toUpperCase() === "M" ||
        cmd.toUpperCase() === "L" ||
        cmd.toUpperCase() === "T") {
        builder.command(cmd, argsProvider.next(), argsProvider.next());
        return cmd === "M" ? "L" : cmd === "m" ? "l" : cmd;
    }
    else if (cmd.toUpperCase() === "H" || cmd.toUpperCase() === "V") {
        builder.command(cmd, argsProvider.next());
        return cmd;
    }
    else if (cmd.toUpperCase() === "Z") {
        builder.command(cmd);
        return cmd;
    }
    else if (cmd.toUpperCase() === "C") {
        builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
        return cmd;
    }
    else if (cmd.toUpperCase() === "S" || cmd.toUpperCase() === "Q") {
        builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
        return cmd;
    }
    else if (cmd.toUpperCase() === "A") {
        builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
        return cmd;
    }
    else {
        // https://developer.mozilla.org/ja/docs/Web/SVG/Tutorial/Paths
        console.warn(`unsupported:${cmd}`);
    }
    return null;
}
class PathCommandsParser {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._ops = [];
        this._commands = new PathCommands_1.PathCommands(this);
        const buildPush = (op) => 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (...args) => {
            this._ops.push({
                op,
                args,
            });
        };
        this.moveTo = buildPush("moveTo");
        this.lineTo = buildPush("lineTo");
        this.closePath = buildPush("closePath");
        this.bezierCurveTo = buildPush("bezierCurveTo");
        this.quadraticCurveTo = buildPush("quadraticCurveTo");
        this.save = buildPush("save");
        this.translate = buildPush("translate");
        this.rotate = buildPush("rotate");
        this.scale = buildPush("scale");
        this.arc = buildPush("arc");
        this.restore = buildPush("restore");
        this.arcTo = buildPush("arcTo");
        this.ellipse = buildPush("ellipse");
        this.rect = buildPush("rect");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    command(name, ...args) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const numArgs = args || [];
        for (let i = 0; i < args.length; i++) {
            numArgs[i] -= 0;
        }
        const command = this._commands[name];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        command.apply(this, numArgs);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parse(d) {
        const ops = (this._ops = []);
        const tokens = pathTokens(d);
        try {
            let cmd;
            let subsequentCommand = "Z";
            while ((cmd = tokens.next())) {
                if (!isNaN(Number(cmd))) {
                    let fst = true;
                    const argsProvider = {
                        next() {
                            if (fst) {
                                fst = false;
                                return cmd;
                            }
                            return tokens.next();
                        },
                    };
                    subsequentCommand =
                        command(this, subsequentCommand, argsProvider) || "Z";
                }
                else {
                    subsequentCommand =
                        command(this, cmd, tokens) || "Z";
                }
            }
        }
        catch (e) {
            console.log(`Error: ${d}`);
            throw e;
        }
        return ops;
    }
}
exports.PathCommandsParser = PathCommandsParser;
