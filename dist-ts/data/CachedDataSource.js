"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CachedDataSource = void 0;
const DataSource_1 = require("./DataSource");
/** @private */
function _setFieldCache(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
fCache, index, field, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
value) {
    const recCache = fCache[index] || (fCache[index] = new Map());
    recCache.set(field, value);
}
/**
 * grid data source for caching Promise data
 *
 * @classdesc cheetahGrid.data.CachedDataSource
 * @memberof cheetahGrid.data
 */
class CachedDataSource extends DataSource_1.DataSource {
    static get EVENT_TYPE() {
        return DataSource_1.DataSource.EVENT_TYPE;
    }
    static ofArray(array) {
        return new CachedDataSource({
            get: (index) => array[index],
            length: array.length,
            source: array,
        });
    }
    constructor(opt) {
        super(opt);
        this._rCache = {};
        this._fCache = {};
    }
    getOriginal(index) {
        if (this._rCache && this._rCache[index]) {
            return this._rCache[index];
        }
        return super.getOriginal(index);
    }
    getOriginalField(index, field) {
        const rowCache = this._fCache && this._fCache[index];
        if (rowCache) {
            const cache = rowCache.get(field);
            if (cache) {
                return cache;
            }
        }
        return super.getOriginalField(index, field);
    }
    setOriginalField(index, field, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value) {
        const fCache = this._fCache;
        if (fCache && fCache[index]) {
            delete fCache[index]; // clear row cache
        }
        return super.setOriginalField(index, field, value);
    }
    clearCache() {
        if (this._rCache) {
            this._rCache = {};
        }
        if (this._fCache) {
            this._fCache = {};
        }
    }
    fieldPromiseCallBackInternal(index, field, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value) {
        _setFieldCache(this._fCache, index, field, value);
    }
    recordPromiseCallBackInternal(index, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    record) {
        this._rCache[index] = record;
    }
    dispose() {
        super.dispose();
    }
}
exports.CachedDataSource = CachedDataSource;
