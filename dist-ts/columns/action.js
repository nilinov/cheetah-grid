"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.of = exports.InlineMenuEditor = exports.InlineInputEditor = exports.SmallDialogInputEditor = exports.ButtonAction = exports.RadioEditor = exports.CheckEditor = exports.Action = exports.Editor = exports.BaseAction = exports.ACTIONS = void 0;
const Action_1 = require("./action/Action");
Object.defineProperty(exports, "Action", { enumerable: true, get: function () { return Action_1.Action; } });
const BaseAction_1 = require("./action/BaseAction");
Object.defineProperty(exports, "BaseAction", { enumerable: true, get: function () { return BaseAction_1.BaseAction; } });
const ButtonAction_1 = require("./action/ButtonAction");
Object.defineProperty(exports, "ButtonAction", { enumerable: true, get: function () { return ButtonAction_1.ButtonAction; } });
const CheckEditor_1 = require("./action/CheckEditor");
Object.defineProperty(exports, "CheckEditor", { enumerable: true, get: function () { return CheckEditor_1.CheckEditor; } });
const Editor_1 = require("./action/Editor");
Object.defineProperty(exports, "Editor", { enumerable: true, get: function () { return Editor_1.Editor; } });
const InlineInputEditor_1 = require("./action/InlineInputEditor");
Object.defineProperty(exports, "InlineInputEditor", { enumerable: true, get: function () { return InlineInputEditor_1.InlineInputEditor; } });
const InlineMenuEditor_1 = require("./action/InlineMenuEditor");
Object.defineProperty(exports, "InlineMenuEditor", { enumerable: true, get: function () { return InlineMenuEditor_1.InlineMenuEditor; } });
const RadioEditor_1 = require("./action/RadioEditor");
Object.defineProperty(exports, "RadioEditor", { enumerable: true, get: function () { return RadioEditor_1.RadioEditor; } });
const SmallDialogInputEditor_1 = require("./action/SmallDialogInputEditor");
Object.defineProperty(exports, "SmallDialogInputEditor", { enumerable: true, get: function () { return SmallDialogInputEditor_1.SmallDialogInputEditor; } });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class ImmutableCheckEditor extends CheckEditor_1.CheckEditor {
    get disabled() {
        return this._disabled;
    }
    get readOnly() {
        return this._readOnly;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class ImmutableRadioEditor extends RadioEditor_1.RadioEditor {
    get disabled() {
        return this._disabled;
    }
    get readOnly() {
        return this._readOnly;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class ImmutableInputEditor extends SmallDialogInputEditor_1.SmallDialogInputEditor {
    get disabled() {
        return this._disabled;
    }
    get readOnly() {
        return this._readOnly;
    }
}
exports.ACTIONS = {
    CHECK: new ImmutableCheckEditor(),
    INPUT: new ImmutableInputEditor(),
    RADIO: new ImmutableRadioEditor(),
};
function of(columnAction) {
    if (!columnAction) {
        return undefined;
    }
    else if (typeof columnAction === "string") {
        const key = columnAction.toUpperCase();
        return exports.ACTIONS[key] || of(null);
    }
    else {
        return columnAction;
    }
}
exports.of = of;
