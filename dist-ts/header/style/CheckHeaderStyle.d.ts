import type { CheckHeaderStyleOption, ColorDef } from "../../ts-types";
import { StdTextBaseStyle } from "./StdTextBaseStyle";
export declare class CheckHeaderStyle extends StdTextBaseStyle {
    private _uncheckBgColor?;
    private _checkBgColor?;
    private _borderColor?;
    static get DEFAULT(): CheckHeaderStyle;
    constructor(style?: CheckHeaderStyleOption);
    get uncheckBgColor(): ColorDef | undefined;
    set uncheckBgColor(uncheckBgColor: ColorDef | undefined);
    get checkBgColor(): ColorDef | undefined;
    set checkBgColor(checkBgColor: ColorDef | undefined);
    get borderColor(): ColorDef | undefined;
    set borderColor(borderColor: ColorDef | undefined);
    clone(): CheckHeaderStyle;
}
