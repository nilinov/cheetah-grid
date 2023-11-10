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
exports.BaseHeader = void 0;
const styleContents = __importStar(require("../style"));
const BaseStyle_1 = require("../style/BaseStyle");
class BaseHeader {
    constructor(_options = {}) {
        this.onDrawCell = this.onDrawCell.bind(this); //スコープを固定させる
    }
    get StyleClass() {
        return BaseStyle_1.BaseStyle;
    }
    onDrawCell(cellValue, info, context, grid) {
        const { style, drawCellBase } = info;
        const helper = grid.getGridCanvasHelper();
        drawCellBase();
        //文字描画
        this.drawInternal(this.convertInternal(cellValue), context, styleContents.of(style, this.StyleClass), helper, grid, info);
    }
    convertInternal(value) {
        if (typeof value === "function") {
            value = value();
        }
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return value != null ? `${value}` : "";
    }
    bindGridEvent(_grid, _cellId) {
        return [];
    }
    getCopyCellValue(value, _grid, _cell) {
        if (typeof value === "function") {
            value = value();
        }
        return value != null ? value : "";
    }
}
exports.BaseHeader = BaseHeader;
