/**
 * Typography Design Tokens
 * 서비스와 사용자가 커뮤니케이션하는 주요 요소
 */
export declare const fontFamily: {
    /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
    readonly primary: "Pretendard";
};
export declare const fontSize: {
    readonly xxxxl: "clamp(1.75rem, 4vw, 2rem)";
    readonly xxxl: "clamp(1.5rem, 3.5vw, 1.75rem)";
    readonly xxl: "clamp(1.25rem, 3vw, 1.5rem)";
    readonly xl: "clamp(1.125rem, 2.5vw, 1.25rem)";
    readonly l: "clamp(1rem, 2vw, 1.125rem)";
    readonly m: "clamp(0.875rem, 1.5vw, 1rem)";
    readonly s: "clamp(0.75rem, 1.25vw, 0.875rem)";
    readonly xs: "clamp(0.625rem, 1vw, 0.75rem)";
    readonly xxs: "clamp(0.5625rem, 0.875vw, 0.625rem)";
    readonly xxxs: "clamp(0.625rem, 1vw, 0.688rem)";
};
export declare const fontWeight: {
    readonly bold: 700;
    readonly semibold: 600;
    readonly medium: 500;
    readonly regular: 400;
};
export declare const lineHeight: {
    readonly xxxxl: "1.3";
    readonly xxxl: "1.3";
    readonly xxl: "1.33";
    readonly xl: "1.4";
    readonly l: "1.33";
    readonly m: "1.5";
    readonly s: "1.57";
    readonly xs: "1.67";
    readonly xxs: "1.8";
    readonly xxxs: "1.55";
};
export declare const letterSpacing: {
    readonly m: "0";
    readonly s: "-1%";
    readonly xs: "-2%";
};
export declare const breakpoints: {
    readonly mobile: "320px";
    readonly tablet: "768px";
    readonly desktop: "1024px";
};
export declare const textStyles: {
    /** 주목도를 높이고 큰 타이틀 영역 강조에 사용 */
    readonly display1: {
        readonly fontSize: "clamp(1.75rem, 4vw, 2rem)";
        readonly fontWeight: 700;
        readonly lineHeight: "1.3";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 중간 크기 타이틀에 사용 */
    readonly display2: {
        readonly fontSize: "clamp(1.5rem, 3.5vw, 1.75rem)";
        readonly fontWeight: 700;
        readonly lineHeight: "1.3";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 정보성 카드 타이틀에 주로 사용 */
    readonly heading1: {
        readonly fontSize: "clamp(1.25rem, 3vw, 1.5rem)";
        readonly fontWeight: 700;
        readonly lineHeight: "1.33";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 섹션 구분 타이틀 등에 사용 */
    readonly heading2: {
        readonly fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)";
        readonly fontWeight: 600;
        readonly lineHeight: "1.4";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 소제목 등에 사용 */
    readonly heading3: {
        readonly fontSize: "clamp(1rem, 2vw, 1.125rem)";
        readonly fontWeight: 600;
        readonly lineHeight: "1.33";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 리스트 아이템, 버튼 텍스트 등에 사용 */
    readonly heading4: {
        readonly fontSize: "clamp(0.875rem, 1.5vw, 1rem)";
        readonly fontWeight: 600;
        readonly lineHeight: "1.5";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 부가 정보, 캡션 등에 사용 */
    readonly heading5: {
        readonly fontSize: "clamp(0.75rem, 1.25vw, 0.875rem)";
        readonly fontWeight: 600;
        readonly lineHeight: "1.57";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 주요 본문 텍스트에 사용 */
    readonly body1: {
        readonly fontSize: "clamp(0.875rem, 1.5vw, 1rem)";
        readonly fontWeight: 400;
        readonly lineHeight: "1.33";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 보조 본문 텍스트에 사용 */
    readonly body2: {
        readonly fontSize: "clamp(0.75rem, 1.25vw, 0.875rem)";
        readonly fontWeight: 400;
        readonly lineHeight: "1.57";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 본문 보조, 하위 위계 텍스트 쓰임새로 사용 권장 */
    readonly body3: {
        readonly fontSize: "clamp(0.625rem, 1vw, 0.75rem)";
        readonly fontWeight: 400;
        readonly lineHeight: "1.8";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 보조 정보나 컴포넌트 레벨에서 사용 */
    readonly caption: {
        readonly fontSize: "clamp(0.625rem, 1vw, 0.75rem)";
        readonly fontWeight: 400;
        readonly lineHeight: "1.67";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
};
export declare const typography: {
    readonly fontFamily: {
        /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
        readonly primary: "Pretendard";
    };
    readonly fontSize: {
        readonly xxxxl: "clamp(1.75rem, 4vw, 2rem)";
        readonly xxxl: "clamp(1.5rem, 3.5vw, 1.75rem)";
        readonly xxl: "clamp(1.25rem, 3vw, 1.5rem)";
        readonly xl: "clamp(1.125rem, 2.5vw, 1.25rem)";
        readonly l: "clamp(1rem, 2vw, 1.125rem)";
        readonly m: "clamp(0.875rem, 1.5vw, 1rem)";
        readonly s: "clamp(0.75rem, 1.25vw, 0.875rem)";
        readonly xs: "clamp(0.625rem, 1vw, 0.75rem)";
        readonly xxs: "clamp(0.5625rem, 0.875vw, 0.625rem)";
        readonly xxxs: "clamp(0.625rem, 1vw, 0.688rem)";
    };
    readonly fontWeight: {
        readonly bold: 700;
        readonly semibold: 600;
        readonly medium: 500;
        readonly regular: 400;
    };
    readonly lineHeight: {
        readonly xxxxl: "1.3";
        readonly xxxl: "1.3";
        readonly xxl: "1.33";
        readonly xl: "1.4";
        readonly l: "1.33";
        readonly m: "1.5";
        readonly s: "1.57";
        readonly xs: "1.67";
        readonly xxs: "1.8";
        readonly xxxs: "1.55";
    };
    readonly letterSpacing: {
        readonly m: "0";
        readonly s: "-1%";
        readonly xs: "-2%";
    };
    readonly textStyles: {
        /** 주목도를 높이고 큰 타이틀 영역 강조에 사용 */
        readonly display1: {
            readonly fontSize: "clamp(1.75rem, 4vw, 2rem)";
            readonly fontWeight: 700;
            readonly lineHeight: "1.3";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 중간 크기 타이틀에 사용 */
        readonly display2: {
            readonly fontSize: "clamp(1.5rem, 3.5vw, 1.75rem)";
            readonly fontWeight: 700;
            readonly lineHeight: "1.3";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 정보성 카드 타이틀에 주로 사용 */
        readonly heading1: {
            readonly fontSize: "clamp(1.25rem, 3vw, 1.5rem)";
            readonly fontWeight: 700;
            readonly lineHeight: "1.33";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 섹션 구분 타이틀 등에 사용 */
        readonly heading2: {
            readonly fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)";
            readonly fontWeight: 600;
            readonly lineHeight: "1.4";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 소제목 등에 사용 */
        readonly heading3: {
            readonly fontSize: "clamp(1rem, 2vw, 1.125rem)";
            readonly fontWeight: 600;
            readonly lineHeight: "1.33";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 리스트 아이템, 버튼 텍스트 등에 사용 */
        readonly heading4: {
            readonly fontSize: "clamp(0.875rem, 1.5vw, 1rem)";
            readonly fontWeight: 600;
            readonly lineHeight: "1.5";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 부가 정보, 캡션 등에 사용 */
        readonly heading5: {
            readonly fontSize: "clamp(0.75rem, 1.25vw, 0.875rem)";
            readonly fontWeight: 600;
            readonly lineHeight: "1.57";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 주요 본문 텍스트에 사용 */
        readonly body1: {
            readonly fontSize: "clamp(0.875rem, 1.5vw, 1rem)";
            readonly fontWeight: 400;
            readonly lineHeight: "1.33";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 보조 본문 텍스트에 사용 */
        readonly body2: {
            readonly fontSize: "clamp(0.75rem, 1.25vw, 0.875rem)";
            readonly fontWeight: 400;
            readonly lineHeight: "1.57";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 본문 보조, 하위 위계 텍스트 쓰임새로 사용 권장 */
        readonly body3: {
            readonly fontSize: "clamp(0.625rem, 1vw, 0.75rem)";
            readonly fontWeight: 400;
            readonly lineHeight: "1.8";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 보조 정보나 컴포넌트 레벨에서 사용 */
        readonly caption: {
            readonly fontSize: "clamp(0.625rem, 1vw, 0.75rem)";
            readonly fontWeight: 400;
            readonly lineHeight: "1.67";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
    };
    readonly breakpoints: {
        readonly mobile: "320px";
        readonly tablet: "768px";
        readonly desktop: "1024px";
    };
};
export default typography;
