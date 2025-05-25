'use strict';

/**
 * Color Design Tokens
 * 브랜드 아이덴티티와 UI 의미 전달을 위한 컬러 시스템
 */
// Primary Colors
var primary = {
  /** 브랜드 아이덴티티를 대표하는 메인 컬러 */
  mainviolet: '#7248D9'
};
// Gray Scale
var gray = {
  /** 중립적인 컬러 - Typography 및 넓은 영역 Fill에 사용 */
  900: '#171717',
  800: '#292929',
  700: '#595959',
  600: '#7A7A7A',
  500: '#999999',
  400: '#B8B8B8',
  300: '#D6D6D6',
  200: '#EBEBEB',
  100: '#F5F5F5',
  black: '#000000',
  white: '#FFFFFF'
};
// Cool Gray
var coolGray = {
  /** 넓은 영역에서 Fill로 사용 가능한 중립 색상 계열 */
  900: '#151719',
  800: '#25282D',
  700: '#393F46',
  600: '#505862',
  500: '#6E7887',
  400: '#8D97A5',
  300: '#AFB6C0',
  200: '#D1D5DB',
  100: '#E8EAED',
  50: '#F3F5F6'
};
// Tint Colors
var tint = {
  /** 메인 컬러보다는 덜 강조되지만, 일러스트 및 보조 정보 강조에 사용 */
  violet: {
    700: '#4B1FA3',
    600: '#5B27C4',
    500: '#7248D9',
    400: '#8B6EE4',
    300: '#A88FEA',
    200: '#C8B7F4',
    100: '#E5DEF9',
    50: '#F8F4FE'
  },
  blue: {
    700: '#0038B8',
    600: '#004AF5',
    500: '#2F6EFF',
    400: '#5C92FF',
    300: '#8FB4FF',
    200: '#C2D6FF',
    100: '#E0EBFF',
    50: '#F0F5FF'
  },
  red: {
    700: '#C70000',
    600: '#E51A1A',
    500: '#FF2E2E',
    400: '#FF6666',
    300: '#FF9494',
    200: '#FFC2C2',
    100: '#FFE0E0',
    50: '#FFF0F0'
  },
  yellow: {
    700: '#F59B00',
    600: '#FFB200',
    500: '#FFCC00',
    400: '#FFDA47',
    300: '#FFE785',
    200: '#FFF1B8',
    100: '#FFF7D6',
    50: '#FFFAE5'
  },
  green: {
    700: '#00996B',
    600: '#00AD74',
    500: '#00C785',
    400: '#55DD99',
    300: '#88E7B8',
    200: '#BBF2D2',
    100: '#DDF8E6',
    50: '#F0FFF5'
  }
};
// Semantic Colors
var semantic = {
  /** 텍스트, 상태, 배경, 보더, 비활성, Dim 등 UI 의미 전달용 컬러셋 */
  text: {
    /** 콘텐츠에서 가장 중요한 정보를 전달할 때 사용 */
    primary: '#25282D',
    /** 주요 정보 외의 부가적인 내용을 전달할 때 사용 */
    secondary: '#505862',
    /** 시각적 우선순위가 낮은 텍스트에 사용 */
    tertiary: '#8D97A5',
    /** 상호작용이 불가능하거나 비활성화된 상태의 텍스트에 사용 */
    disabled: '#D1D5DB',
    /** 어두운 배경 위에 사용되는 밝은 텍스트 컬러 */
    inverse: '#FFFFFF'
  },
  state: {
    /** 작업 완료, 저장 성공 등 긍정적인 상태를 나타냄 */
    success: '#00C785',
    /** 주의가 필요한 상황이나 경고 메시지를 전달할 때 사용 */
    warning: '#FFCC00',
    /** 오류 상태나 실패 메시지를 표시할 때 사용 */
    error: '#FF2E2E',
    /** 보조적인 정보나 안내 메시지를 전달할 때 사용 */
    info: '#2F6EFF'
  },
  background: {
    /** 기본 페이지 또는 레이아웃의 배경으로 사용 */
    primary: '#FFFFFF',
    /** Primary 배경과 대비를 주어 시각적 계층을 형성할 때 사용 */
    secondary: '#E8EAED'
  },
  border: {
    /** 강조보다는 미묘한 구분을 목적으로 하며, 디바이더 역할까지 겸함 */
    default: '#EBEBEB',
    /** 콘텐츠 간의 명확한 구획이 필요할 때 사용하는 보더 컬러 */
    strong: '#D6D6D6'
  },
  disabled: {
    /** 텍스트 또는 아이콘이 비활성 상태임을 나타낼 때 사용 */
    foreground: '#D1D5DB',
    /** 버튼, 입력 필드 등 UI가 비활성화된 배경으로 사용 */
    background: '#F3F5F6'
  },
  dim: {
    /** 모달, 드롭다운 등 레이어 위에 표시되는 오버레이 배경 */
    overlay: '#000000B3'
  }
};
// Illustration Colors
var illustration = {
  /** 의료 플랫폼 특성을 반영해 피부, 머리카락, 장기 표현용 컬러 */
  skin: {
    /** 피부 표현 시 밝은 톤으로 사용 */
    light: '#FFEBE1',
    /** 피부 기본 톤을 표현할 때 사용 */
    base: '#FFDAC4',
    /** 피부 음영 표현용 컬러 */
    shadow: '#FFCBB7',
    /** 피부 깊은 음영이나 입체감을 줄 때 사용 */
    deepshadow: '#F8B29C'
  },
  hair: {
    /** 머리카락 하이라이트 표현용 컬러 */
    light: '#706965',
    /** 머리카락 기본 색상을 표현할 때 사용 */
    base: '#37322F',
    /** 머리카락 음영 및 입체감 표현용 컬러 */
    shadow: '#1A1716'
  },
  organ: {
    /** 긍정적 상태나 특정 장기 강조용 컬러 */
    light: '#FFB5B5',
    /** 장기 표현 시 기본 색상으로 사용 */
    base: '#FF8F8F',
    /** 장기 음영 표현용 컬러 */
    shadow: '#FB7474',
    /** 장기 깊은 음영이나 강조를 위해 사용 */
    deepshadow: '#CD5151'
  }
};
// All colors export
var colors = {
  primary: primary,
  gray: gray,
  coolGray: coolGray,
  tint: tint,
  semantic: semantic,
  illustration: illustration
};

var colors$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    colors: colors,
    coolGray: coolGray,
    default: colors,
    gray: gray,
    illustration: illustration,
    primary: primary,
    semantic: semantic,
    tint: tint
});

/**
 * Typography Design Tokens
 * 서비스와 사용자가 커뮤니케이션하는 주요 요소
 */
// Font Family
var fontFamily = {
  /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
  primary: 'Pretendard'
};
// Font Sizes
var fontSize = {
  xxxxl: {
    px: 32,
    rem: '2rem'
  },
  xxxl: {
    px: 28,
    rem: '1.75rem'
  },
  xxl: {
    px: 24,
    rem: '1.5rem'
  },
  xl: {
    px: 20,
    rem: '1.25rem'
  },
  l: {
    px: 18,
    rem: '1.125rem'
  },
  m: {
    px: 16,
    rem: '1rem'
  },
  s: {
    px: 14,
    rem: '0.875rem'
  },
  xs: {
    px: 12,
    rem: '0.75rem'
  },
  xxs: {
    px: 10,
    rem: '0.625rem'
  },
  xxxs: {
    px: 11,
    rem: '0.688rem'
  }
};
// Font Weights
var fontWeight = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400
};
// Line Heights
var lineHeight = {
  xxxxl: 42,
  xxxl: 36,
  xxl: 32,
  xl: 28,
  l: 24,
  m: 24,
  s: 22,
  xs: 20,
  xxs: 18,
  xxxs: 17
};
// Letter Spacings
var letterSpacing = {
  m: '0',
  s: '-1%',
  xs: '-2%'
};
// Text Styles
var textStyles = {
  /** 주목도를 높이고 큰 타이틀 영역 강조에 사용 */
  display1: {
    fontSize: fontSize.xxxxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxxxl,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary
  },
  /** 중간 크기 타이틀에 사용 */
  display2: {
    fontSize: fontSize.xxxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxxl,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary
  },
  /** 정보성 카드 타이틀에 주로 사용 */
  heading1: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxl,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary
  },
  /** 섹션 구분 타이틀 등에 사용 */
  heading2: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.xl,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary
  },
  /** 소제목 등에 사용 */
  heading3: {
    fontSize: fontSize.l,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.l,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary
  },
  /** 리스트 아이템, 버튼 텍스트 등에 사용 */
  heading4: {
    fontSize: fontSize.m,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.m,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary
  },
  /** 부가 정보, 캡션 등에 사용 */
  heading5: {
    fontSize: fontSize.s,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.s,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary
  },
  /** 주요 본문 텍스트에 사용 */
  body1: {
    fontSize: fontSize.m,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.l,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary
  },
  /** 보조 본문 텍스트에 사용 */
  body2: {
    fontSize: fontSize.s,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.s,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary
  },
  /** 보조 정보나 컴포넌트 레벨에서 사용 */
  caption: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.xs,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary
  }
};
// All typography export
var typography = {
  fontFamily: fontFamily,
  fontSize: fontSize,
  fontWeight: fontWeight,
  lineHeight: lineHeight,
  letterSpacing: letterSpacing,
  textStyles: textStyles
};

var typography$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: typography,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight,
    textStyles: textStyles,
    typography: typography
});

/**
 * Spacing Design Tokens
 * 균일한 요소와 간격을 사용하여 UI의 체계적인 배열을 도와줌
 * 4와 8의 배수에 기반한 스페이싱 시스템
 */
var spacing = {
  /** 2px - 최소 간격 */
  xxxs: '2px',
  /** 4px - 매우 작은 간격 */
  xxs: '4px',
  /** 8px - 작은 간격 */
  xs: '8px',
  /** 12px - 작은-중간 간격 */
  s: '12px',
  /** 16px - 기본 간격 */
  m: '16px',
  /** 20px - 중간-큰 간격 */
  l: '20px',
  /** 24px - 큰 간격 */
  xl: '24px',
  /** 32px - 매우 큰 간격 */
  xxl: '32px',
  /** 40px - 최대 간격 */
  xxxl: '40px'
};

var spacing$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: spacing,
    spacing: spacing
});

/**
 * Radius Design Tokens
 * UI 요소의 모서리를 둥글게 하여 부드러운 사용자 경험을 제공
 */
var radius = {
  /** 작은 버튼, 입력 필드, 체크박스에 최소한의 둥근 효과를 줄 때 사용 */
  xs: '4px',
  /** 카드, 드롭다운, 배너, 일반 버튼에 기본적인 둥근 스타일을 적용할 때 사용 */
  s: '8px',
  /** 중간 크기의 카드, 팝업, 모달에 부드러운 곡률을 적용할 때 사용 */
  m: '12px',
  /** 큰 모달, 프로필 이미지, 강조 영역에 둥근 효과를 줄 때 사용 */
  l: '16px',
  /** Hero Section과 같은 대형 UI 요소에 강한 둥근 효과를 적용할 때 사용 */
  xl: '20px',
  /** 아바타, 토글 버튼과 같은 완전한 원형 요소에 적용할 때 사용 */
  full: '50%'
};

var radius$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: radius,
    radius: radius
});

/**
 * Shadow Design Tokens
 * 그림자는 적용된 UI의 높이(elevation)와 이동 방향, 가장자리 등에 대한 단서를 제공
 */
var shadows = {
  /** 높이 48px 이하의 작은 요소에 가벼운 깊이감을 줄 때 사용 - 아이콘, 버튼, 배지, 입력 필드, 체크박스 등 */
  s: '0px 1px 8px rgba(0, 0, 0, 0.1)',
  /** 너비 또는 높이가 48px ~ 200px 사이의 중간 크기 요소를 명확히 구분할 때 사용 - 카드, 모달, 드롭다운, 중간 크기 버튼 등 */
  m: '0px 1px 16px rgba(0, 0, 0, 0.1)',
  /** 너비 200px 이상 또는 화면 너비의 50% 이상을 초과하는 큰 요소, 또는 강조가 필요한 구성 요소에 사용 - 다이얼로그, 대형 카드 등 */
  l: '0px 1px 24px rgba(0, 0, 0, 0.12)'
};

var shadows$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: shadows,
    shadows: shadows
});

/**
 * Border Design Tokens
 * 컴포넌트에 테두리를 추가하여 구분감을 제공하는 속성
 */
// Border Widths
var borderWidth = {
  /** UI 요소의 기본적인 구분감을 제공할 때 사용 */
  s: '1px',
  /** 1px보다 더 명확한 구분이 필요할 때 사용 */
  m: '1.5px',
  /** 중요한 요소를 강조하거나, 요소 간 강한 대비가 필요할 때 사용 */
  l: '2px'
};
// Border Styles
var borderStyle = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  none: 'none'
};
// Combined Border Tokens
var border = {
  /** 기본 보더 - UI 요소의 기본적인 구분감 제공 */
  s: "".concat(borderWidth.s, " ").concat(borderStyle.solid),
  /** 중간 보더 - 더 명확한 구분이 필요할 때 */
  m: "".concat(borderWidth.m, " ").concat(borderStyle.solid),
  /** 큰 보더 - 중요한 요소 강조나 강한 대비가 필요할 때 */
  l: "".concat(borderWidth.l, " ").concat(borderStyle.solid),
  /** 보더 없음 */
  none: borderStyle.none
};
// All borders export
var borders = {
  borderWidth: borderWidth,
  borderStyle: borderStyle,
  border: border
};

var borders$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    border: border,
    borderStyle: borderStyle,
    borderWidth: borderWidth,
    borders: borders,
    default: borders
});

/**
 * Design Tokens Index
 * 모든 디자인 토큰을 중앙에서 관리하고 export
 */
// Individual token exports
// Combined tokens export
var tokens = {
  colors: function () {
    return Promise.resolve().then(function () { return colors$1; });
  },
  typography: function () {
    return Promise.resolve().then(function () { return typography$1; });
  },
  spacing: function () {
    return Promise.resolve().then(function () { return spacing$1; });
  },
  radius: function () {
    return Promise.resolve().then(function () { return radius$1; });
  },
  shadows: function () {
    return Promise.resolve().then(function () { return shadows$1; });
  },
  borders: function () {
    return Promise.resolve().then(function () { return borders$1; });
  }
};

exports.border = border;
exports.borderStyle = borderStyle;
exports.borderWidth = borderWidth;
exports.borders = borders;
exports.colors = colors;
exports.coolGray = coolGray;
exports.fontFamily = fontFamily;
exports.fontSize = fontSize;
exports.fontWeight = fontWeight;
exports.gray = gray;
exports.illustration = illustration;
exports.letterSpacing = letterSpacing;
exports.lineHeight = lineHeight;
exports.primary = primary;
exports.radius = radius;
exports.semantic = semantic;
exports.shadows = shadows;
exports.spacing = spacing;
exports.textStyles = textStyles;
exports.tint = tint;
exports.tokens = tokens;
exports.typography = typography;
//# sourceMappingURL=index.js.map
