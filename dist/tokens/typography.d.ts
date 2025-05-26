/**
 * Typography Design Tokens
 * 서비스와 사용자가 커뮤니케이션하는 주요 요소
 */
export declare const fontFamily: {
    /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
    readonly primary: "Pretendard";
};
export declare const fontSize: {
    readonly xxxxl: "2rem";
    readonly xxxl: "1.75rem";
    readonly xxl: "1.5rem";
    readonly xl: "1.25rem";
    readonly l: "1.125rem";
    readonly m: "1rem";
    readonly s: "0.875rem";
    readonly xs: "0.75rem";
    readonly xxs: "0.625rem";
    readonly xxxs: "0.688rem";
};
export declare const fontWeight: {
    readonly bold: 700;
    readonly semibold: 600;
    readonly medium: 500;
    readonly regular: 400;
};
export declare const lineHeight: {
    readonly xxxxl: "42px";
    readonly xxxl: "36px";
    readonly xxl: "32px";
    readonly xl: "28px";
    readonly l: "24px";
    readonly m: "24px";
    readonly s: "22px";
    readonly xs: "20px";
    readonly xxs: "18px";
    readonly xxxs: "17px";
};
export declare const letterSpacing: {
    readonly m: "0";
    readonly s: "-1%";
    readonly xs: "-2%";
};
export declare const textStyles: {
    /** 주목도를 높이고 큰 타이틀 영역 강조에 사용 */
    readonly display1: {
        readonly fontSize: "2rem";
        readonly fontWeight: 700;
        readonly lineHeight: "42px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 중간 크기 타이틀에 사용 */
    readonly display2: {
        readonly fontSize: "1.75rem";
        readonly fontWeight: 700;
        readonly lineHeight: "36px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 정보성 카드 타이틀에 주로 사용 */
    readonly heading1: {
        readonly fontSize: "1.5rem";
        readonly fontWeight: 700;
        readonly lineHeight: "32px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 섹션 구분 타이틀 등에 사용 */
    readonly heading2: {
        readonly fontSize: "1.25rem";
        readonly fontWeight: 600;
        readonly lineHeight: "28px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 소제목 등에 사용 */
    readonly heading3: {
        readonly fontSize: "1.125rem";
        readonly fontWeight: 600;
        readonly lineHeight: "24px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 리스트 아이템, 버튼 텍스트 등에 사용 */
    readonly heading4: {
        readonly fontSize: "1rem";
        readonly fontWeight: 600;
        readonly lineHeight: "24px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 부가 정보, 캡션 등에 사용 */
    readonly heading5: {
        readonly fontSize: "0.875rem";
        readonly fontWeight: 600;
        readonly lineHeight: "22px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 주요 본문 텍스트에 사용 */
    readonly body1: {
        readonly fontSize: "1rem";
        readonly fontWeight: 400;
        readonly lineHeight: "24px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 보조 본문 텍스트에 사용 */
    readonly body2: {
        readonly fontSize: "0.875rem";
        readonly fontWeight: 400;
        readonly lineHeight: "22px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 보조 정보나 컴포넌트 레벨에서 사용 */
    readonly caption: {
        readonly fontSize: "0.75rem";
        readonly fontWeight: 400;
        readonly lineHeight: "20px";
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
        readonly xxxxl: "2rem";
        readonly xxxl: "1.75rem";
        readonly xxl: "1.5rem";
        readonly xl: "1.25rem";
        readonly l: "1.125rem";
        readonly m: "1rem";
        readonly s: "0.875rem";
        readonly xs: "0.75rem";
        readonly xxs: "0.625rem";
        readonly xxxs: "0.688rem";
    };
    readonly fontWeight: {
        readonly bold: 700;
        readonly semibold: 600;
        readonly medium: 500;
        readonly regular: 400;
    };
    readonly lineHeight: {
        readonly xxxxl: "42px";
        readonly xxxl: "36px";
        readonly xxl: "32px";
        readonly xl: "28px";
        readonly l: "24px";
        readonly m: "24px";
        readonly s: "22px";
        readonly xs: "20px";
        readonly xxs: "18px";
        readonly xxxs: "17px";
    };
    readonly letterSpacing: {
        readonly m: "0";
        readonly s: "-1%";
        readonly xs: "-2%";
    };
    readonly textStyles: {
        /** 주목도를 높이고 큰 타이틀 영역 강조에 사용 */
        readonly display1: {
            readonly fontSize: "2rem";
            readonly fontWeight: 700;
            readonly lineHeight: "42px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 중간 크기 타이틀에 사용 */
        readonly display2: {
            readonly fontSize: "1.75rem";
            readonly fontWeight: 700;
            readonly lineHeight: "36px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 정보성 카드 타이틀에 주로 사용 */
        readonly heading1: {
            readonly fontSize: "1.5rem";
            readonly fontWeight: 700;
            readonly lineHeight: "32px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 섹션 구분 타이틀 등에 사용 */
        readonly heading2: {
            readonly fontSize: "1.25rem";
            readonly fontWeight: 600;
            readonly lineHeight: "28px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 소제목 등에 사용 */
        readonly heading3: {
            readonly fontSize: "1.125rem";
            readonly fontWeight: 600;
            readonly lineHeight: "24px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 리스트 아이템, 버튼 텍스트 등에 사용 */
        readonly heading4: {
            readonly fontSize: "1rem";
            readonly fontWeight: 600;
            readonly lineHeight: "24px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 부가 정보, 캡션 등에 사용 */
        readonly heading5: {
            readonly fontSize: "0.875rem";
            readonly fontWeight: 600;
            readonly lineHeight: "22px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 주요 본문 텍스트에 사용 */
        readonly body1: {
            readonly fontSize: "1rem";
            readonly fontWeight: 400;
            readonly lineHeight: "24px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 보조 본문 텍스트에 사용 */
        readonly body2: {
            readonly fontSize: "0.875rem";
            readonly fontWeight: 400;
            readonly lineHeight: "22px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 보조 정보나 컴포넌트 레벨에서 사용 */
        readonly caption: {
            readonly fontSize: "0.75rem";
            readonly fontWeight: 400;
            readonly lineHeight: "20px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
    };
};
export default typography;
