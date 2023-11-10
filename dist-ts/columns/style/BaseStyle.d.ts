import type { BaseStyleOption, ColorDef, ColumnStyle, IndicatorObject } from "../../ts-types";
import { EventTarget } from "../../core/EventTarget";
export declare class BaseStyle extends EventTarget implements ColumnStyle {
    private _bgColor?;
    private _indicatorTopLeft?;
    private _indicatorTopRight?;
    private _indicatorBottomRight?;
    private _indicatorBottomLeft?;
    static get EVENT_TYPE(): {
        CHANGE_STYLE: "change_style";
    };
    static get DEFAULT(): BaseStyle;
    constructor({ bgColor, indicatorTopLeft, indicatorTopRight, indicatorBottomRight, indicatorBottomLeft, }?: BaseStyleOption);
    get bgColor(): ColorDef | undefined;
    set bgColor(bgColor: ColorDef | undefined);
    get indicatorTopLeft(): IndicatorObject | undefined;
    set indicatorTopLeft(indicatorTopLeft: IndicatorObject | undefined);
    get indicatorTopRight(): IndicatorObject | undefined;
    set indicatorTopRight(indicatorTopRight: IndicatorObject | undefined);
    get indicatorBottomRight(): IndicatorObject | undefined;
    set indicatorBottomRight(indicatorBottomRight: IndicatorObject | undefined);
    get indicatorBottomLeft(): IndicatorObject | undefined;
    set indicatorBottomLeft(indicatorBottomLeft: IndicatorObject | undefined);
    doChangeStyle(): void;
    clone(): BaseStyle;
}
