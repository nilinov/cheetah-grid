"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAction = void 0;
class BaseAction {
    constructor(option = {}) {
        this._disabled = option.disabled || false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = disabled;
        this.onChangeDisabledInternal();
    }
    onChangeDisabledInternal() {
        // abstract
    }
}
exports.BaseAction = BaseAction;
