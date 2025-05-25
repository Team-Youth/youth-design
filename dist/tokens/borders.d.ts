/**
 * Border Design Tokens
 * 컴포넌트에 테두리를 추가하여 구분감을 제공하는 속성
 */
export declare const borderWidth: {
    /** UI 요소의 기본적인 구분감을 제공할 때 사용 */
    readonly s: "1px";
    /** 1px보다 더 명확한 구분이 필요할 때 사용 */
    readonly m: "1.5px";
    /** 중요한 요소를 강조하거나, 요소 간 강한 대비가 필요할 때 사용 */
    readonly l: "2px";
};
export declare const borderStyle: {
    readonly solid: "solid";
    readonly dashed: "dashed";
    readonly dotted: "dotted";
    readonly none: "none";
};
export declare const border: {
    /** 기본 보더 - UI 요소의 기본적인 구분감 제공 */
    readonly s: "1px solid";
    /** 중간 보더 - 더 명확한 구분이 필요할 때 */
    readonly m: "1.5px solid";
    /** 큰 보더 - 중요한 요소 강조나 강한 대비가 필요할 때 */
    readonly l: "2px solid";
    /** 보더 없음 */
    readonly none: "none";
};
export declare const borders: {
    readonly borderWidth: {
        /** UI 요소의 기본적인 구분감을 제공할 때 사용 */
        readonly s: "1px";
        /** 1px보다 더 명확한 구분이 필요할 때 사용 */
        readonly m: "1.5px";
        /** 중요한 요소를 강조하거나, 요소 간 강한 대비가 필요할 때 사용 */
        readonly l: "2px";
    };
    readonly borderStyle: {
        readonly solid: "solid";
        readonly dashed: "dashed";
        readonly dotted: "dotted";
        readonly none: "none";
    };
    readonly border: {
        /** 기본 보더 - UI 요소의 기본적인 구분감 제공 */
        readonly s: "1px solid";
        /** 중간 보더 - 더 명확한 구분이 필요할 때 */
        readonly m: "1.5px solid";
        /** 큰 보더 - 중요한 요소 강조나 강한 대비가 필요할 때 */
        readonly l: "2px solid";
        /** 보더 없음 */
        readonly none: "none";
    };
};
export default borders;
