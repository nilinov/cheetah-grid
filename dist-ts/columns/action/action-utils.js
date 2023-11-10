"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleValue = exports.isReadOnlyRecord = exports.isDisabledRecord = void 0;
const utils_1 = require("../../internal/utils");
function isDisabledRecord(option, grid, row) {
    if (grid.disabled) {
        return true;
    }
    return getBooleanOptionOfRecord(option, grid, row);
}
exports.isDisabledRecord = isDisabledRecord;
function isReadOnlyRecord(option, grid, row) {
    if (grid.readOnly) {
        return true;
    }
    return getBooleanOptionOfRecord(option, grid, row);
}
exports.isReadOnlyRecord = isReadOnlyRecord;
function toggleValue(val) {
    if (typeof val === "number") {
        if (val === 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    else if (typeof val === "string") {
        if (val === "false") {
            return "true";
        }
        else if (val === "off") {
            return "on";
        }
        else if (/^0+$/.exec(val)) {
            return val.replace(/^(0*)0$/, "$11");
        }
        else if (val === "true") {
            return "false";
        }
        else if (val === "on") {
            return "off";
        }
        else if (/^0*1$/.exec(val)) {
            return val.replace(/^(0*)1$/, "$10");
        }
    }
    return !val;
}
exports.toggleValue = toggleValue;
function getBooleanOptionOfRecord(option, grid, row) {
    if (typeof option === "function") {
        const record = grid.getRowRecord(row);
        if ((0, utils_1.isPromise)(record)) {
            return true;
        }
        return !!option(record);
    }
    return !!option;
}
