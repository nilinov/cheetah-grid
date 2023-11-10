"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineMenuElement = void 0;
const dom_1 = require("../../../internal/dom");
const EventHandler_1 = require("../../../internal/EventHandler");
const utils_1 = require("../../../internal/utils");
const KEY_TAB = 9;
const KEY_ENTER = 13;
const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_ESC = 27;
const CLASSNAME = "cheetah-grid__inline-menu";
const ITEM_CLASSNAME = `${CLASSNAME}__menu-item`;
const HIDDEN_CLASSNAME = `${CLASSNAME}--hidden`;
const SHOWN_CLASSNAME = `${CLASSNAME}--shown`;
const EMPTY_ITEM_CLASSNAME = `${ITEM_CLASSNAME}--empty`;
function findItemParents(target) {
    let el = target;
    while (el && !el.classList.contains(ITEM_CLASSNAME)) {
        el = el.parentElement;
        if (!el || el.classList.contains(CLASSNAME)) {
            return null;
        }
    }
    return el;
}
function createMenuElement() {
    require("@/columns/action/internal/InlineMenuElement.css");
    return (0, dom_1.createElement)("ul", { classList: CLASSNAME });
}
function attachElement(element, rect, menu) {
    menu.style.top = `${rect.top.toFixed()}px`;
    menu.style.left = `${rect.left.toFixed()}px`;
    menu.style.width = `${rect.width.toFixed()}px`;
    menu.style.lineHeight = `${rect.height.toFixed()}px`;
    element.appendChild(menu);
}
function optionToLi({ classList, label, value, html }, index) {
    const item = (0, dom_1.createElement)("li", { classList: ITEM_CLASSNAME });
    item.tabIndex = 0;
    item.dataset.valueindex = `${index}`;
    if (classList) {
        item.classList.add(...(Array.isArray(classList) ? classList : [classList]));
    }
    if (label) {
        const span = (0, dom_1.createElement)("span", { text: label });
        item.appendChild(span);
    }
    else if (html) {
        (0, dom_1.appendHtml)(item, html);
    }
    if (value === "" || value == null) {
        item.classList.add(EMPTY_ITEM_CLASSNAME);
    }
    return item;
}
function openMenu(grid, editor, col, row, value, options, menu) {
    const { classList } = editor;
    menu.classList.remove(SHOWN_CLASSNAME);
    menu.classList.add(HIDDEN_CLASSNAME);
    (0, dom_1.empty)(menu);
    menu.style.font = grid.font || "16px sans-serif";
    let emptyItemEl = null;
    let valueItemEl = null;
    options.forEach((option, i) => {
        const item = optionToLi(option, i);
        menu.appendChild(item);
        if (option.value === value) {
            valueItemEl = item;
            item.dataset.select = "select";
        }
        if (item.classList.contains(EMPTY_ITEM_CLASSNAME)) {
            emptyItemEl = item;
        }
    });
    const focusEl = valueItemEl || emptyItemEl || menu.children[0];
    if (classList) {
        menu.classList.add(...classList);
    }
    const children = Array.prototype.slice.call(menu.children, 0);
    const focusIndex = children.indexOf(focusEl);
    const { element, rect } = grid.getAttachCellsArea(grid.getCellRange(col, row));
    // Cover the right line
    rect.width++;
    // append for calculation
    attachElement(element, rect, menu);
    // Make the selection item at the middle
    let offset = 0;
    let allHeight = 0;
    for (let i = 0; i < children.length; i++) {
        const { offsetHeight } = children[i];
        if (i < focusIndex) {
            offset += offsetHeight;
        }
        allHeight += offsetHeight;
    }
    rect.offsetTop(-offset);
    menu.style.transformOrigin = `center ${offset + Math.ceil(children[focusIndex].offsetHeight / 2)}px 0px`;
    attachElement(element, rect, menu);
    // Control not to overflow the screen range
    const menuClientRect = menu.getBoundingClientRect();
    const scaleDiff = (allHeight - menuClientRect.height) / 2;
    const orgMenuTop = menuClientRect.top - scaleDiff;
    let menuTop = orgMenuTop;
    const menuBottom = menuTop + allHeight;
    const winBottom = window.innerHeight;
    const winMargin = 20;
    if (menuBottom > winBottom - winMargin) {
        const diff = menuBottom - winBottom + winMargin;
        menuTop -= diff;
    }
    if (menuTop < 0 /*winTop*/ + winMargin) {
        menuTop = winMargin;
    }
    if (menuTop !== orgMenuTop) {
        rect.offsetTop(-(orgMenuTop - menuTop));
        // re update
        attachElement(element, rect, menu);
    }
    if (focusEl) {
        focusEl.focus();
    }
    menu.classList.remove(HIDDEN_CLASSNAME);
    menu.classList.add(SHOWN_CLASSNAME);
}
function closeMenu(_grid, _col, _row, menu) {
    menu.classList.remove(SHOWN_CLASSNAME);
    menu.classList.add(HIDDEN_CLASSNAME);
    (0, dom_1.disableFocus)(menu);
}
class InlineMenuElement {
    constructor() {
        const handler = (this._handler = new EventHandler_1.EventHandler());
        this._menu = createMenuElement();
        this._bindMenuEvents();
        let bodyClickListenerId;
        const deregisterBodyClickListener = (this._deregisterBodyClickListener =
            () => handler.off(bodyClickListenerId));
        this._registerBodyClickListener = () => {
            deregisterBodyClickListener();
            bodyClickListenerId = handler.on(document.body, "click", this._onBodyClick.bind(this), { capture: true });
        };
    }
    dispose() {
        var _a;
        const menu = this._menu;
        this.detach();
        this._handler.dispose();
        // @ts-expect-error -- ignore
        delete this._menu;
        this._beforePropEditor = null;
        (_a = menu.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(menu);
    }
    attach(grid, editor, col, row, value, record) {
        const menu = this._menu;
        if (this._beforePropEditor) {
            const { classList } = this._beforePropEditor;
            if (classList) {
                menu.classList.remove(...classList);
            }
        }
        const options = editor.options(record);
        openMenu(grid, editor, col, row, value, options, menu);
        this._activeData = { grid, col, row, editor, options };
        this._beforePropEditor = editor;
        this._registerBodyClickListener();
    }
    detach(gridFocus) {
        if (this._isActive()) {
            const { grid, col, row } = this._activeData;
            const menu = this._menu;
            closeMenu(grid, col, row, menu);
            const range = grid.getCellRange(col, row);
            grid.invalidateCellRange(range);
            if (gridFocus) {
                grid.focus();
            }
        }
        this._activeData = null;
        this._deregisterBodyClickListener();
    }
    _doChangeValue(valueindex) {
        if (!this._isActive()) {
            return;
        }
        const { grid, col, row, options } = this._activeData;
        const option = options[Number(valueindex)];
        if (option) {
            const { value } = option;
            grid.doChangeValue(col, row, () => value);
        }
    }
    _isActive() {
        const menu = this._menu;
        if (!menu || !menu.parentElement) {
            return false;
        }
        if (!this._activeData) {
            return false;
        }
        return true;
    }
    _bindMenuEvents() {
        const handler = this._handler;
        const menu = this._menu;
        const stopPropagationOnly = (e) => e.stopPropagation(); // gridにイベントが伝播しないように
        handler.on(menu, "mousedown", stopPropagationOnly);
        handler.on(menu, "touchstart", stopPropagationOnly);
        handler.on(menu, "dblclick", stopPropagationOnly);
        handler.on(menu, "click", (e) => {
            e.stopPropagation();
            const item = findItemParents(e.target);
            if (!item) {
                return;
            }
            const { valueindex } = item.dataset;
            this._doChangeValue(valueindex || "");
            this.detach(true);
        });
        handler.on(menu, "keydown", (e) => {
            const item = findItemParents(e.target);
            if (!item) {
                return;
            }
            const keyCode = utils_1.event.getKeyCode(e);
            if (keyCode === KEY_ENTER) {
                this._onKeydownEnter(menu, item, e);
            }
            else if (keyCode === KEY_ESC) {
                this.detach(true);
                utils_1.event.cancel(e);
            }
            else if (keyCode === KEY_UP) {
                const n = (0, dom_1.findPrevSiblingFocusable)(item);
                if (n) {
                    n.focus();
                    utils_1.event.cancel(e);
                }
            }
            else if (keyCode === KEY_DOWN) {
                const n = (0, dom_1.findNextSiblingFocusable)(item);
                if (n) {
                    n.focus();
                    utils_1.event.cancel(e);
                }
            }
            else if (keyCode === KEY_TAB) {
                this._onKeydownTab(menu, item, e);
            }
        });
    }
    _onBodyClick(e) {
        const el = e.target;
        if (!el) {
            return;
        }
        if (this._menu.contains(el)) {
            return;
        }
        if (this._isActive()) {
            const { grid } = this._activeData;
            if (grid.getElement().contains(el)) {
                return;
            }
        }
        this.detach();
    }
    _onKeydownEnter(_menu, item, e) {
        var _a;
        const grid = this._isActive() ? this._activeData.grid : null;
        const { valueindex } = item.dataset;
        this._doChangeValue(valueindex || "");
        this.detach(true);
        utils_1.event.cancel(e);
        if (grid) {
            if ((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) {
                grid.onKeyDownMove(e);
            }
        }
    }
    _onKeydownTab(menu, item, e) {
        var _a;
        if (this._isActive()) {
            const { grid } = this._activeData;
            if ((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab) {
                const { valueindex } = item.dataset;
                this._doChangeValue(valueindex || "");
                this.detach(true);
                grid.onKeyDownMove(e);
                return;
            }
        }
        if (!e.shiftKey) {
            if (!(0, dom_1.findNextSiblingFocusable)(item)) {
                let n = menu.querySelector(`.${ITEM_CLASSNAME}`);
                if (!(0, dom_1.isFocusable)(n)) {
                    n = (0, dom_1.findNextSiblingFocusable)(n);
                }
                if (n) {
                    n.focus();
                    utils_1.event.cancel(e);
                }
            }
        }
        else {
            if (!(0, dom_1.findPrevSiblingFocusable)(item)) {
                const items = menu.querySelectorAll(`.${ITEM_CLASSNAME}`);
                let n = items[items.length - 1];
                if (!(0, dom_1.isFocusable)(n)) {
                    n = (0, dom_1.findPrevSiblingFocusable)(n);
                }
                if (n) {
                    n.focus();
                    utils_1.event.cancel(e);
                }
            }
        }
    }
}
exports.InlineMenuElement = InlineMenuElement;
