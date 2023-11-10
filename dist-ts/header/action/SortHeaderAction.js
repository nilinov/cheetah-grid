"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortHeaderAction = void 0;
const BaseAction_1 = require("./BaseAction");
const actionBind_1 = require("./actionBind");
class SortHeaderAction extends BaseAction_1.BaseAction {
    constructor(option = {}) {
        var _a;
        super(option);
        this._sort = (_a = option.sort) !== null && _a !== void 0 ? _a : true;
    }
    get sort() {
        return this._sort;
    }
    set sort(sort) {
        this._sort = sort;
        this.onChangeDisabledInternal();
    }
    clone() {
        return new SortHeaderAction(this);
    }
    _executeSort(newState, grid) {
        if (typeof this._sort === "function") {
            this._sort({
                order: newState.order || "asc",
                col: newState.col,
                row: newState.row,
                grid,
            });
        }
        else if (typeof this._sort === "string" &&
            // v1.6.3 Backward compatibility
            (this._sort !== "true" || hasTrueField(grid))) {
            const field = this._sort;
            grid.dataSource.sort(field, newState.order || "asc");
        }
        else {
            const fieldRow = Math.min(grid.recordRowCount - 1, newState.row) + grid.frozenRowCount;
            const field = grid.getField(newState.col, fieldRow);
            if (field == null) {
                return;
            }
            grid.dataSource.sort(field, newState.order || "asc");
        }
    }
    bindGridEvent(grid, cellId) {
        function isTarget(col, row) {
            return grid.getLayoutCellId(col, row) === cellId;
        }
        const action = (cell) => {
            if (this.disabled) {
                return;
            }
            const state = grid.sortState;
            let newState;
            const range = grid.getCellRange(cell.col, cell.row);
            if (isTarget(state.col, cell.row)) {
                newState = {
                    col: range.start.col,
                    row: range.start.row,
                    order: state.order === "asc" ? "desc" : "asc",
                };
            }
            else {
                newState = {
                    col: range.start.col,
                    row: range.start.row,
                    order: "asc",
                };
            }
            grid.sortState = newState;
            this._executeSort(newState, grid);
            grid.invalidateGridRect(0, 0, grid.colCount - 1, grid.rowCount - 1);
        };
        return [
            ...(0, actionBind_1.bindCellClickAction)(grid, cellId, {
                action,
                mouseOver: (_e) => {
                    if (this.disabled) {
                        return false;
                    }
                    return true;
                },
            }),
        ];
    }
}
exports.SortHeaderAction = SortHeaderAction;
function hasTrueField(grid) {
    if (grid.dataSource.length > 0) {
        const record = grid.dataSource.get(0);
        return record != null && "true" in record;
    }
    return false;
}
