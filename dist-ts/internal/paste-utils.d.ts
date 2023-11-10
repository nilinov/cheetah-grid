import type { PasteRangeBoxValues } from "../ts-types";
export declare function normalizePasteValue(text: string): string;
type ParsePasteRangeBoxValuesOption = {
    trimOnPaste: boolean;
};
export declare function parsePasteRangeBoxValues(value: string, option: ParsePasteRangeBoxValuesOption): PasteRangeBoxValues;
export {};
