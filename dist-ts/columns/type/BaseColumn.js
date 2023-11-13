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
exports.BaseColumn = void 0;
const styleContents = __importStar(require("../style"));
const utils_1 = require("../../internal/utils");
const BaseStyle_1 = require("../style/BaseStyle");
const animate_1 = require("../../internal/animate");
const symbolManager_1 = require("../../internal/symbolManager");
const handlers_1 = require("../indicator/handlers");
const { setReadonly } = utils_1.obj;
const COLUMN_FADEIN_STATE_ID = (0, symbolManager_1.getColumnFadeinStateId)();
function isFadeinWhenCallbackInPromise(column, grid) {
    if (column.fadeinWhenCallbackInPromise != null) {
        return column.fadeinWhenCallbackInPromise;
    }
    return !!grid.configure("fadeinWhenCallbackInPromise");
}
function getFadeinState(grid) {
    let state = grid[COLUMN_FADEIN_STATE_ID];
    if (!state) {
        state = { cells: {} };
        setReadonly(grid, COLUMN_FADEIN_STATE_ID, state);
    }
    return state;
}
function _generateFadeinPointAction(grid, col, row, context, drawInternal, drawCellBase) {
    return (point) => {
        const state = getFadeinState(grid);
        const stateKey = `${row}:${col}`;
        if (point === 1) {
            delete state.cells[stateKey];
        }
        else {
            state.cells[stateKey] = {
                opacity: point,
            };
        }
        drawCellBase();
        drawInternal();
        const cellState = state.cells[stateKey];
        if (cellState) {
            //透過するため背景を透過で上書き
            const ctx = context.getContext();
            ctx.globalAlpha = 1 - cellState.opacity;
            try {
                drawCellBase();
            }
            finally {
                ctx.globalAlpha = 1;
            }
        }
    };
}
const fadeinMgr = {
    animate(grid, col, row, context, drawInternal, drawCellBase) {
        // fadein animation
        const state = getFadeinState(grid);
        const activeFadeins = [
            _generateFadeinPointAction(grid, col, row, context, drawInternal, drawCellBase),
        ];
        state.activeFadeins = activeFadeins;
        (0, animate_1.animate)(500, (point) => {
            activeFadeins.forEach((f) => f(point));
            if (point === 1) {
                delete state.activeFadeins;
            }
        });
    },
    margeAnimate(grid, col, row, context, drawInternal, drawCellBase) {
        const state = getFadeinState(grid);
        if (state.activeFadeins) {
            state.activeFadeins.push(_generateFadeinPointAction(grid, col, row, context, drawInternal, drawCellBase));
        }
        else {
            drawInternal();
        }
    },
};
class BaseColumn {
    constructor(option) {
        this.onDrawCell = this.onDrawCell.bind(this); //スコープを固定させる
        //Promiseのcallbackでフェードイン表示する
        this._fadeinWhenCallbackInPromise = option === null || option === void 0 ? void 0 : option.fadeinWhenCallbackInPromise;
    }
    get fadeinWhenCallbackInPromise() {
        return this._fadeinWhenCallbackInPromise;
    }
    get StyleClass() {
        return BaseStyle_1.BaseStyle;
    }
    onDrawCell(cellValue, info, context, grid) {
        var _a;
        const { style, getRecord, drawCellBase } = info;
        const helper = grid.getGridCanvasHelper();
        drawCellBase();
        const record = getRecord();
        let promise;
        if ((0, utils_1.isPromise)(record)) {
            promise = record;
        }
        else if ((0, utils_1.isPromise)(cellValue)) {
            promise = cellValue;
        }
        else {
            const msg = info.getMessage();
            if ((0, utils_1.isPromise)(msg)) {
                promise = msg;
            }
        }
        //文字描画
        if (promise) {
            const start = Date.now();
            return Promise.all([
                record,
                cellValue,
                promise.then(() => cellValue).then(() => info.getMessage()),
            ]).then(({ 0: record, 1: val, 2: message }) => {
                const currentContext = context.toCurrentContext();
                const drawRect = currentContext.getDrawRect();
                if (!drawRect) {
                    return;
                }
                const time = Date.now() - start;
                const drawInternal = () => {
                    const currentContext = context.toCurrentContext();
                    const drawRect = currentContext.getDrawRect();
                    if (!drawRect) {
                        return;
                    }
                    const actStyle = styleContents.of(style, record, this.StyleClass, context.col, context.row);
                    this.drawInternal(this.convertInternal(val), currentContext, actStyle, helper, grid, info);
                    this.drawMessageInternal(message, currentContext, actStyle, helper, grid, info);
                    this.drawIndicatorsInternal(currentContext, actStyle, helper, grid, info);
                };
                if (!isFadeinWhenCallbackInPromise(this, grid)) {
                    drawInternal(); //単純な描画
                }
                else {
                    const { col, row } = context;
                    if (time < 80) {
                        //80ms以内のPromiseCallbackは前アニメーションに統合
                        fadeinMgr.margeAnimate(grid, col, row, context, drawInternal, drawCellBase);
                    }
                    else {
                        //アニメーション
                        fadeinMgr.animate(grid, col, row, context, drawInternal, drawCellBase);
                    }
                }
            });
        }
        else {
            const actStyle = styleContents.of(style, record, this.StyleClass, context.col, context.row);
            this.drawInternal(this.convertInternal(cellValue), context, actStyle, helper, grid, info);
            this.drawMessageInternal(info.getMessage(), context, actStyle, helper, grid, info);
            this.drawIndicatorsInternal(context, actStyle, helper, grid, info);
            //フェードインの場合透過するため背景を透過で上書き
            const { col, row } = context;
            const stateKey = `${col}:${row}`;
            const cellState = (_a = grid[COLUMN_FADEIN_STATE_ID]) === null || _a === void 0 ? void 0 : _a.cells[stateKey];
            if (cellState) {
                const ctx = context.getContext();
                ctx.globalAlpha = 1 - cellState.opacity;
                try {
                    drawCellBase();
                }
                finally {
                    ctx.globalAlpha = 1;
                }
            }
            return undefined;
        }
    }
    convertInternal(value) {
        return value != null ? value : "";
    }
    drawMessageInternal(message, context, style, helper, grid, info) {
        info.messageHandler.drawCellMessage(message, context, style, helper, grid, info);
    }
    drawIndicatorsInternal(context, style, helper, grid, info) {
        var _a;
        const { indicatorTopLeft, indicatorTopRight, indicatorBottomRight, indicatorBottomLeft, } = style;
        for (const [indicatorStyle, kind] of [
            [indicatorTopLeft, 0 /* DrawIndicatorKind.topLeft */],
            [indicatorTopRight, 1 /* DrawIndicatorKind.topRight */],
            [indicatorBottomRight, 2 /* DrawIndicatorKind.bottomRight */],
            [indicatorBottomLeft, 3 /* DrawIndicatorKind.bottomLeft */],
        ]) {
            if (indicatorStyle) {
                (_a = (0, handlers_1.getDrawIndicator)(indicatorStyle)) === null || _a === void 0 ? void 0 : _a(context, indicatorStyle, kind, helper, grid, info);
            }
        }
    }
    bindGridEvent(_grid, _cellId) {
        return [];
    }
    getCopyCellValue(value, _grid, _cell) {
        return value;
    }
}
exports.BaseColumn = BaseColumn;
