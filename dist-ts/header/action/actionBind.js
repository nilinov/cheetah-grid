"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindCellKeyAction = exports.bindCellClickAction = void 0;
const DG_EVENT_TYPE_1 = require("../../core/DG_EVENT_TYPE");
const utils_1 = require("../../internal/utils");
const KEY_ENTER = 13;
const KEY_SPACE = 32;
function bindCellClickAction(grid, cellId, { action, mouseOver, mouseOut, }) {
    function isTarget(col, row) {
        return grid.getLayoutCellId(col, row) === cellId;
    }
    let inMouse;
    return [
        // click
        grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL, (e) => {
            if (!isTarget(e.col, e.row)) {
                return;
            }
            action({
                col: e.col,
                row: e.row,
            });
        }),
        // mouse move
        grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOVER_CELL, (e) => {
            if (!isTarget(e.col, e.row)) {
                return;
            }
            if (mouseOver) {
                if (!mouseOver({
                    col: e.col,
                    row: e.row,
                })) {
                    return;
                }
            }
            grid.getElement().style.cursor = "pointer";
            inMouse = true;
        }),
        //横からMOUSEENTERした場合、'col-resize'の処理と競合するのでmoveを監視して処理する
        grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, (e) => {
            if (!isTarget(e.col, e.row)) {
                return;
            }
            if (inMouse && !grid.getElement().style.cursor) {
                grid.getElement().style.cursor = "pointer";
            }
        }),
        grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOUT_CELL, (e) => {
            if (!isTarget(e.col, e.row)) {
                return;
            }
            if (mouseOut) {
                mouseOut({
                    col: e.col,
                    row: e.row,
                });
            }
            grid.getElement().style.cursor = "";
            inMouse = false;
        }),
    ];
}
exports.bindCellClickAction = bindCellClickAction;
function bindCellKeyAction(grid, cellId, { action, acceptKeys = [], }) {
    function isTarget(col, row) {
        return grid.getLayoutCellId(col, row) === cellId;
    }
    acceptKeys = [...acceptKeys, KEY_ENTER, KEY_SPACE];
    return [
        // enter key down
        grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, (e) => {
            var _a;
            if (acceptKeys.indexOf(e.keyCode) === -1) {
                return;
            }
            if (((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) && e.keyCode === KEY_ENTER) {
                // When moving with the enter key, no action is taken with the enter key.
                return;
            }
            const sel = grid.selection.select;
            if (!isTarget(sel.col, sel.row)) {
                return;
            }
            action({
                col: sel.col,
                row: sel.row,
            });
            utils_1.event.cancel(e.event);
        }),
    ];
}
exports.bindCellKeyAction = bindCellKeyAction;
