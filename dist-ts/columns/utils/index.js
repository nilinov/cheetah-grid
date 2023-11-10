"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBoolean = void 0;
function toBoolean(val) {
    if (typeof val === "string") {
        if (val === "false") {
            return false;
        }
        else if (val === "off") {
            return false;
        }
        else if (/^0+$/.exec(val)) {
            return false;
        }
    }
    return Boolean(val);
}
exports.toBoolean = toBoolean;
