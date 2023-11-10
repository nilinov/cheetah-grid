import type { MultilineTextHeaderStyleOption } from "../../ts-types";
import { StdMultilineTextBaseStyle } from "./StdMultilineTextBaseStyle";
export declare class MultilineTextHeaderStyle extends StdMultilineTextBaseStyle {
    static get DEFAULT(): MultilineTextHeaderStyle;
    constructor(style?: MultilineTextHeaderStyleOption);
    clone(): MultilineTextHeaderStyle;
}
