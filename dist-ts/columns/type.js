"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.of = exports.MultilineTextColumn = exports.MenuColumn = exports.BranchGraphColumn = exports.IconColumn = exports.PercentCompleteBarColumn = exports.ImageColumn = exports.ButtonColumn = exports.RadioColumn = exports.CheckColumn = exports.NumberColumn = exports.Column = void 0;
const BranchGraphColumn_1 = require("./type/BranchGraphColumn");
Object.defineProperty(exports, "BranchGraphColumn", { enumerable: true, get: function () { return BranchGraphColumn_1.BranchGraphColumn; } });
const ButtonColumn_1 = require("./type/ButtonColumn");
Object.defineProperty(exports, "ButtonColumn", { enumerable: true, get: function () { return ButtonColumn_1.ButtonColumn; } });
const CheckColumn_1 = require("./type/CheckColumn");
Object.defineProperty(exports, "CheckColumn", { enumerable: true, get: function () { return CheckColumn_1.CheckColumn; } });
const Column_1 = require("./type/Column");
Object.defineProperty(exports, "Column", { enumerable: true, get: function () { return Column_1.Column; } });
const IconColumn_1 = require("./type/IconColumn");
Object.defineProperty(exports, "IconColumn", { enumerable: true, get: function () { return IconColumn_1.IconColumn; } });
const ImageColumn_1 = require("./type/ImageColumn");
Object.defineProperty(exports, "ImageColumn", { enumerable: true, get: function () { return ImageColumn_1.ImageColumn; } });
const MenuColumn_1 = require("./type/MenuColumn");
Object.defineProperty(exports, "MenuColumn", { enumerable: true, get: function () { return MenuColumn_1.MenuColumn; } });
const MultilineTextColumn_1 = require("./type/MultilineTextColumn");
Object.defineProperty(exports, "MultilineTextColumn", { enumerable: true, get: function () { return MultilineTextColumn_1.MultilineTextColumn; } });
const NumberColumn_1 = require("./type/NumberColumn");
Object.defineProperty(exports, "NumberColumn", { enumerable: true, get: function () { return NumberColumn_1.NumberColumn; } });
const PercentCompleteBarColumn_1 = require("./type/PercentCompleteBarColumn");
Object.defineProperty(exports, "PercentCompleteBarColumn", { enumerable: true, get: function () { return PercentCompleteBarColumn_1.PercentCompleteBarColumn; } });
const RadioColumn_1 = require("./type/RadioColumn");
Object.defineProperty(exports, "RadioColumn", { enumerable: true, get: function () { return RadioColumn_1.RadioColumn; } });
const TYPES = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    DEFAULT: new Column_1.Column(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    NUMBER: new NumberColumn_1.NumberColumn(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CHECK: new CheckColumn_1.CheckColumn(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RADIO: new RadioColumn_1.RadioColumn(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BUTTON: new ButtonColumn_1.ButtonColumn(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    IMAGE: new ImageColumn_1.ImageColumn(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MULTILINETEXT: new MultilineTextColumn_1.MultilineTextColumn(),
};
function of(columnType) {
    if (!columnType) {
        return TYPES.DEFAULT;
    }
    else if (typeof columnType === "string") {
        const key = columnType.toUpperCase();
        return TYPES[key] || of(null);
    }
    else {
        return columnType;
    }
}
exports.of = of;
