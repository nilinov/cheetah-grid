"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberMap = void 0;
const indexFirst = (arr, elm) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const i = Math.floor((low + high) / 2);
        if (arr[i] === elm) {
            return i;
        }
        else if (arr[i] > elm) {
            high = i - 1;
        }
        else {
            low = i + 1;
        }
    }
    return high < 0 ? 0 : high;
};
class NumberMap {
    constructor() {
        this._keys = [];
        this._vals = {};
        this._sorted = false;
    }
    put(key, value) {
        if (!(key in this._vals)) {
            this._keys.push(key);
            this._sorted = false;
        }
        this._vals[key] = value;
    }
    remove(key) {
        delete this._vals[key];
        const index = this._keys.indexOf(key);
        if (index < 0) {
            return;
        }
        this._keys.splice(index, 1);
        this._sorted = false;
    }
    get(key) {
        return this._vals[key];
    }
    has(key) {
        return this._vals[key] != null;
    }
    each(keyFrom, keyTo, fn) {
        const { _keys: keys } = this;
        const { length } = keys;
        if (!this._sorted) {
            keys.sort((a, b) => {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            });
            this._sorted = true;
        }
        for (let i = indexFirst(keys, keyFrom); i < length; i++) {
            const key = keys[i];
            if (keyFrom <= key && key <= keyTo) {
                fn(this.get(key), key);
            }
            else if (keyTo < key) {
                return;
            }
        }
    }
}
exports.NumberMap = NumberMap;
