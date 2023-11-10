import { DG_EVENT_TYPE } from "../../../js/core/DG_EVENT_TYPE";
import { getSmallDialogInputEditorStateId } from "../../internal/symbolManager";
import { obj } from "../../internal/utils";
import type {
  CellAddress,
  EventListenerId,
  LayoutObjectId,
  ListGridAPI,
  MaybePromise,
  SmallDialogInputEditorOption,
} from "../../ts-types";
import type { GridInternal, InputEditorState } from "../../ts-types-internal";
import { BaseInputEditor } from "./BaseInputEditor";
import { isDisabledRecord, isReadOnlyRecord } from "./action-utils";
import { SmallDialogInputElement } from "./internal/SmallDialogInputElement";

const _ = getSmallDialogInputEditorStateId();

function getState<T>(grid: GridInternal<T>): InputEditorState {
  let state = grid[_];
  if (!state) {
    state = {};
    obj.setReadonly(grid, _, state);
  }
  return state;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let globalElement: SmallDialogInputElement<any> | null = null;
let bindGridCount = 0;
function attachInput<T>(
  grid: ListGridAPI<T>,
  cell: CellAddress,
  editor: SmallDialogInputEditor<T>,
  value: string
): void {
  const state = getState(grid);
  if (!globalElement) {
    globalElement = new SmallDialogInputElement();
  }
  if (!state.element) {
    state.element = globalElement;
    bindGridCount++;
    grid.addDisposable({
      dispose() {
        bindGridCount--;
        if (!bindGridCount) {
          globalElement?.dispose();
          globalElement = null;
          state.element = null;
        }
      },
    });
  }

  globalElement.attach(grid, editor, cell.col, cell.row, value);
}
function detachInput(gridFocus?: boolean): void {
  if (globalElement) {
    globalElement.detach(gridFocus);
  }
}

type GetValueResult<T, R> = (
  value: string,
  info: { grid: ListGridAPI<T>; col: number; row: number }
) => R;
export class SmallDialogInputEditor<T> extends BaseInputEditor<T> {
  private _helperText?: string | GetValueResult<T, string>;
  private _inputValidator?: GetValueResult<T, MaybePromise<string>>;
  private _validator?: GetValueResult<T, MaybePromise<string>>;
  private _classList?: string | string[];
  private _type?: string;
  constructor(option: SmallDialogInputEditorOption<T> = {}) {
    super(option);
    this._helperText = option.helperText;
    this._inputValidator = option.inputValidator;
    this._validator = option.validator;
    this._classList = option.classList;
    this._type = option.type;
  }
  dispose(): void {
    //noop
  }
  get classList(): string[] | undefined {
    if (!this._classList) {
      return undefined;
    }
    return Array.isArray(this._classList) ? this._classList : [this._classList];
  }
  set classList(classList: string[] | undefined) {
    this._classList = classList;
  }
  get type(): string | undefined {
    return this._type;
  }
  set type(type: string | undefined) {
    this._type = type;
  }
  get helperText(): string | GetValueResult<T, string> | undefined {
    return this._helperText;
  }
  get inputValidator(): GetValueResult<T, MaybePromise<string>> | undefined {
    return this._inputValidator;
  }
  get validator(): GetValueResult<T, MaybePromise<string>> | undefined {
    return this._validator;
  }
  clone(): SmallDialogInputEditor<T> {
    return new SmallDialogInputEditor(this);
  }
  onInputCellInternal(
    grid: ListGridAPI<T>,
    cell: CellAddress,
    inputValue: string
  ): void {
    attachInput(grid, cell, this, inputValue);
  }
  onOpenCellInternal(grid: ListGridAPI<T>, cell: CellAddress): void {
    grid.doGetCellValue(cell.col, cell.row, (value) => {
      attachInput(grid, cell, this, value);
    });
  }
  onChangeSelectCellInternal(
    _grid: ListGridAPI<T>,
    _cell: CellAddress,
    _selected: boolean
  ): void {
    // cancel input
    detachInput();
  }
  onGridScrollInternal(_grid: ListGridAPI<T>): void {
    // cancel input
    detachInput(true);
  }
  onChangeDisabledInternal(): void {
    // cancel input
    detachInput(true);
  }
  onChangeReadOnlyInternal(): void {
    // cancel input
    detachInput(true);
  }
  onSetInputAttrsInternal(
    grid: ListGridAPI<T>,
    _cell: CellAddress,
    input: HTMLInputElement
  ): void {
    SmallDialogInputElement.setInputAttrs(this, grid, input);
  }

  bindGridEvent(
    grid: ListGridAPI<T>,
    cellId: LayoutObjectId
  ): EventListenerId[] {
    const open = (cell: CellAddress): boolean => {
      if (
        isReadOnlyRecord(this.readOnly, grid, cell.row) ||
        isDisabledRecord(this.disabled, grid, cell.row)
      ) {
        return false;
      }
      this.onOpenCellInternal(grid, cell);
      return true;
    };

    function isTarget(col: number, row: number): boolean {
      return grid.getLayoutCellId(col, row) === cellId;
    }

    return [
      ...super.bindGridEvent(grid, cellId),
      grid.listen(DG_EVENT_TYPE.CLICK_CELL, (cell) => {
        if (!isTarget(cell.col, cell.row)) {
          return;
        }
        open({
          col: cell.col,
          row: cell.row,
        });
      }),
    ];
  }
}
