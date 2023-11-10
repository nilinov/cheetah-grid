"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallDialogInputEditor = void 0;
const symbolManager_1 = require("../../internal/symbolManager");
const utils_1 = require("../../internal/utils");
const BaseInputEditor_1 = require("./BaseInputEditor");
const action_utils_1 = require("./action-utils");
const SmallDialogInputElement_1 = require("./internal/SmallDialogInputElement");
const _ = (0, symbolManager_1.getSmallDialogInputEditorStateId)();
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
        globalElement = new SmallDialogInputElement_1.SmallDialogInputElement();
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
class SmallDialogInputEditor extends BaseInputEditor_1.BaseInputEditor {
    constructor(option = {}) {
        super(option);
        this._helperText = option.helperText;
        this._inputValidator = option.inputValidator;
        this._validator = option.validator;
        this._classList = option.classList;
        this._type = option.type;
    }
    dispose() {
        //noop
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
    get helperText() {
        return this._helperText;
    }
    get inputValidator() {
        return this._inputValidator;
    }
    get validator() {
        return this._validator;
    }
    clone() {
        return new SmallDialogInputEditor(this);
    }
    onInputCellInternal(grid, cell, inputValue) {
        attachInput(grid, cell, this, inputValue);
    }
    onOpenCellInternal(grid, cell) {
        grid.doGetCellValue(cell.col, cell.row, (value) => {
            attachInput(grid, cell, this, value);
        });
    }
    onChangeSelectCellInternal(_grid, _cell, _selected) {
        // cancel input
        detachInput();
    }
    onGridScrollInternal(_grid) {
        // cancel input
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
        SmallDialogInputElement_1.SmallDialogInputElement.setInputAttrs(this, grid, input);
    }
    bindGridEvent(grid, cellId) {
        const open = (cell) => {
            if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
                (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
                return false;
            }
            this.onOpenCellInternal(grid, cell);
            return true;
        };
        function isTarget(col, row) {
            return grid.getLayoutCellId(col, row) === cellId;
        }
        return [
            ...super.bindGridEvent(grid, cellId),
            grid.listen('click_cell', (cell) => {
                if (!isTarget(cell.col, cell.row)) {
                    return;
                }
                open({
                    col: cell.col,
                    row: cell.row,
                });
            }),
        ];
    }
}
exports.SmallDialogInputEditor = SmallDialogInputEditor;
