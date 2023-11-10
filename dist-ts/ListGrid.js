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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGrid = void 0;
const icons = __importStar(require("./internal/icons"));
const themes = __importStar(require("./themes"));
const data_1 = require("./data");
const layout_map_1 = require("./list-grid/layout-map");
const MessageHandler_1 = require("./columns/message/MessageHandler");
const utils_1 = require("./internal/utils");
const style_1 = require("./columns/style");
const DrawGrid_1 = require("./core/DrawGrid");
const GridCanvasHelper_1 = require("./GridCanvasHelper");
const style_2 = require("./header/style");
const LG_EVENT_TYPE_1 = require("./list-grid/LG_EVENT_TYPE");
const Rect_1 = require("./internal/Rect");
const TooltipHandler_1 = require("./tooltip/TooltipHandler");
//protected symbol
const symbolManager_1 = require("./internal/symbolManager");
const paste_utils_1 = require("./internal/paste-utils");
/** @private */
const _ = (0, symbolManager_1.getProtectedSymbol)();
//private methods
/** @private */
function _getCellRange(grid, col, row) {
    return grid[_].layoutMap.getCellRange(col, row);
}
/** @private */
function _updateRect(grid, col, row, context) {
    context.setRectFilter((rect) => {
        let { left, right, top, bottom } = rect;
        const { start: { col: startCol, row: startRow }, end: { col: endCol, row: endRow }, } = _getCellRange(grid, col, row);
        for (let c = col - 1; c >= startCol; c--) {
            left -= grid.getColWidth(c);
        }
        for (let c = col + 1; c <= endCol; c++) {
            right += grid.getColWidth(c);
        }
        for (let r = row - 1; r >= startRow; r--) {
            top -= grid.getRowHeight(r);
        }
        for (let r = row + 1; r <= endRow; r++) {
            bottom += grid.getRowHeight(r);
        }
        return Rect_1.Rect.bounds(left, top, right, bottom);
    });
}
/** @private */
function _getCellValue(grid, col, row) {
    if (row < grid[_].layoutMap.headerRowCount) {
        const { caption } = grid[_].layoutMap.getHeader(col, row);
        return typeof caption === "function" ? caption() : caption;
    }
    else {
        const { field } = grid[_].layoutMap.getBody(col, row);
        return _getField(grid, field, row);
    }
}
/** @private */
function _setCellValue(grid, col, row, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
value) {
    if (row < grid[_].layoutMap.headerRowCount) {
        // nop
        return false;
    }
    else {
        const { field } = grid[_].layoutMap.getBody(col, row);
        if (field == null) {
            return false;
        }
        const index = _getRecordIndexByRow(grid, row);
        return grid[_].dataSource.setField(index, field, value);
    }
}
/** @private */
function _getCellMessage(grid, col, row) {
    if (row < grid[_].layoutMap.headerRowCount) {
        return null;
    }
    else {
        const { message } = grid[_].layoutMap.getBody(col, row);
        if (!message) {
            return null;
        }
        if (!Array.isArray(message)) {
            return _getField(grid, message, row);
        }
        const promises = [];
        for (let index = 0; index < message.length; index++) {
            const msg = _getField(grid, message[index], row);
            if ((0, utils_1.isPromise)(msg)) {
                promises.push(msg);
            }
            else if ((0, MessageHandler_1.hasMessage)(msg)) {
                return msg;
            }
        }
        if (!promises.length) {
            return null;
        }
        return new Promise((resolve, reject) => {
            promises.forEach((p) => {
                p.then((msg) => {
                    if ((0, MessageHandler_1.hasMessage)(msg)) {
                        resolve(msg);
                    }
                }, reject);
            });
        });
    }
}
function _getCellIcon0(grid, icon, row) {
    if (Array.isArray(icon)) {
        return icon.map((i) => _getCellIcon0(grid, i, row));
    }
    if (!utils_1.obj.isObject(icon) || typeof icon === "function") {
        return _getField(grid, icon, row);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const retIcon = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iconOpt = icon;
    icons.iconPropKeys.forEach((k) => {
        if (iconOpt[k]) {
            const f = _getField(grid, iconOpt[k], row);
            if (f != null) {
                retIcon[k] = f;
            }
            else {
                if (!_hasField(grid, iconOpt[k], row)) {
                    retIcon[k] = iconOpt[k];
                }
            }
        }
    });
    return retIcon;
}
/** @private */
function _getCellIcon(grid, col, row) {
    if (row < grid[_].layoutMap.headerRowCount) {
        const { headerIcon } = grid[_].layoutMap.getHeader(col, row);
        if (headerIcon == null) {
            return null;
        }
        return headerIcon;
    }
    else {
        const { icon } = grid[_].layoutMap.getBody(col, row);
        if (icon == null) {
            return null;
        }
        return _getCellIcon0(grid, icon, row);
    }
}
/** @private */
function _getField(grid, field, row) {
    if (field == null) {
        return null;
    }
    if (row < grid[_].layoutMap.headerRowCount) {
        return null;
    }
    else {
        const index = _getRecordIndexByRow(grid, row);
        return grid[_].dataSource.getField(index, field);
    }
}
/** @private */
function _hasField(grid, field, row) {
    if (field == null) {
        return false;
    }
    if (row < grid[_].layoutMap.headerRowCount) {
        return false;
    }
    else {
        const index = _getRecordIndexByRow(grid, row);
        return grid[_].dataSource.hasField(index, field);
    }
}
/** @private */
function _onDrawValue(grid, cellValue, context, { col, row }, style, draw) {
    const helper = grid[_].gridCanvasHelper;
    const drawCellBg = ({ bgColor, } = {}) => {
        const fillOpt = {
            fillColor: bgColor,
        };
        //cell全体を描画
        helper.fillCellWithState(context, fillOpt);
    };
    const drawCellBorder = () => {
        if (context.col === grid.frozenColCount - 1) {
            //固定列罫線
            const rect = context.getRect();
            helper.drawWithClip(context, (ctx) => {
                const borderColor = context.row >= grid.frozenRowCount
                    ? helper.theme.borderColor
                    : helper.theme.frozenRowsBorderColor;
                const borderColors = helper.toBoxArray(helper.getColor(borderColor, context.col, context.row, ctx));
                if (borderColors[1]) {
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = borderColors[1];
                    ctx.beginPath();
                    ctx.moveTo(rect.right - 2.5, rect.top);
                    ctx.lineTo(rect.right - 2.5, rect.bottom);
                    ctx.stroke();
                }
            });
        }
        _borderWithState(grid, helper, context);
    };
    const drawCellBase = ({ bgColor, } = {}) => {
        drawCellBg({ bgColor });
        drawCellBorder();
    };
    const info = {
        getRecord: () => grid.getRowRecord(row),
        getIcon: () => _getCellIcon(grid, col, row),
        getMessage: () => _getCellMessage(grid, col, row),
        messageHandler: grid[_].messageHandler,
        style,
        drawCellBase,
        drawCellBg,
        drawCellBorder,
    };
    return draw(cellValue, info, context, grid);
}
/** @private */
function _borderWithState(grid, helper, context) {
    const { col, row } = context;
    const sel = grid.selection.select;
    const { layoutMap } = grid[_];
    const rect = context.getRect();
    const option = {};
    const selRecordIndex = layoutMap.getRecordIndexByRow(sel.row);
    const selId = layoutMap.getCellId(sel.col, sel.row);
    function isSelectCell(col, row) {
        if (col === sel.col && row === sel.row) {
            return true;
        }
        return (selId != null &&
            layoutMap.getCellId(col, row) === selId &&
            layoutMap.getRecordIndexByRow(row) === selRecordIndex);
    }
    //罫線
    if (isSelectCell(col, row)) {
        option.borderColor = helper.theme.highlightBorderColor;
        option.lineWidth = 2;
        helper.border(context, option);
    }
    else {
        option.lineWidth = 1;
        // header color
        const isFrozenCell = grid.isFrozenCell(col, row);
        if (isFrozenCell === null || isFrozenCell === void 0 ? void 0 : isFrozenCell.row) {
            option.borderColor = helper.theme.frozenRowsBorderColor;
        }
        helper.border(context, option);
        //追加処理
        if (col > 0 && isSelectCell(col - 1, row)) {
            //右が選択されている
            helper.drawBorderWithClip(context, (ctx) => {
                const borderColors = helper.toBoxArray(helper.getColor(helper.theme.highlightBorderColor, sel.col, sel.row, ctx));
                if (borderColors[1]) {
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = borderColors[1];
                    ctx.beginPath();
                    ctx.moveTo(rect.left - 0.5, rect.top);
                    ctx.lineTo(rect.left - 0.5, rect.bottom);
                    ctx.stroke();
                }
            });
        }
        else if (row > 0 && isSelectCell(col, row - 1)) {
            //上が選択されている
            helper.drawBorderWithClip(context, (ctx) => {
                const borderColors = helper.toBoxArray(helper.getColor(helper.theme.highlightBorderColor, sel.col, sel.row, ctx));
                if (borderColors[0]) {
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = borderColors[0];
                    ctx.beginPath();
                    ctx.moveTo(rect.left, rect.top - 0.5);
                    ctx.lineTo(rect.right, rect.top - 0.5);
                    ctx.stroke();
                }
            });
        }
    }
}
/** @private */
function _refreshHeader(grid) {
    var _b;
    const protectedSpace = grid[_];
    if (protectedSpace.headerEvents) {
        protectedSpace.headerEvents.forEach((id) => grid.unlisten(id));
    }
    const headerEvents = (grid[_].headerEvents = []);
    headerEvents.forEach((id) => grid.unlisten(id));
    let layoutMap;
    if (protectedSpace.layout &&
        (!Array.isArray(protectedSpace.layout) || protectedSpace.layout.length > 0)) {
        layoutMap = protectedSpace.layoutMap = new layout_map_1.MultiLayoutMap(protectedSpace.layout);
    }
    else {
        layoutMap = protectedSpace.layoutMap = new layout_map_1.SimpleHeaderLayoutMap((_b = protectedSpace.header) !== null && _b !== void 0 ? _b : []);
    }
    layoutMap.headerObjects.forEach((cell) => {
        const ids = cell.headerType.bindGridEvent(grid, cell.id);
        headerEvents.push(...ids);
        if (cell.style) {
            if (cell.style instanceof style_2.BaseStyle) {
                const id = cell.style.listen(style_2.BaseStyle.EVENT_TYPE.CHANGE_STYLE, () => {
                    grid.invalidate();
                });
                headerEvents.push(id);
            }
        }
        if (cell.action) {
            const ids = cell.action.bindGridEvent(grid, cell.id);
            headerEvents.push(...ids);
        }
    });
    layoutMap.columnObjects.forEach((col) => {
        if (col.action) {
            const ids = col.action.bindGridEvent(grid, col.id);
            headerEvents.push(...ids);
        }
        if (col.columnType) {
            const ids = col.columnType.bindGridEvent(grid, col.id);
            headerEvents.push(...ids);
        }
        if (col.style) {
            if (col.style instanceof style_1.BaseStyle) {
                const id = col.style.listen(style_1.BaseStyle.EVENT_TYPE.CHANGE_STYLE, () => {
                    grid.invalidate();
                });
                headerEvents.push(id);
            }
        }
    });
    for (let col = 0; col < layoutMap.columnWidths.length; col++) {
        const column = layoutMap.columnWidths[col];
        const { width, minWidth, maxWidth } = column;
        if (width && (typeof width === "string" || width > 0)) {
            grid.setColWidth(col, width);
        }
        else {
            grid.setColWidth(col, null);
        }
        if (minWidth && (typeof minWidth === "string" || minWidth > 0)) {
            grid.setMinColWidth(col, minWidth);
        }
        else {
            grid.setMinColWidth(col, null);
        }
        if (maxWidth && (typeof maxWidth === "string" || maxWidth > 0)) {
            grid.setMaxColWidth(col, maxWidth);
        }
        else {
            grid.setMaxColWidth(col, null);
        }
    }
    const { headerRowHeight } = grid[_];
    for (let row = 0; row < layoutMap.headerRowCount; row++) {
        const height = Array.isArray(headerRowHeight)
            ? headerRowHeight[row]
            : headerRowHeight;
        if (height && height > 0) {
            grid.setRowHeight(row, height);
        }
        else {
            grid.setRowHeight(row, null);
        }
    }
    grid.colCount = layoutMap.colCount;
    _refreshRowCount(grid);
    grid.frozenRowCount = layoutMap.headerRowCount;
}
/** @private */
function _refreshRowCount(grid) {
    const { layoutMap } = grid[_];
    grid.rowCount =
        grid[_].dataSource.length * layoutMap.bodyRowCount +
            layoutMap.headerRowCount;
}
/** @private */
function _tryWithUpdateDataSource(grid, fn) {
    const { dataSourceEventIds } = grid[_];
    if (dataSourceEventIds) {
        dataSourceEventIds.forEach((id) => grid[_].handler.off(id));
    }
    fn(grid);
    grid[_].dataSourceEventIds = [
        grid[_].handler.on(grid[_].dataSource, data_1.DataSource.EVENT_TYPE.UPDATED_LENGTH, () => {
            _refreshRowCount(grid);
            grid.invalidate();
        }),
        grid[_].handler.on(grid[_].dataSource, data_1.DataSource.EVENT_TYPE.UPDATED_ORDER, () => {
            grid.invalidate();
        }),
    ];
}
/** @private */
function _setRecords(grid, records = []) {
    _tryWithUpdateDataSource(grid, () => {
        grid[_].records = records;
        const newDataSource = (grid[_].dataSource =
            data_1.CachedDataSource.ofArray(records));
        grid.addDisposable(newDataSource);
    });
}
/** @private */
function _setDataSource(grid, dataSource) {
    _tryWithUpdateDataSource(grid, () => {
        if (dataSource) {
            if (dataSource instanceof data_1.DataSource) {
                grid[_].dataSource = dataSource;
            }
            else {
                const newDataSource = (grid[_].dataSource = new data_1.CachedDataSource(dataSource));
                grid.addDisposable(newDataSource);
            }
        }
        else {
            grid[_].dataSource = data_1.DataSource.EMPTY;
        }
        grid[_].records = null;
    });
}
/** @private */
function _getRecordIndexByRow(grid, row) {
    const { layoutMap } = grid[_];
    return layoutMap.getRecordIndexByRow(row);
}
/** @private */
function _onRangePaste(text, test = () => true) {
    var _b;
    const { layoutMap } = this[_];
    const selectionRange = this.selection.range;
    const { start } = this.getCellRange(selectionRange.start.col, selectionRange.start.row);
    const { end } = this.getCellRange(selectionRange.end.col, selectionRange.end.row);
    const values = (0, paste_utils_1.parsePasteRangeBoxValues)(text, {
        trimOnPaste: this.trimOnPaste,
    });
    const pasteRowCount = Math.min(Math.max(end.row - start.row + 1, values.rowCount), this.rowCount - start.row);
    const pasteColCount = Math.min(Math.max(end.col - start.col + 1, values.colCount), this.colCount - start.col);
    let hasEditable = false;
    const actionColumnsBox = [];
    for (let bodyRow = 0; bodyRow < layoutMap.bodyRowCount; bodyRow++) {
        const actionColumnsRow = [];
        actionColumnsBox.push(actionColumnsRow);
        for (let offsetCol = 0; offsetCol < pasteColCount; offsetCol++) {
            const body = layoutMap.getBody(start.col + offsetCol, bodyRow + layoutMap.headerRowCount);
            actionColumnsRow[offsetCol] = body;
            if (!hasEditable && ((_b = body.action) === null || _b === void 0 ? void 0 : _b.editable)) {
                hasEditable = true;
            }
        }
    }
    if (!hasEditable) {
        return;
    }
    const startRow = layoutMap.getRecordStartRowByRecordIndex(layoutMap.getRecordIndexByRow(start.row));
    const startRowOffset = start.row - startRow;
    let rejectedDetail = [];
    const addRejectedDetail = (cell, record, define, pasteValue) => {
        rejectedDetail.push({
            col: cell.col,
            row: cell.row,
            record,
            define,
            pasteValue,
        });
    };
    let timeout = null;
    const processRejected = () => {
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (rejectedDetail.length > 0) {
                this.fireListeners(LG_EVENT_TYPE_1.LG_EVENT_TYPE.REJECTED_PASTE_VALUES, {
                    detail: rejectedDetail,
                });
                rejectedDetail = [];
            }
        }, 100);
    };
    let reject = addRejectedDetail;
    let duplicate = {};
    let actionRow = startRowOffset;
    let valuesRow = 0;
    for (let offsetRow = 0; offsetRow < pasteRowCount; offsetRow++) {
        let valuesCol = 0;
        for (let offsetCol = 0; offsetCol < pasteColCount; offsetCol++) {
            const { action, id, define } = actionColumnsBox[actionRow][offsetCol];
            if (!duplicate[id] && (action === null || action === void 0 ? void 0 : action.editable)) {
                duplicate[id] = true;
                const col = start.col + offsetCol;
                const row = start.row + offsetRow;
                const cellValue = values.getCellValue(valuesCol, valuesRow);
                (0, utils_1.then)(this.getRowRecord(row), (record) => {
                    (0, utils_1.then)(_getCellValue(this, col, row), (oldValue) => {
                        if (test({
                            grid: this,
                            record: record,
                            col,
                            row,
                            value: cellValue,
                            oldValue,
                        })) {
                            action.onPasteCellRangeBox(this, { col, row }, cellValue, {
                                reject() {
                                    reject({ col, row }, record, define, cellValue);
                                },
                            });
                        }
                    });
                });
            }
            valuesCol++;
            if (valuesCol >= values.colCount) {
                valuesCol = 0;
            }
        }
        actionRow++;
        if (actionRow >= layoutMap.bodyRowCount) {
            actionRow = 0;
            duplicate = {};
        }
        valuesRow++;
        if (valuesRow >= values.rowCount) {
            valuesRow = 0;
        }
    }
    const newEnd = {
        col: start.col + pasteColCount - 1,
        row: start.row + pasteRowCount - 1,
    };
    this.selection.range = {
        start,
        end: newEnd,
    };
    this.invalidateCellRange(this.selection.range);
    processRejected();
    reject = (cell, record, define, pasteValue) => {
        addRejectedDetail(cell, record, define, pasteValue);
        processRejected();
    };
}
/** @private */
function _onRangeDelete() {
    var _b;
    const { layoutMap } = this[_];
    const selectionRange = this.selection.range;
    const { start } = this.getCellRange(selectionRange.start.col, selectionRange.start.row);
    const { end } = this.getCellRange(selectionRange.end.col, selectionRange.end.row);
    const deleteRowCount = Math.min(end.row - start.row + 1, this.rowCount - start.row);
    const deleteColCount = Math.min(end.col - start.col + 1, this.colCount - start.col);
    let hasEditable = false;
    const actionColumnsBox = [];
    for (let bodyRow = 0; bodyRow < layoutMap.bodyRowCount; bodyRow++) {
        const actionColumnsRow = [];
        actionColumnsBox.push(actionColumnsRow);
        for (let offsetCol = 0; offsetCol < deleteColCount; offsetCol++) {
            const body = layoutMap.getBody(start.col + offsetCol, bodyRow + layoutMap.headerRowCount);
            actionColumnsRow[offsetCol] = body;
            if (!hasEditable && ((_b = body.action) === null || _b === void 0 ? void 0 : _b.editable)) {
                hasEditable = true;
            }
        }
    }
    if (!hasEditable) {
        return;
    }
    const startRow = layoutMap.getRecordStartRowByRecordIndex(layoutMap.getRecordIndexByRow(start.row));
    const startRowOffset = start.row - startRow;
    let duplicate = {};
    let actionRow = startRowOffset;
    for (let offsetRow = 0; offsetRow < deleteRowCount; offsetRow++) {
        for (let offsetCol = 0; offsetCol < deleteColCount; offsetCol++) {
            const { action, id } = actionColumnsBox[actionRow][offsetCol];
            if (!duplicate[id] && (action === null || action === void 0 ? void 0 : action.editable)) {
                duplicate[id] = true;
                const col = start.col + offsetCol;
                const row = start.row + offsetRow;
                (0, utils_1.then)(this.getRowRecord(row), (_record) => {
                    (0, utils_1.then)(_getCellValue(this, col, row), (_oldValue) => {
                        action.onDeleteCellRangeBox(this, { col, row });
                    });
                });
            }
        }
        actionRow++;
        if (actionRow >= layoutMap.bodyRowCount) {
            actionRow = 0;
            duplicate = {};
        }
    }
    this.invalidateCellRange(selectionRange);
}
/**
 * ListGrid
 * @classdesc cheetahGrid.ListGrid
 * @memberof cheetahGrid
 */
class ListGrid extends DrawGrid_1.DrawGrid {
    static get EVENT_TYPE() {
        return LG_EVENT_TYPE_1.LG_EVENT_TYPE;
    }
    /**
     * constructor
     *
     * @constructor
     * @param options Constructor options
     */
    constructor(options = {}) {
        var _b;
        super((0, utils_1.omit)(options, ["colCount", "rowCount", "frozenRowCount"]));
        this[_a] = this[_];
        this.disabled = false;
        this.readOnly = false;
        const protectedSpace = this[_];
        protectedSpace.header = options.header || [];
        protectedSpace.layout = options.layout || [];
        protectedSpace.headerRowHeight = options.headerRowHeight || [];
        if (options.dataSource) {
            _setDataSource(this, options.dataSource);
        }
        else {
            _setRecords(this, options.records);
        }
        protectedSpace.allowRangePaste = (_b = options.allowRangePaste) !== null && _b !== void 0 ? _b : false;
        _refreshHeader(this);
        protectedSpace.sortState = {
            col: -1,
            row: -1,
            order: undefined,
        };
        protectedSpace.gridCanvasHelper = new GridCanvasHelper_1.GridCanvasHelper(this);
        protectedSpace.theme = themes.of(options.theme);
        protectedSpace.messageHandler = new MessageHandler_1.MessageHandler(this, (col, row) => _getCellMessage(this, col, row));
        protectedSpace.tooltipHandler = new TooltipHandler_1.TooltipHandler(this);
        this.invalidate();
        protectedSpace.handler.on(window, "resize", () => {
            this.updateSize();
            this.updateScroll();
            this.invalidate();
        });
    }
    /**
     * Dispose the grid instance.
     * @returns {void}
     */
    dispose() {
        const protectedSpace = this[_];
        protectedSpace.messageHandler.dispose();
        protectedSpace.tooltipHandler.dispose();
        super.dispose();
    }
    /**
     * Gets the define of the header.
     */
    get header() {
        return this[_].header;
    }
    /**
     * Sets the define of the header with the given data.
     * <pre>
     * column options
     * -----
     * caption: header caption
     * field: field name
     * width: column width
     * minWidth: column min width
     * maxWidth: column max width
     * icon: icon definition
     * message: message key name
     * columnType: column type
     * action: column action
     * style: column style
     * headerType: header type
     * headerStyle: header style
     * headerAction: header action
     * headerField: header field name
     * headerIcon: header icon definition
     * sort: define sort setting
     * -----
     *
     * multiline header
     * -----
     * caption: header caption
     * columns: columns define
     * -----
     * </pre>
     */
    set header(header) {
        this[_].header = header;
        _refreshHeader(this);
    }
    /**
     * Gets the define of the layout.
     */
    get layout() {
        return this[_].layout;
    }
    /**
     * Sets the define of the layout with the given data.
     */
    set layout(layout) {
        this[_].layout = layout;
        _refreshHeader(this);
    }
    /**
     * Get the row count per record
     */
    get recordRowCount() {
        return this[_].layoutMap.bodyRowCount;
    }
    /**
     * Get the records.
     */
    get records() {
        return this[_].records || null;
    }
    /**
     * Set the records from given
     */
    set records(records) {
        if (records == null) {
            return;
        }
        _setRecords(this, records);
        _refreshRowCount(this);
        this.invalidate();
    }
    /**
     * Get the data source.
     */
    get dataSource() {
        return this[_].dataSource;
    }
    /**
     * Set the data source from given
     */
    set dataSource(dataSource) {
        _setDataSource(this, dataSource);
        _refreshRowCount(this);
        this.invalidate();
    }
    /**
     * Get the theme.
     */
    get theme() {
        return this[_].theme;
    }
    /**
     * Set the theme from given
     */
    set theme(theme) {
        this[_].theme = themes.of(theme);
        this.invalidate();
    }
    /**
     * If set to true to allow pasting of ranges.
     */
    get allowRangePaste() {
        return this[_].allowRangePaste;
    }
    set allowRangePaste(allowRangePaste) {
        this[_].allowRangePaste = allowRangePaste;
    }
    /**
     * Get the font definition as a string.
     * @override
     */
    get font() {
        return super.font || this[_].gridCanvasHelper.theme.font;
    }
    /**
     * Set the font definition with the given string.
     * @override
     */
    set font(font) {
        super.font = font;
    }
    /**
     * Get the background color of the underlay.
     * @override
     */
    get underlayBackgroundColor() {
        return (super.underlayBackgroundColor ||
            this[_].gridCanvasHelper.theme.underlayBackgroundColor);
    }
    /**
     * Set the background color of the underlay.
     * @override
     */
    set underlayBackgroundColor(underlayBackgroundColor) {
        super.underlayBackgroundColor = underlayBackgroundColor;
    }
    /**
     * Get the sort state.
     */
    get sortState() {
        return this[_].sortState;
    }
    /**
     * Sets the sort state.
     * If `null` to set, the sort state is initialized.
     */
    set sortState(sortState) {
        const oldState = this.sortState;
        let oldField;
        if (oldState.col >= 0 && oldState.row >= 0) {
            oldField = this.getHeaderField(oldState.col, oldState.row);
        }
        const newState = (this[_].sortState =
            sortState != null
                ? sortState
                : {
                    col: -1,
                    row: -1,
                    order: undefined,
                });
        let newField;
        if (newState.col >= 0 && newState.row >= 0) {
            newField = this.getHeaderField(newState.col, newState.row);
        }
        // bind header value
        if (oldField != null && oldField !== newField) {
            this.setHeaderValue(oldState.col, oldState.row, undefined);
        }
        if (newField != null) {
            this.setHeaderValue(newState.col, newState.row, newState.order);
        }
    }
    /**
     * Get the header values.
     */
    get headerValues() {
        return this[_].headerValues || (this[_].headerValues = new Map());
    }
    /**
     * Sets the header values.
     */
    set headerValues(headerValues) {
        this[_].headerValues = headerValues || new Map();
    }
    /**
     * Get the field of the given column index.
     * @param  {number} col The column index.
     * @param  {number} row The row index.
     * @return {*} The field object.
     */
    getField(col, row) {
        return this[_].layoutMap.getBody(col, row !== null && row !== void 0 ? row : this[_].layoutMap.headerRowCount).field;
    }
    /**
     * Get the column define of the given column index.
     * @param  {number} col The column index.
     * @param  {number} row The row index.
     * @return {*} The column define object.
     */
    getColumnDefine(col, row) {
        return this[_].layoutMap.getBody(col, row !== null && row !== void 0 ? row : this[_].layoutMap.headerRowCount).define;
    }
    getColumnType(col, row) {
        return this[_].layoutMap.getBody(col, row).columnType;
    }
    getColumnAction(col, row) {
        return this[_].layoutMap.getBody(col, row).action;
    }
    /**
     * Get the header field of the given header cell.
     * @param  {number} col The column index.
     * @param  {number} row The header row index.
     * @return {*} The field object.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getHeaderField(col, row) {
        const hd = this[_].layoutMap.getHeader(col, row);
        return hd.field;
    }
    /**
     * Get the header define of the given header cell.
     * @param  {number} col The column index.
     * @param  {number} row The header row index.
     * @return {*} The header define object.
     */
    getHeaderDefine(col, row) {
        const hd = this[_].layoutMap.getHeader(col, row);
        return hd.define;
    }
    /**
     * Get the record of the given row index.
     * @param  {number} row The row index.
     * @return {object} The record.
     */
    getRowRecord(row) {
        if (row < this[_].layoutMap.headerRowCount) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return undefined;
        }
        else {
            return this[_].dataSource.get(_getRecordIndexByRow(this, row));
        }
    }
    /**
     * Get the record index of the given row index.
     * @param  {number} row The row index.
     */
    getRecordIndexByRow(row) {
        return _getRecordIndexByRow(this, row);
    }
    /**
     * Gets the row index starting at the given record index.
     * @param  {number} index The record index.
     */
    getRecordStartRowByRecordIndex(index) {
        return this[_].layoutMap.getRecordStartRowByRecordIndex(index);
    }
    /**
     * Get the column index of the given field.
     * @param  {*} field The field.
     * @return {number} The column index.
     * @deprecated use `getCellRangeByField` instead
     */
    getColumnIndexByField(field) {
        var _b;
        const range = this.getCellRangeByField(field, 0);
        return (_b = range === null || range === void 0 ? void 0 : range.start.col) !== null && _b !== void 0 ? _b : null;
    }
    /**
     * Get the column index of the given field.
     * @param  {*} field The field.
     * @param  {number} index The record index
     * @return {number} The column index.
     */
    getCellRangeByField(field, index) {
        const { layoutMap } = this[_];
        const colObj = layoutMap.columnObjects.find((col) => col.field === field);
        if (colObj) {
            const layoutRange = layoutMap.getBodyLayoutRangeById(colObj.id);
            const startRow = layoutMap.getRecordStartRowByRecordIndex(index);
            return {
                start: {
                    col: layoutRange.start.col,
                    row: startRow + layoutRange.start.row,
                },
                end: {
                    col: layoutRange.end.col,
                    row: startRow + layoutRange.end.row,
                },
            };
        }
        return null;
    }
    /**
     * Focus the cell.
     * @param  {*} field The field.
     * @param  {number} index The record index
     * @return {void}
     */
    focusGridCell(field, index) {
        var _b;
        const { start: { col: startCol, row: startRow }, end: { col: endCol, row: endRow }, } = this.selection.range;
        const newFocus = (_b = this.getCellRangeByField(field, index)) === null || _b === void 0 ? void 0 : _b.start;
        if (newFocus == null) {
            return;
        }
        this.focusCell(newFocus.col, newFocus.row);
        this.selection.select = newFocus;
        this.invalidateGridRect(startCol, startRow, endCol, endRow);
        this.invalidateCell(newFocus.col, newFocus.row);
    }
    /**
     * Scroll to where cell is visible.
     * @param  {*} field The field.
     * @param  {number} index The record index
     * @return {void}
     */
    makeVisibleGridCell(field, index) {
        var _b, _c, _d;
        const cell = (_b = this.getCellRangeByField(field, index)) === null || _b === void 0 ? void 0 : _b.start;
        this.makeVisibleCell((_c = cell === null || cell === void 0 ? void 0 : cell.col) !== null && _c !== void 0 ? _c : 0, (_d = cell === null || cell === void 0 ? void 0 : cell.row) !== null && _d !== void 0 ? _d : this[_].layoutMap.headerRowCount);
    }
    getGridCanvasHelper() {
        return this[_].gridCanvasHelper;
    }
    /**
     * Get cell range information for a given cell.
     * @param {number} col column index of the cell
     * @param {number} row row index of the cell
     * @returns {object} cell range info
     */
    getCellRange(col, row) {
        return _getCellRange(this, col, row);
    }
    /**
     * Get header range information for a given cell.
     * @param {number} col column index of the cell
     * @param {number} row row index of the cell
     * @returns {object} cell range info
     * @deprecated use `getCellRange` instead
     */
    getHeaderCellRange(col, row) {
        return this.getCellRange(col, row);
    }
    getCopyCellValue(col, row, range) {
        const cellRange = _getCellRange(this, col, row);
        const startCol = range
            ? Math.max(range.start.col, cellRange.start.col)
            : cellRange.start.col;
        const startRow = range
            ? Math.max(range.start.row, cellRange.start.row)
            : cellRange.start.row;
        if (startCol !== col || startRow !== row) {
            return "";
        }
        const value = _getCellValue(this, col, row);
        if (row < this[_].layoutMap.headerRowCount) {
            const headerData = this[_].layoutMap.getHeader(col, row);
            return headerData.headerType.getCopyCellValue(value, this, { col, row });
        }
        const columnData = this[_].layoutMap.getBody(col, row);
        return columnData.columnType.getCopyCellValue(value, this, { col, row });
    }
    onDrawCell(col, row, context) {
        const { layoutMap } = this[_];
        let draw;
        let style;
        if (row < layoutMap.headerRowCount) {
            const hd = layoutMap.getHeader(col, row);
            draw = hd.headerType.onDrawCell;
            ({ style } = hd);
            _updateRect(this, col, row, context);
        }
        else {
            const column = layoutMap.getBody(col, row);
            draw = column.columnType.onDrawCell;
            ({ style } = column);
            _updateRect(this, col, row, context);
        }
        const cellValue = _getCellValue(this, col, row);
        if (this.rowCount <= row) {
            // Depending on the FilterDataSource, the rowCount may be reduced.
            return undefined;
        }
        return _onDrawValue(this, cellValue, context, { col, row }, style, draw);
    }
    doGetCellValue(col, row, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    valueCallback) {
        if (row < this[_].layoutMap.headerRowCount) {
            // nop
            return false;
        }
        else {
            const value = _getCellValue(this, col, row);
            if ((0, utils_1.isPromise)(value)) {
                //遅延中は無視
                return false;
            }
            valueCallback(value);
        }
        return true;
    }
    doChangeValue(col, row, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    changeValueCallback) {
        if (row < this[_].layoutMap.headerRowCount) {
            // nop
            return false;
        }
        else {
            const record = this.getRowRecord(row);
            if ((0, utils_1.isPromise)(record)) {
                //遅延中は無視
                return false;
            }
            const before = _getCellValue(this, col, row);
            if ((0, utils_1.isPromise)(before)) {
                //遅延中は無視
                return false;
            }
            const after = changeValueCallback(before);
            if (after === undefined) {
                return false;
            }
            const { field } = this[_].layoutMap.getBody(col, row);
            this.fireListeners(LG_EVENT_TYPE_1.LG_EVENT_TYPE.BEFORE_CHANGE_VALUE, {
                col,
                row,
                record: record,
                field: field,
                value: after,
                oldValue: before,
            });
            return (0, utils_1.then)(_setCellValue(this, col, row, after), (ret) => {
                if (ret) {
                    const { field } = this[_].layoutMap.getBody(col, row);
                    this.fireListeners(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_VALUE, {
                        col,
                        row,
                        record: record,
                        field: field,
                        value: after,
                        oldValue: before,
                    });
                }
                return ret;
            });
        }
    }
    doSetPasteValue(text, test) {
        _onRangePaste.call(this, text, test);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getHeaderValue(col, row) {
        const field = this.getHeaderField(col, row);
        return this.headerValues.get(field);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setHeaderValue(col, row, newValue) {
        const field = this.getHeaderField(col, row);
        const oldValue = this.headerValues.get(field);
        this.headerValues.set(field, newValue);
        this.fireListeners(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_HEADER_VALUE, {
            col,
            row,
            field,
            value: newValue,
            oldValue,
        });
    }
    getLayoutCellId(col, row) {
        return this[_].layoutMap.getCellId(col, row);
    }
    bindEventsInternal() {
        const grid = this;
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SELECTED_CELL, (e) => {
            const range = _getCellRange(this, e.col, e.row);
            const { start: { col: startCol, row: startRow }, end: { col: endCol, row: endRow }, } = range;
            if (startCol !== endCol || startRow !== endRow) {
                this.invalidateCellRange(range);
            }
        });
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.PASTE_CELL, (e) => {
            if (!this[_].allowRangePaste) {
                return;
            }
            const { start, end } = this.selection.range;
            if (!e.multi && (0, utils_1.cellEquals)(start, end)) {
                return;
            }
            const { layoutMap } = this[_];
            if (start.row < layoutMap.headerRowCount) {
                return;
            }
            utils_1.event.cancel(e.event);
            _onRangePaste.call(this, e.normalizeValue);
        });
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.DELETE_CELL, (e) => {
            const { start } = this.selection.range;
            const { layoutMap } = this[_];
            if (start.row < layoutMap.headerRowCount) {
                return;
            }
            utils_1.event.cancel(e.event);
            _onRangeDelete.call(this);
        });
    }
    getMoveLeftColByKeyDownInternal({ col, row }) {
        const { start: { col: startCol }, } = _getCellRange(this, col, row);
        col = startCol;
        return super.getMoveLeftColByKeyDownInternal({ col, row });
    }
    getMoveRightColByKeyDownInternal({ col, row, }) {
        const { end: { col: endCol }, } = _getCellRange(this, col, row);
        col = endCol;
        return super.getMoveRightColByKeyDownInternal({ col, row });
    }
    getMoveUpRowByKeyDownInternal({ col, row }) {
        const { start: { row: startRow }, } = _getCellRange(this, col, row);
        row = startRow;
        return super.getMoveUpRowByKeyDownInternal({ col, row });
    }
    getMoveDownRowByKeyDownInternal({ col, row }) {
        const { end: { row: endRow }, } = _getCellRange(this, col, row);
        row = endRow;
        return super.getMoveDownRowByKeyDownInternal({ col, row });
    }
    getOffsetInvalidateCells() {
        return 1;
    }
    getCopyRangeInternal(range) {
        const { start } = this.getCellRange(range.start.col, range.start.row);
        const { end } = this.getCellRange(range.end.col, range.end.row);
        return { start, end };
    }
    fireListeners(type, ...event) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return super.fireListeners(type, ...event);
    }
}
exports.ListGrid = ListGrid;
_a = _;
