"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconColumn = void 0;
const icons = __importStar(require("../../internal/icons"));
const Column_1 = require("./Column");
const IconStyle_1 = require("../style/IconStyle");
function repeatArray(val, count) {
    if (count === Infinity) {
        count = 0;
    }
    const a = [];
    for (let i = 0; i < count; i++) {
        a.push(val);
    }
    return a;
}
class IconColumn extends Column_1.Column {
    constructor(option = {}) {
        super(option);
        this._tagName = option.tagName || "i";
        this._className = option.className;
        this._content = option.content;
        this._name = option.name;
        this._iconWidth = option.iconWidth;
    }
    get StyleClass() {
        return IconStyle_1.IconStyle;
    }
    clone() {
        return new IconColumn(this);
    }
    drawInternal(value, context, style, helper, grid, info) {
        const num = Number(value);
        if (!isNaN(num)) {
            const icon = {};
            icons.iconPropKeys.forEach((k) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                icon[k] = style[k];
            });
            icon.className = this._className;
            icon.tagName = this._tagName;
            if (this._content) {
                icon.content = this._content;
            }
            icon.name = this._name;
            if (this._iconWidth) {
                icon.width = this._iconWidth;
            }
            info.getIcon = () => repeatArray(icon, num);
        }
        else {
            info.getIcon = () => null;
        }
        super.drawInternal("", context, style, helper, grid, info);
    }
}
exports.IconColumn = IconColumn;
