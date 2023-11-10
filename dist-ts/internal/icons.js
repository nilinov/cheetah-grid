"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconPropKeys = exports.toNormalizeArray = exports.getIconProps = void 0;
const ICON_PROP_KEYS = [
    "content",
    "font",
    "color",
    "className",
    "tagName",
    "isLiga",
    "width",
    "src",
    "svg",
    "name",
    "path",
    "offsetTop",
    "offsetLeft",
];
function quote(name) {
    const quoted = [];
    const split = name.split(/,\s*/);
    for (let i = 0; i < split.length; i++) {
        const part = split[i].replace(/['"]/g, "");
        if (part.indexOf(" ") === -1 && !/^\d/.test(part)) {
            quoted.push(part);
        }
        else {
            quoted.push(`'${part}'`);
        }
    }
    return quoted.join(",");
}
const doms = {};
const props = {};
function getIconProps(tagName, className) {
    const tagProps = props[tagName] || (props[tagName] = {});
    if (tagProps[className]) {
        return tagProps[className];
    }
    const dom = doms[tagName] || (doms[tagName] = document.createElement(tagName));
    // `classList.add()` cannot be used because it may be separated by spaces.
    dom.className = className;
    dom.classList.add("cheetah-grid-icon");
    document.body.appendChild(dom);
    try {
        const beforeStyle = (document.defaultView || window).getComputedStyle(dom, "::before");
        let content = beforeStyle.getPropertyValue("content");
        if (content.length >= 3 && (content[0] === '"' || content[0] === "'")) {
            if (content[0] === content[content.length - 1]) {
                content = content.slice(1, -1);
            }
        }
        let font = beforeStyle.getPropertyValue("font");
        if (!font) {
            font = `${beforeStyle.getPropertyValue("font-style")} ${beforeStyle.getPropertyValue("font-variant")} ${beforeStyle.getPropertyValue("font-weight")} ${beforeStyle.getPropertyValue("font-size")}/${beforeStyle.getPropertyValue("line-height")} ${quote(beforeStyle.getPropertyValue("font-family"))}`;
        }
        const color = beforeStyle.getPropertyValue("color");
        const width = dom.clientWidth;
        const isLiga = (beforeStyle.getPropertyValue("font-feature-settings") || "").indexOf("liga") > -1;
        return (tagProps[className] = {
            content,
            font,
            color,
            width,
            isLiga,
        });
    }
    finally {
        document.body.removeChild(dom);
    }
}
exports.getIconProps = getIconProps;
function toPropArray(prop, count) {
    const result = [];
    if (Array.isArray(prop)) {
        result.push(...prop);
        for (let i = prop.length; i < count; i++) {
            result.push(null);
        }
    }
    else {
        for (let i = 0; i < count; i++) {
            result.push(prop);
        }
    }
    return result;
}
function toSimpleArray(iconProps) {
    if (!iconProps) {
        return iconProps;
    }
    else if (Array.isArray(iconProps)) {
        return iconProps;
    }
    const workData = {};
    let count = 0;
    ICON_PROP_KEYS.forEach((k) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const prop = iconProps[k];
        if (prop) {
            if (Array.isArray(prop)) {
                count = Math.max(count, prop.length);
            }
            else {
                count = Math.max(count, 1);
            }
        }
    });
    ICON_PROP_KEYS.forEach((k) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const arr = toPropArray(iconProps[k], count);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        workData[k] = arr;
    });
    const result = [];
    for (let i = 0; i < count; i++) {
        const data = {};
        ICON_PROP_KEYS.forEach((k) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const val = workData[k][i];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data[k] = val;
        });
        result.push(data);
    }
    return result;
}
function normalize(iconProps) {
    const data = {};
    for (const k in iconProps) {
        if (k === "className") {
            continue;
        }
        if (isIconKey(k)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data[k] = iconProps[k];
        }
    }
    if (iconProps.className) {
        const prop = getIconProps(iconProps.tagName || "i", iconProps.className);
        for (const k in prop) {
            if (isIconKey(k)) {
                if (iconProps[k] == null) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    data[k] = prop[k];
                }
            }
        }
    }
    return data;
}
function toNormalizeArray(iconProps) {
    const icons = toSimpleArray(iconProps);
    if (!icons) {
        return icons;
    }
    return icons.map((icon) => normalize(icon));
}
exports.toNormalizeArray = toNormalizeArray;
exports.iconPropKeys = ICON_PROP_KEYS;
function isIconKey(k) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ICON_PROP_KEYS.indexOf(k) >= 0;
}
