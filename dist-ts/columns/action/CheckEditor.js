"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckEditor = void 0;
const actionBind_1 = require("./actionBind");
const utils_1 = require("../../internal/utils");
const action_utils_1 = require("./action-utils");
const DG_EVENT_TYPE_1 = require("../../core/DG_EVENT_TYPE");
const Editor_1 = require("./Editor");
const animate_1 = require("../../internal/animate");
const symbolManager_1 = require("../../internal/symbolManager");
const CHECK_COLUMN_STATE_ID = (0, symbolManager_1.getCheckColumnStateId)();
class CheckEditor extends Editor_1.Editor {
    clone() {
        return new CheckEditor(this);
    }
    bindGridEvent(grid, cellId) {
        let _state = grid[CHECK_COLUMN_STATE_ID];
        if (!_state) {
            _state = { block: {}, elapsed: {} };
            utils_1.obj.setReadonly(grid, CHECK_COLUMN_STATE_ID, _state);
        }
        const state = _state;
        const action = (cell) => {
            const range = grid.getCellRange(cell.col, cell.row);
            const cellKey = `${range.start.col}:${range.start.row}`;
            if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
                (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row) ||
                state.block[cellKey]) {
                return;
            }
            const ret = grid.doChangeValue(cell.col, cell.row, action_utils_1.toggleValue);
            if (ret) {
                const onChange = () => {
                    // checkbox animation
                    (0, animate_1.animate)(200, (point) => {
                        if (point === 1) {
                            delete state.elapsed[cellKey];
                        }
                        else {
                            state.elapsed[cellKey] = point;
                        }
                        grid.invalidateCellRange(range);
                    });
                };
                if ((0, utils_1.isPromise)(ret)) {
                    state.block[cellKey] = true;
                    ret.then(() => {
                        delete state.block[cellKey];
                        onChange();
                    });
                }
                else {
                    onChange();
                }
            }
        };
        function isTarget(col, row) {
            return grid.getLayoutCellId(col, row) === cellId;
        }
        return [
            ...(0, actionBind_1.bindCellClickAction)(grid, cellId, {
                action,
                mouseOver: (e) => {
                    if ((0, action_utils_1.isDisabledRecord)(this.disabled, grid, e.row)) {
                        return false;
                    }
                    state.mouseActiveCell = {
                        col: e.col,
                        row: e.row,
                    };
                    const range = grid.getCellRange(e.col, e.row);
                    grid.invalidateCellRange(range);
                    return true;
                },
                mouseOut: (e) => {
                    delete state.mouseActiveCell;
                    const range = grid.getCellRange(e.col, e.row);
                    grid.invalidateCellRange(range);
                },
            }),
            ...(0, actionBind_1.bindCellKeyAction)(grid, cellId, {
                action: (_e) => {
                    const selrange = grid.selection.range;
                    const { col } = grid.selection.select;
                    for (let { row } = selrange.start; row <= selrange.end.row; row++) {
                        if (!isTarget(col, row)) {
                            continue;
                        }
                        action({
                            col,
                            row,
                        });
                    }
                },
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
                utils_1.event.cancel(e.event);
                const pasteValue = e.normalizeValue.trim();
                grid.doGetCellValue(e.col, e.row, (value) => {
                    const newValue = (0, action_utils_1.toggleValue)(value);
                    if (`${newValue}`.trim() === pasteValue) {
                        action({
                            col: e.col,
                            row: e.row,
                        });
                    }
                    else if (isRejectValue(value, pasteValue)) {
                        const record = grid.getRowRecord(e.row);
                        if (!(0, utils_1.isPromise)(record)) {
                            grid.fireListeners("rejected_paste_values", {
                                detail: [
                                    {
                                        col: e.col,
                                        row: e.row,
                                        record,
                                        define: grid.getColumnDefine(e.col, e.row),
                                        pasteValue,
                                    },
                                ],
                            });
                        }
                    }
                });
            }),
        ];
    }
    onPasteCellRangeBox(grid, cell, value, context) {
        if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
            (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
            return;
        }
        const pasteValue = value.trim();
        grid.doGetCellValue(cell.col, cell.row, (value) => {
            const newValue = (0, action_utils_1.toggleValue)(value);
            if (`${newValue}`.trim() === pasteValue) {
                grid.doChangeValue(cell.col, cell.row, action_utils_1.toggleValue);
            }
            else if (isRejectValue(value, pasteValue)) {
                context.reject();
            }
        });
    }
    onDeleteCellRangeBox() {
        // noop
    }
}
exports.CheckEditor = CheckEditor;
function isRejectValue(oldValue, pasteValue) {
    if ((oldValue != null ? `${oldValue}`.trim() : "") === pasteValue) {
        return false;
    }
    const newValue = (0, action_utils_1.toggleValue)(oldValue);
    return (`${newValue}`.trim() !== pasteValue &&
        `${(0, action_utils_1.toggleValue)(newValue)}`.trim() !== pasteValue);
}
