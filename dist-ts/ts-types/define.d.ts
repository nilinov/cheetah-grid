import type { ColorDef } from "./base";
import type { ListGridAPI } from "./grid-engine";
export interface FontIcon<T> {
    font?: string;
    content?: (T extends object ? keyof T : never) | string;
    className?: string;
    tagName?: string;
    isLiga?: boolean;
    width?: number;
    height?: number;
    color?: string;
    offsetTop?: number;
    offsetLeft?: number;
}
export interface ImageIcon<T> {
    src: (T extends object ? keyof T : never) | string;
    width?: number;
    height?: number;
}
export interface PathIcon<T> {
    path: (T extends object ? keyof T : never) | string;
    width: number;
    height: number;
    color?: string;
}
export interface SvgIcon<T> {
    svg: (T extends object ? keyof T : never) | string;
    width?: number;
    height?: number;
}
export interface NamedIcon<T> {
    name: (T extends object ? keyof T : never) | string;
    width?: number;
    height?: number;
}
export type ColumnIconOption<T> = FontIcon<T> | ImageIcon<T> | PathIcon<T> | SvgIcon<T> | NamedIcon<T>;
export type ColumnMenuItemOptions = ColumnMenuItemOption[] | SimpleColumnMenuItemOption[] | OldSimpleColumnMenuItemOption[] | string | ColumnMenuItemObjectOptions;
export interface ColumnMenuItemOption {
    value: any;
    label: string;
    classList?: string[];
    html?: string;
}
export interface SimpleColumnMenuItemOption {
    value: any;
    label: string;
}
/** @internal */
export interface OldSimpleColumnMenuItemOption {
    value: any;
    caption: string;
}
export interface ColumnMenuItemObjectOptions {
    [value: string]: string;
}
export type TextOverflow = "clip" | "ellipsis" | string;
export type LineClamp = number | "auto";
export interface StylePropertyFunctionArg {
    row: number;
    col: number;
    grid: ListGridAPI<any>;
    context: CanvasRenderingContext2D;
}
export type ColorPropertyDefine = ColorDef | ((args: StylePropertyFunctionArg) => string) | ((args: StylePropertyFunctionArg) => CanvasGradient) | ((args: StylePropertyFunctionArg) => CanvasPattern) | ((args: StylePropertyFunctionArg) => string | CanvasGradient | CanvasPattern | undefined);
export type ColorsPropertyDefine = ColorPropertyDefine | (ColorDef | null)[] | ((args: StylePropertyFunctionArg) => (ColorDef | null)[]);
export type FontPropertyDefine = string | ((args: StylePropertyFunctionArg) => string);
export type IndicatorStyle = "triangle" | "none";
export type IndicatorObject = {
    style?: IndicatorStyle;
    color?: ColorDef;
    size?: number | string;
};
export type IndicatorDefine = IndicatorObject | IndicatorStyle;
