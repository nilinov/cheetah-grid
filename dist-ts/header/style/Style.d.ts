import type { HeaderStdStyleOption } from "../../ts-types";
import { StdMultilineTextBaseStyle } from "./StdMultilineTextBaseStyle";
export declare class Style extends StdMultilineTextBaseStyle {
    private _multiline?;
    static get DEFAULT(): Style;
    constructor(style?: HeaderStdStyleOption);
    get multiline(): boolean;
    set multiline(multiline: boolean);
    clone(): Style;
}
