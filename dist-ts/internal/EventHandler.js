"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
const utils_1 = require("./utils");
/** @private */
let nextId = 1;
class EventHandler {
    constructor() {
        this._listeners = {};
    }
    on(target, type, listener, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...options) {
        if (target.addEventListener) {
            target.addEventListener(type, listener, ...options);
        }
        const obj = {
            target,
            type,
            listener,
            options,
        };
        const id = nextId++;
        this._listeners[id] = obj;
        return id;
    }
    once(target, type, listener, ...options) {
        const id = this.on(target, type, (...args) => {
            this.off(id);
            listener(...args);
        }, ...options);
        return id;
    }
    tryWithOffEvents(target, type, call) {
        const list = [];
        try {
            (0, utils_1.each)(this._listeners, (obj) => {
                if (obj.target === target && obj.type === type) {
                    if (obj.target.removeEventListener) {
                        obj.target.removeEventListener(obj.type, obj.listener, ...obj.options);
                    }
                    list.push(obj);
                }
            });
            call();
        }
        finally {
            list.forEach((obj) => {
                if (obj.target.addEventListener) {
                    obj.target.addEventListener(obj.type, obj.listener, ...obj.options);
                }
            });
        }
    }
    off(id) {
        if (id == null) {
            return;
        }
        const obj = this._listeners[id];
        if (!obj) {
            return;
        }
        delete this._listeners[id];
        if (obj.target.removeEventListener) {
            obj.target.removeEventListener(obj.type, obj.listener, ...obj.options);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fire(target, type, ...args) {
        (0, utils_1.each)(this._listeners, (obj) => {
            if (obj.target === target && obj.type === type) {
                obj.listener.call(obj.target, ...args);
            }
        });
    }
    hasListener(target, type) {
        let result = false;
        (0, utils_1.each)(this._listeners, (obj) => {
            if (obj.target === target && obj.type === type) {
                result = true;
            }
        });
        return result;
    }
    clear() {
        (0, utils_1.each)(this._listeners, (obj) => {
            if (obj.target.removeEventListener) {
                obj.target.removeEventListener(obj.type, obj.listener, ...obj.options);
            }
        });
        this._listeners = {};
    }
    dispose() {
        this.clear();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._listeners = null;
    }
}
exports.EventHandler = EventHandler;
