import { useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

var __defProp = Object.defineProperty;
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

// src/tokens/colors.ts
var colors = {
  primary: {
    /** 브랜드 아이덴티티를 대표하는 메인 컬러 */
    mainviolet: "#7248D9",
    /** 넓은 영역에서 Fill로 사용 가능한 중립 색상 계열 */
    coolGray: {
      100: "#E8EAED"},
    /** 메인 컬러보다는 덜 강조되지만, 일러스트 및 보조 정보 강조에 사용 */
    tint: {
      violet: {
        700: "#4B1FA3",
        600: "#5B27C4",
        300: "#A88FEA",
        200: "#C8B7F4",
        100: "#E5DEF9"}}
  },
  /** 텍스트, 상태, 배경, 보더, 비활성, Dim 등 UI 의미 전달용 컬러셋 */
  semantic: {
    text: {
      /** 콘텐츠에서 가장 중요한 정보를 전달할 때 사용 */
      primary: "#25282D"},
    background: {
      /** 기본 페이지 또는 레이아웃의 배경으로 사용 */
      primary: "#FFFFFF"},
    border: {
      /** 콘텐츠 간의 명확한 구획이 필요할 때 사용하는 보더 컬러 */
      strong: "#D6D6D6"
    },
    disabled: {
      /** 텍스트 또는 아이콘이 비활성 상태임을 나타낼 때 사용 */
      foreground: "#D1D5DB",
      /** 버튼, 입력 필드 등 UI가 비활성화된 배경으로 사용 */
      background: "#F3F5F6"
    }}};
var LoadingIcon = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 50 50", className: "loading-icon", children: /* @__PURE__ */ jsx(
  "circle",
  {
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinecap: "round"
  }
) });
var Button = ({
  type = "solid",
  level = "CTA",
  size = "l",
  width = "320px",
  disabled = false,
  icon,
  children,
  onClick,
  className = "",
  isLoading = false,
  underline = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const sizeConfig = {
    l: {
      paddingX: type === "text" ? "12px" : "16px",
      paddingY: type === "text" ? "0px" : "12px",
      borderRadius: type === "text" ? "12px" : "12px",
      width: "320px",
      height: type === "text" ? "32px" : "48px",
      fontSize: "16px",
      fontWeight: "500",
      iconSize: "20px"
    },
    m: {
      paddingX: type === "text" ? "8px" : "12px",
      paddingY: type === "text" ? "0px" : "8px",
      borderRadius: type === "text" ? "12px" : "8px",
      width: "320px",
      height: type === "text" ? "24px" : "40px",
      fontSize: "14px",
      fontWeight: "500",
      iconSize: "16px"
    },
    s: {
      paddingX: type === "text" ? "8px" : "8px",
      paddingY: type === "text" ? "0px" : "6px",
      borderRadius: type === "text" ? "12px" : "4px",
      width: "320px",
      height: type === "text" ? "20px" : "32px",
      fontSize: "12px",
      fontWeight: "500",
      iconSize: type === "text" ? "14px" : "16px"
    }
  };
  const getStyles = () => {
    const config = sizeConfig[size];
    const getWidth = () => {
      if (width === "fill") {
        return "100%";
      }
      return width;
    };
    let styles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: `${config.paddingY} ${config.paddingX}`,
      borderRadius: config.borderRadius,
      width: getWidth(),
      height: config.height,
      border: type === "text" ? "none" : "1px solid transparent",
      cursor: disabled || isLoading ? "not-allowed" : "pointer",
      transition: "all 0.2s ease",
      fontSize: config.fontSize,
      fontWeight: config.fontWeight,
      textDecoration: type === "text" && underline ? "underline" : "none",
      background: "none"
    };
    if (type === "solid") {
      styles = __spreadValues(__spreadValues({}, styles), getSolidStyles(level, disabled, isLoading, isPressed, isHovered));
    } else if (type === "outlined") {
      styles = __spreadValues(__spreadValues({}, styles), getOutlinedStyles(disabled, isLoading, isPressed, isHovered));
    } else if (type === "text") {
      styles = __spreadValues(__spreadValues({}, styles), getTextStyles(disabled));
    }
    return styles;
  };
  const getSolidStyles = (level2, disabled2, isLoading2, isPressed2, isHovered2) => {
    if (disabled2) {
      return {
        backgroundColor: colors.semantic.disabled.background,
        color: colors.semantic.disabled.foreground,
        border: `1px solid ${colors.semantic.disabled.background}`
      };
    }
    if (isLoading2) {
      if (level2 === "CTA") {
        return {
          backgroundColor: colors.primary.mainviolet,
          color: colors.semantic.background.primary,
          border: `1px solid ${colors.primary.mainviolet}`
        };
      } else if (level2 === "secondary") {
        return {
          backgroundColor: colors.primary.tint.violet[200],
          color: colors.primary.mainviolet,
          border: `1px solid ${colors.primary.tint.violet[200]}`
        };
      } else if (level2 === "tertiary") {
        return {
          backgroundColor: colors.semantic.disabled.background,
          color: colors.semantic.text.primary,
          border: `1px solid ${colors.semantic.disabled.background}`
        };
      }
    }
    const levelColors = {
      CTA: {
        normal: { bg: colors.primary.mainviolet, text: colors.semantic.background.primary },
        hovered: { bg: colors.primary.tint.violet[600], text: colors.semantic.background.primary },
        pressed: { bg: colors.primary.tint.violet[700], text: colors.semantic.background.primary }
      },
      secondary: {
        normal: { bg: colors.primary.tint.violet[100], text: colors.primary.mainviolet },
        hovered: { bg: colors.primary.tint.violet[200], text: colors.primary.mainviolet },
        pressed: { bg: colors.primary.tint.violet[300], text: colors.primary.tint.violet[600] }
      },
      tertiary: {
        normal: { bg: colors.semantic.disabled.background, text: colors.semantic.text.primary },
        hovered: { bg: colors.primary.coolGray[100], text: colors.semantic.text.primary },
        pressed: { bg: colors.semantic.disabled.foreground, text: colors.semantic.text.primary }
      }
    };
    const currentLevel = levelColors[level2];
    let currentState = currentLevel.normal;
    if (isPressed2) {
      currentState = currentLevel.pressed;
    } else if (isHovered2) {
      currentState = currentLevel.hovered;
    }
    return {
      backgroundColor: currentState.bg,
      color: currentState.text,
      border: `1px solid ${currentState.bg}`
    };
  };
  const getOutlinedStyles = (disabled2, isLoading2, isPressed2, isHovered2) => {
    if (disabled2) {
      return {
        backgroundColor: colors.semantic.background.primary,
        color: colors.semantic.disabled.foreground,
        border: `1px solid ${colors.semantic.disabled.foreground}`
      };
    }
    if (isLoading2) {
      return {
        backgroundColor: colors.semantic.background.primary,
        color: colors.semantic.text.primary,
        border: `1px solid ${colors.semantic.border.strong}`
      };
    }
    if (isPressed2) {
      return {
        backgroundColor: colors.primary.coolGray[100],
        color: colors.semantic.text.primary,
        border: `1px solid ${colors.semantic.border.strong}`
      };
    } else if (isHovered2) {
      return {
        backgroundColor: colors.semantic.disabled.background,
        color: colors.semantic.text.primary,
        border: `1px solid ${colors.semantic.border.strong}`
      };
    } else {
      return {
        backgroundColor: colors.semantic.background.primary,
        color: colors.semantic.text.primary,
        border: `1px solid ${colors.semantic.border.strong}`
      };
    }
  };
  const getTextStyles = (disabled2, isPressed2, isHovered2) => {
    if (disabled2) {
      return {
        color: colors.semantic.disabled.foreground,
        backgroundColor: "transparent"
      };
    }
    return {
      color: colors.semantic.text.primary,
      backgroundColor: "transparent"
    };
  };
  const handleClick = () => {
    if (!disabled && !isLoading && onClick) {
      onClick();
    }
  };
  const handleMouseEnter = () => {
    if (!disabled && !isLoading) {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };
  const handleMouseDown = () => {
    if (!disabled && !isLoading) {
      setIsPressed(true);
    }
  };
  const handleMouseUp = () => {
    setIsPressed(false);
  };
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx(LoadingIcon, {});
    }
    const config = sizeConfig[size];
    const iconStyle = {
      width: config.iconSize,
      height: config.iconSize,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    return /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
      (icon == null ? void 0 : icon.left) && /* @__PURE__ */ jsx("div", { style: iconStyle, children: icon.left }),
      children && /* @__PURE__ */ jsx("span", { children }),
      (icon == null ? void 0 : icon.right) && /* @__PURE__ */ jsx("div", { style: iconStyle, children: icon.right })
    ] });
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      style: getStyles(),
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      disabled: disabled || isLoading,
      className,
      children: renderContent()
    }
  );
};

export { Button };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map