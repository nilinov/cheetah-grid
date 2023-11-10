"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ofCell = exports.of = exports.CheckHeaderAction = exports.SortHeaderAction = exports.BaseAction = exports.ACTIONS = void 0;
const BaseAction_1 = require("./action/BaseAction");
Object.defineProperty(exports, "BaseAction", { enumerable: true, get: function () { return BaseAction_1.BaseAction; } });
const CheckHeaderAction_1 = require("./action/CheckHeaderAction");
Object.defineProperty(exports, "CheckHeaderAction", { enumerable: true, get: function () { return CheckHeaderAction_1.CheckHeaderAction; } });
const SortHeaderAction_1 = require("./action/SortHeaderAction");
Object.defineProperty(exports, "SortHeaderAction", { enumerable: true, get: function () { return SortHeaderAction_1.SortHeaderAction; } });
class ImmutableSortHeaderAction extends SortHeaderAction_1.SortHeaderAction {
    get disabled() {
        return this._disabled;
    }
}
class ImmutableCheckHeaderAction extends CheckHeaderAction_1.CheckHeaderAction {
    get disabled() {
        return this._disabled;
    }
}
exports.ACTIONS = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SORT: new ImmutableSortHeaderAction(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CHECK: new ImmutableCheckHeaderAction(),
};
function of(headerAction) {
    if (!headerAction) {
        return undefined;
    }
    else if (typeof headerAction === "string") {
        const key = headerAction.toUpperCase();
        return exports.ACTIONS[key] || of(null);
    }
    else {
        return headerAction;
    }
}
exports.of = of;
function ofCell(headerCell) {
    if (headerCell.sort) {
        if (typeof headerCell.sort === "function") {
            const sortMethod = headerCell.sort;
            // 0.9.0 Backward compatibility
            const sort = ({ order, col, grid }) => sortMethod.call(headerCell, order, col, grid);
            return new ImmutableSortHeaderAction({ sort });
        }
        if (typeof headerCell.sort === "string") {
            return new ImmutableSortHeaderAction({ sort: headerCell.sort });
        }
        return exports.ACTIONS.SORT;
    }
    return of(headerCell.headerAction);
}
exports.ofCell = ofCell;
