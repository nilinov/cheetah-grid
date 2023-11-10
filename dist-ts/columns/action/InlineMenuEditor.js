"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineMenuEditor = void 0;
const utils_1 = require("../../internal/utils");
const action_utils_1 = require("./action-utils");
const DG_EVENT_TYPE_1 = require("../../core/DG_EVENT_TYPE");
const Editor_1 = require("./Editor");
const InlineMenuElement_1 = require("./internal/InlineMenuElement");
const type_1 = require("../type");
const symbolManager_1 = require("../../internal/symbolManager");
const menu_items_1 = require("../../internal/menu-items");
const _ = (0, symbolManager_1.getInlineMenuEditorStateId)();
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
function attachMenu(grid, cell, editor, value, record) {
    const state = getState(grid);
    if (!globalElement) {
        globalElement = new InlineMenuElement_1.InlineMenuElement();
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
    globalElement.attach(grid, editor, cell.col, cell.row, value, record);
}
function detachMenu(gridFocus) {
    if (globalElement) {
        globalElement.detach(gridFocus);
    }
}
const KEY_ENTER = 13;
const KEY_F2 = 113;
class InlineMenuEditor extends Editor_1.Editor {
    constructor(option = {}) {
        super(option);
        this._classList = option.classList;
        this._options = (0, menu_items_1.normalizeToFn)(option.options);
    }
    dispose() {
        // noop
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
    get options() {
        return this._options;
    }
    set options(options) {
        this._options = (0, menu_items_1.normalizeToFn)(options);
    }
    clone() {
        return new InlineMenuEditor(this);
    }
    onChangeDisabledInternal() {
        // cancel input
        detachMenu(true);
    }
    onChangeReadOnlyInternal() {
        // cancel input
        detachMenu(true);
    }
    bindGridEvent(grid, cellId) {
        const open = (cell) => {
            if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
                (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
                return false;
            }
            grid.doGetCellValue(cell.col, cell.row, (value) => {
                const record = grid.getRowRecord(cell.row);
                if ((0, utils_1.isPromise)(record)) {
                    return;
                }
                attachMenu(grid, cell, this, value, record);
            });
            return true;
        };
        function isTarget(col, row) {
            return grid.getLayoutCellId(col, row) === cellId;
        }
        return [
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL, (cell) => {
                if (!isTarget(cell.col, cell.row)) {
                    return;
                }
                open({
                    col: cell.col,
                    row: cell.row,
                });
            }),
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, (e) => {
                if (e.keyCode !== KEY_F2 && e.keyCode !== KEY_ENTER) {
                    return;
                }
                const sel = grid.selection.select;
                if (!isTarget(sel.col, sel.row)) {
                    return;
                }
                if (open({
                    col: sel.col,
                    row: sel.row,
                })) {
                    e.stopCellMoving();
                }
            }),
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, (_e) => {
                detachMenu();
            }),
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SCROLL, () => {
                detachMenu(true);
            }),
            // mouse move
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOVER_CELL, (e) => {
                if (!isTarget(e.col, e.row)) {
                    return;
                }
                if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, e.row) ||
                    (0, action_utils_1.isDisabledRecord)(this.disabled, grid, e.row)) {
                    return;
                }
                grid.getElement().style.cursor = "pointer";
            }),
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, (e) => {
                if (!isTarget(e.col, e.row)) {
                    return;
                }
                if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, e.row) ||
                    (0, action_utils_1.isDisabledRecord)(this.disabled, grid, e.row)) {
                    return;
                }
                if (!grid.getElement().style.cursor) {
                    grid.getElement().style.cursor = "pointer";
                }
            }),
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOUT_CELL, (e) => {
                if (!isTarget(e.col, e.row)) {
                    return;
                }
                grid.getElement().style.cursor = "";
            }),
            // paste value
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, (e) => {
                if (e.multi) {
                    // ignore multi cell values
                    return;
                }
                const selectionRange = grid.selection.range;
                if (!(0, utils_1.cellEquals)(selectionRange.start, selectionRange.end)) {
                    // ignore multi paste values
                    return;
                }
                if (!isTarget(e.col, e.row)) {
                    return;
                }
                if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, e.row) ||
                    (0, action_utils_1.isDisabledRecord)(this.disabled, grid, e.row)) {
                    return;
                }
                const record = grid.getRowRecord(e.row);
                if ((0, utils_1.isPromise)(record)) {
                    return;
                }
                const pasteOpt = this._pasteDataToOptionValue(e.normalizeValue, grid, e, record);
                if (pasteOpt) {
                    utils_1.event.cancel(e.event);
                    (0, utils_1.then)(grid.doChangeValue(e.col, e.row, () => pasteOpt.value), () => {
                        const range = grid.getCellRange(e.col, e.row);
                        grid.invalidateCellRange(range);
                    });
                }
                else {
                    grid.fireListeners("rejected_paste_values", {
                        detail: [
                            {
                                col: e.col,
                                row: e.row,
                                record,
                                define: grid.getColumnDefine(e.col, e.row),
                                pasteValue: e.normalizeValue,
                            },
                        ],
                    });
                }
            }),
        ];
    }
    onPasteCellRangeBox(grid, cell, value, context) {
        if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
            (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
            return;
        }
        const record = grid.getRowRecord(cell.row);
        if ((0, utils_1.isPromise)(record)) {
            return;
        }
        const pasteOpt = this._pasteDataToOptionValue(value, grid, cell, record);
        if (pasteOpt) {
            grid.doChangeValue(cell.col, cell.row, () => pasteOpt.value);
        }
        else {
            // unknown
            context.reject();
        }
    }
    onDeleteCellRangeBox(grid, cell) {
        if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
            (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
            return;
        }
        const record = grid.getRowRecord(cell.row);
        if ((0, utils_1.isPromise)(record)) {
            return;
        }
        const pasteOpt = this._pasteDataToOptionValue("", grid, cell, record);
        if (pasteOpt) {
            grid.doChangeValue(cell.col, cell.row, () => pasteOpt.value);
        }
    }
    _pasteDataToOptionValue(value, grid, cell, record) {
        const options = this._options(record);
        const pasteOpt = _textToOptionValue(value, options);
        if (pasteOpt) {
            return pasteOpt;
        }
        const columnType = grid.getColumnType(cell.col, cell.row);
        if (hasOptions(columnType)) {
            // Find with caption.
            const pasteValue = normalizePasteValueStr(value);
            const captionOpt = utils_1.array.find(columnType.options, (opt) => normalizePasteValueStr(opt.label) === pasteValue);
            if (captionOpt) {
                return _textToOptionValue(captionOpt.value, options);
            }
        }
        return undefined;
    }
}
exports.InlineMenuEditor = InlineMenuEditor;
function _textToOptionValue(value, options) {
    const pasteValue = normalizePasteValueStr(value);
    const pasteOpt = utils_1.array.find(options, (opt) => normalizePasteValueStr(opt.value) === pasteValue);
    if (pasteOpt) {
        return pasteOpt;
    }
    return undefined;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizePasteValueStr(value) {
    if (value == null) {
        return "";
    }
    return `${value}`.trim();
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hasOptions(columnType) {
    if (columnType instanceof type_1.MenuColumn) {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (Array.isArray(columnType.options)) {
        return true;
    }
    return false;
}
