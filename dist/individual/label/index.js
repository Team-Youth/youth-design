import { jsxs, jsx } from 'react/jsx-runtime';

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
    /** 중립적인 컬러 - Typography 및 넓은 영역 Fill에 사용 */
    gray: {
      white: "#FFFFFF"
    },
    /** 넓은 영역에서 Fill로 사용 가능한 중립 색상 계열 */
    coolGray: {
      700: "#393F46",
      600: "#505862",
      100: "#E8EAED"},
    /** 메인 컬러보다는 덜 강조되지만, 일러스트 및 보조 정보 강조에 사용 */
    tint: {
      violet: {
        500: "#7248D9",
        50: "#F8F4FE"
      },
      red: {
        500: "#FF2E2E"},
      yellow: {
        500: "#FFCC00"},
      green: {
        500: "#00C785"}
    }
  },
  /** 텍스트, 상태, 배경, 보더, 비활성, Dim 등 UI 의미 전달용 컬러셋 */
  semantic: {
    text: {
      /** 콘텐츠에서 가장 중요한 정보를 전달할 때 사용 */
      primary: "#25282D"}}};

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
var Label = ({
  size = "m",
  type = "square",
  color = "grey",
  leadingIcon,
  trailingIcon,
  children,
  className = ""
}) => {
  const sizeConfig = {
    m: {
      padding: type === "square" ? "3px 8px" : "3px 10px",
      paddingWithLeadingIcon: type === "square" ? "3px 8px 3px 6px" : "3px 10px 3px 8px",
      paddingWithTrailingIcon: type === "square" ? "3px 6px 3px 8px" : "3px 8px 3px 10px",
      borderRadius: type === "square" ? "4px" : "16px",
      height: "24px",
      iconSize: "14px",
      gap: "2px",
      fontSize: "body2"
    },
    s: {
      padding: type === "square" ? "2px 6px" : "2px 8px",
      paddingWithLeadingIcon: type === "square" ? "2px 6px 2px 4px" : "2px 8px 2px 6px",
      paddingWithTrailingIcon: type === "square" ? "2px 4px 2px 6px" : "2px 6px 2px 8px",
      borderRadius: type === "square" ? "4px" : "12px",
      height: "22px",
      iconSize: "12px",
      gap: "2px",
      fontSize: "caption"
    }
  };
  const colorConfig = {
    grey: {
      backgroundColor: colors.primary.coolGray[100],
      textColor: colors.primary.coolGray[600],
      iconColor: colors.primary.coolGray[700]
    },
    dark: {
      backgroundColor: colors.primary.coolGray[600],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white
    },
    violet: {
      backgroundColor: colors.primary.tint.violet[50],
      textColor: colors.primary.tint.violet[500],
      iconColor: colors.primary.tint.violet[500]
    },
    accent: {
      backgroundColor: colors.primary.tint.violet[500],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white
    },
    red: {
      backgroundColor: colors.primary.tint.red[500],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white
    },
    green: {
      backgroundColor: colors.primary.tint.green[500],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white
    },
    yellow: {
      backgroundColor: colors.primary.tint.yellow[500],
      textColor: colors.primary.gray.white,
      iconColor: colors.primary.gray.white
    }
  };
  const config = sizeConfig[size];
  const colorStyle = colorConfig[color];
  const getPadding = () => {
    if (leadingIcon && trailingIcon) {
      return config.paddingWithLeadingIcon;
    } else if (leadingIcon) {
      return config.paddingWithLeadingIcon;
    } else if (trailingIcon) {
      return config.paddingWithTrailingIcon;
    }
    return config.padding;
  };
  const getStyles = () => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: getPadding(),
    borderRadius: config.borderRadius,
    backgroundColor: colorStyle.backgroundColor,
    height: config.height,
    gap: config.gap,
    whiteSpace: "nowrap",
    boxSizing: "border-box"
  });
  const getIconStyles = () => ({
    width: config.iconSize,
    height: config.iconSize,
    color: colorStyle.iconColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `label label--${size} label--${type} label--${color} ${className}`,
      style: getStyles(),
      children: [
        leadingIcon && /* @__PURE__ */ jsx("span", { className: "label__leading-icon", style: getIconStyles(), children: leadingIcon }),
        children && /* @__PURE__ */ jsx(Font, { type: config.fontSize, fontWeight: "medium", color: colorStyle.textColor, children }),
        trailingIcon && /* @__PURE__ */ jsx("span", { className: "label__trailing-icon", style: getIconStyles(), children: trailingIcon })
      ]
    }
  );
};
var Label_default = Label;

export { Label, Label_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map