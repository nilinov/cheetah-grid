"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningMessageElement = void 0;
const MessageElement_1 = require("./MessageElement");
const CLASSNAME = "cheetah-grid__warning-message-element";
const MESSAGE_CLASSNAME = `${CLASSNAME}__message`;
class WarningMessageElement extends MessageElement_1.MessageElement {
    constructor() {
        super();
        require("@/columns/message/internal/WarningMessageElement.css");
        this._rootElement.classList.add(CLASSNAME);
        this._messageElement.classList.add(MESSAGE_CLASSNAME);
    }
}
exports.WarningMessageElement = WarningMessageElement;
