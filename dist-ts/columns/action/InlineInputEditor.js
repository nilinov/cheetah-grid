"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineInputEditor = void 0;
const BaseInputEditor_1 = require("./BaseInputEditor");
const InlineInputElement_1 = require("./internal/InlineInputElement");
const symbolManager_1 = require("../../internal/symbolManager");
const utils_1 = require("../../internal/utils");
const _ = (0, symbolManager_1.getInlineInputEditorStateId)();
function getState(grid) {
    let state = grid[_];
    if (!state) {
        state = {};
        utils_1.obj.setReadonly(grid, _, state);
    }
    return state;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let globalElement = null;
let bindGridCount = 0;
function attachInput(grid, cell, editor, value) {
    const state = getState(grid);
    if (!globalElement) {
        globalElement = new InlineInputElement_1.InlineInputElement();
    }
    if (!state.element) {
        state.element = globalElement;
        bindGridCount++;
        grid.addDisposable({
            dispose() {
                bindGridCount--;
                if (!bindGridCount) {
                    globalElement === null || globalElement === void 0 ? void 0 : globalElement.dispose();
                    globalElement = null;
                    state.element = null;
                }
            },
        });
    }
    globalElement.attach(grid, editor, cell.col, cell.row, value);
}
function detachInput(gridFocus) {
    if (globalElement) {
        globalElement.detach(gridFocus);
    }
}
function doChangeValue(_grid) {
    if (globalElement) {
        globalElement.doChangeValue();
    }
}
class InlineInputEditor extends BaseInputEditor_1.BaseInputEditor {
    constructor(option = {}) {
        super(option);
        this._classList = option.classList;
        this._type = option.type;
    }
    get classList() {
        if (!this._classList) {
            return undefined;
        }
        return Array.isArray(this._classList) ? this._classList : [this._classList];
    }
    set classList(classList) {
        this._classList = classList;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    clone() {
        return new InlineInputEditor(this);
    }
    onInputCellInternal(grid, cell, inputValue) {
        attachInput(grid, cell, this, inputValue);
    }
    onOpenCellInternal(grid, cell) {
        grid.doGetCellValue(cell.col, cell.row, (value) => {
            attachInput(grid, cell, this, value);
        });
    }
    onChangeSelectCellInternal(grid, _cell, _selected) {
        doChangeValue(grid);
        detachInput();
    }
    onGridScrollInternal(grid) {
        doChangeValue(grid);
        detachInput(true);
    }
    onChangeDisabledInternal() {
        // cancel input
        detachInput(true);
    }
    onChangeReadOnlyInternal() {
        // cancel input
        detachInput(true);
    }
    onSetInputAttrsInternal(grid, _cell, input) {
        InlineInputElement_1.InlineInputElement.setInputAttrs(this, grid, input);
    }
}
exports.InlineInputEditor = InlineInputEditor;
