import type { CellContext, GridCanvasHelperAPI, IndicatorObject, ListGridAPI } from "../../ts-types";
import type { DrawCellInfo } from "../../ts-types-internal";
export declare const enum DrawIndicatorKind {
    topLeft = 0,
    topRight = 1,
    bottomRight = 2,
    bottomLeft = 3
}
export type DrawIndicator = (context: CellContext, style: IndicatorObject, kind: DrawIndicatorKind, helper: GridCanvasHelperAPI, grid: ListGridAPI<any>, info: DrawCellInfo<any>) => void;
