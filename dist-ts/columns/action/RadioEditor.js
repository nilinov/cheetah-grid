"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioEditor = void 0;
const actionBind_1 = require("./actionBind");
const utils_1 = require("../../internal/utils");
const action_utils_1 = require("./action-utils");
const DG_EVENT_TYPE_1 = require("../../core/DG_EVENT_TYPE");
const Editor_1 = require("./Editor");
const animate_1 = require("../../internal/animate");
const symbolManager_1 = require("../../internal/symbolManager");
const utils_2 = require("../utils");
const RADIO_COLUMN_STATE_ID = (0, symbolManager_1.getRadioColumnStateId)();
class RadioEditor extends Editor_1.Editor {
    constructor(option = {}) {
        super(option);
        this._group = option.group;
        this._checkAction = option.checkAction;
    }
    clone() {
        return new RadioEditor(this);
    }
    /** @deprecated Use checkAction instead. */
    get group() {
        return this._group;
    }
    /** @deprecated Use checkAction instead. */
    set group(group) {
        this._group = group;
    }
    get checkAction() {
        return this._checkAction;
    }
    set checkAction(checkAction) {
        this._checkAction = checkAction;
    }
    bindGridEvent(grid, cellId) {
        let _state = grid[RADIO_COLUMN_STATE_ID];
        if (!_state) {
            _state = { block: {}, elapsed: {} };
            utils_1.obj.setReadonly(grid, RADIO_COLUMN_STATE_ID, _state);
        }
        const state = _state;
        const action = (cell) => {
            this._action(grid, cell);
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
                action,
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
                if (isRejectValue(pasteValue)) {
                    // Not a boolean
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
                    return;
                }
                if (!(0, utils_2.toBoolean)(pasteValue)) {
                    return;
                }
                action({
                    col: e.col,
                    row: e.row,
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
        if (isRejectValue(pasteValue)) {
            // Not a boolean
            context.reject();
            return;
        }
        if (!(0, utils_2.toBoolean)(pasteValue)) {
            return;
        }
        this._action(grid, {
            col: cell.col,
            row: cell.row,
        });
    }
    onDeleteCellRangeBox() {
        // noop
    }
    _action(grid, cell) {
        const state = grid[RADIO_COLUMN_STATE_ID];
        const range = grid.getCellRange(cell.col, cell.row);
        const cellKey = `${range.start.col}:${range.start.row}`;
        if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
            (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row) ||
            state.block[cellKey]) {
            return;
        }
        grid.doGetCellValue(cell.col, cell.row, (value) => {
            if ((0, utils_2.toBoolean)(value)) {
                return;
            }
            if (this._checkAction) {
                // User behavior
                const record = grid.getRowRecord(cell.row);
                this._checkAction(record, (0, utils_1.extend)(cell, { grid }));
                return;
            }
            if (this._group) {
                // Backward compatibility
                const state = grid[RADIO_COLUMN_STATE_ID];
                const targets = this._group({ grid, col: cell.col, row: cell.row });
                targets.forEach(({ col, row }) => {
                    const range = grid.getCellRange(col, row);
                    const cellKey = `${range.start.col}:${range.start.row}`;
                    if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
                        (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row) ||
                        state.block[cellKey]) {
                        return;
                    }
                    actionCell(grid, col, row, col === cell.col && row === cell.row);
                });
                return;
            }
            // default behavior
            const field = grid.getField(cell.col, cell.row);
            const recordStartRow = grid.getRecordStartRowByRecordIndex(grid.getRecordIndexByRow(cell.row));
            /** Original DataSource */
            const { dataSource } = grid.dataSource;
            const girdRecords = getAllRecordsFromGrid(grid);
            for (let index = 0; index < dataSource.length; index++) {
                const record = dataSource.get(index);
                const showData = girdRecords.find((d) => d.record === record);
                if (showData) {
                    actionCell(grid, cell.col, showData.row, showData.row === recordStartRow);
                }
                else {
                    // Hidden record
                    (0, utils_1.then)(dataSource.getField(index, field), (value) => {
                        if (!(0, utils_2.toBoolean)(value)) {
                            return;
                        }
                        dataSource.setField(index, field, (0, action_utils_1.toggleValue)(value));
                    });
                }
            }
        });
    }
}
exports.RadioEditor = RadioEditor;
function getAllRecordsFromGrid(grid) {
    const result = [];
    const { rowCount, recordRowCount } = grid;
    for (let targetRow = grid.frozenRowCount; targetRow < rowCount; targetRow += recordRowCount) {
        const record = grid.getRowRecord(targetRow);
        result.push({ row: targetRow, record });
    }
    return result;
}
function actionCell(grid, col, row, flag) {
    grid.doGetCellValue(col, row, (value) => {
        if ((0, utils_2.toBoolean)(value) === flag) {
            return;
        }
        const state = grid[RADIO_COLUMN_STATE_ID];
        const range = grid.getCellRange(col, row);
        const cellKey = `${range.start.col}:${range.start.row}`;
        const ret = grid.doChangeValue(col, row, action_utils_1.toggleValue);
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
    });
}
function isRejectValue(pasteValue) {
    return (0, action_utils_1.toggleValue)((0, action_utils_1.toggleValue)(pasteValue)) !== pasteValue;
}
