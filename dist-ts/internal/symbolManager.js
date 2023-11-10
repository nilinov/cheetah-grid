"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCheckHeaderStateId = exports.getInlineMenuEditorStateId = exports.getInlineInputEditorStateId = exports.getSmallDialogInputEditorStateId = exports.getBranchGraphColumnStateId = exports.getColumnFadeinStateId = exports.getButtonColumnStateId = exports.getRadioColumnStateId = exports.getCheckColumnStateId = exports.getProtectedSymbol = exports.get = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const utils_1 = require("./utils");
const Symbol = utils_1.isNode
    ? global.Symbol
    : window.Symbol
        ? window.Symbol
        : (() => {
            function random() {
                const c = "abcdefghijklmnopqrstuvwxyz0123456789";
                const cl = c.length;
                let r = "";
                for (let i = 0; i < 10; i++) {
                    r += c[Math.floor(Math.random() * cl)];
                }
                return r;
            }
            return (name) => {
                if (name) {
                    return `#${name}_${random()}`;
                }
                else {
                    return `#_${random()}`;
                }
            };
        })();
const mem = {};
function get(name) {
    if (name) {
        return (mem[name] ? mem[name] : (mem[name] = Symbol(name)));
    }
    else {
        return Symbol();
    }
}
exports.get = get;
function getProtectedSymbol() {
    return get("protected");
}
exports.getProtectedSymbol = getProtectedSymbol;
function getCheckColumnStateId() {
    return get("chkcol.stateID");
}
exports.getCheckColumnStateId = getCheckColumnStateId;
function getRadioColumnStateId() {
    return get("rdcol.stateID");
}
exports.getRadioColumnStateId = getRadioColumnStateId;
function getButtonColumnStateId() {
    return get("btncol.stateID");
}
exports.getButtonColumnStateId = getButtonColumnStateId;
function getColumnFadeinStateId() {
    return get("col.fadein_stateID");
}
exports.getColumnFadeinStateId = getColumnFadeinStateId;
function getBranchGraphColumnStateId() {
    return get("branch_graph_col.stateID");
}
exports.getBranchGraphColumnStateId = getBranchGraphColumnStateId;
function getSmallDialogInputEditorStateId() {
    return get("small_dialog_input_editor.stateID");
}
exports.getSmallDialogInputEditorStateId = getSmallDialogInputEditorStateId;
function getInlineInputEditorStateId() {
    return get("inline_input_editor.stateID");
}
exports.getInlineInputEditorStateId = getInlineInputEditorStateId;
function getInlineMenuEditorStateId() {
    return get("inline_menu_editor.stateID");
}
exports.getInlineMenuEditorStateId = getInlineMenuEditorStateId;
function getCheckHeaderStateId() {
    return get("check_header.stateID");
}
exports.getCheckHeaderStateId = getCheckHeaderStateId;
