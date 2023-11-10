"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChoices = exports.setDefault = exports.getDefault = exports.of = exports.theme = exports.MATERIAL_DESIGN = exports.BASIC = void 0;
const utils_1 = require("./internal/utils");
const theme_1 = require("./themes/theme");
const BASIC_1 = __importDefault(require("./themes/BASIC"));
const MATERIAL_DESIGN_1 = __importDefault(require("./themes/MATERIAL_DESIGN"));
const themes_1 = require("./plugins/themes");
exports.BASIC = new theme_1.Theme(BASIC_1.default);
exports.MATERIAL_DESIGN = new theme_1.Theme(MATERIAL_DESIGN_1.default);
const builtin = {
    BASIC: exports.BASIC,
    MATERIAL_DESIGN: exports.MATERIAL_DESIGN,
};
let defTheme = exports.MATERIAL_DESIGN;
exports.theme = { Theme: theme_1.Theme };
function of(value) {
    if (!value) {
        return null;
    }
    if (typeof value === "string") {
        const t = (0, utils_1.getIgnoreCase)(getChoices(), value);
        if (t) {
            return t;
        }
        return null;
    }
    if (value instanceof theme_1.Theme) {
        return value;
    }
    return new theme_1.Theme(value);
}
exports.of = of;
function getDefault() {
    return defTheme;
}
exports.getDefault = getDefault;
function setDefault(defaultTheme) {
    defTheme = of(defaultTheme) || defTheme;
}
exports.setDefault = setDefault;
function getChoices() {
    return (0, utils_1.extend)(builtin, themes_1.themes);
}
exports.getChoices = getChoices;
