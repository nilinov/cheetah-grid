"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortPromise = exports.sort = exports.sortArray = void 0;
const utils_1 = require("./utils");
function createArray(get, length) {
    const array = new Array(length);
    for (let i = 0; i < length; i++) {
        array[i] = get(i);
    }
    return array;
}
function createArrayPromise(get, getField, length
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    return new Promise((resolve) => {
        const plist = [];
        const array = new Array(length);
        for (let i = 0; i < length; i++) {
            const data = get(i);
            const record = {
                v: data,
                f: data,
            };
            array[i] = record;
            if ((0, utils_1.isPromise)(data)) {
                plist.push(data.then((v) => {
                    record.v = v;
                    record.f = v;
                }));
            }
        }
        Promise.all(plist)
            .then(() => getField == null
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                array
            : // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setArrayField(array, getField))
            .then(resolve);
    });
}
function setArrayField(array, getField) {
    return new Promise((resolve) => {
        const { length } = array;
        const plist = [];
        for (let i = 0; i < length; i++) {
            const record = array[i];
            const f = getField(record.v);
            if ((0, utils_1.isPromise)(f)) {
                plist.push(f.then((v) => {
                    record.f = v;
                }));
            }
            else {
                record.f = f;
            }
        }
        Promise.all(plist).then(() => resolve(array));
    });
}
function sortArray(array, compare) {
    Array.prototype.sort.call(array, compare);
}
exports.sortArray = sortArray;
function sort(get, set, length, compare, getField) {
    const old = createArray(get, length);
    if (getField != null) {
        old.sort((r1, r2) => compare(getField(r1), getField(r2)));
    }
    else {
        old.sort(compare);
    }
    for (let i = 0; i < length; i++) {
        set(i, old[i]);
    }
}
exports.sort = sort;
function sortPromise(get, set, length, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
compare, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
getField) {
    if (typeof Promise !== "undefined") {
        return createArrayPromise(get, getField, length).then((array) => {
            array.sort((r1, r2) => compare(r1.f, r2.f));
            for (let i = 0; i < length; i++) {
                set(i, array[i].v);
            }
        });
    }
    else {
        sort(get, set, length, compare, getField);
        const dummyPromise = {
            then(fn) {
                fn();
                return dummyPromise;
            },
            catch() {
                return dummyPromise;
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        };
        return dummyPromise;
    }
}
exports.sortPromise = sortPromise;
