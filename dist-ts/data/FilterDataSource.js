"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterDataSource = void 0;
const utils_1 = require("../internal/utils");
const DataSource_1 = require("./DataSource");
const EventHandler_1 = require("../internal/EventHandler");
/** @private */
class DataSourceIterator {
    constructor(dataSource) {
        this._dataSource = dataSource;
        this._curIndex = -1;
        this._data = [];
    }
    hasNext() {
        const next = this._curIndex + 1;
        return this._dataSource.length > next;
    }
    next() {
        const next = this._curIndex + 1;
        const data = this._getIndexData(next);
        this._curIndex = next;
        return data;
    }
    movePrev() {
        this._curIndex--;
    }
    _getIndexData(index, nest) {
        const dataSource = this._dataSource;
        const data = this._data;
        if (index < data.length) {
            return data[index];
        }
        if (dataSource.length <= index) {
            return undefined;
        }
        const record = this._dataSource.get(index);
        data[index] = record;
        if ((0, utils_1.isPromise)(record)) {
            record.then((val) => {
                data[index] = val;
            });
            if (!nest) {
                for (let i = 1; i <= 100; i++) {
                    this._getIndexData(index + i, true);
                }
            }
        }
        return record;
    }
}
/** @private */
class FilterData {
    constructor(dc, original, filter) {
        this._cancel = false;
        this._owner = dc;
        this._dataSourceItr = new DataSourceIterator(original);
        this._filter = filter;
        this._filteredList = [];
        this._queues = [];
    }
    get(index) {
        if (this._cancel) {
            return undefined;
        }
        const filteredList = this._filteredList;
        if (index < filteredList.length) {
            return filteredList[index];
        }
        const queues = this._queues;
        const indexQueue = queues[index];
        if (indexQueue) {
            return indexQueue;
        }
        return queues[index] || this._findIndex(index);
    }
    cancel() {
        this._cancel = true;
    }
    _findIndex(index) {
        if (window.Promise) {
            const timeout = Date.now() + 100;
            let count = 0;
            return this._findIndexWithTimeout(index, () => {
                count++;
                if (count >= 100) {
                    count = 0;
                    return timeout < Date.now();
                }
                return false;
            });
        }
        return this._findIndexWithTimeout(index, () => false);
    }
    _findIndexWithTimeout(index, testTimeout) {
        const filteredList = this._filteredList;
        const filter = this._filter;
        const dataSourceItr = this._dataSourceItr;
        const queues = this._queues;
        while (dataSourceItr.hasNext()) {
            if (this._cancel) {
                return undefined;
            }
            const record = dataSourceItr.next();
            if ((0, utils_1.isPromise)(record)) {
                dataSourceItr.movePrev();
                const queue = record.then((_value) => {
                    queues[index] = null;
                    return this.get(index);
                });
                queues[index] = queue;
                return queue;
            }
            if (filter(record)) {
                filteredList.push(record);
                if (index < filteredList.length) {
                    return filteredList[index];
                }
            }
            if (testTimeout()) {
                const promise = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 300);
                });
                const queue = promise.then(() => {
                    queues[index] = null;
                    return this.get(index);
                });
                queues[index] = queue;
                return queue;
            }
        }
        const dc = this._owner;
        dc.length = filteredList.length;
        return undefined;
    }
}
/**
 * grid data source for filter
 *
 * @classdesc cheetahGrid.data.FilterDataSource
 * @memberof cheetahGrid.data
 */
class FilterDataSource extends DataSource_1.DataSource {
    static get EVENT_TYPE() {
        return DataSource_1.DataSource.EVENT_TYPE;
    }
    constructor(dataSource, filter) {
        super(dataSource);
        this._filterData = null;
        this._dataSource = dataSource;
        this.filter = filter;
        const handler = (this._handler = new EventHandler_1.EventHandler());
        handler.on(dataSource, DataSource_1.DataSource.EVENT_TYPE.UPDATED_ORDER, () => {
            // reset
            // eslint-disable-next-line no-self-assign
            this.filter = this.filter;
        });
        (0, utils_1.each)(DataSource_1.DataSource.EVENT_TYPE, (type) => {
            handler.on(dataSource, type, (...args) => this.fireListeners(type, ...args));
        });
    }
    get filter() {
        var _a;
        return ((_a = this._filterData) === null || _a === void 0 ? void 0 : _a._filter) || null;
    }
    set filter(filter) {
        if (this._filterData) {
            this._filterData.cancel();
        }
        this._filterData = filter
            ? new FilterData(this, this._dataSource, filter)
            : null;
        this.length = this._dataSource.length;
    }
    getOriginal(index) {
        if (!this._filterData) {
            return super.getOriginal(index);
        }
        return this._filterData.get(index);
    }
    sort(field, order) {
        return this._dataSource.sort(field, order);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get source() {
        return this._dataSource.source;
    }
    get dataSource() {
        return this._dataSource;
    }
    dispose() {
        this._handler.dispose();
        super.dispose();
    }
}
exports.FilterDataSource = FilterDataSource;
