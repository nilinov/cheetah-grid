"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckHeaderAction = void 0;
const actionBind_1 = require("./actionBind");
const BaseAction_1 = require("./BaseAction");
const animate_1 = require("../../internal/animate");
const symbolManager_1 = require("../../internal/symbolManager");
const utils_1 = require("../../internal/utils");
const CHECK_HEADER_STATE_ID = (0, symbolManager_1.getCheckHeaderStateId)();
function getState(grid) {
    let state = grid[CHECK_HEADER_STATE_ID];
    if (!state) {
        state = { elapsed: {}, block: {} };
        utils_1.obj.setReadonly(grid, CHECK_HEADER_STATE_ID, state);
    }
    return state;
}
class CheckHeaderAction extends BaseAction_1.BaseAction {
    clone() {
        return new CheckHeaderAction(this);
    }
    bindGridEvent(grid, cellId) {
        const state = getState(grid);
        const action = ({ col, row }) => {
            const range = grid.getCellRange(col, row);
            const cellKey = `${range.start.col}:${range.start.row}`;
            if (this.disabled || state.block[cellKey]) {
                return;
            }
            const checked = grid.getHeaderValue(range.start.col, range.start.row);
            grid.setHeaderValue(range.start.col, range.start.row, !checked);
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
            onChange();
        };
        return [
            ...(0, actionBind_1.bindCellClickAction)(grid, cellId, {
                action,
                mouseOver: (e) => {
                    if (this.disabled) {
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
        ];
    }
}
exports.CheckHeaderAction = CheckHeaderAction;
