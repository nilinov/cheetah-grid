"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
const actionBind_1 = require("./actionBind");
const BaseAction_1 = require("./BaseAction");
const utils_1 = require("../../internal/utils");
const action_utils_1 = require("./action-utils");
class Action extends BaseAction_1.BaseAction {
    constructor(option = {}) {
        super(option);
        this._action = option.action || (() => { });
    }
    get editable() {
        return false;
    }
    get action() {
        return this._action;
    }
    set action(action) {
        this._action = action;
    }
    clone() {
        return new Action(this);
    }
    getState(_grid) {
        return {};
    }
    bindGridEvent(grid, cellId) {
        const state = this.getState(grid);
        const action = (cell) => {
            if ((0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
                return;
            }
            const record = grid.getRowRecord(cell.row);
            this._action(record, (0, utils_1.extend)(cell, { grid }));
        };
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
        ];
    }
    onPasteCellRangeBox() {
        // noop
    }
    onDeleteCellRangeBox() {
        // noop
    }
}
exports.Action = Action;
