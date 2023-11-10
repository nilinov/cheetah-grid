"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.icons = exports.icon = exports.theme = void 0;
const icons_1 = require("./plugins/icons");
const themes_1 = require("./plugins/themes");
function register(obj, name, value) {
    const old = obj[name];
    obj[name] = value;
    return old;
}
function registers(obj, values) {
    for (const k in values) {
        obj[k] = values[k];
    }
}
function theme(name, theme) {
    if (theme != null) {
        return register(themes_1.themes, name, theme);
    }
    else {
        return themes_1.themes[name];
    }
}
exports.theme = theme;
function icon(name, icon) {
    if (icon != null) {
        return register(icons_1.icons, name, icon);
    }
    else {
        return icons_1.icons[name];
    }
}
exports.icon = icon;
function icons(icons) {
    return registers(icons_1.icons, icons);
}
exports.icons = icons;
