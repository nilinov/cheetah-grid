"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.of = exports.MenuStyle = exports.MultilineTextStyle = exports.PercentCompleteBarStyle = exports.IconStyle = exports.ImageStyle = exports.ButtonStyle = exports.RadioStyle = exports.CheckStyle = exports.NumberStyle = exports.Style = exports.BaseStyle = exports.EVENT_TYPE = void 0;
const BaseStyle_1 = require("./style/BaseStyle");
Object.defineProperty(exports, "BaseStyle", { enumerable: true, get: function () { return BaseStyle_1.BaseStyle; } });
const ButtonStyle_1 = require("./style/ButtonStyle");
Object.defineProperty(exports, "ButtonStyle", { enumerable: true, get: function () { return ButtonStyle_1.ButtonStyle; } });
const CheckStyle_1 = require("./style/CheckStyle");
Object.defineProperty(exports, "CheckStyle", { enumerable: true, get: function () { return CheckStyle_1.CheckStyle; } });
const IconStyle_1 = require("./style/IconStyle");
Object.defineProperty(exports, "IconStyle", { enumerable: true, get: function () { return IconStyle_1.IconStyle; } });
const ImageStyle_1 = require("./style/ImageStyle");
Object.defineProperty(exports, "ImageStyle", { enumerable: true, get: function () { return ImageStyle_1.ImageStyle; } });
const MenuStyle_1 = require("./style/MenuStyle");
Object.defineProperty(exports, "MenuStyle", { enumerable: true, get: function () { return MenuStyle_1.MenuStyle; } });
const MultilineTextStyle_1 = require("./style/MultilineTextStyle");
Object.defineProperty(exports, "MultilineTextStyle", { enumerable: true, get: function () { return MultilineTextStyle_1.MultilineTextStyle; } });
const NumberStyle_1 = require("./style/NumberStyle");
Object.defineProperty(exports, "NumberStyle", { enumerable: true, get: function () { return NumberStyle_1.NumberStyle; } });
const PercentCompleteBarStyle_1 = require("./style/PercentCompleteBarStyle");
Object.defineProperty(exports, "PercentCompleteBarStyle", { enumerable: true, get: function () { return PercentCompleteBarStyle_1.PercentCompleteBarStyle; } });
const RadioStyle_1 = require("./style/RadioStyle");
Object.defineProperty(exports, "RadioStyle", { enumerable: true, get: function () { return RadioStyle_1.RadioStyle; } });
const Style_1 = require("./style/Style");
Object.defineProperty(exports, "Style", { enumerable: true, get: function () { return Style_1.Style; } });
const { EVENT_TYPE } = BaseStyle_1.BaseStyle;
exports.EVENT_TYPE = EVENT_TYPE;
function of(columnStyle, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
record, StyleClassDef = Style_1.Style, col, row) {
    if (columnStyle) {
        if (columnStyle instanceof BaseStyle_1.BaseStyle) {
            return columnStyle;
        }
        else if (typeof columnStyle === "function") {
            return of(columnStyle(record, col, row), record, StyleClassDef, col, row);
        }
        else if (record && columnStyle in record) {
            return of(record[columnStyle], record, StyleClassDef, col, row);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new StyleClassDef(columnStyle);
    }
    else {
        return StyleClassDef.DEFAULT;
    }
}
exports.of = of;
