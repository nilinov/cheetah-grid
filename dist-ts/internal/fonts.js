"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = exports.check = void 0;
const utils_1 = require("./utils");
const loads = {};
let load;
exports.load = load;
let check;
exports.check = check;
if (utils_1.isNode) {
    exports.load = load = function (_font, _testStr, callback) {
        callback();
    };
    exports.check = check = function () {
        return false;
    };
}
else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fontFaceSet = document.fonts;
    const legacy = !fontFaceSet;
    exports.load = load = legacy
        ? function (font, testStr, callback) {
            //for legacy(IE)
            if (loads[`${font} @ ${testStr}`]) {
                callback();
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require("./legacy/fontwatch/FontWatchRunner").load(font, testStr, () => {
                loads[`${font} @ ${testStr}`] = true;
                callback();
            }, () => {
                loads[`${font} @ ${testStr}`] = true;
                callback();
            });
        }
        : function (font, _testStr, callback) {
            if (loads.all || loads[font]) {
                callback();
                return;
            }
            fontFaceSet.ready.then(() => {
                loads.all = true;
            });
            fontFaceSet.load(font).then(() => {
                loads[font] = true;
                callback();
            });
        };
    exports.check = check = legacy
        ? function (font, testStr) {
            //for legacy(IE)
            if (loads[`${font} @ ${testStr}`]) {
                return true;
            }
            load(font, testStr, () => { });
            return false;
        }
        : function (font, testStr) {
            if (loads.all || loads[font]) {
                return true;
            }
            if (!fontFaceSet.check(font)) {
                load(font, testStr, () => { });
                return false;
            }
            return true;
        };
}
