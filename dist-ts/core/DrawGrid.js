"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawGrid = void 0;
const calc = __importStar(require("../internal/calc"));
const hiDPI = __importStar(require("../internal/hiDPI"));
const style = __importStar(require("../internal/style"));
const utils_1 = require("../internal/utils");
const paste_utils_1 = require("../internal/paste-utils");
const DG_EVENT_TYPE_1 = require("./DG_EVENT_TYPE");
const EventHandler_1 = require("../internal/EventHandler");
const EventTarget_1 = require("./EventTarget");
const NumberMap_1 = require("../internal/NumberMap");
const Rect_1 = require("../internal/Rect");
const Scrollable_1 = require("../internal/Scrollable");
const canvases_1 = require("../internal/canvases");
//protected symbol
const symbolManager_1 = require("../internal/symbolManager");
const { 
/** @private */
isTouchEvent, 
/** @private */
getMouseButtons, 
/** @private */
getKeyCode, 
/** @private */
cancel: cancelEvent, } = utils_1.event;
/** @private */
const _ = (0, symbolManager_1.getProtectedSymbol)();
/** @private */
function createRootElement() {
    const element = document.createElement("div");
    element.classList.add("cheetah-grid");
    return element;
}
/** @private */
const KEY_BS = 8;
/** @private */
const KEY_TAB = 9;
/** @private */
const KEY_ENTER = 13;
/** @private */
const KEY_END = 35;
/** @private */
const KEY_HOME = 36;
/** @private */
const KEY_LEFT = 37;
/** @private */
const KEY_UP = 38;
/** @private */
const KEY_RIGHT = 39;
/** @private */
const KEY_DOWN = 40;
/** @private */
const KEY_DEL = 46;
/** @private */
const KEY_ALPHA_A = 65;
/** @private */
const KEY_ALPHA_C = 67;
/** @private */
const KEY_ALPHA_V = 86;
//private methods
/** @private */
function _vibrate(e) {
    if (navigator.vibrate && isTouchEvent(e)) {
        navigator.vibrate(50);
    }
}
/** @private */
function _getTargetRowAt(absoluteY) {
    const internal = this.getTargetRowAtInternal(absoluteY);
    if (internal != null) {
        return internal;
    }
    const findBefore = (startRow, startBottom) => {
        let bottom = startBottom;
        for (let row = startRow; row >= 0; row--) {
            const height = _getRowHeight.call(this, row);
            const top = bottom - height;
            if (top <= absoluteY && absoluteY < bottom) {
                return {
                    top,
                    row,
                };
            }
            bottom = top;
        }
        return null;
    };
    const findAfter = (startRow, startBottom) => {
        let top = startBottom - _getRowHeight.call(this, startRow);
        const { rowCount } = this[_];
        for (let row = startRow; row < rowCount; row++) {
            const height = _getRowHeight.call(this, row);
            const bottom = top + height;
            if (top <= absoluteY && absoluteY < bottom) {
                return {
                    top,
                    row,
                };
            }
            top = bottom;
        }
        return null;
    };
    const candidateRow = Math.min(Math.ceil(absoluteY / this[_].defaultRowHeight), this.rowCount - 1);
    const bottom = _getRowsHeight.call(this, 0, candidateRow);
    if (absoluteY >= bottom) {
        return findAfter(candidateRow, bottom);
    }
    else {
        return findBefore(candidateRow, bottom);
    }
}
/** @private */
function _getTargetColAt(grid, absoluteX) {
    let left = 0;
    const { colCount } = grid[_];
    for (let col = 0; col < colCount; col++) {
        const width = _getColWidth(grid, col);
        const right = left + width;
        if (right > absoluteX) {
            return {
                left,
                col,
            };
        }
        left = right;
    }
    return null;
}
/** @private */
function _getTargetFrozenRowAt(grid, absoluteY) {
    if (!grid[_].frozenRowCount) {
        return null;
    }
    let { top } = grid[_].scroll;
    const rowCount = grid[_].frozenRowCount;
    for (let row = 0; row < rowCount; row++) {
        const height = _getRowHeight.call(grid, row);
        const bottom = top + height;
        if (bottom > absoluteY) {
            return {
                top,
                row,
            };
        }
        top = bottom;
    }
    return null;
}
/** @private */
function _getTargetFrozenColAt(grid, absoluteX) {
    if (!grid[_].frozenColCount) {
        return null;
    }
    let { left } = grid[_].scroll;
    const colCount = grid[_].frozenColCount;
    for (let col = 0; col < colCount; col++) {
        const width = _getColWidth(grid, col);
        const right = left + width;
        if (right > absoluteX) {
            return {
                left,
                col,
            };
        }
        left = right;
    }
    return null;
}
/** @private */
function _getFrozenRowsRect(grid) {
    if (!grid[_].frozenRowCount) {
        return null;
    }
    const { top } = grid[_].scroll;
    let height = 0;
    const rowCount = grid[_].frozenRowCount;
    for (let row = 0; row < rowCount; row++) {
        height += _getRowHeight.call(grid, row);
    }
    return new Rect_1.Rect(grid[_].scroll.left, top, grid[_].canvas.width, height);
}
/** @private */
function _getFrozenColsRect(grid) {
    if (!grid[_].frozenColCount) {
        return null;
    }
    const { left } = grid[_].scroll;
    let width = 0;
    const colCount = grid[_].frozenColCount;
    for (let col = 0; col < colCount; col++) {
        width += _getColWidth(grid, col);
    }
    return new Rect_1.Rect(left, grid[_].scroll.top, width, grid[_].canvas.height);
}
/** @private */
function _getCellDrawing(grid, col, row) {
    if (!grid[_].drawCells[row]) {
        return null;
    }
    return grid[_].drawCells[row][col];
}
/** @private */
function _putCellDrawing(grid, col, row, context) {
    if (!grid[_].drawCells[row]) {
        grid[_].drawCells[row] = {};
    }
    grid[_].drawCells[row][col] = context;
}
/** @private */
function _removeCellDrawing(grid, col, row) {
    if (!grid[_].drawCells[row]) {
        return;
    }
    delete grid[_].drawCells[row][col];
    if (Object.keys(grid[_].drawCells[row]).length === 0) {
        delete grid[_].drawCells[row];
    }
}
/** @private */
function _drawCell(ctx, col, absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, skipAbsoluteLeft, drawLayers) {
    const rect = new Rect_1.Rect(absoluteLeft - visibleRect.left, absoluteTop - visibleRect.top, width, height);
    const drawRect = Rect_1.Rect.bounds(Math.max(absoluteLeft, skipAbsoluteLeft) - visibleRect.left, Math.max(absoluteTop, skipAbsoluteTop) - visibleRect.top, rect.right, rect.bottom);
    if (drawRect.height > 0 && drawRect.width > 0) {
        ctx.save();
        try {
            const cellDrawing = _getCellDrawing(this, col, row);
            if (cellDrawing) {
                cellDrawing.cancel();
            }
            const dcContext = new DrawCellContext(col, row, ctx, rect, drawRect, !!cellDrawing, this[_].selection, drawLayers);
            const p = this.onDrawCell(col, row, dcContext);
            if ((0, utils_1.isPromise)(p)) {
                //遅延描画
                _putCellDrawing(this, col, row, dcContext);
                const pCol = col;
                dcContext._delayMode(this, () => {
                    _removeCellDrawing(this, pCol, row);
                });
                p.then(() => {
                    dcContext.terminate();
                });
            }
        }
        finally {
            ctx.restore();
        }
    }
}
/** @private */
function _drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, absoluteTop, height, visibleRect, skipAbsoluteTop, drawLayers) {
    const { colCount } = grid[_];
    const drawOuter = (col, absoluteLeft) => {
        //データ範囲外の描画
        if (col >= colCount - 1 &&
            grid[_].canvas.width > absoluteLeft - visibleRect.left) {
            const outerLeft = absoluteLeft - visibleRect.left;
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = grid.underlayBackgroundColor || "#F6F6F6";
            ctx.rect(outerLeft, absoluteTop - visibleRect.top, grid[_].canvas.width - outerLeft, height);
            ctx.fill();
            ctx.restore();
        }
    };
    let skipAbsoluteLeft = 0;
    if (initFrozenCol) {
        let absoluteLeft = initFrozenCol.left;
        const count = grid[_].frozenColCount;
        for (let { col } = initFrozenCol; col < count; col++) {
            const width = _getColWidth(grid, col);
            _drawCell.call(grid, ctx, col, absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, 0, drawLayers);
            absoluteLeft += width;
            if (drawRight <= absoluteLeft) {
                //描画範囲外（終了）
                drawOuter(col, absoluteLeft);
                return;
            }
        }
        skipAbsoluteLeft = absoluteLeft;
    }
    let absoluteLeft = initCol.left;
    for (let { col } = initCol; col < colCount; col++) {
        const width = _getColWidth(grid, col);
        _drawCell.call(grid, ctx, col, absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, skipAbsoluteLeft, drawLayers);
        absoluteLeft += width;
        if (drawRight <= absoluteLeft) {
            //描画範囲外（終了）
            drawOuter(col, absoluteLeft);
            return;
        }
    }
    drawOuter(colCount - 1, absoluteLeft);
}
/** @private */
function _getInitContext() {
    return this._getInitContext();
}
/** @private */
function _invalidateRect(grid, drawRect) {
    const visibleRect = _getVisibleRect(grid);
    const { rowCount } = grid[_];
    const ctx = _getInitContext.call(grid);
    const initRow = _getTargetRowAt.call(grid, Math.max(visibleRect.top, drawRect.top)) || {
        top: _getRowsHeight.call(grid, 0, rowCount - 1),
        row: rowCount,
    };
    const initCol = _getTargetColAt(grid, Math.max(visibleRect.left, drawRect.left)) || {
        left: _getColsWidth(grid, 0, grid[_].colCount - 1),
        col: grid[_].colCount,
    };
    const drawBottom = Math.min(visibleRect.bottom, drawRect.bottom);
    const drawRight = Math.min(visibleRect.right, drawRect.right);
    const initFrozenRow = _getTargetFrozenRowAt(grid, Math.max(visibleRect.top, drawRect.top));
    const initFrozenCol = _getTargetFrozenColAt(grid, Math.max(visibleRect.left, drawRect.left));
    const drawLayers = new DrawLayers();
    const drawOuter = (row, absoluteTop) => {
        //データ範囲外の描画
        if (row >= rowCount - 1 &&
            grid[_].canvas.height > absoluteTop - visibleRect.top) {
            const outerTop = absoluteTop - visibleRect.top;
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = grid.underlayBackgroundColor || "#F6F6F6";
            ctx.rect(0, outerTop, grid[_].canvas.width, grid[_].canvas.height - outerTop);
            ctx.fill();
            ctx.restore();
        }
    };
    let skipAbsoluteTop = 0;
    if (initFrozenRow) {
        let absoluteTop = initFrozenRow.top;
        const count = grid[_].frozenRowCount;
        for (let { row } = initFrozenRow; row < count; row++) {
            const height = _getRowHeight.call(grid, row);
            _drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, absoluteTop, height, visibleRect, 0, drawLayers);
            absoluteTop += height;
            if (drawBottom <= absoluteTop) {
                //描画範囲外（終了）
                drawOuter(row, absoluteTop);
                drawLayers.draw(ctx);
                return;
            }
        }
        skipAbsoluteTop = absoluteTop;
    }
    let absoluteTop = initRow.top;
    for (let { row } = initRow; row < rowCount; row++) {
        const height = _getRowHeight.call(grid, row);
        //行の描画
        _drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, absoluteTop, height, visibleRect, skipAbsoluteTop, drawLayers);
        absoluteTop += height;
        if (drawBottom <= absoluteTop) {
            //描画範囲外（終了）
            drawOuter(row, absoluteTop);
            drawLayers.draw(ctx);
            return;
        }
    }
    drawOuter(rowCount - 1, absoluteTop);
    drawLayers.draw(ctx);
}
/** @private */
function _toPxWidth(grid, width) {
    return Math.round(calc.toPx(width, grid[_].calcWidthContext));
}
/** @private */
function _adjustColWidth(grid, col, orgWidth) {
    const limits = _getColWidthLimits(grid, col);
    return Math.max(_applyColWidthLimits(limits, orgWidth), 0);
}
/** @private */
function _applyColWidthLimits(limits, orgWidth) {
    if (!limits) {
        return orgWidth;
    }
    if (limits.min) {
        if (limits.min > orgWidth) {
            return limits.min;
        }
    }
    if (limits.max) {
        if (limits.max < orgWidth) {
            return limits.max;
        }
    }
    return orgWidth;
}
/**
 * Gets the definition of the column width.
 * @param {DrawGrid} grid grid instance
 * @param {number} col number of column
 * @returns {string|number} width definition
 * @private
 */
function _getColWidthDefine(grid, col) {
    const width = grid[_].colWidthsMap.get(col);
    if (width) {
        return width;
    }
    return grid.defaultColWidth;
}
/**
 * Gets the column width limits.
 * @param {DrawGrid} grid grid instance
 * @param {number} col number of column
 * @returns {object|null} the column width limits
 * @private
 */
function _getColWidthLimits(grid, col) {
    const limit = grid[_].colWidthsLimit[col];
    if (!limit) {
        return null;
    }
    const result = {};
    if (limit.min) {
        result.min = _toPxWidth(grid, limit.min);
        result.minDef = limit.min;
    }
    if (limit.max) {
        result.max = _toPxWidth(grid, limit.max);
        result.maxDef = limit.max;
    }
    return result;
}
/**
 * Checks if the given width definition is `auto`.
 * @param {string|number} width width definition to check
 * @returns {boolean} `true ` if the given width definition is `auto`
 * @private
 */
function isAutoDefine(width) {
    return Boolean(width && typeof width === "string" && width.toLowerCase() === "auto");
}
/**
 * Creates a formula to calculate the auto width.
 * @param {DrawGrid} grid grid instance
 * @returns {string} formula
 * @private
 */
function _calcAutoColWidthExpr(grid, shortCircuit = true) {
    const fullWidth = grid[_].calcWidthContext.full;
    let sumMin = 0;
    const others = [];
    let autoCount = 0;
    const hasLimitsOnAuto = [];
    for (let col = 0; col < grid[_].colCount; col++) {
        const def = _getColWidthDefine(grid, col);
        const limits = _getColWidthLimits(grid, col);
        if (isAutoDefine(def)) {
            if (limits) {
                hasLimitsOnAuto.push(limits);
                if (limits.min) {
                    sumMin += limits.min;
                }
            }
            autoCount++;
        }
        else {
            let expr = def;
            if (limits) {
                const orgWidth = _toPxWidth(grid, expr);
                const newWidth = _applyColWidthLimits(limits, orgWidth);
                if (orgWidth !== newWidth) {
                    expr = `${newWidth}px`;
                }
                sumMin += newWidth;
            }
            others.push(expr);
        }
        if (shortCircuit && sumMin > fullWidth) {
            // Returns 0px because it has consumed the full width.
            return "0px";
        }
    }
    if (hasLimitsOnAuto.length && others.length) {
        const autoPx = (fullWidth -
            _toPxWidth(grid, `calc(${others
                .map((c) => (typeof c === "number" ? `${c}px` : c))
                .join(" + ")})`)) /
            autoCount;
        hasLimitsOnAuto.forEach((limits) => {
            if (limits.min && autoPx < limits.min) {
                others.push(limits.minDef);
                autoCount--;
            }
            else if (limits.max && limits.max < autoPx) {
                others.push(limits.maxDef);
                autoCount--;
            }
        });
        if (shortCircuit && autoCount <= 0) {
            return `${autoPx}px`;
        }
    }
    if (others.length) {
        const strDefs = [];
        let num = 0;
        others.forEach((c) => {
            if (typeof c === "number") {
                num += c;
            }
            else {
                strDefs.push(c);
            }
        });
        strDefs.push(`${num}px`);
        return `calc((100% - (${strDefs.join(" + ")})) / ${autoCount})`;
    }
    else {
        return `${100 / autoCount}%`;
    }
}
/**
 * Calculate the pixels of width from the definition of width.
 * @param {DrawGrid} grid grid instance
 * @param {string|number} width width definition
 * @returns {number} the pixels of width
 * @private
 */
function _colWidthDefineToPxWidth(grid, width) {
    if (isAutoDefine(width)) {
        return _toPxWidth(grid, _calcAutoColWidthExpr(grid));
    }
    return _toPxWidth(grid, width);
}
/** @private */
function _getColWidth(grid, col) {
    const width = _getColWidthDefine(grid, col);
    return _adjustColWidth(grid, col, _colWidthDefineToPxWidth(grid, width));
}
/** @private */
function _setColWidth(grid, col, width) {
    if (width != null) {
        grid[_].colWidthsMap.put(col, width);
    }
    else {
        grid[_].colWidthsMap.remove(col);
    }
}
/**
 * Overwrites the definition of a column whose width is set to `auto` with the current auto width formula.
 * @param {DrawGrid} grid grid instance
 * @returns {void}
 * @private
 */
function _storeAutoColWidthExprs(grid) {
    let expr = null;
    for (let col = 0; col < grid[_].colCount; col++) {
        const def = _getColWidthDefine(grid, col);
        if (isAutoDefine(def)) {
            _setColWidth(grid, col, expr || (expr = _calcAutoColWidthExpr(grid, false)));
        }
    }
}
/** @private */
function _getColsWidth(grid, startCol, endCol) {
    const defaultColPxWidth = _colWidthDefineToPxWidth(grid, grid.defaultColWidth);
    const colCount = endCol - startCol + 1;
    let w = defaultColPxWidth * colCount;
    grid[_].colWidthsMap.each(startCol, endCol, (width, col) => {
        w +=
            _adjustColWidth(grid, col, _colWidthDefineToPxWidth(grid, width)) -
                defaultColPxWidth;
    });
    for (let col = startCol; col <= endCol; col++) {
        if (grid[_].colWidthsMap.has(col)) {
            continue;
        }
        const adj = _adjustColWidth(grid, col, defaultColPxWidth);
        if (adj !== defaultColPxWidth) {
            w += adj - defaultColPxWidth;
        }
    }
    return w;
}
/** @private */
function _getRowHeight(row) {
    const internal = this.getRowHeightInternal(row);
    if (internal != null) {
        return internal;
    }
    const height = this[_].rowHeightsMap.get(row);
    if (height) {
        return height;
    }
    return this[_].defaultRowHeight;
}
/** @private */
function _setRowHeight(grid, row, height) {
    if (height != null) {
        grid[_].rowHeightsMap.put(row, height);
    }
    else {
        grid[_].rowHeightsMap.remove(row);
    }
}
/** @private */
function _getRowsHeight(startRow, endRow) {
    const internal = this.getRowsHeightInternal(startRow, endRow);
    if (internal != null) {
        return internal;
    }
    const rowCount = endRow - startRow + 1;
    let h = this[_].defaultRowHeight * rowCount;
    this[_].rowHeightsMap.each(startRow, endRow, (height) => {
        h += height - this[_].defaultRowHeight;
    });
    return h;
}
/** @private */
function _getScrollWidth(grid) {
    return _getColsWidth(grid, 0, grid[_].colCount - 1);
}
/** @private */
function _getScrollHeight(row) {
    const internal = this.getScrollHeightInternal(row);
    if (internal != null) {
        return internal;
    }
    let h = this[_].defaultRowHeight * this[_].rowCount;
    this[_].rowHeightsMap.each(0, this[_].rowCount - 1, (height) => {
        h += height - this[_].defaultRowHeight;
    });
    return h;
}
/** @private */
function _onScroll(grid, _e) {
    const lastLeft = grid[_].scroll.left;
    const lastTop = grid[_].scroll.top;
    const moveX = grid[_].scrollable.scrollLeft - lastLeft;
    const moveY = grid[_].scrollable.scrollTop - lastTop;
    //次回計算用情報を保持
    grid[_].scroll = {
        left: grid[_].scrollable.scrollLeft,
        top: grid[_].scrollable.scrollTop,
    };
    // If the focus is on the header, recalculate and move the focus position.
    const { focus } = grid[_].selection;
    const isFrozenCell = grid.isFrozenCell(focus.col, focus.row);
    if (isFrozenCell &&
        (((isFrozenCell === null || isFrozenCell === void 0 ? void 0 : isFrozenCell.col) && moveX) || ((isFrozenCell === null || isFrozenCell === void 0 ? void 0 : isFrozenCell.row) && moveY))) {
        grid.setFocusCursor(focus.col, focus.row);
    }
    const visibleRect = _getVisibleRect(grid);
    if (Math.abs(moveX) >= visibleRect.width ||
        Math.abs(moveY) >= visibleRect.height) {
        //全再描画
        _invalidateRect(grid, visibleRect);
    }
    else {
        //差分再描画
        grid[_].context.drawImage(grid[_].canvas, -moveX, -moveY);
        if (moveX !== 0) {
            //横移動の再描画範囲を計算
            const redrawRect = visibleRect.copy();
            if (moveX < 0) {
                redrawRect.width = -moveX;
                if (grid[_].frozenColCount > 0) {
                    //固定列がある場合固定列分描画
                    const frozenRect = _getFrozenColsRect(grid);
                    redrawRect.width += frozenRect.width;
                }
            }
            else if (moveX > 0) {
                redrawRect.left = redrawRect.right - moveX;
            }
            //再描画
            _invalidateRect(grid, redrawRect);
            if (moveX > 0) {
                if (grid[_].frozenColCount > 0) {
                    //固定列がある場合固定列描画
                    _invalidateRect(grid, _getFrozenColsRect(grid));
                }
            }
        }
        if (moveY !== 0) {
            //縦移動の再描画範囲を計算
            const redrawRect = visibleRect.copy();
            if (moveY < 0) {
                redrawRect.height = -moveY;
                if (grid[_].frozenRowCount > 0) {
                    //固定行がある場合固定行分描画
                    const frozenRect = _getFrozenRowsRect(grid);
                    redrawRect.height += frozenRect.height;
                }
            }
            else if (moveY > 0) {
                redrawRect.top = redrawRect.bottom - moveY;
            }
            //再描画
            _invalidateRect(grid, redrawRect);
            if (moveY > 0) {
                if (grid[_].frozenRowCount > 0) {
                    //固定行がある場合固定行描画
                    _invalidateRect(grid, _getFrozenRowsRect(grid));
                }
            }
        }
    }
}
/** @private */
// eslint-disable-next-line complexity
function _onKeyDownMove(e) {
    var _a, _b, _c;
    const { shiftKey } = e;
    const keyCode = getKeyCode(e);
    const focusCell = shiftKey ? this.selection.focus : this.selection.select;
    if (keyCode === KEY_LEFT) {
        if (e.ctrlKey || e.metaKey) {
            move(this, null, "W");
        }
        else {
            if (!hMove.call(this, "W")) {
                return;
            }
        }
        cancelEvent(e);
    }
    else if (keyCode === KEY_UP) {
        if (e.ctrlKey || e.metaKey) {
            move(this, "N", null);
        }
        else {
            if (!vMove.call(this, "N")) {
                return;
            }
        }
        cancelEvent(e);
    }
    else if (keyCode === KEY_RIGHT) {
        if (e.ctrlKey || e.metaKey) {
            move(this, null, "E");
        }
        else {
            if (!hMove.call(this, "E")) {
                return;
            }
        }
        cancelEvent(e);
    }
    else if (keyCode === KEY_DOWN) {
        if (e.ctrlKey || e.metaKey) {
            move(this, "S", null);
        }
        else {
            if (!vMove.call(this, "S")) {
                return;
            }
        }
        cancelEvent(e);
    }
    else if (keyCode === KEY_HOME) {
        if (e.ctrlKey || e.metaKey) {
            move(this, "N", "W");
        }
        else {
            move(this, null, "W");
        }
        cancelEvent(e);
    }
    else if (keyCode === KEY_END) {
        if (e.ctrlKey || e.metaKey) {
            move(this, "S", "E");
        }
        else {
            move(this, null, "E");
        }
        cancelEvent(e);
    }
    else if (((_a = this.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab) && keyCode === KEY_TAB) {
        let newCell = null;
        if (typeof this.keyboardOptions.moveCellOnTab === "function") {
            newCell = this.keyboardOptions.moveCellOnTab({
                cell: focusCell,
                grid: this,
                event: e,
            });
        }
        if (newCell) {
            _moveFocusCell.call(this, newCell.col, newCell.row, false);
        }
        else if (shiftKey) {
            if (!hMove.call(this, "W", false)) {
                const row = this.getMoveUpRowByKeyDownInternal(focusCell);
                if (0 > row) {
                    return;
                }
                _moveFocusCell.call(this, this.colCount - 1, row, false);
            }
        }
        else {
            if (!hMove.call(this, "E", false)) {
                const row = this.getMoveDownRowByKeyDownInternal(focusCell);
                if (this.rowCount <= row) {
                    return;
                }
                _moveFocusCell.call(this, 0, row, false);
            }
        }
        cancelEvent(e);
    }
    else if (((_b = this.keyboardOptions) === null || _b === void 0 ? void 0 : _b.moveCellOnEnter) && keyCode === KEY_ENTER) {
        let newCell = null;
        if (typeof this.keyboardOptions.moveCellOnEnter === "function") {
            newCell = this.keyboardOptions.moveCellOnEnter({
                cell: focusCell,
                grid: this,
                event: e,
            });
        }
        if (newCell) {
            _moveFocusCell.call(this, newCell.col, newCell.row, false);
        }
        else if (shiftKey) {
            if (!vMove.call(this, "N", false)) {
                const col = this.getMoveLeftColByKeyDownInternal(focusCell);
                if (0 > col) {
                    return;
                }
                _moveFocusCell.call(this, col, this.rowCount - 1, false);
            }
        }
        else {
            if (!vMove.call(this, "S", false)) {
                const col = this.getMoveRightColByKeyDownInternal(focusCell);
                if (this.colCount <= col) {
                    return;
                }
                _moveFocusCell.call(this, col, Math.min(this.frozenRowCount, this.rowCount - 1), false);
            }
        }
        cancelEvent(e);
    }
    else if (((_c = this.keyboardOptions) === null || _c === void 0 ? void 0 : _c.selectAllOnCtrlA) &&
        keyCode === KEY_ALPHA_A &&
        (e.ctrlKey || e.metaKey)) {
        this.selection.range = {
            start: { col: 0, row: 0 },
            end: { col: this.colCount - 1, row: this.rowCount - 1 },
        };
        this.invalidate();
        cancelEvent(e);
    }
    function move(grid, vDir, hDir) {
        const row = vDir === "S" ? grid.rowCount - 1 : vDir === "N" ? 0 : focusCell.row;
        const col = hDir === "E" ? grid.colCount - 1 : hDir === "W" ? 0 : focusCell.col;
        _moveFocusCell.call(grid, col, row, shiftKey);
    }
    function vMove(vDir, shiftKeyFlg = shiftKey) {
        const { col } = focusCell;
        let row;
        if (vDir === "S") {
            row = this.getMoveDownRowByKeyDownInternal(focusCell);
            if (this.rowCount <= row) {
                // Avoids the problem of the scroll position breaking due to a delayed scrolling event if user hold down the arrow keys.
                this.makeVisibleCell(col, this.rowCount - 1);
                return false;
            }
        }
        else {
            row = this.getMoveUpRowByKeyDownInternal(focusCell);
            if (row < 0) {
                // Avoids the problem of the scroll position breaking due to a delayed scrolling event if user hold down the arrow keys.
                this.makeVisibleCell(col, 0);
                return false;
            }
        }
        _moveFocusCell.call(this, col, row, shiftKeyFlg);
        return true;
    }
    function hMove(hDir, shiftKeyFlg = shiftKey) {
        const { row } = focusCell;
        let col;
        if (hDir === "E") {
            col = this.getMoveRightColByKeyDownInternal(focusCell);
            if (this.colCount <= col) {
                // Avoids the problem of the scroll position breaking due to a delayed scrolling event if user hold down the arrow keys.
                this.makeVisibleCell(this.colCount - 1, row);
                return false;
            }
        }
        else {
            col = this.getMoveLeftColByKeyDownInternal(focusCell);
            if (col < 0) {
                // Avoids the problem of the scroll position breaking due to a delayed scrolling event if user hold down the arrow keys.
                this.makeVisibleCell(0, row);
                return false;
            }
        }
        _moveFocusCell.call(this, col, row, shiftKeyFlg);
        return true;
    }
}
/** @private */
function _moveFocusCell(col, row, shiftKey) {
    const offset = this.getOffsetInvalidateCells();
    function extendRange(range) {
        if (offset > 0) {
            range.start.col -= offset;
            range.start.row -= offset;
            range.end.col += offset;
            range.end.row += offset;
        }
        return range;
    }
    const beforeRange = extendRange(this.selection.range);
    const beforeRect = this.getCellRangeRect(beforeRange);
    console.log(col, row, shiftKey);
    // this.selection._setFocusCell(col, row, shiftKey);
    // this.makeVisibleCell(col, row);
    // this.focusCell(col, row);
    const afterRange = extendRange(this.selection.range);
    const afterRect = this.getCellRangeRect(afterRange);
    if (afterRect.intersection(beforeRect)) {
        const invalidateRect = Rect_1.Rect.max(afterRect, beforeRect);
        _invalidateRect(this, invalidateRect);
    }
    else {
        _invalidateRect(this, beforeRect);
        _invalidateRect(this, afterRect);
    }
}
/** @private */
function _updatedSelection() {
    const { focusControl } = this[_];
    const { col: selCol, row: selRow } = this[_].selection.select;
    const results = this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.EDITABLEINPUT_CELL, {
        col: selCol,
        row: selRow,
    });
    const editMode = utils_1.array.findIndex(results, (v) => !!v) >= 0;
    focusControl.editMode = editMode;
    if (editMode) {
        focusControl.storeInputStatus();
        focusControl.setDefaultInputStatus();
        this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MODIFY_STATUS_EDITABLEINPUT_CELL, {
            col: selCol,
            row: selRow,
            input: focusControl.input,
        });
    }
}
/** @private */
function _getMouseAbstractPoint(grid, evt) {
    let e;
    if (isTouchEvent(evt)) {
        e = evt.changedTouches[0];
    }
    else {
        e = evt;
    }
    const clientX = e.clientX || e.pageX + window.scrollX;
    const clientY = e.clientY || e.pageY + window.scrollY;
    const rect = grid[_].canvas.getBoundingClientRect();
    if (rect.right <= clientX) {
        return null;
    }
    if (rect.bottom <= clientY) {
        return null;
    }
    const x = clientX - rect.left + grid[_].scroll.left;
    const y = clientY - rect.top + grid[_].scroll.top;
    return { x, y };
}
/** @private */
function _bindEvents() {
    // eslint-disable-next-line consistent-this, @typescript-eslint/no-this-alias
    const grid = this;
    const { handler, element, scrollable } = grid[_];
    const getCellEventArgsSet = (e) => {
        const abstractPos = _getMouseAbstractPoint(grid, e);
        if (!abstractPos) {
            return {};
        }
        const cell = grid.getCellAt(abstractPos.x, abstractPos.y);
        if (cell.col < 0 || cell.row < 0) {
            return {
                abstractPos,
                cell,
            };
        }
        const eventArgs = {
            col: cell.col,
            row: cell.row,
            event: e,
        };
        return {
            abstractPos,
            cell,
            eventArgs,
        };
    };
    const canResizeColumn = (col) => {
        if (grid[_].disableColumnResize) {
            return false;
        }
        const limit = grid[_].colWidthsLimit[col];
        if (!limit || !limit.min || !limit.max) {
            return true;
        }
        return limit.max !== limit.min;
    };
    handler.on(element, "mousedown", (e) => {
        const eventArgsSet = getCellEventArgsSet(e);
        const { abstractPos, eventArgs, cell } = eventArgsSet;
        if (!abstractPos) {
            return;
        }
        if (cell) {
            grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEDOWN_GRID, cell);
        }
        if (eventArgs) {
            const results = grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEDOWN_CELL, eventArgs);
            if (utils_1.array.findIndex(results, (v) => !v) >= 0) {
                return;
            }
        }
        if (getMouseButtons(e) !== 1 &&
            // For mobile safari. If we do not post-process here, the keyboard will not start in Mobile Safari.
            e.buttons !== 0) {
            return;
        }
        const resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y);
        if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
            //幅変更
            grid[_].columnResizer.start(resizeCol, e);
        }
        else {
            //選択
            grid[_].cellSelector.start(e);
        }
    });
    handler.on(element, "mouseup", (e) => {
        if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEUP_CELL)) {
            return;
        }
        const { eventArgs } = getCellEventArgsSet(e);
        if (eventArgs) {
            grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEUP_CELL, eventArgs);
        }
    });
    let doubleTapBefore = null;
    let longTouchId = null;
    let useTouch = null;
    function useTouchStart() {
        if ((useTouch === null || useTouch === void 0 ? void 0 : useTouch.timeoutId) != null)
            clearTimeout(useTouch.timeoutId);
        useTouch = {};
    }
    function useTouchEnd() {
        if (useTouch) {
            if (useTouch.timeoutId != null)
                clearTimeout(useTouch.timeoutId);
            useTouch.timeoutId = setTimeout(() => {
                useTouch = null;
            }, 350);
        }
    }
    handler.on(element, "touchstart", (e) => {
        // Since it is an environment where touch start can be used, it blocks mousemove that occurs after this.
        useTouchStart();
        const { eventArgs } = getCellEventArgsSet(e);
        if (eventArgs) {
            grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.TOUCHSTART_CELL, eventArgs);
        }
        if (!doubleTapBefore) {
            doubleTapBefore = eventArgs;
            setTimeout(() => {
                doubleTapBefore = null;
            }, 350);
        }
        else {
            if (eventArgs &&
                eventArgs.col === doubleTapBefore.col &&
                eventArgs.row === doubleTapBefore.row) {
                grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLTAP_CELL, eventArgs);
            }
            doubleTapBefore = null;
            if (e.defaultPrevented) {
                return;
            }
        }
        if (e.targetTouches.length > 1) {
            // If touchstart with multiple fingers,
            // it is not considered as an operation event.
            return;
        }
        longTouchId = setTimeout(() => {
            //長押しした場合選択モード
            longTouchId = null;
            const abstractPos = _getMouseAbstractPoint(grid, e);
            if (!abstractPos) {
                return;
            }
            const resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y, 15);
            if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
                //幅変更
                grid[_].columnResizer.start(resizeCol, e);
            }
            else {
                //選択
                grid[_].cellSelector.start(e);
            }
        }, 500);
    });
    function cancel(_e) {
        if (longTouchId) {
            clearTimeout(longTouchId);
            longTouchId = null;
        }
    }
    handler.on(element, "touchcancel", (e) => {
        cancel(e);
        useTouchEnd();
    });
    handler.on(element, "touchmove", cancel);
    handler.on(element, "touchend", (e) => {
        useTouchEnd();
        if (longTouchId) {
            clearTimeout(longTouchId);
            grid[_].cellSelector.select(e);
            longTouchId = null;
        }
    });
    let isMouseover = false;
    let mouseEnterCell = null;
    let mouseOverCell = null;
    function onMouseenterCell(cell, related) {
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEENTER_CELL, {
            col: cell.col,
            row: cell.row,
            related,
        });
        mouseEnterCell = cell;
    }
    function onMouseleaveCell(related) {
        const beforeMouseCell = mouseEnterCell;
        mouseEnterCell = null;
        if (beforeMouseCell) {
            grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSELEAVE_CELL, {
                col: beforeMouseCell.col,
                row: beforeMouseCell.row,
                related,
            });
        }
        return beforeMouseCell || undefined;
    }
    function onMouseoverCell(cell, related) {
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOVER_CELL, {
            col: cell.col,
            row: cell.row,
            related,
        });
        mouseOverCell = cell;
    }
    function onMouseoutCell(related) {
        const beforeMouseCell = mouseOverCell;
        mouseOverCell = null;
        if (beforeMouseCell) {
            grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOUT_CELL, {
                col: beforeMouseCell.col,
                row: beforeMouseCell.row,
                related,
            });
        }
        return beforeMouseCell || undefined;
    }
    const scrollElement = scrollable.getElement();
    handler.on(scrollElement, "mouseover", (_e) => {
        isMouseover = true;
    });
    handler.on(scrollElement, "mouseout", (_e) => {
        isMouseover = false;
        onMouseoutCell();
    });
    handler.on(element, "mouseleave", (_e) => {
        onMouseleaveCell();
    });
    handler.on(element, "mousemove", (e) => {
        if (useTouch) {
            // Probably a mousemove event triggered by a touchstart. Therefore, this event is blocked.
            return;
        }
        const eventArgsSet = getCellEventArgsSet(e);
        const { abstractPos, eventArgs } = eventArgsSet;
        if (eventArgs) {
            const beforeMouseCell = mouseEnterCell;
            if (beforeMouseCell) {
                grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, eventArgs);
                if (beforeMouseCell.col !== eventArgs.col ||
                    beforeMouseCell.row !== eventArgs.row) {
                    const enterCell = {
                        col: eventArgs.col,
                        row: eventArgs.row,
                    };
                    const outCell = onMouseoutCell(enterCell);
                    const leaveCell = onMouseleaveCell(enterCell);
                    onMouseenterCell(enterCell, leaveCell);
                    if (isMouseover) {
                        onMouseoverCell(enterCell, outCell);
                    }
                }
                else if (isMouseover && !mouseOverCell) {
                    onMouseoverCell({
                        col: eventArgs.col,
                        row: eventArgs.row,
                    });
                }
            }
            else {
                const enterCell = {
                    col: eventArgs.col,
                    row: eventArgs.row,
                };
                onMouseenterCell(enterCell);
                if (isMouseover) {
                    onMouseoverCell(enterCell);
                }
                grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, eventArgs);
            }
        }
        else {
            onMouseoutCell();
            onMouseleaveCell();
        }
        if (grid[_].columnResizer.moving(e) || grid[_].cellSelector.moving(e)) {
            return;
        }
        const { style } = element;
        if (!abstractPos) {
            if (style.cursor === "col-resize") {
                style.cursor = "";
            }
            return;
        }
        const resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y);
        if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
            style.cursor = "col-resize";
        }
        else {
            if (style.cursor === "col-resize") {
                style.cursor = "";
            }
        }
    });
    handler.on(element, "click", (e) => {
        if (grid[_].columnResizer.lastMoving(e) ||
            grid[_].cellSelector.lastMoving(e)) {
            return;
        }
        if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL)) {
            return;
        }
        const { eventArgs } = getCellEventArgsSet(e);
        if (!eventArgs) {
            return;
        }
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL, eventArgs);
    });
    handler.on(element, "contextmenu", (e) => {
        if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CONTEXTMENU_CELL)) {
            return;
        }
        const { eventArgs } = getCellEventArgsSet(e);
        if (!eventArgs) {
            return;
        }
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CONTEXTMENU_CELL, eventArgs);
    });
    handler.on(element, "dblclick", (e) => {
        if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLCLICK_CELL)) {
            return;
        }
        const { eventArgs } = getCellEventArgsSet(e);
        if (!eventArgs) {
            return;
        }
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLCLICK_CELL, eventArgs);
    });
    grid[_].focusControl.onKeyDown((evt) => {
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, evt);
    });
    grid[_].selection.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, (data) => {
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, data, data.selected);
    });
    scrollable.onScroll((e) => {
        _onScroll(grid, e);
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SCROLL, { event: e });
    });
    grid[_].focusControl.onKeyDownMove((e) => {
        _onKeyDownMove.call(grid, e);
    });
    grid.listen("copydata", (range) => {
        const copyRange = grid.getCopyRangeInternal(range);
        const copyLines = [];
        for (let { row } = copyRange.start; row <= copyRange.end.row; row++) {
            let copyLine = "";
            for (let { col } = copyRange.start; col <= copyRange.end.col; col++) {
                const copyCellValue = grid.getCopyCellValue(col, row, copyRange);
                let strCellValue;
                if (typeof copyCellValue === "string") {
                    strCellValue = copyCellValue;
                }
                else if (copyCellValue == null ||
                    // Asynchronous data is treated as empty.
                    (typeof Promise !== "undefined" && copyCellValue instanceof Promise)) {
                    strCellValue = "";
                }
                else {
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    strCellValue = `${copyCellValue}`;
                    if (/^\[object .*\]$/.exec(strCellValue)) {
                        // Ignore maybe object
                        strCellValue = "";
                    }
                }
                copyLine += /[\t\n]/.test(strCellValue)
                    ? // Need quote
                        `"${strCellValue.replace(/"/g, '""')}"`
                    : strCellValue;
                if (col < copyRange.end.col) {
                    copyLine += "\t";
                }
            }
            copyLines.push(copyLine);
        }
        return copyLines.join("\n");
    });
    grid[_].focusControl.onCopy((_e) => utils_1.array.find(grid.fireListeners("copydata", grid[_].selection.range), (r) => r != null));
    grid[_].focusControl.onPaste(({ value, event }) => {
        const { trimOnPaste } = grid;
        const normalizedValue = (0, paste_utils_1.normalizePasteValue)(value);
        const { col, row } = grid[_].selection.select;
        const multi = /[\r\n\u2028\u2029\t]/.test(normalizedValue); // is multi cell values
        let rangeBoxValues = null;
        const pasteCellEvent = {
            col,
            row,
            value,
            normalizeValue: trimOnPaste ? normalizedValue.trim() : normalizedValue,
            multi,
            get rangeBoxValues() {
                return (rangeBoxValues !== null && rangeBoxValues !== void 0 ? rangeBoxValues : (rangeBoxValues = (0, paste_utils_1.parsePasteRangeBoxValues)(normalizedValue, {
                    trimOnPaste,
                })));
            },
            event,
        };
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, pasteCellEvent);
    });
    grid[_].focusControl.onInput((value) => {
        const { col, row } = grid[_].selection.select;
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.INPUT_CELL, { col, row, value });
    });
    grid[_].focusControl.onDelete((event) => {
        const { col, row } = grid[_].selection.select;
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DELETE_CELL, { col, row, event });
    });
    grid[_].focusControl.onFocus((e) => {
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.FOCUS_GRID, e);
        grid[_].focusedGrid = true;
        const { col, row } = grid[_].selection.select;
        grid.invalidateCell(col, row);
    });
    grid[_].focusControl.onBlur((e) => {
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.BLUR_GRID, e);
        grid[_].focusedGrid = false;
        const { col, row } = grid[_].selection.select;
        grid.invalidateCell(col, row);
    });
}
/** @private */
function _getResizeColAt(grid, abstractX, abstractY, offset = 5) {
    if (grid[_].frozenRowCount <= 0) {
        return -1;
    }
    const frozenRect = _getFrozenRowsRect(grid);
    if (!frozenRect.inPoint(abstractX, abstractY)) {
        return -1;
    }
    const cell = grid.getCellAt(abstractX, abstractY);
    const cellRect = grid.getCellRect(cell.col, cell.row);
    if (abstractX < cellRect.left + offset) {
        return cell.col - 1;
    }
    if (cellRect.right - offset < abstractX) {
        return cell.col;
    }
    return -1;
}
/** @private */
function _getVisibleRect(grid) {
    const { scroll: { left, top }, canvas: { width, height }, } = grid[_];
    return new Rect_1.Rect(left, top, width, height);
}
/** @private */
function _getScrollableVisibleRect(grid) {
    let frozenColsWidth = 0;
    if (grid[_].frozenColCount > 0) {
        //固定列がある場合固定列分描画
        const frozenRect = _getFrozenColsRect(grid);
        frozenColsWidth = frozenRect.width;
    }
    let frozenRowsHeight = 0;
    if (grid[_].frozenRowCount > 0) {
        //固定列がある場合固定列分描画
        const frozenRect = _getFrozenRowsRect(grid);
        frozenRowsHeight = frozenRect.height;
    }
    return new Rect_1.Rect(grid[_].scrollable.scrollLeft + frozenColsWidth, grid[_].scrollable.scrollTop + frozenRowsHeight, grid[_].canvas.width - frozenColsWidth, grid[_].canvas.height - frozenRowsHeight);
}
/** @private */
function _toRelativeRect(grid, absoluteRect) {
    const rect = absoluteRect.copy();
    const visibleRect = _getVisibleRect(grid);
    rect.offsetLeft(-visibleRect.left);
    rect.offsetTop(-visibleRect.top);
    return rect;
}
//end private methods
//
//
//
//
/**
 * managing mouse down moving
 * @private
 */
class BaseMouseDownMover {
    constructor(grid) {
        this._grid = grid;
        this._handler = new EventHandler_1.EventHandler();
        this._events = {};
        this._started = false;
        this._moved = false;
    }
    moving(_e) {
        return !!this._started;
    }
    lastMoving(e) {
        // mouseup後すぐに、clickイベントを反応しないようにする制御要
        if (this.moving(e)) {
            return true;
        }
        const last = this._mouseEndPoint;
        if (!last) {
            return false;
        }
        const pt = _getMouseAbstractPoint(this._grid, e);
        return pt != null && pt.x === last.x && pt.y === last.y;
    }
    _bindMoveAndUp(e) {
        const events = this._events;
        const handler = this._handler;
        if (!isTouchEvent(e)) {
            events.mousemove = handler.on(document.body, "mousemove", (e) => this._mouseMove(e));
            events.mouseup = handler.on(document.body, "mouseup", (e) => this._mouseUp(e));
        }
        else {
            events.touchmove = handler.on(document.body, "touchmove", (e) => this._mouseMove(e), { passive: false });
            events.touchend = handler.on(document.body, "touchend", (e) => this._mouseUp(e));
            events.touchcancel = handler.on(document.body, "touchcancel", (e) => this._mouseUp(e));
        }
        this._started = true;
        this._moved = false;
    }
    _mouseMove(e) {
        if (!isTouchEvent(e)) {
            if (getMouseButtons(e) !== 1) {
                this._mouseUp(e);
                return;
            }
        }
        this._moved = this._moveInternal(e) || this._moved /*calculation on after*/;
        cancelEvent(e);
    }
    _moveInternal(_e) {
        //protected
        return false;
    }
    _mouseUp(e) {
        const events = this._events;
        const handler = this._handler;
        handler.off(events.mousemove);
        handler.off(events.touchmove);
        handler.off(events.mouseup);
        handler.off(events.touchend);
        // handler.off(this._events.mouseleave);
        handler.off(events.touchcancel);
        this._started = false;
        this._upInternal(e);
        // mouseup後すぐに、clickイベントを反応しないようにする制御要
        if (this._moved) {
            //移動が発生していたら
            this._mouseEndPoint = _getMouseAbstractPoint(this._grid, e);
            setTimeout(() => {
                this._mouseEndPoint = null;
            }, 10);
        }
    }
    _upInternal(_e) {
        //protected
    }
    dispose() {
        this._handler.dispose();
    }
}
/**
 * managing cell selection operation with mouse
 * @private
 */
class CellSelector extends BaseMouseDownMover {
    start(e) {
        const cell = this._getTargetCell(e);
        if (!cell) {
            return;
        }
        _moveFocusCell.call(this._grid, cell.col, cell.row, e.shiftKey);
        this._bindMoveAndUp(e);
        this._cell = cell;
        cancelEvent(e);
        _vibrate(e);
    }
    select(e) {
        const cell = this._getTargetCell(e);
        if (!cell) {
            return;
        }
        _moveFocusCell.call(this._grid, cell.col, cell.row, e.shiftKey);
        this._cell = cell;
    }
    _moveInternal(e) {
        const cell = this._getTargetCell(e);
        if (!cell) {
            return false;
        }
        const { col: oldCol, row: oldRow } = this._cell;
        const { col: newCol, row: newRow } = cell;
        if (oldCol === newCol && oldRow === newRow) {
            return false;
        }
        const grid = this._grid;
        _moveFocusCell.call(grid, newCol, newRow, true);
        //make visible
        const makeVisibleCol = (() => {
            if (newCol < oldCol && 0 < newCol) {
                // move left
                return newCol - 1;
            }
            else if (oldCol < newCol && newCol + 1 < grid.colCount) {
                // move right
                return newCol + 1;
            }
            return newCol;
        })();
        const makeVisibleRow = (() => {
            if (newRow < oldRow && 0 < newRow) {
                // move up
                return newRow - 1;
            }
            else if (oldRow < newRow && newRow + 1 < grid.rowCount) {
                // move down
                return newRow + 1;
            }
            return newRow;
        })();
        if (makeVisibleCol !== newCol || makeVisibleRow !== newRow) {
            grid.makeVisibleCell(makeVisibleCol, makeVisibleRow);
        }
        this._cell = cell;
        return true;
    }
    _getTargetCell(e) {
        const grid = this._grid;
        const abstractPos = _getMouseAbstractPoint(grid, e);
        if (!abstractPos) {
            return null;
        }
        const cell = grid.getCellAt(abstractPos.x, abstractPos.y);
        if (cell.col < 0 || cell.row < 0) {
            return null;
        }
        return cell;
    }
}
/**
 * managing row width changing operation with mouse
 * @private
 */
class ColumnResizer extends BaseMouseDownMover {
    constructor(grid) {
        super(grid);
        this._x = -1;
        this._preX = -1;
        this._invalidateAbsoluteLeft = -1;
        this._targetCol = -1;
    }
    start(col, e) {
        let pageX;
        if (!isTouchEvent(e)) {
            ({ pageX } = e);
        }
        else {
            ({ pageX } = e.changedTouches[0]);
        }
        this._x = pageX;
        this._preX = 0;
        this._bindMoveAndUp(e);
        this._targetCol = col;
        this._invalidateAbsoluteLeft = _getColsWidth(this._grid, 0, col - 1);
        cancelEvent(e);
        _vibrate(e);
    }
    _moveInternal(e) {
        const pageX = isTouchEvent(e) ? e.changedTouches[0].pageX : e.pageX;
        const x = pageX - this._x;
        const moveX = x - this._preX;
        this._preX = x;
        const pre = this._grid.getColWidth(this._targetCol);
        let afterSize = _adjustColWidth(this._grid, this._targetCol, pre + moveX);
        if (afterSize < 10 && moveX < 0) {
            afterSize = 10;
        }
        _storeAutoColWidthExprs(this._grid);
        _setColWidth(this._grid, this._targetCol, afterSize);
        const rect = _getVisibleRect(this._grid);
        rect.left = this._invalidateAbsoluteLeft;
        _invalidateRect(this._grid, rect);
        this._grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.RESIZE_COLUMN, {
            col: this._targetCol,
        });
        return true;
    }
    _upInternal(_e) {
        const grid = this._grid;
        if (grid.updateScroll()) {
            grid.invalidate();
        }
    }
}
/** @private */
function setSafeInputValue(input, value) {
    const { type } = input;
    input.type = "";
    input.value = value;
    if (type) {
        input.type = type;
    }
}
const IGNORE_STORE_ATTRS = ["style", "readonly"];
/**
 * Manage focus
 * @private
 */
class FocusControl extends EventTarget_1.EventTarget {
    constructor(grid, parentElement, scrollable, selection) {
        super();
        this._grid = grid;
        this._scrollable = scrollable;
        const handler = (this._handler = new EventHandler_1.EventHandler());
        const input = (this._input = document.createElement("input"));
        input.classList.add("grid-focus-control");
        input.readOnly = true;
        parentElement.appendChild(input);
        handler.on(input, "compositionstart", (_e) => {
            input.classList.add("composition");
            input.style.font = grid.font || "16px sans-serif";
            this._isComposition = true;
            if (this._compositionEnd) {
                clearTimeout(this._compositionEnd);
                delete this._compositionEnd;
            }
            grid.focus();
        });
        let lastInputValue;
        const inputClear = (storeLastInputValue) => {
            lastInputValue = input.value;
            if (this._isComposition) {
                return;
            }
            if (lastInputValue !== "") {
                setSafeInputValue(input, "");
            }
            if (!storeLastInputValue) {
                lastInputValue = "";
            }
        };
        const handleCompositionEnd = () => {
            this._isComposition = false;
            input.classList.remove("composition");
            input.style.font = "";
            const { value } = input;
            inputClear(false);
            if (!input.readOnly) {
                this.fireListeners("input", value);
            }
            if (this._compositionEnd) {
                clearTimeout(this._compositionEnd);
                delete this._compositionEnd;
            }
        };
        handler.on(input, "compositionend", (_e) => {
            this._compositionEnd = setTimeout(handleCompositionEnd, 1);
        });
        selection.listen("before_hook", () => {
            if (this._compositionEnd) {
                handleCompositionEnd();
            }
        });
        handler.on(input, "keypress", (e) => {
            if (this._isComposition) {
                return;
            }
            if (!input.readOnly && e.key && e.key.length === 1) {
                if (e.ctrlKey || e.metaKey) {
                    if (e.key === "c") {
                        //copy! for Firefox & Safari
                    }
                    else if (e.key === "v") {
                        //paste! for Firefox & Safari
                    }
                }
                else {
                    if (e.key === " ") {
                        // Since the full-width space cannot be determined, it is processed by "input".
                        return;
                    }
                    this.fireListeners("input", e.key);
                    cancelEvent(e);
                }
            }
            inputClear(true);
        });
        handler.on(input, "keydown", (e) => {
            var _a;
            if (this._isComposition) {
                if (this._compositionEnd) {
                    handleCompositionEnd();
                    cancelEvent(e);
                }
                return;
            }
            const keyCode = getKeyCode(e);
            let stopCellMove = false;
            const evt = {
                keyCode,
                event: e,
                stopCellMoving() {
                    stopCellMove = true;
                },
            };
            this.fireListeners("keydown", evt);
            if (!input.readOnly && lastInputValue) {
                // for Safari
                this.fireListeners("input", lastInputValue);
            }
            if (!stopCellMove)
                this.fireKeyDownMove(keyCode, e);
            if (((_a = this._grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.deleteCellValueOnDel) &&
                (keyCode === KEY_DEL || keyCode === KEY_BS)) {
                this.fireListeners("delete", e);
            }
            inputClear(true);
        });
        handler.on(input, "keyup", (_e) => {
            if (this._isComposition) {
                if (this._compositionEnd) {
                    handleCompositionEnd();
                }
            }
            inputClear(true);
        });
        handler.on(input, "input", (e) => {
            if (e.data === " " || e.data === "　") {
                // Since the full-width space cannot be determined on "keypress", it is processed by "input".
                this.fireListeners("input", e.data);
            }
            inputClear(true);
        });
        if (utils_1.browser.IE) {
            handler.on(document, "keydown", (e) => {
                if (e.target !== input) {
                    return;
                }
                const keyCode = getKeyCode(e);
                if (keyCode === KEY_ALPHA_C && e.ctrlKey) {
                    // When text is not selected copy-event is not emit, on IE.
                    setSafeInputValue(input, "dummy");
                    input.select();
                    setTimeout(() => {
                        setSafeInputValue(input, "");
                    }, 100);
                }
                else if (keyCode === KEY_ALPHA_V && e.ctrlKey) {
                    // When input is read-only paste-event is not emit, on IE.
                    if (input.readOnly) {
                        input.readOnly = false;
                        setTimeout(() => {
                            input.readOnly = true;
                            setSafeInputValue(input, "");
                        }, 10);
                    }
                }
            });
        }
        if (utils_1.browser.Edge) {
            handler.once(document, "keydown", (e) => {
                var _a;
                if (!(0, utils_1.isDescendantElement)(parentElement, e.target)) {
                    return;
                }
                // When the input has focus on the first page opening, the paste-event and copy-event is not emit, on Edge.
                const dummyInput = document.createElement("input");
                grid.getElement().appendChild(dummyInput);
                dummyInput.focus();
                input.focus();
                (_a = dummyInput.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(dummyInput);
            });
        }
        handler.on(document, "paste", (e) => {
            if (!(0, utils_1.isDescendantElement)(parentElement, e.target)) {
                return;
            }
            let pasteText = undefined;
            if (utils_1.browser.IE) {
                // IE
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                pasteText = window.clipboardData.getData("Text");
            }
            else {
                const clipboardData = e.clipboardData;
                if (clipboardData.items) {
                    // Chrome & Firefox & Edge
                    pasteText = clipboardData.getData("text/plain");
                }
                else {
                    // Safari
                    if (-1 !==
                        Array.prototype.indexOf.call(clipboardData.types, "text/plain")) {
                        pasteText = clipboardData.getData("Text");
                    }
                }
            }
            if (pasteText != null && pasteText.length) {
                this.fireListeners("paste", { value: pasteText, event: e });
            }
        });
        handler.on(document, "copy", (e) => {
            if (this._isComposition) {
                return;
            }
            if (!(0, utils_1.isDescendantElement)(parentElement, e.target)) {
                return;
            }
            setSafeInputValue(input, "");
            const data = utils_1.array.find(this.fireListeners("copy"), (r) => r != null);
            if (data != null) {
                cancelEvent(e);
                if (utils_1.browser.IE) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    window.clipboardData.setData("Text", data); // IE
                }
                else {
                    e.clipboardData.setData("text/plain", data); // Chrome, Firefox
                }
            }
        });
        handler.on(input, "focus", (e) => {
            console.log(e);
            // this.fireListeners("focus", e);
        });
        handler.on(input, "blur", (e) => {
            this.fireListeners("blur", e);
        });
    }
    fireKeyDownMove(keyCode, e) {
        var _a, _b, _c;
        const fn = this._keyDownMoveCallback;
        if (!fn) {
            return;
        }
        if (this._isComposition) {
            return;
        }
        if (keyCode === KEY_LEFT ||
            keyCode === KEY_UP ||
            keyCode === KEY_RIGHT ||
            keyCode === KEY_DOWN ||
            keyCode === KEY_HOME ||
            keyCode === KEY_END) {
            fn(e);
        }
        else if (((_a = this._grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab) &&
            keyCode === KEY_TAB) {
            fn(e);
        }
        else if (((_b = this._grid.keyboardOptions) === null || _b === void 0 ? void 0 : _b.moveCellOnEnter) &&
            keyCode === KEY_ENTER) {
            fn(e);
        }
        else if (((_c = this._grid.keyboardOptions) === null || _c === void 0 ? void 0 : _c.selectAllOnCtrlA) &&
            keyCode === KEY_ALPHA_A &&
            (e.ctrlKey || e.metaKey)) {
            fn(e);
        }
    }
    onKeyDownMove(fn) {
        this._keyDownMoveCallback = fn;
    }
    onKeyDown(fn) {
        return this.listen("keydown", fn);
    }
    onInput(fn) {
        return this.listen("input", fn);
    }
    onDelete(fn) {
        return this.listen("delete", fn);
    }
    onCopy(fn) {
        return this.listen("copy", fn);
    }
    onPaste(fn) {
        return this.listen("paste", fn);
    }
    onFocus(fn) {
        return this.listen("focus", fn);
    }
    onBlur(fn) {
        return this.listen("blur", fn);
    }
    focus() {
        // this._input.value = '';
        this._input.focus();
    }
    setFocusRect(rect) {
        const input = this._input;
        const top = this._scrollable.calcTop(rect.top);
        input.style.top = `${(top - style.getScrollBarSize()).toFixed()}px`; //position:relative だとずれるが、IEは position:relativeじゃないと最大値まで利用できない
        input.style.left = `${rect.left.toFixed()}px`;
        input.style.width = `${rect.width.toFixed()}px`;
        input.style.height = `${rect.height.toFixed()}px`;
    }
    get editMode() {
        return !this._input.readOnly;
    }
    set editMode(editMode) {
        this._input.readOnly = !editMode;
    }
    resetInputStatus() {
        var _a;
        const el = this._input;
        if (!el.classList.contains("grid-focus-control--stored-status")) {
            return;
        }
        const composition = el.classList.contains("composition");
        const attrs = el.attributes;
        const removeNames = [];
        for (let i = 0, n = attrs.length; i < n; i++) {
            const attr = attrs[i];
            if (IGNORE_STORE_ATTRS.indexOf(attr.name) >= 0)
                continue;
            if (!((_a = this._inputStatus) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(attr.nodeName))) {
                removeNames.push(attr.name);
            }
        }
        removeNames.forEach((removeName) => {
            el.removeAttribute(removeName);
        });
        for (const name in this._inputStatus) {
            el.setAttribute(name, this._inputStatus[name]);
        }
        if (composition) {
            el.classList.add("composition");
            el.style.font = this._grid.font || "16px sans-serif";
        }
        else {
            el.classList.remove("composition");
        }
        el.classList.remove("grid-focus-control--stored-status");
    }
    storeInputStatus() {
        const el = this._input;
        if (el.classList.contains("grid-focus-control--stored-status")) {
            return;
        }
        const inputStatus = (this._inputStatus = {});
        const attrs = el.attributes;
        for (let i = 0, n = attrs.length; i < n; i++) {
            const attr = attrs[i];
            if (IGNORE_STORE_ATTRS.indexOf(attr.name) >= 0)
                continue;
            inputStatus[attr.name] = attr.value;
        }
        el.classList.add("grid-focus-control--stored-status");
    }
    setDefaultInputStatus() {
        // なぜかスクロールが少しずつずれていくことがあるのでここではセットしない。
        // this._input.style.font = this._grid.font || '16px sans-serif';
    }
    get input() {
        return this._input;
    }
    dispose() {
        super.dispose();
        this._handler.dispose();
    }
}
/**
 * Selected area management
 */
class Selection extends EventTarget_1.EventTarget {
    constructor(grid) {
        super();
        this._grid = grid;
        this._sel = { col: 0, row: 0 };
        this._focus = { col: 0, row: 0 };
        this._start = { col: 0, row: 0 };
        this._end = { col: 0, row: 0 };
    }
    get range() {
        const start = this._start;
        const end = this._end;
        const startCol = Math.min(start.col, end.col);
        const startRow = Math.min(start.row, end.row);
        const endCol = Math.max(start.col, end.col);
        const endRow = Math.max(start.row, end.row);
        return {
            start: {
                col: startCol,
                row: startRow,
            },
            end: {
                col: endCol,
                row: endRow,
            },
        };
    }
    set range(range) {
        this._callBeforeHooks();
        const startCol = Math.min(range.start.col, range.end.col);
        const startRow = Math.min(range.start.row, range.end.row);
        const endCol = Math.max(range.start.col, range.end.col);
        const endRow = Math.max(range.start.row, range.end.row);
        this._wrapFireSelectedEvent(() => {
            this._sel = {
                col: startCol,
                row: startRow,
            };
            this._focus = {
                col: startCol,
                row: startRow,
            };
            this._start = {
                col: startCol,
                row: startRow,
            };
            this._end = {
                col: endCol,
                row: endRow,
            };
            _updatedSelection.call(this._grid);
        });
    }
    get focus() {
        const { col, row } = this._focus;
        return { col, row };
    }
    get select() {
        const { col, row } = this._sel;
        return { col, row };
    }
    set select(cell) {
        this._callBeforeHooks();
        this._wrapFireSelectedEvent(() => {
            const { col = 0, row = 0 } = cell;
            this._setSelectCell(col, row);
            this._setFocusCell(col, row, true, true);
            _updatedSelection.call(this._grid);
        });
    }
    _setSelectCell(col, row) {
        this._wrapFireSelectedEvent(() => {
            this._sel = { col, row };
            this._start = { col, row };
        });
    }
    _setFocusCell(col, row, keepSelect, ignoreBeforeHook) {
        if (!ignoreBeforeHook)
            this._callBeforeHooks();
        this._wrapFireSelectedEvent(() => {
            if (!keepSelect) {
                this._setSelectCell(col, row);
            }
            this._focus = { col, row };
            this._end = { col, row };
        });
    }
    _wrapFireSelectedEvent(callback) {
        if (this._isWrapped) {
            callback();
        }
        else {
            this._isWrapped = true;
            try {
                const before = {
                    col: this._sel.col,
                    row: this._sel.row,
                    selected: false,
                    after: null,
                };
                callback();
                const after = {
                    col: this._sel.col,
                    row: this._sel.row,
                    selected: true,
                    before: {
                        col: before.col,
                        row: before.row,
                    },
                };
                before.after = {
                    col: after.col,
                    row: after.row,
                };
                this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, before);
                this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, after);
            }
            finally {
                this._isWrapped = false;
            }
        }
    }
    _updateGridRange() {
        const { rowCount, colCount } = this._grid;
        const points = [this._sel, this._focus, this._start, this._end];
        let needChange = false;
        for (let i = 0; i < points.length; i++) {
            if (colCount <= points[i].col || rowCount <= points[i].row) {
                needChange = true;
                break;
            }
        }
        if (!needChange) {
            return false;
        }
        this._wrapFireSelectedEvent(() => {
            points.forEach((p) => {
                p.col = Math.min(colCount - 1, p.col);
                p.row = Math.min(rowCount - 1, p.row);
            });
        });
        return true;
    }
    _callBeforeHooks() {
        this.fireListeners("before_hook");
    }
}
/**
 * This class manages the drawing process for each layer
 */
/** @private */
class DrawLayers {
    constructor() {
        this._layers = {};
    }
    addDraw(level, fn) {
        const l = this._layers[level] || (this._layers[level] = new DrawLayer(level));
        l.addDraw(fn);
    }
    draw(ctx) {
        const list = [];
        for (const k in this._layers) {
            list.push(this._layers[k]);
        }
        list.sort((a, b) => a.level - b.level);
        list.forEach((l) => l.draw(ctx));
    }
}
/** @private */
class DrawLayer {
    constructor(level) {
        this._level = level;
        this._list = [];
    }
    get level() {
        return this._level;
    }
    addDraw(fn) {
        this._list.push(fn);
    }
    draw(ctx) {
        this._list.forEach((fn) => {
            ctx.save();
            try {
                fn(ctx);
            }
            finally {
                ctx.restore();
            }
        });
    }
}
/**
 * Context of cell drawing
 * @private
 */
class DrawCellContext {
    //  private _grid: any;
    //  private _onTerminate: any;
    /**
     * constructor
     * @param {number} col index of column
     * @param {number} row index of row
     * @param {CanvasRenderingContext2D} ctx context
     * @param {Rect} rect rect of cell area
     * @param {Rect} drawRect rect of drawing area
     * @param {boolean} drawing `true` if drawing is in progress
     * @param {object} selection the selection
     * @param {Array} drawLayers array of draw layers
     * @private
     */
    constructor(col, row, ctx, rect, drawRect, drawing, selection, drawLayers) {
        this._rectFilter = null;
        this._col = col;
        this._row = row;
        this._mode = 0;
        this._ctx = ctx;
        this._rect = rect;
        this._drawRect = drawRect;
        this._drawing = drawing;
        this._selection = selection;
        this._drawLayers = drawLayers;
        this._childContexts = [];
    }
    get drawing() {
        if (this._mode === 0) {
            return this._drawing;
        }
        else {
            return true;
        }
    }
    get row() {
        return this._row;
    }
    get col() {
        return this._col;
    }
    cancel() {
        this._cancel = true;
        this._childContexts.forEach((ctx) => {
            ctx.cancel();
        });
    }
    /**
     * select status.
     * @return {object} select status
     */
    getSelection() {
        return {
            select: this._selection.select,
            range: this._selection.range,
        };
    }
    /**
     * Canvas context.
     * @return {CanvasRenderingContext2D} Canvas context.
     */
    getContext() {
        if (this._mode === 0) {
            return this._ctx;
        }
        else {
            return _getInitContext.call(this._grid);
        }
    }
    /**
     * Rectangle of cell.
     * @return {Rect} rect Rectangle of cell.
     */
    getRect() {
        const rectFilter = this._rectFilter;
        return rectFilter
            ? rectFilter(this._getRectInternal())
            : this._getRectInternal();
    }
    setRectFilter(rectFilter) {
        this._rectFilter = rectFilter;
    }
    /**
     * Rectangle of Drawing range.
     * @return {Rect} Rectangle of Drawing range.
     */
    getDrawRect() {
        if (this._cancel) {
            return null;
        }
        if (this._mode === 0) {
            return this._drawRect;
        }
        else {
            if (this._isOutOfRange()) {
                return null;
            }
            const absoluteRect = this._grid.getCellRect(this._col, this._row);
            return this._toRelativeDrawRect(absoluteRect);
        }
    }
    _isOutOfRange() {
        const { colCount, rowCount } = this._grid;
        return colCount <= this._col || rowCount <= this._row;
    }
    /**
     * get Context of current state
     * @return {DrawCellContext} current DrawCellContext.
     */
    toCurrentContext() {
        if (this._mode === 0) {
            return this;
        }
        else {
            const absoluteRect = this._grid.getCellRect(this._col, this._row);
            const rect = _toRelativeRect(this._grid, absoluteRect);
            const drawRect = this._isOutOfRange()
                ? null
                : this._toRelativeDrawRect(absoluteRect);
            const context = new DrawCellContext(this._col, this._row, this.getContext(), rect, drawRect, this.drawing, this._selection, this._drawLayers);
            // toCurrentContext は自分の toCurrentContextを呼ばせる
            context.toCurrentContext = this.toCurrentContext.bind(this);
            this._childContexts.push(context);
            if (this._cancel) {
                context.cancel();
            }
            context._rectFilter = this._rectFilter;
            return context;
        }
    }
    addLayerDraw(level, fn) {
        this._drawLayers.addDraw(level, fn);
    }
    _toRelativeDrawRect(absoluteRect) {
        const visibleRect = _getVisibleRect(this._grid);
        let rect = absoluteRect.copy();
        if (!rect.intersection(visibleRect)) {
            return null;
        }
        const grid = this._grid;
        const isFrozenCell = grid.isFrozenCell(this._col, this._row);
        if (grid.frozenColCount >= 0 && (!isFrozenCell || !isFrozenCell.col)) {
            const fRect = grid.getCellRect(grid.frozenColCount - 1, this._row);
            rect = Rect_1.Rect.bounds(Math.max(rect.left, fRect.right), rect.top, rect.right, rect.bottom);
        }
        if (grid.frozenRowCount >= 0 && (!isFrozenCell || !isFrozenCell.row)) {
            const fRect = grid.getCellRect(this._col, grid.frozenRowCount - 1);
            rect = Rect_1.Rect.bounds(rect.left, Math.max(rect.top, fRect.bottom), rect.right, rect.bottom);
        }
        if (!rect.intersection(visibleRect)) {
            return null;
        }
        rect.offsetLeft(-visibleRect.left);
        rect.offsetTop(-visibleRect.top);
        return rect;
    }
    _delayMode(grid, onTerminate) {
        this._mode = 1;
        this._ctx = null;
        this._rect = null;
        this._drawRect = null;
        this._grid = grid;
        this._onTerminate = onTerminate;
    }
    /**
     * terminate
     * @return {void}
     */
    terminate() {
        var _a;
        if (this._mode !== 0) {
            (_a = this._onTerminate) === null || _a === void 0 ? void 0 : _a.call(this);
        }
    }
    _getRectInternal() {
        if (this._mode === 0) {
            return this._rect;
        }
        else {
            if (this._rect) {
                return this._rect;
            }
            return this._grid.getCellRelativeRect(this._col, this._row);
        }
    }
}
/** @private */
const protectedKey = _;
/**
 * DrawGrid
 * @classdesc cheetahGrid.core.DrawGrid
 * @memberof cheetahGrid.core
 */
class DrawGrid extends EventTarget_1.EventTarget {
    static get EVENT_TYPE() {
        return DG_EVENT_TYPE_1.DG_EVENT_TYPE;
    }
    constructor(options = {}) {
        super();
        const { rowCount = 10, colCount = 10, frozenColCount = 0, frozenRowCount = 0, defaultRowHeight = 40, defaultColWidth = 80, font, underlayBackgroundColor, keyboardOptions, parentElement, disableColumnResize, trimOnPaste, } = options;
        const protectedSpace = (this[_] = {});
        style.initDocument();
        protectedSpace.element = createRootElement();
        protectedSpace.scrollable = new Scrollable_1.Scrollable();
        protectedSpace.handler = new EventHandler_1.EventHandler();
        protectedSpace.selection = new Selection(this);
        protectedSpace.focusControl = new FocusControl(this, protectedSpace.scrollable.getElement(), protectedSpace.scrollable, protectedSpace.selection);
        protectedSpace.canvas = hiDPI.transform(document.createElement("canvas"));
        protectedSpace.context = protectedSpace.canvas.getContext("2d", {
            alpha: false,
        });
        protectedSpace.rowCount = rowCount;
        protectedSpace.colCount = colCount;
        protectedSpace.frozenColCount = frozenColCount;
        protectedSpace.frozenRowCount = frozenRowCount;
        protectedSpace.defaultRowHeight = defaultRowHeight;
        protectedSpace.defaultColWidth = defaultColWidth;
        protectedSpace.font = font;
        protectedSpace.underlayBackgroundColor = underlayBackgroundColor;
        protectedSpace.keyboardOptions = keyboardOptions;
        protectedSpace.disableColumnResize = disableColumnResize;
        protectedSpace.trimOnPaste = trimOnPaste !== null && trimOnPaste !== void 0 ? trimOnPaste : false;
        /////
        protectedSpace.rowHeightsMap = new NumberMap_1.NumberMap();
        protectedSpace.colWidthsMap = new NumberMap_1.NumberMap();
        protectedSpace.colWidthsLimit = {};
        protectedSpace.calcWidthContext = {
            _: protectedSpace,
            get full() {
                return this._.canvas.width;
            },
            get em() {
                return (0, canvases_1.getFontSize)(this._.context, this._.font).width;
            },
        };
        protectedSpace.columnResizer = new ColumnResizer(this);
        protectedSpace.cellSelector = new CellSelector(this);
        protectedSpace.drawCells = {};
        protectedSpace.cellTextOverflows = {};
        protectedSpace.focusedGrid = false;
        protectedSpace.element.appendChild(protectedSpace.canvas);
        protectedSpace.element.appendChild(protectedSpace.scrollable.getElement());
        protectedSpace.scroll = {
            left: 0,
            top: 0,
        };
        this.updateScroll();
        if (parentElement) {
            parentElement.appendChild(protectedSpace.element);
            this.updateSize();
        }
        else {
            this.updateSize();
        }
        _bindEvents.call(this);
        this.bindEventsInternal();
    }
    /**
     * Get root element.
     * @returns {HTMLElement} root element
     */
    getElement() {
        return this[_].element;
    }
    /**
     * Get canvas element.
     */
    get canvas() {
        return this[_].canvas;
    }
    /**
     * Focus the grid.
     * @return {void}
     */
    focus() {
        const { col, row } = this[_].selection.select;
        this.focusCell(col, row);
    }
    hasFocusGrid() {
        return this[_].focusedGrid;
    }
    /**
     * Get the selection instance.
     */
    get selection() {
        return this[_].selection;
    }
    /**
     * Get the number of rows.
     */
    get rowCount() {
        return this[_].rowCount;
    }
    /**
     * Set the number of rows.
     */
    set rowCount(rowCount) {
        this[_].rowCount = rowCount;
        this.updateScroll();
        if (this[_].selection._updateGridRange()) {
            const { col, row } = this[_].selection.focus;
            this.makeVisibleCell(col, row);
            this.setFocusCursor(col, row);
        }
    }
    /**
     * Get the number of columns.
     */
    get colCount() {
        return this[_].colCount;
    }
    /**
     * Set the number of columns.
     */
    set colCount(colCount) {
        this[_].colCount = colCount;
        this.updateScroll();
        if (this[_].selection._updateGridRange()) {
            const { col, row } = this[_].selection.focus;
            this.makeVisibleCell(col, row);
            this.setFocusCursor(col, row);
        }
    }
    /**
     * Get the number of frozen columns.
     */
    get frozenColCount() {
        return this[_].frozenColCount;
    }
    /**
     * Set the number of frozen columns.
     */
    set frozenColCount(frozenColCount) {
        this[_].frozenColCount = frozenColCount;
    }
    /**
     * Get the number of frozen rows.
     */
    get frozenRowCount() {
        return this[_].frozenRowCount;
    }
    /**
     * Set the number of frozen rows.
     */
    set frozenRowCount(frozenRowCount) {
        this[_].frozenRowCount = frozenRowCount;
    }
    /**
     * Get the default row height.
     *
     */
    get defaultRowHeight() {
        return this[_].defaultRowHeight;
    }
    /**
     * Set the default row height.
     */
    set defaultRowHeight(defaultRowHeight) {
        this[_].defaultRowHeight = defaultRowHeight;
    }
    /**
     * Get the default column width.
     */
    get defaultColWidth() {
        return this[_].defaultColWidth;
    }
    /**
     * Set the default column width.
     */
    set defaultColWidth(defaultColWidth) {
        this[_].defaultColWidth = defaultColWidth;
    }
    /**
     * Get the font definition as a string.
     */
    get font() {
        return this[_].font;
    }
    /**
     * Set the font definition with the given string.
     */
    set font(font) {
        this[_].font = font;
    }
    /**
     * Get the background color of the underlay.
     */
    get underlayBackgroundColor() {
        return this[_].underlayBackgroundColor;
    }
    /**
     * Set the background color of the underlay.
     */
    set underlayBackgroundColor(underlayBackgroundColor) {
        this[_].underlayBackgroundColor = underlayBackgroundColor;
    }
    /**
     * If set to true, trim the pasted text on pasting.
     */
    get trimOnPaste() {
        return this[_].trimOnPaste;
    }
    set trimOnPaste(trimOnPaste) {
        this[_].trimOnPaste = trimOnPaste;
    }
    get keyboardOptions() {
        var _a;
        return (_a = this[_].keyboardOptions) !== null && _a !== void 0 ? _a : null;
    }
    set keyboardOptions(keyboardOptions) {
        this[_].keyboardOptions = keyboardOptions !== null && keyboardOptions !== void 0 ? keyboardOptions : undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    configure(name, value) {
        const cfg = this[_].config || (this[_].config = {});
        if (value != null) {
            cfg[name] = value;
        }
        return cfg[name];
    }
    /**
     * Apply the changed size.
     * @return {void}
     */
    updateSize() {
        //スタイルをクリアしてサイズ値を取得
        const { canvas } = this[_];
        canvas.style.width = "";
        canvas.style.height = "";
        const width = Math.floor(canvas.offsetWidth ||
            canvas.parentElement.offsetWidth -
                style.getScrollBarSize() /*for legacy*/);
        const height = Math.floor(canvas.offsetHeight ||
            canvas.parentElement.offsetHeight -
                style.getScrollBarSize() /*for legacy*/);
        canvas.width = width;
        canvas.height = height;
        //整数で一致させるためstyleをセットして返す
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const { focus } = this[_].selection;
        this[_].focusControl.setFocusRect(this.getCellRect(focus.col, focus.row));
    }
    /**
     * Apply the changed scroll size.
     * @return {boolean} `true` if there was a change in the scroll size
     */
    updateScroll() {
        const { scrollable } = this[_];
        const newHeight = _getScrollHeight.call(this);
        const newWidth = _getScrollWidth(this);
        if (newHeight === scrollable.scrollHeight &&
            newWidth === scrollable.scrollWidth) {
            return false;
        }
        scrollable.setScrollSize(newWidth, newHeight);
        this[_].scroll = {
            left: scrollable.scrollLeft,
            top: scrollable.scrollTop,
        };
        const { focus } = this[_].selection;
        this[_].focusControl.setFocusRect(this.getCellRect(focus.col, focus.row));
        return true;
    }
    /**
     * Get the row height of the given the row index.
     * @param  {number} row The row index
     * @return {number} The row height
     */
    getRowHeight(row) {
        return _getRowHeight.call(this, row);
    }
    /**
     * Set the row height of the given the row index.
     * @param  {number} row The row index
     * @param  {number} height The row height
     * @return {void}
     */
    setRowHeight(row, height) {
        _setRowHeight(this, row, height);
    }
    /**
     * Get the column width of the given the column index.
     * @param  {number} col The column index
     * @return {number} The column width
     */
    getColWidth(col) {
        return _getColWidth(this, col);
    }
    /**
     * Set the column width of the given the column index.
     * @param  {number} col The column index
     * @param  {number} width The column width
     * @return {void}
     */
    setColWidth(col, width) {
        _setColWidth(this, col, width);
    }
    /**
     * Get the column max width of the given the column index.
     * @param  {number} col The column index
     * @return {number} The column max width
     */
    getMaxColWidth(col) {
        const obj = this[_].colWidthsLimit[col];
        return (obj && obj.max) || undefined;
    }
    /**
     * Set the column max width of the given the column index.
     * @param  {number} col The column index
     * @param  {number} maxwidth The column max width
     * @return {void}
     */
    setMaxColWidth(col, maxwidth) {
        const obj = this[_].colWidthsLimit[col] || (this[_].colWidthsLimit[col] = {});
        if (maxwidth != null) {
            obj.max = maxwidth;
        }
        else {
            delete obj.max;
        }
    }
    /**
     * Get the column min width of the given the column index.
     * @param  {number} col The column index
     * @return {number} The column min width
     */
    getMinColWidth(col) {
        const obj = this[_].colWidthsLimit[col];
        return (obj && obj.min) || undefined;
    }
    /**
     * Set the column min width of the given the column index.
     * @param  {number} col The column index
     * @param  {number} minwidth The column min width
     * @return {void}
     */
    setMinColWidth(col, minwidth) {
        const obj = this[_].colWidthsLimit[col] || (this[_].colWidthsLimit[col] = {});
        if (minwidth != null) {
            obj.min = minwidth;
        }
        else {
            delete obj.min;
        }
    }
    /**
     * Get the rect of the cell.
     * @param {number} col index of column, of the cell
     * @param {number} row index of row, of the cell
     * @returns {Rect} the rect of the cell.
     */
    getCellRect(col, row) {
        const isFrozenCell = this.isFrozenCell(col, row);
        let absoluteLeft = _getColsWidth(this, 0, col - 1);
        const width = _getColWidth(this, col);
        if (isFrozenCell && isFrozenCell.col) {
            absoluteLeft += this[_].scroll.left;
        }
        let absoluteTop = _getRowsHeight.call(this, 0, row - 1);
        const height = _getRowHeight.call(this, row);
        if (isFrozenCell && isFrozenCell.row) {
            absoluteTop += this[_].scroll.top;
        }
        return new Rect_1.Rect(absoluteLeft, absoluteTop, width, height);
    }
    /**
     * Get the relative rectangle of the cell.
     * @param {number} col index of column, of the cell
     * @param {number} row index of row, of the cell
     * @returns {Rect} the rect of the cell.
     */
    getCellRelativeRect(col, row) {
        return _toRelativeRect(this, this.getCellRect(col, row));
    }
    /**
     * Get the rectangle of the cells area.
     * @param {number} startCol index of the starting column, of the cell
     * @param {number} startRow index of the starting row, of the cell
     * @param {number} endCol index of the ending column, of the cell
     * @param {number} endRow index of the ending row, of the cell
     * @returns {Rect} the rect of the cells.
     */
    getCellsRect(startCol, startRow, endCol, endRow) {
        const isFrozenStartCell = this.isFrozenCell(startCol, startRow);
        const isFrozenEndCell = this.isFrozenCell(endCol, endRow);
        let absoluteLeft = _getColsWidth(this, 0, startCol - 1);
        let width = _getColsWidth(this, startCol, endCol);
        if (isFrozenStartCell && isFrozenStartCell.col) {
            const scrollLeft = this[_].scroll.left;
            absoluteLeft += scrollLeft;
            if (!isFrozenEndCell || !isFrozenEndCell.col) {
                width -= scrollLeft;
                width = Math.max(width, _getColsWidth(this, startCol, this.frozenColCount - 1));
            }
        }
        let absoluteTop = _getRowsHeight.call(this, 0, startRow - 1);
        let height = _getRowsHeight.call(this, startRow, endRow);
        if (isFrozenStartCell && isFrozenStartCell.row) {
            const scrollTop = this[_].scroll.top;
            absoluteTop += scrollTop;
            if (!isFrozenEndCell || !isFrozenEndCell.row) {
                height -= scrollTop;
                height = Math.max(height, _getColsWidth(this, startRow, this.frozenRowCount - 1));
            }
        }
        return new Rect_1.Rect(absoluteLeft, absoluteTop, width, height);
    }
    getCellRangeRect(range) {
        return this.getCellsRect(range.start.col, range.start.row, range.end.col, range.end.row);
    }
    isFrozenCell(col, row) {
        const { frozenRowCount, frozenColCount } = this[_];
        const isFrozenRow = frozenRowCount > 0 && row < frozenRowCount;
        const isFrozenCol = frozenColCount > 0 && col < frozenColCount;
        if (isFrozenRow || isFrozenCol) {
            return {
                row: isFrozenRow,
                col: isFrozenCol,
            };
        }
        else {
            return null;
        }
    }
    getRowAt(absoluteY) {
        const frozen = _getTargetFrozenRowAt(this, absoluteY);
        if (frozen) {
            return frozen.row;
        }
        const row = _getTargetRowAt.call(this, absoluteY);
        return row ? row.row : -1;
    }
    getColAt(absoluteX) {
        const frozen = _getTargetFrozenColAt(this, absoluteX);
        if (frozen) {
            return frozen.col;
        }
        const col = _getTargetColAt(this, absoluteX);
        return col ? col.col : -1;
    }
    getCellAt(absoluteX, absoluteY) {
        return {
            row: this.getRowAt(absoluteY),
            col: this.getColAt(absoluteX),
        };
    }
    /**
     * Scroll to where cell is visible.
     * @param  {number} col The column index.
     * @param  {number} row The row index
     * @return {void}
     */
    makeVisibleCell(col, row) {
        const isFrozenCell = this.isFrozenCell(col, row);
        if (isFrozenCell && isFrozenCell.col && isFrozenCell.row) {
            return;
        }
        const rect = this.getCellRect(col, row);
        const visibleRect = _getScrollableVisibleRect(this);
        if (visibleRect.contains(rect)) {
            return;
        }
        const { scrollable } = this[_];
        if (!isFrozenCell || !isFrozenCell.col) {
            if (rect.left < visibleRect.left) {
                scrollable.scrollLeft -= visibleRect.left - rect.left;
            }
            else if (visibleRect.right < rect.right) {
                scrollable.scrollLeft -= visibleRect.right - rect.right;
            }
        }
        if (!isFrozenCell || !isFrozenCell.row) {
            if (rect.top < visibleRect.top) {
                scrollable.scrollTop -= visibleRect.top - rect.top;
            }
            else if (visibleRect.bottom < rect.bottom) {
                scrollable.scrollTop -= visibleRect.bottom - rect.bottom;
            }
        }
    }
    /**
     * Moves the focus cursor to the given cell.
     * @param  {number} col The column index.
     * @param  {number} row The row index
     * @return {void}
     */
    setFocusCursor(col, row) {
        const { focusControl } = this[_];
        const oldEditMode = focusControl.editMode;
        focusControl.setFocusRect(this.getCellRect(col, row));
        _updatedSelection.call(this);
        if (oldEditMode && !focusControl.editMode) {
            focusControl.resetInputStatus();
        }
    }
    /**
     * Focus the cell.
     * @param  {number} col The column index.
     * @param  {number} row The row index
     * @return {void}
     */
    focusCell(col, row) {
        this.setFocusCursor(col, row);
        // Failure occurs in IE if focus is not last
        this[_].focusControl.focus();
    }
    /**
     * Redraws the range of the given cell.
     * @param  {number} col The column index of cell.
     * @param  {number} row The row index of cell.
     * @return {void}
     */
    invalidateCell(col, row) {
        this.invalidateGridRect(col, row);
    }
    /**
     * Redraws the range of the given cells.
     * @param {number} startCol index of the starting column, of the cell
     * @param {number} startRow index of the starting row, of the cell
     * @param {number} endCol index of the ending column, of the cell
     * @param {number} endRow index of the ending row, of the cell
     * @return {void}
     */
    invalidateGridRect(startCol, startRow, endCol = startCol, endRow = startRow) {
        const offset = this.getOffsetInvalidateCells();
        if (offset > 0) {
            startCol -= offset;
            startRow -= offset;
            endCol += offset;
            endRow += offset;
        }
        const visibleRect = _getVisibleRect(this);
        const cellsRect = this.getCellsRect(startCol, startRow, endCol, endRow);
        const invalidateTarget = visibleRect.intersection(cellsRect);
        if (invalidateTarget) {
            const { frozenColCount, frozenRowCount } = this[_];
            if (frozenColCount > 0 && endCol >= frozenColCount) {
                const frozenRect = _getFrozenColsRect(this);
                if (frozenRect.intersection(invalidateTarget)) {
                    invalidateTarget.left = Math.min(frozenRect.right - 1, invalidateTarget.left);
                }
            }
            if (frozenRowCount > 0 && endRow >= frozenRowCount) {
                const frozenRect = _getFrozenRowsRect(this);
                if (frozenRect.intersection(invalidateTarget)) {
                    invalidateTarget.top = Math.min(frozenRect.bottom - 1, invalidateTarget.top);
                }
            }
            _invalidateRect(this, invalidateTarget);
        }
    }
    invalidateCellRange(range) {
        this.invalidateGridRect(range.start.col, range.start.row, range.end.col, range.end.row);
    }
    /**
     * Redraws the whole grid.
     * @return {void}
     */
    invalidate() {
        const visibleRect = _getVisibleRect(this);
        _invalidateRect(this, visibleRect);
    }
    /**
     * Get the number of scrollable rows fully visible in the grid. visibleRowCount does not include the frozen rows counted by the frozenRowCount property. It does not include any partially visible rows on the bottom of the grid.
     * @returns {number}
     */
    get visibleRowCount() {
        const { frozenRowCount } = this;
        const visibleRect = _getVisibleRect(this);
        const visibleTop = frozenRowCount > 0
            ? visibleRect.top + _getRowsHeight.call(this, 0, frozenRowCount - 1)
            : visibleRect.top;
        const initRow = _getTargetRowAt.call(this, visibleTop);
        if (!initRow) {
            return 0;
        }
        const startRow = Math.max(initRow.top >= visibleTop ? initRow.row : initRow.row + 1, frozenRowCount);
        let absoluteTop = _getRowsHeight.call(this, 0, startRow - 1);
        let count = 0;
        const { rowCount } = this;
        for (let row = startRow; row < rowCount; row++) {
            const height = _getRowHeight.call(this, row);
            const bottom = absoluteTop + height;
            if (visibleRect.bottom < bottom) {
                break;
            }
            count++;
            absoluteTop = bottom;
        }
        return count;
    }
    /**
     * Get the number of scrollable columns fully visible in the grid. visibleColCount does not include the frozen columns counted by the frozenColCount property. It does not include any partially visible columns on the right of the grid.
     * @returns {number}
     */
    get visibleColCount() {
        const { frozenColCount } = this;
        const visibleRect = _getVisibleRect(this);
        const visibleLeft = frozenColCount > 0
            ? visibleRect.left + _getColsWidth(this, 0, frozenColCount - 1)
            : visibleRect.left;
        const initCol = _getTargetColAt(this, visibleLeft);
        if (!initCol) {
            return 0;
        }
        const startCol = Math.max(initCol.left >= visibleLeft ? initCol.col : initCol.col + 1, frozenColCount);
        let absoluteLeft = _getColsWidth(this, 0, startCol - 1);
        let count = 0;
        const { colCount } = this;
        for (let col = startCol; col < colCount; col++) {
            const width = _getColWidth(this, col);
            const right = absoluteLeft + width;
            if (visibleRect.right < right) {
                break;
            }
            count++;
            absoluteLeft = right;
        }
        return count;
    }
    /**
     * Get the index of the first row in the scrollable region that is visible.
     * @returns {number}
     */
    get topRow() {
        const { frozenRowCount } = this;
        const visibleRect = _getVisibleRect(this);
        const visibleTop = frozenRowCount > 0
            ? visibleRect.top + _getRowsHeight.call(this, 0, frozenRowCount - 1)
            : visibleRect.top;
        const initRow = _getTargetRowAt.call(this, visibleTop);
        if (!initRow) {
            return 0;
        }
        return Math.max(initRow.top >= visibleTop ? initRow.row : initRow.row + 1, frozenRowCount);
    }
    /**
     * Get the index of the first column in the scrollable region that is visible.
     * @returns {number}
     */
    get leftCol() {
        const { frozenColCount } = this;
        const visibleRect = _getVisibleRect(this);
        const visibleLeft = frozenColCount > 0
            ? visibleRect.left + _getColsWidth(this, 0, frozenColCount - 1)
            : visibleRect.left;
        const initCol = _getTargetColAt(this, visibleLeft);
        if (!initCol) {
            return 0;
        }
        return Math.max(initCol.left >= visibleLeft ? initCol.col : initCol.col + 1, frozenColCount);
    }
    /**
     * gets or sets the number of pixels that an element's content is scrolled vertically
     */
    get scrollTop() {
        return this[_].scrollable.scrollTop;
    }
    set scrollTop(scrollTop) {
        this[_].scrollable.scrollTop = scrollTop;
    }
    /**
     * gets or sets the number of pixels that an element's content is scrolled from its left edge
     */
    get scrollLeft() {
        return this[_].scrollable.scrollLeft;
    }
    set scrollLeft(scrollLeft) {
        this[_].scrollable.scrollLeft = scrollLeft;
    }
    /**
     * Get the value of cell with the copy action.
     * <p>
     * Please implement
     * </p>
     *
     * @protected
     * @param col Column index of cell.
     * @param row Row index of cell.
     * @param range Copy range.
     * @return {string} the value of cell
     */
    getCopyCellValue(_col, _row, _range) {
        //Please implement get cell value!!
        return undefined;
    }
    /**
     * Get the overflowed text in the cell rectangle, from the given cell.
     * @param  {number} col The column index.
     * @param  {number} row The row index
     * @return {string | null} The text overflowing the cell rect.
     */
    getCellOverflowText(col, row) {
        const key = `${col}:${row}`;
        return this[_].cellTextOverflows[key] || null;
    }
    /**
     * Set the overflowed text in the cell rectangle, to the given cell.
     * @param  {number} col The column index.
     * @param  {number} row The row index
     * @param  {string} overflowText The overflowed text in the cell rectangle.
     * @return {void}
     */
    setCellOverflowText(col, row, overflowText) {
        const key = `${col}:${row}`;
        if (overflowText) {
            this[_].cellTextOverflows[key] =
                typeof overflowText === "string" ? overflowText.trim() : overflowText;
        }
        else {
            delete this[_].cellTextOverflows[key];
        }
    }
    addDisposable(disposable) {
        if (!disposable ||
            !disposable.dispose ||
            typeof disposable.dispose !== "function") {
            throw new Error("not disposable!");
        }
        const disposables = (this[_].disposables = this[_].disposables || []);
        disposables.push(disposable);
    }
    /**
     * Dispose the grid instance.
     * @returns {void}
     */
    dispose() {
        super.dispose();
        const protectedSpace = this[_];
        protectedSpace.handler.dispose();
        protectedSpace.scrollable.dispose();
        protectedSpace.focusControl.dispose();
        protectedSpace.columnResizer.dispose();
        protectedSpace.cellSelector.dispose();
        if (protectedSpace.disposables) {
            protectedSpace.disposables.forEach((disposable) => disposable.dispose());
            protectedSpace.disposables = null;
        }
        const { parentElement } = protectedSpace.element;
        if (parentElement) {
            parentElement.removeChild(protectedSpace.element);
        }
    }
    getAttachCellsArea(range) {
        return {
            element: this.getElement(),
            rect: _toRelativeRect(this, this.getCellRangeRect(range)),
        };
    }
    onKeyDownMove(evt) {
        _onKeyDownMove.call(this, evt);
    }
    bindEventsInternal() {
        //nop
    }
    getTargetRowAtInternal(_absoluteY) {
        //継承用 設定を無視して計算する場合継承して実装
    }
    getRowsHeightInternal(_startRow, _endRow) {
        //継承用 設定を無視して計算する場合継承して実装
    }
    getRowHeightInternal(_row) {
        //継承用 設定を無視して計算する場合継承して実装
    }
    getScrollHeightInternal(_row) {
        //継承用 設定を無視して計算する場合継承して実装
    }
    getMoveLeftColByKeyDownInternal({ col }) {
        return col - 1;
    }
    getMoveRightColByKeyDownInternal({ col }) {
        return col + 1;
    }
    getMoveUpRowByKeyDownInternal({ row }) {
        return row - 1;
    }
    getMoveDownRowByKeyDownInternal({ row }) {
        return row + 1;
    }
    getOffsetInvalidateCells() {
        return 0;
    }
    getCopyRangeInternal(range) {
        return range;
    }
    _getInitContext() {
        const ctx = this[_].context;
        //初期化
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.lineWidth = 1;
        ctx.font = this.font || "16px sans-serif";
        return ctx;
    }
    fireListeners(type, ...event) {
        return super.fireListeners(type, ...event);
    }
}
exports.DrawGrid = DrawGrid;
