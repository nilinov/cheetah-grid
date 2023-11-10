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
exports.InfoMessage = void 0;
const messageUtils = __importStar(require("./messageUtils"));
const BaseMessage_1 = require("./BaseMessage");
const MessageElement_1 = require("./internal/MessageElement");
const utils_1 = require("../../internal/utils");
const GREY_L2 = "#e0e0e0";
class InfoMessage extends BaseMessage_1.BaseMessage {
    createMessageElementInternal() {
        return new MessageElement_1.MessageElement();
    }
    drawCellMessageInternal(_message, context, style, helper, grid, _info) {
        const { bgColor } = style;
        const { select } = context.getSelection();
        if (!(0, utils_1.cellInRange)(grid.getCellRange(context.col, context.row), select.col, select.row) ||
            !grid.hasFocusGrid()) {
            helper.drawBorderWithClip(context, (ctx) => {
                messageUtils.drawInformationMarkBox(context, {
                    bgColor: helper.getColor(helper.theme.messages.infoBgColor, context.col, context.row, ctx) || GREY_L2,
                    color: bgColor,
                    boxWidth: helper.theme.messages.boxWidth,
                    markHeight: helper.theme.messages.markHeight,
                }, helper);
            });
        }
    }
}
exports.InfoMessage = InfoMessage;
