"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.of = exports.MultilineTextHeaderStyle = exports.CheckHeaderStyle = exports.SortHeaderStyle = exports.Style = exports.BaseStyle = void 0;
const BaseStyle_1 = require("./style/BaseStyle");
Object.defineProperty(exports, "BaseStyle", { enumerable: true, get: function () { return BaseStyle_1.BaseStyle; } });
const CheckHeaderStyle_1 = require("./style/CheckHeaderStyle");
Object.defineProperty(exports, "CheckHeaderStyle", { enumerable: true, get: function () { return CheckHeaderStyle_1.CheckHeaderStyle; } });
const MultilineTextHeaderStyle_1 = require("./style/MultilineTextHeaderStyle");
Object.defineProperty(exports, "MultilineTextHeaderStyle", { enumerable: true, get: function () { return MultilineTextHeaderStyle_1.MultilineTextHeaderStyle; } });
const SortHeaderStyle_1 = require("./style/SortHeaderStyle");
Object.defineProperty(exports, "SortHeaderStyle", { enumerable: true, get: function () { return SortHeaderStyle_1.SortHeaderStyle; } });
const Style_1 = require("./style/Style");
Object.defineProperty(exports, "Style", { enumerable: true, get: function () { return Style_1.Style; } });
function of(headerStyle, StyleClass) {
    if (headerStyle) {
        if (headerStyle instanceof Style_1.Style) {
            return headerStyle;
        }
        else if (typeof headerStyle === "function") {
            return of(headerStyle(), StyleClass);
        }
        return new StyleClass(headerStyle);
    }
    else {
        return StyleClass.DEFAULT;
    }
}
exports.of = of;
