"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LG_EVENT_TYPE = void 0;
const DG_EVENT_TYPE_1 = require("../core/DG_EVENT_TYPE");
const utils_1 = require("../internal/utils");
exports.LG_EVENT_TYPE = (0, utils_1.extend)(DG_EVENT_TYPE_1.DG_EVENT_TYPE, {
    BEFORE_CHANGE_VALUE: "before_change_value",
    CHANGED_VALUE: "changed_value",
    CHANGED_HEADER_VALUE: "changed_header_value",
    REJECTED_PASTE_VALUES: "rejected_paste_values",
});
