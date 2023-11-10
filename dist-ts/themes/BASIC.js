"use strict";
/*eslint no-bitwise:0*/
Object.defineProperty(exports, "__esModule", { value: true });
function DEFAULT_BG_COLOR(args) {
    const { row, grid } = args;
    if (row < grid.frozenRowCount) {
        return "#FFF";
    }
    const index = grid.getRecordIndexByRow(row);
    if (!(index & 1)) {
        return "#FFF";
    }
    else {
        return "#F6F6F6";
    }
}
const cacheLinearGradient = {};
function getLinearGradient(context, left, top, right, bottom, colorStops) {
    let stop;
    const stopsKey = [];
    for (stop in colorStops) {
        stopsKey.push(`${stop}@${colorStops[stop]}`);
    }
    const key = `${left}/${top}/${right}/${bottom}/${stopsKey.join(",")}`;
    const ret = cacheLinearGradient[key];
    if (ret) {
        return ret;
    }
    const grad = context.createLinearGradient(left, top, left, bottom);
    for (stop in colorStops) {
        grad.addColorStop(Number(stop), colorStops[stop]);
    }
    return (cacheLinearGradient[key] = grad);
}
function FROZEN_ROWS_BG_COLOR(args) {
    const { col, grid, grid: { frozenRowCount }, context, } = args;
    const { left, top } = grid.getCellRelativeRect(col, 0);
    const { bottom } = grid.getCellRelativeRect(col, frozenRowCount - 1);
    return getLinearGradient(context, left, top, left, bottom, {
        0: "#FFF",
        1: "#D3D3D3",
    });
}
/**
 * basic theme
 * @name BASIC
 * @memberof cheetahGrid.themes.choices
 */
exports.default = {
    color: "#000",
    // frozenRowsColor: '#000',
    defaultBgColor: DEFAULT_BG_COLOR,
    frozenRowsBgColor: FROZEN_ROWS_BG_COLOR,
    selectionBgColor: "#CCE0FF",
    borderColor: "#000",
    // frozenRowsBorderColor: '#000',
    highlightBorderColor: "#5E9ED6",
    checkbox: {
        uncheckBgColor: "#FFF",
        checkBgColor: "rgb(76, 73, 72)",
        borderColor: "#000",
    },
    radioButton: {
        checkColor: "rgb(76, 73, 72)",
        checkBorderColor: "#000",
        uncheckBorderColor: "#000",
        uncheckBgColor: "#FFF",
        checkBgColor: "#FFF",
    },
    button: {
        color: "#FFF",
        bgColor: "#2196F3",
    },
    header: {
        sortArrowColor: "rgba(0, 0, 0, 0.38)",
    },
    indicators: {
        topLeftColor: "#000",
    },
    underlayBackgroundColor: "#F6F6F6",
};
