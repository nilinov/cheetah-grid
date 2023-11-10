"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTarget = void 0;
const utils_1 = require("../internal/utils");
const symbolManager_1 = require("../internal/symbolManager");
//private symbol
/** @private */
const _ = (0, symbolManager_1.get)();
/** @private */
let nextId = 1;
/**
 * event target.
 */
class EventTarget {
    constructor() {
        this[_a] = {
            listeners: {},
            listenerData: {},
        };
    }
    /**
     * Adds an event listener.
     * @param  {string} type The event type id.
     * @param  {function} listener Callback method.
     * @return {number} unique id for the listener.
     */
    listen(type, listener) {
        const list = this[_].listeners[type] || (this[_].listeners[type] = []);
        list.push(listener);
        const id = nextId++;
        this[_].listenerData[id] = {
            type,
            listener,
            remove: () => {
                delete this[_].listenerData[id];
                const index = list.indexOf(listener);
                list.splice(index, 1);
                if (!this[_].listeners[type].length) {
                    delete this[_].listeners[type];
                }
            },
        };
        return id;
    }
    /**
     * Removes an event listener which was added with listen() by the id returned by listen().
     * @param  {number} id the id returned by listen().
     * @return {void}
     */
    unlisten(id) {
        if (!this[_]) {
            return;
        }
        this[_].listenerData[id].remove();
    }
    addEventListener(type, listener) {
        this.listen(type, listener);
    }
    removeEventListener(type, listener) {
        if (!this[_]) {
            return;
        }
        (0, utils_1.each)(this[_].listenerData, (obj, id) => {
            if (obj.type === type && obj.listener === listener) {
                this.unlisten(id);
            }
        });
    }
    hasListeners(type) {
        if (!this[_]) {
            return false;
        }
        return !!this[_].listeners[type];
    }
    /**
     * Fires all registered listeners
     * @param  {string}    type The type of the listeners to fire.
     * @param  {...*} args fire arguments
     * @return {*} the result of the last listener
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fireListeners(type, ...args) {
        if (!this[_]) {
            return [];
        }
        const list = this[_].listeners[type];
        if (!list) {
            return [];
        }
        return list
            .map((listener) => listener.call(this, ...args))
            .filter((r) => r != null);
    }
    dispose() {
        // @ts-expect-error -- ignore
        delete this[_];
    }
}
exports.EventTarget = EventTarget;
_a = _;
