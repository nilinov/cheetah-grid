"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallDialogInputElement = void 0;
const utils_1 = require("../../../internal/utils");
const EventHandler_1 = require("../../../internal/EventHandler");
const dom_1 = require("../../../internal/dom");
const input_value_handler_1 = require("./input-value-handler");
const CLASSNAME = "cheetah-grid__small-dialog-input";
const INPUT_CLASSNAME = `${CLASSNAME}__input`;
const HIDDEN_CLASSNAME = `${CLASSNAME}--hidden`;
const SHOWN_CLASSNAME = `${CLASSNAME}--shown`;
const KEY_ENTER = 13;
const KEY_ESC = 27;
function _focus(input, handler) {
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
}
function createDialogElement() {
    require("@/columns/action/internal/SmallDialogInputElement.css");
    const element = (0, dom_1.createElement)("div", {
        classList: [CLASSNAME, HIDDEN_CLASSNAME],
    });
    const input = (0, dom_1.createElement)("input", { classList: INPUT_CLASSNAME });
    input.readOnly = true;
    input.tabIndex = -1;
    element.appendChild(input);
    return element;
}
function bindProps(grid, dialog, input, editor) {
    const { classList, helperText } = editor;
    if (classList) {
        dialog.classList.add(...classList);
    }
    if (helperText && typeof helperText !== "function") {
        dialog.dataset.helperText = helperText;
    }
    setInputAttrs(editor, grid, input);
}
function unbindProps(_grid, dialog, input, editor) {
    const { classList } = editor;
    if (classList) {
        dialog.classList.remove(...classList);
    }
    delete dialog.dataset.helperText;
    input.type = "";
}
function setInputAttrs(editor, _grid, input) {
    const { type } = editor;
    input.type = type || "";
}
class SmallDialogInputElement {
    static setInputAttrs(editor, grid, input) {
        setInputAttrs(editor, grid, input);
    }
    constructor() {
        this._handler = new EventHandler_1.EventHandler();
        this._dialog = createDialogElement();
        this._input = this._dialog.querySelector(`.${INPUT_CLASSNAME}`);
        this._bindDialogEvents();
    }
    dispose() {
        const dialog = this._dialog;
        this.detach();
        this._handler.dispose();
        // @ts-expect-error -- ignore
        delete this._dialog;
        // @ts-expect-error -- ignore
        delete this._input;
        this._beforePropEditor = null;
        if (dialog.parentElement) {
            dialog.parentElement.removeChild(dialog);
        }
    }
    attach(grid, editor, col, row, value) {
        const handler = this._handler;
        const dialog = this._dialog;
        const input = this._input;
        if (this._beforePropEditor) {
            unbindProps(grid, dialog, input, this._beforePropEditor);
        }
        delete dialog.dataset.errorMessage;
        dialog.classList.remove(SHOWN_CLASSNAME);
        dialog.classList.add(HIDDEN_CLASSNAME);
        input.readOnly = true;
        input.tabIndex = 0;
        const { element, rect } = grid.getAttachCellsArea(grid.getCellRange(col, row));
        dialog.style.top = `${rect.top.toFixed()}px`;
        dialog.style.left = `${rect.left.toFixed()}px`;
        dialog.style.width = `${rect.width.toFixed()}px`;
        input.style.height = `${rect.height.toFixed()}px`;
        element.appendChild(dialog);
        (0, input_value_handler_1.setInputValue)(input, value);
        input.style.font = grid.font || "16px sans-serif";
        const activeData = { grid, col, row, editor };
        this._onInputValue(input, activeData);
        if (!utils_1.browser.IE) {
            _focus(input, handler);
        }
        else {
            // On the paste-event on IE, since it may not be focused, it will be delayed and focused.
            setTimeout(() => _focus(input, handler));
        }
        dialog.classList.add(SHOWN_CLASSNAME);
        dialog.classList.remove(HIDDEN_CLASSNAME);
        input.readOnly = false;
        bindProps(grid, dialog, input, editor);
        this._activeData = activeData;
        this._beforePropEditor = editor;
        this._attaching = true;
        setTimeout(() => {
            delete this._attaching;
        });
    }
    detach(gridFocus) {
        if (this._isActive()) {
            const dialog = this._dialog;
            const input = this._input;
            dialog.classList.remove(SHOWN_CLASSNAME);
            dialog.classList.add(HIDDEN_CLASSNAME);
            input.readOnly = true;
            input.tabIndex = -1;
            const { grid, col, row } = this._activeData;
            const range = grid.getCellRange(col, row);
            grid.invalidateCellRange(range);
            if (gridFocus) {
                grid.focus();
            }
        }
        this._activeData = null;
        this._beforeValue = null;
    }
    _doChangeValue() {
        if (!this._isActive()) {
            return false;
        }
        const input = this._input;
        const { value } = input;
        return (0, utils_1.then)(this._validate(value), (res) => {
            if (res && value === input.value) {
                const { grid, col, row } = this._activeData;
                grid.doChangeValue(col, row, () => value);
                return true;
            }
            return false;
        });
    }
    _isActive() {
        const dialog = this._dialog;
        if (!dialog || !dialog.parentElement) {
            return false;
        }
        if (!this._activeData) {
            return false;
        }
        return true;
    }
    _bindDialogEvents() {
        const handler = this._handler;
        const dialog = this._dialog;
        const input = this._input;
        const stopPropagationOnly = (e) => e.stopPropagation(); // gridにイベントが伝播しないように
        handler.on(dialog, "click", stopPropagationOnly);
        handler.on(dialog, "dblclick", stopPropagationOnly);
        handler.on(dialog, "mousedown", stopPropagationOnly);
        handler.on(dialog, "touchstart", stopPropagationOnly);
        handler.on(input, "compositionstart", (_e) => {
            input.classList.add("composition");
        });
        handler.on(input, "compositionend", (_e) => {
            input.classList.remove("composition");
            this._onInputValue(input);
        });
        const onKeyupAndPress = (_e) => {
            if (input.classList.contains("composition")) {
                return;
            }
            this._onInputValue(input);
        };
        handler.on(input, "keyup", onKeyupAndPress);
        handler.on(input, "keypress", onKeyupAndPress);
        handler.on(input, "keydown", (e) => {
            if (input.classList.contains("composition")) {
                return;
            }
            const keyCode = utils_1.event.getKeyCode(e);
            if (keyCode === KEY_ESC) {
                this.detach(true);
                utils_1.event.cancel(e);
            }
            else if (keyCode === KEY_ENTER) {
                this._onKeydownEnter(e);
            }
            else {
                this._onInputValue(input);
            }
        });
    }
    _onKeydownEnter(e) {
        if (this._attaching) {
            return;
        }
        const input = this._input;
        const { value } = input;
        (0, utils_1.then)(this._doChangeValue(), (r) => {
            var _a;
            if (r && value === input.value) {
                const grid = this._isActive() ? this._activeData.grid : null;
                this.detach(true);
                if ((_a = grid === null || grid === void 0 ? void 0 : grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) {
                    grid.onKeyDownMove(e);
                }
            }
        });
        utils_1.event.cancel(e);
    }
    _onInputValue(input, activeData) {
        const before = this._beforeValue;
        const { value } = input;
        if (before !== value) {
            this._onInputValueChange(value, activeData);
        }
        this._beforeValue = value;
    }
    _onInputValueChange(after, activeData) {
        activeData = (activeData || this._activeData);
        const dialog = this._dialog;
        const { grid, col, row, editor } = activeData;
        if (typeof editor.helperText === "function") {
            const helperText = editor.helperText(after, { grid, col, row });
            if (helperText) {
                dialog.dataset.helperText = helperText;
            }
            else {
                delete dialog.dataset.helperText;
            }
        }
        if ("errorMessage" in dialog.dataset) {
            this._validate(after, true);
        }
    }
    _validate(value, inputOnly) {
        const dialog = this._dialog;
        const input = this._input;
        const { grid, col, row, editor } = this._activeData;
        let message = "";
        if (editor.inputValidator) {
            message = editor.inputValidator(value, { grid, col, row });
        }
        return (0, utils_1.then)(message, (message) => {
            if (!message && editor.validator && !inputOnly) {
                message = editor.validator(value, { grid, col, row });
            }
            return (0, utils_1.then)(message, (message) => {
                if (message && value === input.value) {
                    dialog.dataset.errorMessage = message;
                }
                else {
                    delete dialog.dataset.errorMessage;
                }
                return !message;
            });
        });
    }
}
exports.SmallDialogInputElement = SmallDialogInputElement;
