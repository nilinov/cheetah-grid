"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
const BaseAction_1 = require("./BaseAction");
class Editor extends BaseAction_1.BaseAction {
    constructor(option = {}) {
        super(option);
        this._readOnly = option.readOnly || false;
    }
    get editable() {
        return true;
    }
    get readOnly() {
        return this._readOnly;
    }
    set readOnly(readOnly) {
        this._readOnly = readOnly;
        this.onChangeReadOnlyInternal();
    }
    onChangeReadOnlyInternal() {
        // abstruct
    }
}
exports.Editor = Editor;
