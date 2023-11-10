"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuStyle = void 0;
const Style_1 = require("./Style");
let defaultStyle;
class MenuStyle extends Style_1.Style {
    static get DEFAULT() {
        return defaultStyle ? defaultStyle : (defaultStyle = new MenuStyle());
    }
    constructor(style = {}) {
        super(style);
        const { appearance } = style;
        this._appearance = appearance;
    }
    get appearance() {
        return this._appearance || "menulist-button";
    }
    set appearance(appearance) {
        this._appearance = appearance;
        this.doChangeStyle();
    }
    clone() {
        return new MenuStyle(this);
    }
}
exports.MenuStyle = MenuStyle;
