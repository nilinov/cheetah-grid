"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeToFn = exports.normalize = void 0;
/** @private */
function extend(a, b) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const o = {};
    for (const k in a) {
        o[k] = a[k];
    }
    for (const k in b) {
        o[k] = b[k];
    }
    return o;
}
/**
 * Normalize the given menu options.
 * @param {*} options menu options to given
 * @returns {Array} Normalized options
 * @private
 */
function normalize(options) {
    if (!options) {
        return [];
    }
    if (Array.isArray(options)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return options.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (e) => extend(e, { label: e.caption || e.label }));
    }
    if (typeof options === "string") {
        return normalize(JSON.parse(options));
    }
    const result = [];
    for (const k in options) {
        result.push({
            value: k,
            label: options[k],
        });
    }
    return result;
}
exports.normalize = normalize;
/**
 * Normalize the given menu options.
 * @param {*} options menu options to given
 * @returns {Array} Normalized options
 * @private
 */
function normalizeToFn(options) {
    if (typeof options === "function") {
        return (record) => normalize(options(record));
    }
    return () => normalize(options);
}
exports.normalizeToFn = normalizeToFn;
