"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNextSiblingFocusable = exports.findPrevSiblingFocusable = exports.isFocusable = exports.enableFocus = exports.disableFocus = exports.appendHtml = exports.toNodeList = exports.empty = exports.createElement = void 0;
function createElement(tagName, { classList, text, html, } = {}) {
    const element = document.createElement(tagName);
    if (classList) {
        if (Array.isArray(classList)) {
            element.classList.add(...classList);
        }
        else {
            element.classList.add(classList);
        }
    }
    if (text) {
        element.textContent = text;
    }
    else if (html) {
        element.innerHTML = html;
    }
    return element;
}
exports.createElement = createElement;
function empty(dom) {
    let c;
    while ((c = dom.firstChild)) {
        dom.removeChild(c);
    }
}
exports.empty = empty;
function isNode(arg) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return !!(arg.nodeType && arg.nodeName);
}
function toNode(arg) {
    if (isNode(arg)) {
        return arg;
    }
    const dom = createElement("div", { html: arg });
    return Array.prototype.slice.call(dom.childNodes);
}
function toNodeList(arg) {
    if (Array.isArray(arg)) {
        const result = [];
        arg.forEach((e) => {
            result.push(...toNodeList(e));
        });
        return result;
    }
    const node = toNode(arg);
    return Array.isArray(node) ? node : [node];
}
exports.toNodeList = toNodeList;
function appendHtml(dom, inner) {
    toNodeList(inner).forEach((node) => {
        dom.appendChild(node);
    });
}
exports.appendHtml = appendHtml;
function disableFocus(el) {
    el.dataset.disableBeforeTabIndex = `${el.tabIndex}`;
    el.tabIndex = -1;
    Array.prototype.slice.call(el.children, 0).forEach(disableFocus);
}
exports.disableFocus = disableFocus;
function enableFocus(el) {
    if ("disableBeforeTabIndex" in el.dataset) {
        el.tabIndex = Number(el.dataset.disableBeforeTabIndex);
    }
    Array.prototype.slice.call(el.children, 0).forEach(enableFocus);
}
exports.enableFocus = enableFocus;
function isFocusable(el) {
    return (el.tabIndex != null && el.tabIndex > -1);
}
exports.isFocusable = isFocusable;
function findPrevSiblingFocusable(el) {
    let n = el.previousSibling;
    while (n && !isFocusable(n)) {
        n = n.previousSibling;
    }
    return n;
}
exports.findPrevSiblingFocusable = findPrevSiblingFocusable;
function findNextSiblingFocusable(el) {
    let n = el.nextSibling;
    while (n && !isFocusable(n)) {
        n = n.nextSibling;
    }
    return n;
}
exports.findNextSiblingFocusable = findNextSiblingFocusable;
