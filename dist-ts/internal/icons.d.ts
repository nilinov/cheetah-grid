import type { ColumnIconOption } from "../ts-types";
import type { SimpleColumnIconOption } from "../ts-types-internal";
export declare function getIconProps(tagName: string, className: string): SimpleColumnIconOption;
export declare function toNormalizeArray(iconProps: ColumnIconOption<unknown> | ColumnIconOption<unknown>[]): SimpleColumnIconOption[];
export declare const iconPropKeys: ("width" | "name" | "color" | "content" | "font" | "path" | "svg" | "offsetLeft" | "offsetTop" | "className" | "tagName" | "isLiga" | "src")[];
