import type { ColorDef, SortHeaderStyleOption } from "../../ts-types";
import { StdMultilineTextBaseStyle } from "./StdMultilineTextBaseStyle";
export declare class SortHeaderStyle extends StdMultilineTextBaseStyle {
    private _sortArrowColor?;
    private _multiline?;
    static get DEFAULT(): SortHeaderStyle;
    constructor(style?: SortHeaderStyleOption);
    get sortArrowColor(): ColorDef | undefined;
    set sortArrowColor(sortArrowColor: ColorDef | undefined);
    get multiline(): boolean;
    set multiline(multiline: boolean);
    clone(): SortHeaderStyle;
}
