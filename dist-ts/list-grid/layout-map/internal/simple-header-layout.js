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
exports.SimpleHeaderLayoutMap = void 0;
const columns = __importStar(require("../../../columns"));
const headerAction = __importStar(require("../../../header/action"));
const headerType = __importStar(require("../../../header/type"));
const utils_1 = require("./utils");
let seqId = 0;
class SimpleHeaderLayoutMap {
    constructor(header) {
        this.bodyRowCount = 1;
        this._emptyDataCache = new utils_1.EmptyDataCache();
        this._columns = [];
        this._headerCellIds = [];
        this._headerObjects = this._addHeaders(0, header, []);
        this._headerObjectMap = this._headerObjects.reduce((o, e) => {
            o[e.id] = e;
            return o;
        }, {});
    }
    get columnWidths() {
        return this._columns;
    }
    get headerRowCount() {
        return this._headerCellIds.length;
    }
    get colCount() {
        return this._columns.length;
    }
    get headerObjects() {
        return this._headerObjects;
    }
    get columnObjects() {
        return this._columns;
    }
    getCellId(col, row) {
        if (this.headerRowCount <= row) {
            return this._columns[col].id;
        }
        //in header
        return this._headerCellIds[row][col];
    }
    getHeader(col, row) {
        const id = this.getCellId(col, row);
        return (this._headerObjectMap[id] ||
            this._emptyDataCache.getHeader(col, row));
    }
    getBody(col, _row) {
        return this._columns[col] || this._emptyDataCache.getBody(col, 0);
    }
    getBodyLayoutRangeById(id) {
        for (let col = 0; col < this.colCount; col++) {
            if (id === this._columns[col].id) {
                return {
                    start: { col, row: 0 },
                    end: { col, row: 0 },
                };
            }
        }
        throw new Error(`can not found body layout @id=${id}`);
    }
    getCellRange(col, row) {
        const result = { start: { col, row }, end: { col, row } };
        if (this.headerRowCount <= row) {
            return result;
        }
        //in header
        const id = this.getCellId(col, row);
        for (let c = col - 1; c >= 0; c--) {
            if (id !== this.getCellId(c, row)) {
                break;
            }
            result.start.col = c;
        }
        for (let c = col + 1; c < this.colCount; c++) {
            if (id !== this.getCellId(c, row)) {
                break;
            }
            result.end.col = c;
        }
        for (let r = row - 1; r >= 0; r--) {
            if (id !== this.getCellId(col, r)) {
                break;
            }
            result.start.row = r;
        }
        for (let r = row + 1; r < this.headerRowCount; r++) {
            if (id !== this.getCellId(col, r)) {
                break;
            }
            result.end.row = r;
        }
        return result;
    }
    getRecordIndexByRow(row) {
        if (row < this.headerRowCount) {
            return -1;
        }
        else {
            return row - this.headerRowCount;
        }
    }
    getRecordStartRowByRecordIndex(index) {
        return this.headerRowCount + index;
    }
    _addHeaders(row, header, roots) {
        const results = [];
        const rowCells = this._headerCellIds[row] || this._newRow(row);
        header.forEach((hd) => {
            const col = this._columns.length;
            const id = seqId++;
            const cell = {
                id,
                caption: hd.caption,
                field: hd.headerField || hd.field,
                headerIcon: hd.headerIcon,
                style: hd.headerStyle,
                headerType: headerType.ofCell(hd),
                action: headerAction.ofCell(hd),
                define: hd,
            };
            results[id] = cell;
            rowCells[col] = id;
            for (let r = row - 1; r >= 0; r--) {
                this._headerCellIds[r][col] = roots[r];
            }
            if (hd.columns) {
                this._addHeaders(row + 1, hd.columns, [
                    ...roots,
                    id,
                ]).forEach((c) => results.push(c));
            }
            else {
                const colDef = hd;
                this._columns.push({
                    id: seqId++,
                    field: colDef.field,
                    width: colDef.width,
                    minWidth: colDef.minWidth,
                    maxWidth: colDef.maxWidth,
                    icon: colDef.icon,
                    message: colDef.message,
                    columnType: columns.type.of(colDef.columnType),
                    action: columns.action.of(colDef.action),
                    style: colDef.style,
                    define: colDef,
                });
                for (let r = row + 1; r < this._headerCellIds.length; r++) {
                    this._headerCellIds[r][col] = id;
                }
            }
        });
        return results;
    }
    _newRow(row) {
        const newRow = (this._headerCellIds[row] = []);
        if (!this._columns.length) {
            return newRow;
        }
        const prev = this._headerCellIds[row - 1];
        for (let col = 0; col < prev.length; col++) {
            newRow[col] = prev[col];
        }
        return newRow;
    }
}
exports.SimpleHeaderLayoutMap = SimpleHeaderLayoutMap;
