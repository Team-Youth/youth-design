import { useState } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

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

// src/tokens/colors.ts
var colors = {
  primary: {
    /** 브랜드 아이덴티티를 대표하는 메인 컬러 */
    mainviolet: "#7248D9",
    /** 중립적인 컬러 - Typography 및 넓은 영역 Fill에 사용 */
    gray: {
      white: "#FFFFFF"
    },
    /** 넓은 영역에서 Fill로 사용 가능한 중립 색상 계열 */
    coolGray: {
      800: "#25282D",
      200: "#D1D5DB",
      50: "#F3F5F6"
    }},
  /** 텍스트, 상태, 배경, 보더, 비활성, Dim 등 UI 의미 전달용 컬러셋 */
  semantic: {
    text: {
      /** 콘텐츠에서 가장 중요한 정보를 전달할 때 사용 */
      primary: "#25282D"},
    border: {
      /** 강조보다는 미묘한 구분을 목적으로 하며, 디바이더 역할까지 겸함 */
      default: "#EBEBEB"},
    disabled: {
      /** 텍스트 또는 아이콘이 비활성 상태임을 나타낼 때 사용 */
      foreground: "#D1D5DB",
      /** 버튼, 입력 필드 등 UI가 비활성화된 배경으로 사용 */
      background: "#F3F5F6"
    }}};

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
var Chips = ({
  size = "medium",
  type = "capsule",
  state = "resting",
  iconPosition = "leading",
  icon,
  iconColor,
  children,
  onClick,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const sizeConfig = {
    large: {
      paddingX: "16px",
      paddingY: "9px",
      borderRadius: type === "capsule" ? "100px" : "8px",
      height: "40px",
      gap: "4px"
    },
    medium: {
      paddingX: "12px",
      paddingY: "6px",
      borderRadius: type === "capsule" ? "100px" : "6px",
      height: "32px",
      gap: "4px"
    }
  };
  const getStyles = () => {
    const config = sizeConfig[size];
    let styles = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: `${config.paddingY} ${config.paddingX}`,
      borderRadius: config.borderRadius,
      height: config.height,
      border: "1px solid transparent",
      cursor: state === "disabled" ? "not-allowed" : "pointer",
      transition: "all 0.2s ease",
      gap: config.gap,
      whiteSpace: "nowrap"
    };
    switch (state) {
      case "selected":
        if (type === "square") {
          styles = __spreadProps(__spreadValues({}, styles), {
            backgroundColor: colors.primary.gray.white,
            border: `1px solid ${colors.primary.mainviolet}`
          });
        } else {
          styles = __spreadProps(__spreadValues({}, styles), {
            backgroundColor: colors.primary.mainviolet,
            border: `1px solid ${colors.primary.mainviolet}`
          });
        }
        break;
      case "hover":
        styles = __spreadProps(__spreadValues({}, styles), {
          backgroundColor: colors.primary.coolGray[50],
          border: `1px solid ${colors.primary.coolGray[200]}`
        });
        break;
      case "disabled":
        styles = __spreadProps(__spreadValues({}, styles), {
          backgroundColor: colors.semantic.disabled.background,
          border: `1px solid ${colors.semantic.disabled.background}`,
          cursor: "not-allowed"
        });
        break;
      case "resting":
      default:
        if (isHovered) {
          styles = __spreadProps(__spreadValues({}, styles), {
            backgroundColor: colors.primary.coolGray[50],
            border: `1px solid ${colors.primary.coolGray[200]}`
          });
        } else {
          styles = __spreadProps(__spreadValues({}, styles), {
            backgroundColor: colors.primary.gray.white,
            border: `1px solid ${colors.semantic.border.default}`
          });
        }
        break;
    }
    return styles;
  };
  const getTextColor = () => {
    switch (state) {
      case "selected":
        if (type === "square") {
          return colors.primary.coolGray[800];
        }
        return colors.primary.gray.white;
      case "disabled":
        return colors.semantic.disabled.foreground;
      default:
        return colors.primary.coolGray[800];
    }
  };
  const getIconColor = () => {
    if (iconColor) {
      return iconColor;
    }
    switch (state) {
      case "selected":
        if (type === "square") {
          return colors.primary.mainviolet;
        }
        return colors.primary.gray.white;
      case "disabled":
        return colors.semantic.disabled.foreground;
      default:
        return colors.primary.coolGray[800];
    }
  };
  const handleClick = () => {
    if (state !== "disabled" && onClick) {
      onClick();
    }
  };
  const handleMouseEnter = () => {
    if (state === "resting") {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const renderContent = () => {
    if (!icon) {
      return /* @__PURE__ */ jsx(Font, { type: "body2", fontWeight: "medium", color: getTextColor(), children });
    }
    if (iconPosition === "leading") {
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "chips-icon", style: { color: getIconColor() }, children: icon }),
        children && /* @__PURE__ */ jsx(Font, { type: "body2", fontWeight: "medium", color: getTextColor(), children })
      ] });
    } else {
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        children && /* @__PURE__ */ jsx(Font, { type: "body2", fontWeight: "medium", color: getTextColor(), children }),
        /* @__PURE__ */ jsx("span", { className: "chips-icon", style: { color: getIconColor() }, children: icon })
      ] });
    }
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `chips chips--${size} chips--${type} chips--${state} ${className}`,
      style: getStyles(),
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      disabled: state === "disabled",
      type: "button",
      children: renderContent()
    }
  );
};

export { Chips };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map