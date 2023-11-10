"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageHandler = exports.hasMessage = void 0;
const ErrorMessage_1 = require("./ErrorMessage");
const InfoMessage_1 = require("./InfoMessage");
const LG_EVENT_TYPE_1 = require("../../list-grid/LG_EVENT_TYPE");
const WarningMessage_1 = require("./WarningMessage");
const utils_1 = require("../../internal/utils");
const EMPTY_MESSAGE = {
    type: "error",
    message: null,
};
const MESSAGE_INSTANCE_FACTORY = {
    error(grid) {
        return new ErrorMessage_1.ErrorMessage(grid);
    },
    info(grid) {
        return new InfoMessage_1.InfoMessage(grid);
    },
    warning(grid) {
        return new WarningMessage_1.WarningMessage(grid);
    },
};
function normalizeMessage(message) {
    if (!message || (0, utils_1.isPromise)(message)) {
        return EMPTY_MESSAGE;
    }
    if (typeof message === "string") {
        return {
            type: "error",
            message,
            original: message,
        };
    }
    const type = message.type || "error";
    if (type && type in MESSAGE_INSTANCE_FACTORY) {
        return {
            type: type.toLowerCase(),
            message: message.message,
            original: message,
        };
    }
    return {
        type: "error",
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        message: `${message}`,
        original: message,
    };
}
function hasMessage(message) {
    return !!normalizeMessage(message).message;
}
exports.hasMessage = hasMessage;
class MessageHandler {
    constructor(grid, getMessage) {
        this._attachInfo = null;
        this._grid = grid;
        this._messageInstances = {};
        this._bindGridEvent(grid, getMessage);
    }
    dispose() {
        var _a;
        const messageInstances = this._messageInstances;
        for (const k in messageInstances) {
            (_a = messageInstances[k]) === null || _a === void 0 ? void 0 : _a.dispose();
        }
        // @ts-expect-error -- ignore
        delete this._messageInstances;
        // @ts-expect-error -- ignore
        delete this._attachInfo;
    }
    drawCellMessage(message, context, style, helper, grid, info) {
        if (!hasMessage(message)) {
            return;
        }
        const instance = this._getMessageInstanceOfMessage(message);
        instance.drawCellMessage(normalizeMessage(message), context, style, helper, grid, info);
    }
    _attach(col, row, message) {
        const info = this._attachInfo;
        const instance = this._getMessageInstanceOfMessage(message);
        if (info && info.instance !== instance) {
            info.instance.detachMessageElement();
        }
        instance.attachMessageElement(col, row, normalizeMessage(message));
        this._attachInfo = { col, row, instance };
    }
    _move(col, row) {
        const info = this._attachInfo;
        if (!info || info.col !== col || info.row !== row) {
            return;
        }
        const { instance } = info;
        instance.moveMessageElement(col, row);
    }
    _detach() {
        const info = this._attachInfo;
        if (!info) {
            return;
        }
        const { instance } = info;
        instance.detachMessageElement();
        this._attachInfo = null;
    }
    _bindGridEvent(grid, getMessage) {
        const onSelectMessage = (sel) => {
            const setMessageData = (msg) => {
                if (!hasMessage(msg)) {
                    this._detach();
                }
                else {
                    this._attach(sel.col, sel.row, msg);
                }
            };
            const message = getMessage(sel.col, sel.row);
            if ((0, utils_1.isPromise)(message)) {
                this._detach();
                message.then((msg) => {
                    const newSel = grid.selection.select;
                    if (newSel.col !== sel.col || newSel.row !== sel.row) {
                        return;
                    }
                    setMessageData(msg);
                });
                return;
            }
            setMessageData(message);
        };
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SELECTED_CELL, (e) => {
            if (!e.selected) {
                return;
            }
            if (e.before.col === e.col && e.before.row === e.row) {
                return;
            }
            onSelectMessage(e);
        });
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SCROLL, () => {
            const sel = grid.selection.select;
            this._move(sel.col, sel.row);
        });
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_VALUE, (e) => {
            if (!grid.hasFocusGrid()) {
                return;
            }
            const sel = grid.selection.select;
            if (sel.col !== e.col || sel.row !== e.row) {
                return;
            }
            onSelectMessage(e);
        });
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.FOCUS_GRID, (_e) => {
            const sel = grid.selection.select;
            onSelectMessage(sel);
        });
        grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.BLUR_GRID, (_e) => {
            this._detach();
        });
    }
    _getMessageInstanceOfMessage(message) {
        const messageInstances = this._messageInstances;
        const { type } = normalizeMessage(message);
        return (messageInstances[type] ||
            (messageInstances[type] = MESSAGE_INSTANCE_FACTORY[type](this._grid)));
    }
}
exports.MessageHandler = MessageHandler;
