"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchGraphColumn = void 0;
const utils_1 = require("../../internal/utils");
const BaseColumn_1 = require("./BaseColumn");
const BranchGraphStyle_1 = require("../style/BranchGraphStyle");
const symbolManager_1 = require("../../internal/symbolManager");
const _ = (0, symbolManager_1.getBranchGraphColumnStateId)();
function getAllColumnData(grid, field, callback) {
    const { dataSource } = grid;
    const allData = [];
    let promise;
    for (let index = 0; index < dataSource.length; index++) {
        const data = dataSource.getField(index, field);
        if ((0, utils_1.isPromise)(data)) {
            const dataIndex = allData.length;
            allData.push(undefined);
            if (!promise) {
                promise = data.then((d) => {
                    allData[dataIndex] = d;
                });
            }
            else {
                promise = promise
                    .then(() => data)
                    .then((d) => {
                    allData[dataIndex] = d;
                });
            }
        }
        else {
            allData.push(data);
        }
    }
    if (promise) {
        promise.then(() => callback(allData));
    }
    else {
        callback(allData);
    }
}
class BranchLine {
    constructor({ fromIndex, toIndex, colorIndex, point, }) {
        this.fromIndex = fromIndex;
        this.toIndex = toIndex;
        this.colorIndex = colorIndex;
        this.point = point;
    }
}
class BranchPoint {
    constructor({ index, commit = false, lines = [], tag, }) {
        this.index = index;
        this.commit = commit;
        this.lines = lines;
        this.tag = tag;
    }
    static mergeLines(lines) {
        const result = lines.filter((l) => l.fromIndex != null && l.toIndex != null);
        const froms = lines.filter((l) => l.fromIndex != null && l.toIndex == null);
        const tos = lines.filter((l) => l.fromIndex == null && l.toIndex != null);
        froms.forEach((f) => {
            for (let i = 0; i < tos.length; i++) {
                const t = tos[i];
                if (t.point) {
                    continue;
                }
                if (f.colorIndex === t.colorIndex) {
                    f.toIndex = t.toIndex;
                    tos.splice(i, 1);
                    break;
                }
            }
            result.push(f);
        });
        return result.concat(tos);
    }
    static merge(a, b) {
        if (!a) {
            return b;
        }
        return new BranchPoint({
            index: a.index,
            commit: a.commit || b.commit,
            lines: BranchPoint.mergeLines(a.lines.concat(b.lines)),
            tag: a.tag || b.tag,
        });
    }
}
function joinLine(timeline, branchIndex) {
    const reverse = [...timeline].reverse();
    for (let i = 0; i < reverse.length; i++) {
        const f = reverse[i][branchIndex];
        if (f) {
            f.lines = BranchPoint.mergeLines(f.lines.concat([
                new BranchLine({
                    toIndex: branchIndex,
                    colorIndex: branchIndex,
                }),
            ]));
            for (let j = 0; j < i; j++) {
                const tl = reverse[j];
                tl[branchIndex] = new BranchPoint({
                    index: branchIndex,
                    lines: [
                        new BranchLine({
                            fromIndex: branchIndex,
                            toIndex: branchIndex,
                            colorIndex: branchIndex,
                        }),
                    ],
                });
            }
            return true;
        }
    }
    return false;
}
function branch({ timeline, branches }, from, to) {
    const fromIndex = from != null ? branches.indexOf(from) : -1;
    let toIndex = branches.indexOf(to);
    if (toIndex < 0) {
        toIndex = branches.length;
        branches.push(to);
    }
    function findBranchRootIndex() {
        for (let index = timeline.length - 1; index >= 0; index--) {
            const tl = timeline[index];
            const from = tl[fromIndex];
            if (from && from.commit) {
                return index;
            }
        }
        return -1;
    }
    if (fromIndex < 0) {
        return new BranchPoint({
            index: toIndex,
        });
    }
    else {
        const fromTargetIndex = findBranchRootIndex();
        if (fromTargetIndex === -1) {
            return null;
        }
        const branchTargetFromIndex = fromTargetIndex + 1;
        const branchPoint = new BranchPoint({
            index: toIndex,
            lines: [
                new BranchLine({
                    fromIndex,
                    colorIndex: toIndex,
                }),
            ],
        });
        let point;
        let result = null;
        if (branchTargetFromIndex < timeline.length) {
            const targetLine = timeline[branchTargetFromIndex];
            point = targetLine[toIndex] = BranchPoint.merge(targetLine[toIndex], branchPoint);
        }
        else {
            point = branchPoint;
            result = branchPoint;
        }
        const from = timeline[fromTargetIndex][fromIndex];
        from.lines = BranchPoint.mergeLines(from.lines.concat([
            new BranchLine({
                toIndex,
                colorIndex: toIndex,
                point,
            }),
        ]));
        return result;
    }
}
function commit({ timeline, branches }, name) {
    const index = branches.indexOf(name);
    if (index < 0) {
        return null;
    }
    const result = new BranchPoint({
        index,
        commit: true,
    });
    if (joinLine(timeline, index)) {
        result.lines = BranchPoint.mergeLines(result.lines.concat([
            new BranchLine({
                fromIndex: index,
                colorIndex: index,
            }),
        ]));
    }
    return result;
}
function commitTag({ branches }, name, tag) {
    let index = branches.indexOf(name);
    if (index < 0) {
        index = branches.length;
        branches.push(name);
    }
    return new BranchPoint({
        index,
        tag,
    });
}
function commitMerge({ timeline, branches }, from, to) {
    const fromIndex = branches.indexOf(from);
    const toIndex = branches.indexOf(to);
    if (toIndex < 0 || fromIndex < 0) {
        return new BranchPoint({
            index: toIndex,
            commit: true,
        });
    }
    const result = new BranchPoint({
        index: toIndex,
        commit: true,
        lines: [
            new BranchLine({
                fromIndex,
                colorIndex: fromIndex,
            }),
            new BranchLine({
                fromIndex: toIndex,
                colorIndex: toIndex,
            }),
        ],
    });
    const froms = [...timeline];
    const fromTargetLine = froms.pop();
    if (fromTargetLine) {
        fromTargetLine[fromIndex] = BranchPoint.merge(fromTargetLine[fromIndex], new BranchPoint({
            index: toIndex,
            lines: [
                new BranchLine({
                    toIndex,
                    colorIndex: fromIndex,
                }),
            ],
        }));
    }
    if (joinLine(froms, fromIndex) && fromTargetLine) {
        fromTargetLine[fromIndex].lines = BranchPoint.mergeLines(fromTargetLine[fromIndex].lines.concat([
            new BranchLine({
                fromIndex,
                colorIndex: fromIndex,
            }),
        ]));
    }
    joinLine(timeline, toIndex);
    return result;
}
function calcCommand(info, command) {
    const { timeline } = info;
    const timelineData = [];
    // const last = timeline.length > 0 ? timeline[timeline.length - 1] : null;
    const commands = Array.isArray(command) ? command : [command];
    commands.forEach((cmd) => {
        if (!cmd) {
            return;
        }
        let point;
        if (cmd.command === "branch") {
            const from = utils_1.obj.isObject(cmd.branch) ? cmd.branch.from : null;
            const to = utils_1.obj.isObject(cmd.branch) ? cmd.branch.to : cmd.branch;
            point = branch(info, from, to);
        }
        else if (cmd.command === "commit") {
            const { branch } = cmd;
            point = commit(info, branch);
        }
        else if (cmd.command === "merge") {
            const { from, to } = cmd.branch;
            point = commitMerge(info, from, to);
        }
        else if (cmd.command === "tag") {
            const { branch, tag } = cmd;
            point = commitTag(info, branch, tag);
        }
        if (point && point.index > -1) {
            timelineData[point.index] = BranchPoint.merge(timelineData[point.index], point);
        }
    });
    timeline.push(timelineData);
}
function calcBranchesInfo(start, grid, field) {
    const result = {
        branches: [],
        timeline: [],
    };
    getAllColumnData(grid, field, (data) => {
        if (start !== "top") {
            data = [...data].reverse();
        }
        data.forEach((command) => {
            calcCommand(result, command);
        });
    });
    return result;
}
function calcBranchXPoints(ctx, left, width, radius, branches, timeline) {
    let w = Math.max(width / branches.length + 1, 5);
    timeline.forEach((tl) => {
        tl.forEach((p, index) => {
            if (index <= 0) {
                // 計算の意味が無い
                return;
            }
            if (p.tag) {
                const textWidth = ctx.measureText(p.tag).width;
                if (w * index + radius * 2 + 4 + textWidth > width) {
                    w = Math.max((width - radius * 2 - 4 - textWidth) / index, 5);
                }
            }
        });
    });
    const result = [];
    let x = left;
    branches.forEach(() => {
        result.push(Math.ceil(x + radius));
        x += w;
    });
    return result;
}
function renderMerge(grid, ctx, x, y, upLineIndex, downLineIndex, colorIndex, { branchXPoints, 
// margin,
branchColors, branchLineWidth, mergeStyle, }, { 
// width,
col, row, branches, }) {
    if (upLineIndex != null || downLineIndex != null) {
        ctx.strokeStyle = (0, utils_1.getOrApply)(branchColors, branches[colorIndex], colorIndex);
        ctx.lineWidth = branchLineWidth;
        ctx.lineCap = "round";
        ctx.beginPath();
        if (upLineIndex != null) {
            const upX = branchXPoints[upLineIndex];
            const upRect = grid.getCellRelativeRect(col, row - 1);
            const upY = upRect.top + upRect.height / 2;
            ctx.moveTo(upX, upY);
            if (mergeStyle === "bezier") {
                ctx.bezierCurveTo(upX, (y + upY) / 2, x, (y + upY) / 2, x, y);
            }
            else {
                ctx.lineTo(x, y);
            }
        }
        else {
            ctx.moveTo(x, y);
        }
        if (downLineIndex != null) {
            const downX = branchXPoints[downLineIndex];
            const downRect = grid.getCellRelativeRect(col, row + 1);
            const downY = downRect.top + downRect.height / 2;
            if (mergeStyle === "bezier") {
                ctx.bezierCurveTo(x, (y + downY) / 2, downX, (y + downY) / 2, downX, downY);
            }
            else {
                ctx.lineTo(downX, downY);
            }
        }
        ctx.stroke();
    }
}
/**
 * BranchGraphColumn
 *
 * Data commands
 * - mastar branch or orphan branch
 *
 * ```js
 * {
 * 	command: 'branch',
 * 	branch: 'branch name A',
 * }
 * ```
 *
 * - commit
 *
 * ```js
 * {
 * 	command: 'commit',
 * 	branch: 'branch name A'
 * }
 * ```
 *
 * - branch
 *
 * ```js
 * {
 * 	command: 'branch',
 * 	branch: {
 * 		from: 'branch name A',
 * 		to: 'branch name B'
 * 	}
 * }
 * ```
 *
 * - merge
 *
 * ```js
 * {
 * 	command: 'merge',
 * 	branch: {
 * 		from: 'branch name B',
 * 		to: 'branch name A'
 * 	}
 * }
 * ```
 *
 * - tag
 *
 * ```js
 * {
 * 	command: 'tag',
 * 	branch: 'branch name A',
 * 	tag: 'tag name'
 * }
 * ```
 *
 * @memberof cheetahGrid.columns.type
 */
class BranchGraphColumn extends BaseColumn_1.BaseColumn {
    constructor(option = {}) {
        super(option);
        this._start = option.start || "bottom";
        this._cache = option.cache != null ? option.cache : false;
    }
    get StyleClass() {
        return BranchGraphStyle_1.BranchGraphStyle;
    }
    clearCache(grid) {
        delete grid[_];
    }
    onDrawCell(cellValue, info, context, grid) {
        if (this._cache) {
            const state = grid[_] || (grid[_] = new Map());
            const { col, row } = context;
            const field = grid.getField(col, row);
            if (!state.has(field)) {
                state.set(field, calcBranchesInfo(this._start, grid, field));
            }
        }
        return super.onDrawCell(cellValue, info, context, grid);
    }
    clone() {
        return new BranchGraphColumn(this);
    }
    drawInternal(_value, context, style, helper, grid, { drawCellBase }) {
        var _a, _b;
        const { col, row } = context;
        const field = grid.getField(col, row);
        const { timeline, branches } = (_b = (this._cache ? (_a = grid[_]) === null || _a === void 0 ? void 0 : _a.get(field) : null)) !== null && _b !== void 0 ? _b : calcBranchesInfo(this._start, grid, field);
        const { upLineIndexKey, downLineIndexKey, } = this._start !== "top"
            ? { upLineIndexKey: "toIndex", downLineIndexKey: "fromIndex" }
            : { upLineIndexKey: "fromIndex", downLineIndexKey: "toIndex" };
        const data = this._start !== "top"
            ? timeline[timeline.length - (row - grid.frozenRowCount) - 1]
            : timeline[row - grid.frozenRowCount];
        const { branchColors, branchLineWidth, circleSize, mergeStyle, margin, bgColor, } = style;
        if (bgColor) {
            drawCellBase({
                bgColor,
            });
        }
        const rect = context.getRect();
        const radius = circleSize / 2;
        const width = rect.width - margin * 2;
        helper.drawWithClip(context, (ctx) => {
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            const branchXPoints = calcBranchXPoints(ctx, rect.left + margin, width, radius, branches, timeline);
            const y = rect.top + rect.height / 2;
            // draw join lines
            data
                .map((point, index) => point
                ? point.lines.map((line) => ({
                    colorIndex: line.colorIndex,
                    upLineIndex: line[upLineIndexKey],
                    downLineIndex: line[downLineIndexKey],
                    pointIndex: index,
                }))
                : [])
                .reduce((p, c) => p.concat(c), []) // flatMap
                // order of overlap
                .sort((a, b) => b.colorIndex - a.colorIndex)
                .forEach((line) => {
                const x = branchXPoints[line.pointIndex];
                renderMerge(grid, ctx, x, y, line.upLineIndex, line.downLineIndex, line.colorIndex, {
                    margin,
                    branchXPoints,
                    branchLineWidth,
                    branchColors,
                    mergeStyle,
                }, {
                    width,
                    col,
                    row,
                    branches,
                });
            });
            // draw commit points
            data.forEach((p, index) => {
                if (p && p.commit) {
                    const x = branchXPoints[index];
                    ctx.fillStyle = (0, utils_1.getOrApply)(branchColors, branches[index], index);
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
                    ctx.fill();
                    ctx.closePath();
                }
            });
            // draw tags
            data.forEach((p, index) => {
                if (p && p.tag) {
                    ctx.fillStyle = (0, utils_1.getOrApply)(branchColors, branches[index], index);
                    ctx.fillText(p.tag, branchXPoints[index] + radius + 4, y);
                }
            });
        });
    }
}
exports.BranchGraphColumn = BranchGraphColumn;
