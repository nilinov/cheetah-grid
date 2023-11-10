"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageElement = void 0;
const EventHandler_1 = require("../../../internal/EventHandler");
const dom_1 = require("../../../internal/dom");
const CLASSNAME = "cheetah-grid__message-element";
const MESSAGE_CLASSNAME = `${CLASSNAME}__message`;
const HIDDEN_CLASSNAME = `${CLASSNAME}--hidden`;
const SHOWN_CLASSNAME = `${CLASSNAME}--shown`;
function createMessageDomElement() {
    require("@/columns/message/internal/MessageElement.css");
    const rootElement = (0, dom_1.createElement)("div", {
        classList: [CLASSNAME, HIDDEN_CLASSNAME],
    });
    const messageElement = (0, dom_1.createElement)("span", {
        classList: [MESSAGE_CLASSNAME],
    });
    rootElement.appendChild(messageElement);
    return rootElement;
}
class MessageElement {
    constructor() {
        this._handler = new EventHandler_1.EventHandler();
        const rootElement = (this._rootElement = createMessageDomElement());
        this._messageElement = rootElement.querySelector(`.${MESSAGE_CLASSNAME}`);
    }
    dispose() {
        this.detach();
        this._handler.dispose();
        // @ts-expect-error -- ignore
        delete this._rootElement;
        // @ts-expect-error -- ignore
        delete this._messageElement;
    }
    attach(grid, col, row, message) {
        const rootElement = this._rootElement;
        const messageElement = this._messageElement;
        rootElement.classList.remove(SHOWN_CLASSNAME);
        rootElement.classList.add(HIDDEN_CLASSNAME);
        if (this._attachCell(grid, col, row)) {
            rootElement.classList.add(SHOWN_CLASSNAME);
            rootElement.classList.remove(HIDDEN_CLASSNAME);
            messageElement.textContent = message.message;
        }
        else {
            this._detach();
        }
    }
    move(grid, col, row) {
        const rootElement = this._rootElement;
        if (this._attachCell(grid, col, row)) {
            rootElement.classList.add(SHOWN_CLASSNAME);
            rootElement.classList.remove(HIDDEN_CLASSNAME);
        }
        else {
            this._detach();
        }
    }
    detach() {
        this._detach();
    }
    _detach() {
        const rootElement = this._rootElement;
        if (rootElement.parentElement) {
            rootElement.parentElement.removeChild(rootElement);
            rootElement.classList.remove(SHOWN_CLASSNAME);
            rootElement.classList.add(HIDDEN_CLASSNAME);
        }
    }
    _attachCell(grid, col, row) {
        const rootElement = this._rootElement;
        const { element, rect } = grid.getAttachCellsArea(grid.getCellRange(col, row));
        const { bottom: top, left, width } = rect;
        const { frozenRowCount, frozenColCount } = grid;
        if (row >= frozenRowCount && frozenRowCount > 0) {
            const { rect: frozenRect } = grid.getAttachCellsArea(grid.getCellRange(col, frozenRowCount - 1));
            if (top < frozenRect.bottom) {
                return false; //範囲外
            }
        }
        else {
            if (top < 0) {
                return false; //範囲外
            }
        }
        if (col >= frozenColCount && frozenColCount > 0) {
            const { rect: frozenRect } = grid.getAttachCellsArea(grid.getCellRange(frozenColCount - 1, row));
            if (left < frozenRect.right) {
                return false; //範囲外
            }
        }
        else {
            if (left < 0) {
                return false; //範囲外
            }
        }
        const { offsetHeight, offsetWidth } = element;
        if (offsetHeight < top) {
            return false; //範囲外
        }
        if (offsetWidth < left) {
            return false; //範囲外
        }
        rootElement.style.top = `${top.toFixed()}px`;
        rootElement.style.left = `${left.toFixed()}px`;
        rootElement.style.width = `${width.toFixed()}px`;
        if (rootElement.parentElement !== element) {
            element.appendChild(rootElement);
        }
        return true;
    }
}
exports.MessageElement = MessageElement;
