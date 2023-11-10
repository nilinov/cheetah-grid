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
exports.register = exports.getIcons = exports.GridCanvasHelper = exports.data = exports.themes = exports.headers = exports.columns = exports.ListGrid = exports.tools = exports.core = exports._getInternal = void 0;
const columns = __importStar(require("./columns"));
exports.columns = columns;
const core = __importStar(require("./core"));
exports.core = core;
const data = __importStar(require("./data"));
exports.data = data;
const headers = __importStar(require("./headers"));
exports.headers = headers;
const icons = __importStar(require("./icons"));
const register = __importStar(require("./register"));
exports.register = register;
const themes = __importStar(require("./themes"));
exports.themes = themes;
const tools = __importStar(require("./tools"));
exports.tools = tools;
const ListGrid_1 = require("./ListGrid");
Object.defineProperty(exports, "ListGrid", { enumerable: true, get: function () { return ListGrid_1.ListGrid; } });
const GridCanvasHelper_1 = require("./GridCanvasHelper");
Object.defineProperty(exports, "GridCanvasHelper", { enumerable: true, get: function () { return GridCanvasHelper_1.GridCanvasHelper; } });
var get_internal_1 = require("./get-internal");
Object.defineProperty(exports, "_getInternal", { enumerable: true, get: function () { return get_internal_1.getInternal; } });
/** @private */
function getIcons() {
    return icons.get();
}
exports.getIcons = getIcons;
// backward compatibility
exports.default = {
    core,
    tools,
    // impl Grids
    ListGrid: ListGrid_1.ListGrid,
    // objects
    columns,
    headers,
    themes,
    data,
    // helper
    GridCanvasHelper: GridCanvasHelper_1.GridCanvasHelper,
    //plugin registers
    register,
    get icons() {
        return getIcons();
    },
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Object.defineProperty(themes, "default", {
    enumerable: false,
    configurable: true,
    get() {
        return themes.getDefault();
    },
    set(defaultTheme) {
        themes.setDefault(defaultTheme);
    },
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Object.defineProperty(themes, "choices", {
    enumerable: false,
    configurable: true,
    get() {
        return themes.getChoices();
    },
});
