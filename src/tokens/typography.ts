/**
 * Typography Design Tokens
 * 서비스와 사용자가 커뮤니케이션하는 주요 요소
 */

// Font Family
export const fontFamily = {
  /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
  primary: 'Pretendard',
} as const;

// Font Sizes (clamp를 사용한 반응형 폰트)
export const fontSize = {
  xxxxl: 'clamp(1.75rem, 4vw, 2rem)', // 28px ~ 32px
  xxxl: 'clamp(1.5rem, 3.5vw, 1.75rem)', // 24px ~ 28px
  xxl: 'clamp(1.25rem, 3vw, 1.5rem)', // 20px ~ 24px
  xl: 'clamp(1.125rem, 2.5vw, 1.25rem)', // 18px ~ 20px
  l: 'clamp(1rem, 2vw, 1.125rem)', // 16px ~ 18px
  m: 'clamp(0.875rem, 1.5vw, 1rem)', // 14px ~ 16px
  s: 'clamp(0.75rem, 1.25vw, 0.875rem)', // 12px ~ 14px
  xs: 'clamp(0.625rem, 1vw, 0.75rem)', // 10px ~ 12px
  xxs: 'clamp(0.5625rem, 0.875vw, 0.625rem)', // 9px ~ 10px
  xxxs: 'clamp(0.625rem, 1vw, 0.688rem)', // 10px ~ 11px
} as const;

// Font Weights
export const fontWeight = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
} as const;

// Line Heights (상대 단위로 변경)
export const lineHeight = {
  xxxxl: '1.3', // 130%
  xxxl: '1.3', // 130%
  xxl: '1.33', // 133%
  xl: '1.4', // 140%
  l: '1.33', // 133%
  m: '1.5', // 150%
  s: '1.57', // 157%
  xs: '1.67', // 167%
  xxs: '1.8', // 180%
  xxxs: '1.55', // 155%
} as const;

// Letter Spacings
export const letterSpacing = {
  m: '0',
  s: '-1%',
  xs: '-2%',
} as const;

// Responsive breakpoints for additional control
export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
} as const;

// Text Styles (React.CSSProperties 호환)
export const textStyles = {
  /** 주목도를 높이고 큰 타이틀 영역 강조에 사용 */
  display1: {
    fontSize: fontSize.xxxxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxxxl,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary,
  },
  /** 중간 크기 타이틀에 사용 */
  display2: {
    fontSize: fontSize.xxxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxxl,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary,
  },
  /** 정보성 카드 타이틀에 주로 사용 */
  heading1: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxl,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary,
  },
  /** 섹션 구분 타이틀 등에 사용 */
  heading2: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.xl,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary,
  },
  /** 소제목 등에 사용 */
  heading3: {
    fontSize: fontSize.l,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.l,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary,
  },
  /** 리스트 아이템, 버튼 텍스트 등에 사용 */
  heading4: {
    fontSize: fontSize.m,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.m,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary,
  },
  /** 부가 정보, 캡션 등에 사용 */
  heading5: {
    fontSize: fontSize.s,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.s,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary,
  },
  /** 주요 본문 텍스트에 사용 */
  body1: {
    fontSize: fontSize.m,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.l,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary,
  },
  /** 보조 본문 텍스트에 사용 */
  body2: {
    fontSize: fontSize.s,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.s,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary,
  },
  /** 본문 보조, 하위 위계 텍스트 쓰임새로 사용 권장 */
  body3: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.xxs,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary,
  },
  /** 보조 정보나 컴포넌트 레벨에서 사용 */
  caption: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.xs,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary,
  },
} as const;

// All typography export
export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textStyles,
  breakpoints,
} as const;

export default typography;
