"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMessage = void 0;
class BaseMessage {
    constructor(grid) {
        this._messageElement = null;
        this._grid = grid;
    }
    dispose() {
        this.detachMessageElement();
        if (this._messageElement) {
            this._messageElement.dispose();
        }
        this._messageElement = null;
    }
    _getMessageElement() {
        return (this._messageElement ||
            (this._messageElement = this.createMessageElementInternal()));
    }
    attachMessageElement(col, row, message) {
        const messageElement = this._getMessageElement();
        messageElement.attach(this._grid, col, row, message);
    }
    moveMessageElement(col, row) {
        const messageElement = this._getMessageElement();
        messageElement.move(this._grid, col, row);
    }
    detachMessageElement() {
        const messageElement = this._getMessageElement();
        messageElement._detach();
    }
    drawCellMessage(message, context, style, helper, grid, info) {
        this.drawCellMessageInternal(message, context, style, helper, grid, info);
    }
}
exports.BaseMessage = BaseMessage;
