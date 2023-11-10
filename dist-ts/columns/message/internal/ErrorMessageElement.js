"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessageElement = void 0;
const MessageElement_1 = require("./MessageElement");
const CLASSNAME = "cheetah-grid__error-message-element";
const MESSAGE_CLASSNAME = `${CLASSNAME}__message`;
class ErrorMessageElement extends MessageElement_1.MessageElement {
    constructor() {
        super();
        require("@/columns/message/internal/ErrorMessageElement.css");
        this._rootElement.classList.add(CLASSNAME);
        this._messageElement.classList.add(MESSAGE_CLASSNAME);
    }
}
exports.ErrorMessageElement = ErrorMessageElement;
