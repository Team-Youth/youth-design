import { jsx } from 'react/jsx-runtime';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/tokens/typography.ts
var fontFamily = {
  /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
  primary: "Pretendard"
};
var fontSize = {
  xxxxl: "2rem",
  // 32px
  xxxl: "1.75rem",
  // 28px
  xxl: "1.5rem",
  // 24px
  xl: "1.25rem",
  // 20px
  l: "1.125rem",
  // 18px
  m: "1rem",
  // 16px
  s: "0.875rem",
  // 14px
  xs: "0.75rem"};
var fontWeight = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400
};
var lineHeight = {
  xxxxl: "42px",
  xxxl: "36px",
  xxl: "32px",
  xl: "28px",
  l: "24px",
  m: "24px",
  s: "22px",
  xs: "20px",
  xxs: "18px"};
var letterSpacing = {
  m: "0"};
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
  /** 본문 보조, 하위 위계 텍스트 쓰임새로 사용 권장 */
  body3: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.xxs,
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

// src/tokens/colors.ts
var colors = {
  /** 텍스트, 상태, 배경, 보더, 비활성, Dim 등 UI 의미 전달용 컬러셋 */
  semantic: {
    text: {
      /** 콘텐츠에서 가장 중요한 정보를 전달할 때 사용 */
      primary: "#25282D"}}};
var Font = ({
  type,
  fontWeight: fontWeight2,
  color = colors.semantic.text.primary,
  hoverColor,
  align = "left",
  whiteSpace,
  noWhiteSpace = false,
  underline = false,
  className,
  style,
  children
}) => {
  const baseStyle = textStyles[type];
  const fontStyles = __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, baseStyle), fontWeight2 && { fontWeight: fontWeight[fontWeight2] }), {
    color,
    textAlign: align,
    whiteSpace: noWhiteSpace ? "nowrap" : whiteSpace || "normal",
    wordBreak: "keep-all",
    textOverflow: noWhiteSpace ? "ellipsis" : void 0,
    overflow: noWhiteSpace ? "hidden" : void 0,
    textDecoration: underline ? "underline" : "none",
    margin: 0,
    padding: 0,
    transition: "color 0.2s ease"
  }), style);
  const handleMouseEnter = (e) => {
    if (hoverColor) {
      e.currentTarget.style.color = hoverColor;
    }
  };
  const handleMouseLeave = (e) => {
    if (hoverColor) {
      e.currentTarget.style.color = color;
    }
  };
  return /* @__PURE__ */ jsx(
    "span",
    {
      style: fontStyles,
      className,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children
    }
  );
};
var Font_default = Font;

export { Font, Font_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map