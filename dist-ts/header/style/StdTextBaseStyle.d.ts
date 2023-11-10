import type { ColorDef, StdTextBaseStyleOption, TextOverflow } from "../../ts-types";
import { StdBaseStyle } from "./StdBaseStyle";
export declare class StdTextBaseStyle extends StdBaseStyle {
    private _color?;
    private _font?;
    private _padding;
    private _textOverflow;
    static get DEFAULT(): StdTextBaseStyle;
    constructor(style?: StdTextBaseStyleOption);
    get color(): ColorDef | undefined;
    set color(color: ColorDef | undefined);
    get font(): string | undefined;
    set font(font: string | undefined);
    get padding(): number | string | (number | string)[] | undefined;
    set padding(padding: number | string | (number | string)[] | undefined);
    get textOverflow(): TextOverflow;
    set textOverflow(textOverflow: TextOverflow);
    clone(): StdTextBaseStyle;
}
