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
exports.DataSource = void 0;
const sort = __importStar(require("../internal/sort"));
const utils_1 = require("../internal/utils");
const EventTarget_1 = require("../core/EventTarget");
/** @private */
function isFieldAssessor(field) {
    if (utils_1.obj.isObject(field)) {
        if (field.get && field.set) {
            return true;
        }
    }
    return false;
}
/** @private */
const EVENT_TYPE = {
    UPDATE_LENGTH: "update_length",
    UPDATED_LENGTH: "updated_length",
    UPDATED_ORDER: "updated_order",
};
/** @private */
function ascOrderFn(v1, v2) {
    if (v1 === v2) {
        return 0;
    }
    if (v1 == null) {
        return v2 == null
            ? // If both are nullish, consider a match.
                0
            : // Nulls first
                -1;
    }
    if (v2 == null) {
        // Nulls first
        return 1;
    }
    return v1 > v2 ? 1 : -1;
}
function descOrderFn(v1, v2) {
    return (ascOrderFn(v1, v2) * -1);
}
/** @private */
function getValue(value, setPromiseBack) {
    const maybePromiseValue = (0, utils_1.getOrApply)(value);
    if ((0, utils_1.isPromise)(maybePromiseValue)) {
        const promiseValue = maybePromiseValue.then((r) => {
            setPromiseBack(r);
            return r;
        });
        //一時的にキャッシュ
        setPromiseBack(promiseValue);
        return promiseValue;
    }
    else {
        return maybePromiseValue;
    }
}
/** @private */
function getField(record, field, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
setPromiseBack) {
    if (record == null) {
        return undefined;
    }
    if ((0, utils_1.isPromise)(record)) {
        return record.then((r) => getField(r, field, setPromiseBack));
    }
    const fieldGet = isFieldAssessor(field) ? field.get : field;
    if (fieldGet in record) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fieldResult = record[fieldGet];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return getValue(fieldResult, setPromiseBack);
    }
    if (typeof fieldGet === "function") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fieldResult = fieldGet(record);
        return getValue(fieldResult, setPromiseBack);
    }
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const ss = String(fieldGet).split(".");
    if (ss.length <= 1) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fieldResult = record[fieldGet];
        return getValue(fieldResult, setPromiseBack);
    }
    const fieldResult = (0, utils_1.applyChainSafe)(record, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (val, name) => getField(val, name, utils_1.emptyFn), ...ss);
    return getValue(fieldResult, setPromiseBack);
}
/** @private */
function setField(record, field, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
value) {
    if (record == null) {
        return false;
    }
    const fieldSet = isFieldAssessor(field) ? field.set : field;
    if (fieldSet in record) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        record[fieldSet] = value;
    }
    else if (typeof fieldSet === "function") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return fieldSet(record, value);
    }
    else if (typeof fieldSet === "string") {
        const ss = `${fieldSet}`.split(".");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let obj = record;
        const { length } = ss;
        for (let i = 0; i < length; i++) {
            const f = ss[i];
            if (i === length - 1) {
                obj[f] = value;
            }
            else {
                obj = obj[f] || (obj[f] = {});
            }
        }
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        record[fieldSet] = value;
    }
    return true;
}
/** @private */
function _getIndex(sortedIndexMap, index) {
    if (!sortedIndexMap) {
        return index;
    }
    const mapIndex = sortedIndexMap[index];
    return mapIndex != null ? mapIndex : index;
}
/**
 * grid data source
 *
 * @classdesc cheetahGrid.data.DataSource
 * @memberof cheetahGrid.data
 */
class DataSource extends EventTarget_1.EventTarget {
    static get EVENT_TYPE() {
        return EVENT_TYPE;
    }
    static ofArray(array) {
        return new DataSource({
            get: (index) => array[index],
            length: array.length,
            source: array,
        });
    }
    constructor(obj) {
        var _a;
        super();
        this._sortedIndexMap = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._get = (obj === null || obj === void 0 ? void 0 : obj.get.bind(obj)) || undefined;
        this._length = (obj === null || obj === void 0 ? void 0 : obj.length) || 0;
        this._source = (_a = obj === null || obj === void 0 ? void 0 : obj.source) !== null && _a !== void 0 ? _a : obj;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get source() {
        return this._source;
    }
    get(index) {
        return this.getOriginal(_getIndex(this._sortedIndexMap, index));
    }
    getField(index, field) {
        return this.getOriginalField(_getIndex(this._sortedIndexMap, index), field);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hasField(index, field) {
        return this.hasOriginalField(_getIndex(this._sortedIndexMap, index), field);
    }
    setField(index, field, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value) {
        return this.setOriginalField(_getIndex(this._sortedIndexMap, index), field, value);
    }
    sort(field, order) {
        const sortedIndexMap = new Array(this._length);
        const orderFn = order !== "desc" ? ascOrderFn : descOrderFn;
        return sort
            .sortPromise((index) => sortedIndexMap[index] != null
            ? sortedIndexMap[index]
            : (sortedIndexMap[index] = index), (index, rel) => {
            sortedIndexMap[index] = rel;
        }, this._length, orderFn, (index) => this.getOriginalField(index, field))
            .then(() => {
            this._sortedIndexMap = sortedIndexMap;
            this.fireListeners(EVENT_TYPE.UPDATED_ORDER);
        });
    }
    get length() {
        return this._length;
    }
    set length(length) {
        if (this._length === length) {
            return;
        }
        const results = this.fireListeners(EVENT_TYPE.UPDATE_LENGTH, length);
        if (utils_1.array.findIndex(results, (v) => !v) >= 0) {
            return;
        }
        this._length = length;
        this.fireListeners(EVENT_TYPE.UPDATED_LENGTH, this._length);
    }
    get dataSource() {
        return this;
    }
    dispose() {
        super.dispose();
    }
    getOriginal(index) {
        return getValue(this._get(index), (val) => {
            this.recordPromiseCallBackInternal(index, val);
        });
    }
    getOriginalField(index, field) {
        if (field == null) {
            return undefined;
        }
        const record = this.getOriginal(index);
        return getField(record, field, (val) => {
            this.fieldPromiseCallBackInternal(index, field, val);
        });
    }
    hasOriginalField(index, field) {
        if (field == null) {
            return false;
        }
        if (typeof field === "function") {
            return true;
        }
        const record = this.getOriginal(index);
        return Boolean(record && field in record);
    }
    setOriginalField(index, field, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value) {
        if (field == null) {
            return false;
        }
        const record = this.getOriginal(index);
        if ((0, utils_1.isPromise)(record)) {
            return record.then((r) => setField(r, field, value));
        }
        return setField(record, field, value);
    }
    fieldPromiseCallBackInternal(_index, _field, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _value) {
        //
    }
    recordPromiseCallBackInternal(_index, _record) {
        //
    }
}
exports.DataSource = DataSource;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
DataSource.EMPTY = new DataSource({
    get() {
        /*noop */
    },
    length: 0,
});
