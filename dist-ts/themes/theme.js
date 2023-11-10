"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
const utils_1 = require("../internal/utils");
const symbolManager_1 = require("../internal/symbolManager");
//private symbol
const _ = (0, symbolManager_1.get)();
function getProp(obj, superObj, names, defNames, convertForSuper, defaultValue) {
    const value = (0, utils_1.getChainSafe)(obj, ...names) || (0, utils_1.getChainSafe)(superObj, ...names);
    if (value) {
        return value;
    }
    if (!defNames) {
        return value || defaultValue;
    }
    const getChainSafeWithConvert = convertForSuper
        ? (obj, ...names) => {
            const value = (0, utils_1.getChainSafe)(obj, ...names);
            if (!value) {
                return value;
            }
            return convertForSuper(value);
        }
        : utils_1.getChainSafe;
    return (getChainSafeWithConvert(obj, ...defNames) ||
        getChainSafeWithConvert(superObj, ...defNames) ||
        defaultValue);
}
class Theme {
    constructor(obj, superTheme) {
        this._checkbox = null;
        this._radioButton = null;
        this._button = null;
        this._header = null;
        this._messages = null;
        this._indicators = null;
        this[_] = {
            obj,
            superTheme: superTheme,
        };
    }
    get font() {
        const { obj, superTheme } = this[_];
        return getProp(obj, superTheme, ["font"]);
    }
    get underlayBackgroundColor() {
        const { obj, superTheme } = this[_];
        return getProp(obj, superTheme, ["underlayBackgroundColor"]);
    }
    // color
    get color() {
        const { obj, superTheme } = this[_];
        return getProp(obj, superTheme, ["color"]);
    }
    get frozenRowsColor() {
        const { obj, superTheme } = this[_];
        return getProp(obj, superTheme, ["frozenRowsColor"], ["color"]);
    }
    // background
    get defaultBgColor() {
        const { obj, superTheme } = this[_];
        return getProp(obj, superTheme, ["defaultBgColor"]);
    }
    get frozenRowsBgColor() {
        const { obj, superTheme } = this[_];
        return getProp(obj, superTheme, ["frozenRowsBgColor"], ["defaultBgColor"]);
    }
    get selectionBgColor() {
        const { obj, superTheme } = this[_];
        return getProp(obj, superTheme, ["selectionBgColor"], ["defaultBgColor"]);
    }
    get highlightBgColor() {
        if (this.hasProperty(["highlightBgColor"])) {
            const { obj, superTheme } = this[_];
            return getProp(obj, superTheme, ["highlightBgColor"]);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (args) => {
            const color = args.row < args.grid.frozenRowCount
                ? this.frozenRowsBgColor
                : this.defaultBgColor;
            if (typeof color === "function") {
                return color(args);
            }
            return color;
        };
    }
    // border
    get borderColor() {
        const { obj, superTheme } = this[_];
        return getProp(obj, superTheme, ["borderColor"]);
    }
    get frozenRowsBorderColor() {
        const { obj, superTheme } = this[_];
        return getProp(obj, superTheme, ["frozenRowsBorderColor"], ["borderColor"]);
    }
    get highlightBorderColor() {
        const { obj, superTheme } = this[_];
        return getProp(obj, superTheme, ["highlightBorderColor"], ["borderColor"]);
    }
    get checkbox() {
        const { obj, superTheme } = this[_];
        return (this._checkbox ||
            (this._checkbox = {
                get uncheckBgColor() {
                    return getCheckboxProp("uncheckBgColor", ["defaultBgColor"]);
                },
                get checkBgColor() {
                    return getCheckboxProp("checkBgColor", ["borderColor"], colorsToColor, "#000");
                },
                get borderColor() {
                    return getCheckboxProp("borderColor", ["borderColor"], colorsToColor, "#000");
                },
            }));
        function getCheckboxProp(prop, defNames, convertForSuper, defaultValue) {
            return getProp(obj, superTheme, ["checkbox", prop], defNames, convertForSuper, defaultValue);
        }
    }
    get radioButton() {
        const { obj, superTheme } = this[_];
        return (this._radioButton ||
            (this._radioButton = {
                get checkColor() {
                    return getRadioButtonProp("checkColor", ["color"]);
                },
                get uncheckBorderColor() {
                    return getRadioButtonProp("uncheckBorderColor", ["borderColor"], colorsToColor, "#000");
                },
                get checkBorderColor() {
                    return getRadioButtonProp("checkBorderColor", ["borderColor"], colorsToColor, "#000");
                },
                get uncheckBgColor() {
                    return getRadioButtonProp("uncheckBgColor", ["defaultBgColor"]);
                },
                get checkBgColor() {
                    return getRadioButtonProp("checkBgColor", ["defaultBgColor"]);
                },
            }));
        function getRadioButtonProp(prop, defNames, convertForSuper, defaultValue) {
            return getProp(obj, superTheme, ["radioButton", prop], defNames, convertForSuper, defaultValue);
        }
    }
    get button() {
        const { obj, superTheme } = this[_];
        return (this._button ||
            (this._button = {
                get color() {
                    return getButtonProp("color", ["color"]);
                },
                get bgColor() {
                    return getButtonProp("bgColor", ["defaultBgColor"]);
                },
            }));
        function getButtonProp(prop, defNames) {
            return getProp(obj, superTheme, ["button", prop], defNames);
        }
    }
    get header() {
        const { obj, superTheme } = this[_];
        return (this._header ||
            (this._header = {
                get sortArrowColor() {
                    return getProp(obj, superTheme, ["header", "sortArrowColor"], ["color"]);
                },
            }));
    }
    get messages() {
        const { obj, superTheme } = this[_];
        return (this._messages ||
            (this._messages = {
                get infoBgColor() {
                    return getMessageProp("infoBgColor");
                },
                get errorBgColor() {
                    return getMessageProp("errorBgColor");
                },
                get warnBgColor() {
                    return getMessageProp("warnBgColor");
                },
                get boxWidth() {
                    return getMessageProp("boxWidth");
                },
                get markHeight() {
                    return getMessageProp("markHeight");
                },
            }));
        function getMessageProp(prop) {
            return getProp(obj, superTheme, ["messages", prop]);
        }
    }
    get indicators() {
        const { obj, superTheme } = this[_];
        return (this._indicators ||
            (this._indicators = {
                get topLeftColor() {
                    return getIndicatorsProp("topLeftColor", ["borderColor"], colorsToColor, "#000");
                },
                get topLeftSize() {
                    return getIndicatorsProp("topLeftSize");
                },
                get topRightColor() {
                    return getIndicatorsProp("topRightColor", ["borderColor"], colorsToColor, "#000");
                },
                get topRightSize() {
                    return getIndicatorsProp("topRightSize");
                },
                get bottomRightColor() {
                    return getIndicatorsProp("bottomRightColor", ["borderColor"], colorsToColor, "#000");
                },
                get bottomRightSize() {
                    return getIndicatorsProp("bottomRightSize");
                },
                get bottomLeftColor() {
                    return getIndicatorsProp("bottomLeftColor", ["borderColor"], colorsToColor, "#000");
                },
                get bottomLeftSize() {
                    return getIndicatorsProp("bottomLeftSize");
                },
            }));
        function getIndicatorsProp(prop, defNames, convertForSuper, defaultValue) {
            return getProp(obj, superTheme, ["indicators", prop], defNames, convertForSuper, defaultValue);
        }
    }
    hasProperty(names) {
        const { obj, superTheme } = this[_];
        return hasThemeProperty(obj, names) || hasThemeProperty(superTheme, names);
    }
    extends(obj) {
        return new Theme(obj, this);
    }
}
exports.Theme = Theme;
function hasThemeProperty(obj, names) {
    if (obj instanceof Theme) {
        return obj.hasProperty(names);
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let o = obj;
        if (!o) {
            return false;
        }
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            o = o[name];
            if (!o) {
                return false;
            }
        }
        return !!o;
    }
}
function colorsToColor(colors) {
    if (typeof colors === "function") {
        return (arg) => {
            const val = colors(arg);
            return val ? colorsArrayToColor(val) : val;
        };
    }
    return colorsArrayToColor(colors);
    function colorsArrayToColor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    colors) {
        if (!Array.isArray(colors)) {
            return colors;
        }
        return colors.find(Boolean) || undefined;
    }
}
