"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineInputElement = void 0;
const EventHandler_1 = require("../../../internal/EventHandler");
const dom_1 = require("../../../internal/dom");
const utils_1 = require("../../../internal/utils");
const input_value_handler_1 = require("./input-value-handler");
const KEY_TAB = 9;
const KEY_ENTER = 13;
const CLASSNAME = "cheetah-grid__inline-input";
function createInputElement() {
    require("@/columns/action/internal/InlineInputElement.css");
    return (0, dom_1.createElement)("input", { classList: CLASSNAME });
}
function setInputAttrs(editor, _grid, input) {
    const { classList, type } = editor;
    if (classList) {
        input.classList.add(...classList);
    }
    input.type = type || "";
}
class InlineInputElement {
    static setInputAttrs(editor, grid, input) {
        setInputAttrs(editor, grid, input);
    }
    constructor() {
        this._handler = new EventHandler_1.EventHandler();
        this._input = createInputElement();
        this._bindInputEvents();
    }
    dispose() {
        var _a;
        const input = this._input;
        this.detach();
        this._handler.dispose();
        // @ts-expect-error -- ignore
        delete this._input;
        this._beforePropEditor = null;
        (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    }
    attach(grid, editor, col, row, value) {
        const input = this._input;
        const handler = this._handler;
        if (this._beforePropEditor) {
            const { classList } = this._beforePropEditor;
            if (classList) {
                input.classList.remove(...classList);
            }
        }
        input.style.font = grid.font || "16px sans-serif";
        const { element, rect } = grid.getAttachCellsArea(grid.getCellRange(col, row));
        input.style.top = `${rect.top.toFixed()}px`;
        input.style.left = `${rect.left.toFixed()}px`;
        input.style.width = `${rect.width.toFixed()}px`;
        input.style.height = `${rect.height.toFixed()}px`;
        element.appendChild(input);
        setInputAttrs(editor, grid, input);
        (0, input_value_handler_1.setInputValue)(input, value);
        this._activeData = { grid, col, row, editor };
        this._beforePropEditor = editor;
        const focus = () => {
            input.focus();
            const end = input.value.length;
            try {
                if (typeof input.selectionStart !== "undefined") {
                    input.selectionStart = end;
                    input.selectionEnd = end;
                    return;
                }
            }
            catch (e) {
                //ignore
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (document.selection) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const range = input.createTextRange();
                range.collapse();
                range.moveEnd("character", end);
                range.moveStart("character", end);
                range.select();
            }
        };
        handler.tryWithOffEvents(input, "blur", () => {
            focus();
        });
        this._attaching = true;
        setTimeout(() => {
            delete this._attaching;
        });
    }
    detach(gridFocus) {
        if (this._isActive()) {
            const { grid, col, row } = this._activeData;
            const input = this._input;
            this._handler.tryWithOffEvents(input, "blur", () => {
                var _a;
                (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(input);
            });
            const range = grid.getCellRange(col, row);
            grid.invalidateCellRange(range);
            if (gridFocus) {
                grid.focus();
            }
        }
        this._activeData = null;
    }
    doChangeValue() {
        if (!this._isActive()) {
            return;
        }
        const input = this._input;
        const { value } = input;
        const { grid, col, row } = this._activeData;
        grid.doChangeValue(col, row, () => value);
    }
    _isActive() {
        const input = this._input;
        if (!input || !input.parentElement) {
            return false;
        }
        if (!this._activeData) {
            return false;
        }
        return true;
    }
    _bindInputEvents() {
        const handler = this._handler;
        const input = this._input;
        const stopPropagationOnly = (e) => e.stopPropagation(); // gridにイベントが伝播しないように
        handler.on(input, "click", stopPropagationOnly);
        handler.on(input, "mousedown", stopPropagationOnly);
        handler.on(input, "touchstart", stopPropagationOnly);
        handler.on(input, "dblclick", stopPropagationOnly);
        handler.on(input, "compositionstart", (_e) => {
            input.classList.add("composition");
        });
        handler.on(input, "compositionend", (_e) => {
            input.classList.remove("composition");
        });
        handler.on(input, "keydown", (e) => {
            if (input.classList.contains("composition")) {
                return;
            }
            const keyCode = utils_1.event.getKeyCode(e);
            if (keyCode === KEY_ENTER) {
                this._onKeydownEnter(e);
            }
            else if (keyCode === KEY_TAB) {
                this._onKeydownTab(e);
            }
        });
        handler.on(input, "blur", (_e) => {
            this.doChangeValue();
            this.detach();
        });
    }
    _onKeydownEnter(e) {
        var _a;
        if (!this._isActive() || this._attaching) {
            return;
        }
        const { grid } = this._activeData;
        this.doChangeValue();
        this.detach(true);
        utils_1.event.cancel(e);
        if ((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) {
            grid.onKeyDownMove(e);
        }
    }
    _onKeydownTab(e) {
        var _a;
        if (!this._isActive()) {
            return;
        }
        const { grid } = this._activeData;
        if (!((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab)) {
            return;
        }
        this.doChangeValue();
        this.detach(true);
        grid.onKeyDownMove(e);
    }
}
exports.InlineInputElement = InlineInputElement;
