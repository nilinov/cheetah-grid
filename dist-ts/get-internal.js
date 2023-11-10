"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInternal = void 0;
function getInternal() {
    console.warn("use internal!!");
    return {
        color: require("./internal/color"),
        sort: require("./internal/sort"),
        calc: require("./internal/calc"),
        symbolManager: require("./internal/symbolManager"),
        path2DManager: require("./internal/path2DManager"),
        pasteUtils: require("./internal/paste-utils"),
    };
}
exports.getInternal = getInternal;
