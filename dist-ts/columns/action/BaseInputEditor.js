"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseInputEditor = void 0;
const utils_1 = require("../../internal/utils");
const action_utils_1 = require("./action-utils");
const DG_EVENT_TYPE_1 = require("../../core/DG_EVENT_TYPE");
const Editor_1 = require("./Editor");
const KEY_ENTER = 13;
const KEY_F2 = 113;
class BaseInputEditor extends Editor_1.Editor {
    constructor(option = {}) {
        super(option);
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
        const input = (cell, value) => {
            if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
                (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
                return;
            }
            this.onInputCellInternal(grid, cell, value);
        };
        function isTarget(col, row) {
            return grid.getLayoutCellId(col, row) === cellId;
        }
        return [
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.INPUT_CELL, (e) => {
                if (!isTarget(e.col, e.row)) {
                    return;
                }
                input({
                    col: e.col,
                    row: e.row,
                }, e.value);
            }),
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
                input({
                    col: e.col,
                    row: e.row,
                }, e.normalizeValue);
            }),
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLCLICK_CELL, (cell) => {
                if (!isTarget(cell.col, cell.row)) {
                    return;
                }
                open({
                    col: cell.col,
                    row: cell.row,
                });
            }),
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLTAP_CELL, (e) => {
                if (!isTarget(e.col, e.row)) {
                    return;
                }
                open({
                    col: e.col,
                    row: e.row,
                });
                utils_1.event.cancel(e.event);
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
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, (e) => {
                this.onChangeSelectCellInternal(grid, { col: e.col, row: e.row }, e.selected);
            }),
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SCROLL, () => {
                this.onGridScrollInternal(grid);
            }),
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.EDITABLEINPUT_CELL, (cell) => {
                if (!isTarget(cell.col, cell.row)) {
                    return false;
                }
                if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
                    (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
                    return false;
                }
                return true;
            }),
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MODIFY_STATUS_EDITABLEINPUT_CELL, (cell) => {
                if (!isTarget(cell.col, cell.row)) {
                    return;
                }
                if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
                    (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
                    return;
                }
                const range = grid.getCellRange(cell.col, cell.row);
                if (range.start.col !== range.end.col ||
                    range.start.row !== range.end.row) {
                    const { input } = cell;
                    const baseRect = grid.getCellRect(cell.col, cell.row);
                    const rangeRect = grid.getCellRangeRect(range);
                    input.style.top = `${(parseFloat(input.style.top) +
                        (rangeRect.top - baseRect.top)).toFixed()}px`;
                    input.style.left = `${(parseFloat(input.style.left) +
                        (rangeRect.left - baseRect.left)).toFixed()}px`;
                    input.style.width = `${rangeRect.width.toFixed()}px`;
                    input.style.height = `${rangeRect.height.toFixed()}px`;
                }
                this.onSetInputAttrsInternal(grid, {
                    col: cell.col,
                    row: cell.row,
                }, cell.input);
            }),
        ];
    }
    onPasteCellRangeBox(grid, cell, value) {
        if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
            (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
            return;
        }
        grid.doChangeValue(cell.col, cell.row, () => {
            if (this.isSupportMultilineValue()) {
                return value;
            }
            return value.replace(/\r?\n/g, " ");
        });
    }
    onDeleteCellRangeBox(grid, cell) {
        if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) ||
            (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
            return;
        }
        grid.doChangeValue(cell.col, cell.row, () => "");
    }
    isSupportMultilineValue() {
        return false;
    }
}
exports.BaseInputEditor = BaseInputEditor;
