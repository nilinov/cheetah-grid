"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheOrLoad = exports.loadImage = void 0;
const LRUCache_1 = require("./LRUCache");
const utils_1 = require("./utils");
const allCache = {};
function loadImage(src) {
    if (typeof Promise === "undefined") {
        console.error("Promise is not loaded. load Promise before this process.");
        return {
            then() {
                return this;
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        };
    }
    const img = new Image();
    const result = new Promise((resolve) => {
        img.onload = () => {
            resolve(img);
        };
    });
    img.onerror = () => {
        const url = src.length > 200 ? `${src.slice(0, 200)}...` : src;
        console.warn(`cannot load: ${url}`);
        throw new Error(`IMAGE LOAD ERROR: ${url}`);
    };
    img.src = src;
    return result;
}
exports.loadImage = loadImage;
function getCacheOrLoad0(cache, src) {
    return (0, utils_1.then)(src, (src) => {
        const c = cache.get(src);
        if (c) {
            return c;
        }
        const result = loadImage(src).then((img) => {
            cache.put(src, img);
            return img;
        });
        cache.put(src, result);
        return result;
    });
}
function getCacheOrLoad(cacheName, cacheSize, src) {
    const cache = allCache[cacheName] ||
        (allCache[cacheName] = new LRUCache_1.LRUCache(cacheSize));
    return getCacheOrLoad0(cache, src);
}
exports.getCacheOrLoad = getCacheOrLoad;
