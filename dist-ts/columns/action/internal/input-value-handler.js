"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInputValue = void 0;
const EventHandler_1 = require("../../../internal/EventHandler");
function setInputValue(input, value) {
    const sign = input.type === "number" && value === "-";
    if (sign) {
        // When `type="number"`, the minus sign is not accepted, so change it to `type="text"` once.
        input.type = "";
        let handler = new EventHandler_1.EventHandler();
        const dispose = () => {
            if (handler) {
                handler.dispose();
                handler = null;
            }
        };
        handler.once(input, "input", (_e) => {
            input.type = "number";
            dispose();
        });
        handler.once(input, "blur", (_e) => {
            dispose();
        });
    }
    input.value = value !== null && value !== void 0 ? value : "";
}
exports.setInputValue = setInputValue;
