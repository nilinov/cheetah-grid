"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ofCell = exports.of = exports.MultilineTextHeader = exports.CheckHeader = exports.SortHeader = exports.Header = exports.BaseHeader = void 0;
const BaseHeader_1 = require("./type/BaseHeader");
Object.defineProperty(exports, "BaseHeader", { enumerable: true, get: function () { return BaseHeader_1.BaseHeader; } });
const CheckHeader_1 = require("./type/CheckHeader");
Object.defineProperty(exports, "CheckHeader", { enumerable: true, get: function () { return CheckHeader_1.CheckHeader; } });
const Header_1 = require("./type/Header");
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return Header_1.Header; } });
const MultilineTextHeader_1 = require("./type/MultilineTextHeader");
Object.defineProperty(exports, "MultilineTextHeader", { enumerable: true, get: function () { return MultilineTextHeader_1.MultilineTextHeader; } });
const SortHeader_1 = require("./type/SortHeader");
Object.defineProperty(exports, "SortHeader", { enumerable: true, get: function () { return SortHeader_1.SortHeader; } });
const TYPES = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    DEFAULT: new Header_1.Header(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SORT: new SortHeader_1.SortHeader(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CHECK: new CheckHeader_1.CheckHeader(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MULTILINETEXT: new MultilineTextHeader_1.MultilineTextHeader(),
};
function of(headerType) {
    if (!headerType) {
        return TYPES.DEFAULT;
    }
    else if (typeof headerType === "string") {
        const key = headerType.toUpperCase();
        return TYPES[key] || of(null);
    }
    else {
        return headerType;
    }
}
exports.of = of;
function ofCell(headerCell) {
    if (headerCell.sort) {
        return TYPES.SORT;
    }
    return of(headerCell.headerType);
}
exports.ofCell = ofCell;
