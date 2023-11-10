"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipHandler = void 0;
const LG_EVENT_TYPE_1 = require("../list-grid/LG_EVENT_TYPE");
const Tooltip_1 = require("./Tooltip");
const utils_1 = require("../internal/utils");
const TOOLTIP_INSTANCE_FACTORY = {
    "overflow-text"(grid) {
        return new Tooltip_1.Tooltip(grid);
    },
};
function getTooltipInstanceInfo(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
grid, col, row) {
    //
    // overflow text tooltip
    const overflowText = grid.getCellOverflowText(col, row);
    if (overflowText) {
        return {
            type: "overflow-text",
            content: overflowText,
        };
    }
    return null;
}
class TooltipHandler {
    constructor(grid) {
        this._grid = grid;
        this._tooltipInstances = {};
        this._bindGridEvent(grid);
    }
    dispose() {
        const tooltipInstances = this._tooltipInstances;
        for (const k in tooltipInstances) {
            tooltipInstances[k].dispose();
        }
        // @ts-expect-error -- ignore
        delete this._tooltipInstances;
        this._attachInfo = null;
    }
    _attach(col, row) {
        const info = this._attachInfo;
        const instanceInfo = this._getTooltipInstanceInfo(col, row);
        if (info && (!instanceInfo || info.instance !== instanceInfo.instance)) {
            info.instance.detachTooltipElement();
            this._attachInfo = null;
        }
        if (!instanceInfo) {
            return;
        }
        const { instance } = instanceInfo;
        instance.attachTooltipElement(col, row, instanceInfo.content);
        const range = this._grid.getCellRange(col, row);
        this._attachInfo = { range, instance };
    }
    _move(col, row) {
        const info = this._attachInfo;
        if (!info || !(0, utils_1.cellInRange)(info.range, col, row)) {
            return;
        }
        const { instance } = info;
        instance.moveTooltipElement(col, row);
    }
    _detach() {
        const info = this._attachInfo;
        if (!info) {
            return;
        }
        const { instance } = info;
        instance.detachTooltipElement();
        this._attachInfo = null;
    }
    _isAttachCell(col, row) {
        const info = this._attachInfo;
        if (!info) {
            return false;
        }
        return (0, utils_1.cellInRange)(info.range, col, row);
    }
    _bindGridEvent(grid) {
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.MOUSEOVER_CELL, (e) => {
            if (e.related) {
                if (this._isAttachCell(e.col, e.row)) {
                    return;
                }
            }
            this._attach(e.col, e.row);
        });
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.MOUSEOUT_CELL, (e) => {
            if (e.related) {
                if (this._isAttachCell(e.related.col, e.related.row)) {
                    return;
                }
            }
            this._detach();
        });
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SELECTED_CELL, (e) => {
            if (this._isAttachCell(e.col, e.row)) {
                this._detach();
            }
        });
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SCROLL, () => {
            const info = this._attachInfo;
            if (!info) {
                return;
            }
            this._move(info.range.start.col, info.range.start.row);
        });
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_VALUE, (e) => {
            if (this._isAttachCell(e.col, e.row)) {
                this._detach();
                this._attach(e.col, e.row);
            }
        });
    }
    _getTooltipInstanceInfo(col, row) {
        const grid = this._grid;
        const tooltipInstances = this._tooltipInstances;
        const info = getTooltipInstanceInfo(grid, col, row);
        if (!info) {
            return null;
        }
        const { type } = info;
        const instance = tooltipInstances[type] ||
            (tooltipInstances[type] = TOOLTIP_INSTANCE_FACTORY[type](grid));
        return {
            instance,
            type,
            content: info.content,
        };
    }
}
exports.TooltipHandler = TooltipHandler;
