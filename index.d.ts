// Type definitions for abbrev 1.1
// Project: https://github.com/isaacs/abbrev-js#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace statsjs;

export = statsjs

declare function statsjs(arr: number[]): statsjs.stats;

declare namespace statsjs {
    export interface stats {
        min(attr?: number): number;
        max(attr?: number): number;
        median(): number;
        q1(): number;
        q3(): number;
        iqr(): number;
        mean(): number;
        sum(): number;
        stdDev(): number;
        r(): number;
        gcd(): number;
        lcm(): number;
        size(): number;
        get(index: number): number;
        set(index: number, val: number): stats;
        sort(attr?: boolean | string): number;
        linReg(): { slope: number, yIntercept: number, r: number };
        expReg(): { coefficient: number, base: number, r: number };
        powReg(): { coefficient: number, exponent: number, r: number };
        findOutliers(): stats;
        testOutlier(num: number): boolean;
        removeOutliers(): stats;
        push(value: number): stats;
    }
}