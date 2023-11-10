"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberColumn = void 0;
const Column_1 = require("./Column");
const NumberStyle_1 = require("../style/NumberStyle");
let defaultFotmat;
class NumberColumn extends Column_1.Column {
    static get defaultFotmat() {
        return defaultFotmat || (defaultFotmat = new Intl.NumberFormat());
    }
    static set defaultFotmat(fmt) {
        defaultFotmat = fmt;
    }
    constructor(option = {}) {
        super(option);
        this._format = option.format;
    }
    get StyleClass() {
        return NumberStyle_1.NumberStyle;
    }
    clone() {
        return new NumberColumn(this);
    }
    get format() {
        return this._format;
    }
    withFormat(format) {
        const c = this.clone();
        c._format = format;
        return c;
    }
    convertInternal(value) {
        const num = Number(value);
        if (isNaN(num)) {
            const convertedValue = super.convertInternal(value);
            return convertedValue != null ? String(convertedValue) : "";
        }
        const format = this._format || NumberColumn.defaultFotmat;
        return format.format(num);
    }
}
exports.NumberColumn = NumberColumn;
