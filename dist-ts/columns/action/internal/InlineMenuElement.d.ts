import type { ColumnMenuItemOption, ListGridAPI } from "../../../ts-types";
type EditorProps<T> = {
    classList?: string[];
    options: (record: T | undefined) => ColumnMenuItemOption[];
};
export declare class InlineMenuElement<T> {
    private _handler;
    private _menu;
    private _beforePropEditor?;
    private _activeData?;
    private _registerBodyClickListener;
    private _deregisterBodyClickListener;
    constructor();
    dispose(): void;
    attach(grid: ListGridAPI<T>, editor: EditorProps<T>, col: number, row: number, value: string, record: T | undefined): void;
    detach(gridFocus?: boolean): void;
    _doChangeValue(valueindex: number | string): void;
    _isActive(): boolean;
    _bindMenuEvents(): void;
    _onBodyClick(e: MouseEvent): void;
    _onKeydownEnter(_menu: HTMLUListElement, item: HTMLElement, e: KeyboardEvent): void;
    _onKeydownTab(menu: HTMLUListElement, item: HTMLElement, e: KeyboardEvent): void;
}
export {};
