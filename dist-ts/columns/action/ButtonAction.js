"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonAction = void 0;
const Action_1 = require("./Action");
const symbolManager_1 = require("../../internal/symbolManager");
const utils_1 = require("../../internal/utils");
const BUTTON_COLUMN_STATE_ID = (0, symbolManager_1.getButtonColumnStateId)();
class ButtonAction extends Action_1.Action {
    getState(grid) {
        let state = grid[BUTTON_COLUMN_STATE_ID];
        if (!state) {
            state = {};
            utils_1.obj.setReadonly(grid, BUTTON_COLUMN_STATE_ID, state);
        }
        return state;
    }
}
exports.ButtonAction = ButtonAction;
