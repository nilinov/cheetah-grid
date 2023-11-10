"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScrollBarSize = exports.initDocument = void 0;
function getScrollBarWidth() {
    const wrapper = document.createElement("div");
    const inner = document.createElement("div");
    const { style: wrapperStyle } = wrapper;
    wrapperStyle.position = "fixed";
    wrapperStyle.height = "50px";
    wrapperStyle.width = "50px";
    wrapperStyle.overflow = "scroll";
    wrapperStyle.opacity = "0";
    wrapperStyle.pointerEvents = "none";
    const { style } = inner;
    style.height = "100%";
    style.width = "100%";
    inner.textContent = "x";
    wrapper.appendChild(inner);
    document.body.appendChild(wrapper);
    const wrapperWidth = wrapper.getBoundingClientRect().width;
    const innerWidth = inner.getBoundingClientRect().width;
    document.body.removeChild(wrapper);
    return Math.ceil(wrapperWidth - innerWidth);
}
let SCROLLBAR_SIZE;
function initDocumentInternal() {
    require("@/internal/style.css");
    SCROLLBAR_SIZE = getScrollBarWidth() || 10;
    const style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.setAttribute("data-name", "cheetah-grid");
    style.innerHTML = `
.cheetah-grid .grid-scroll-end-point {
	width: ${SCROLLBAR_SIZE}px;
	height: ${SCROLLBAR_SIZE}px;
}
.cheetah-grid > canvas {
	width: -webkit-calc(100% - ${SCROLLBAR_SIZE}px);
	width: calc(100% - ${SCROLLBAR_SIZE}px);
	height: -webkit-calc(100% - ${SCROLLBAR_SIZE}px);
	height: calc(100% - ${SCROLLBAR_SIZE}px);
}
		`;
    document.head.appendChild(style);
}
let initDocumentVar = initDocumentInternal;
function initDocument() {
    initDocumentVar();
    initDocumentVar = Function.prototype;
}
exports.initDocument = initDocument;
function getScrollBarSize() {
    return SCROLLBAR_SIZE;
}
exports.getScrollBarSize = getScrollBarSize;
