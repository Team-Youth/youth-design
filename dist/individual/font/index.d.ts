import React, { ReactNode } from 'react';

declare const fontWeight: {
    readonly bold: 700;
    readonly semibold: 600;
    readonly medium: 500;
    readonly regular: 400;
};
declare const textStyles: {
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
    /** 본문 보조, 하위 위계 텍스트 쓰임새로 사용 권장 */
    readonly body3: {
        readonly fontSize: "0.75rem";
        readonly fontWeight: 400;
        readonly lineHeight: "18px";
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

type FontType = keyof typeof textStyles;
type FontWeight = keyof typeof fontWeight;
interface FontProps {
    /** Typography variant (display1, display2, heading1, etc.) */
    type: FontType;
    /** Font weight override (bold, semibold, medium, regular) */
    fontWeight?: FontWeight;
    /** Text color */
    color?: string;
    /** Hover color */
    hoverColor?: string;
    /** Text alignment */
    align?: 'left' | 'center' | 'right' | 'justify';
    /** White space handling */
    whiteSpace?: 'nowrap' | 'normal' | 'pre-line';
    /** Text overflow with ellipsis */
    noWhiteSpace?: boolean;
    /** Underline decoration */
    underline?: boolean;
    /** Custom className */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
    /** Children content */
    children?: ReactNode;
}
declare const Font: React.FC<FontProps>;

export { Font, type FontProps, type FontType, type FontWeight, Font as default };
