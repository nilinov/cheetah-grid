"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const BaseTooltip_1 = require("./BaseTooltip");
const TooltipElement_1 = require("./internal/TooltipElement");
class Tooltip extends BaseTooltip_1.BaseTooltip {
    createTooltipElementInternal() {
        return new TooltipElement_1.TooltipElement();
    }
}
exports.Tooltip = Tooltip;
