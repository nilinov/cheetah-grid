import type { LineClamp, StdMultilineTextBaseStyleOption } from "../../ts-types";
import { StdTextBaseStyle } from "./StdTextBaseStyle";
export declare class StdMultilineTextBaseStyle extends StdTextBaseStyle {
    private _lineHeight;
    private _autoWrapText;
    private _lineClamp?;
    static get DEFAULT(): StdMultilineTextBaseStyle;
    constructor(style?: StdMultilineTextBaseStyleOption);
    clone(): StdMultilineTextBaseStyle;
    get lineHeight(): string | number;
    set lineHeight(lineHeight: string | number);
    get lineClamp(): LineClamp | undefined;
    set lineClamp(lineClamp: LineClamp | undefined);
    get autoWrapText(): boolean;
    set autoWrapText(autoWrapText: boolean);
}
