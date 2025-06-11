import { forwardRef, useState } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// src/tokens/colors.ts
var colors;
var init_colors = __esm({
  "src/tokens/colors.ts"() {
    colors = {
      primary: {
        /** 브랜드 아이덴티티를 대표하는 메인 컬러 */
        mainviolet: "#7248D9",
        /** 중립적인 컬러 - Typography 및 넓은 영역 Fill에 사용 */
        gray: {
          900: "#171717",
          800: "#292929",
          700: "#595959",
          600: "#7A7A7A",
          500: "#999999",
          400: "#B8B8B8",
          300: "#D6D6D6",
          200: "#EBEBEB",
          100: "#F5F5F5",
          black: "#000000",
          white: "#FFFFFF"
        },
        /** 넓은 영역에서 Fill로 사용 가능한 중립 색상 계열 */
        coolGray: {
          900: "#151719",
          800: "#25282D",
          700: "#393F46",
          600: "#505862",
          500: "#6E7887",
          400: "#8D97A5",
          300: "#AFB6C0",
          200: "#D1D5DB",
          100: "#E8EAED",
          50: "#F3F5F6"
        },
        /** 메인 컬러보다는 덜 강조되지만, 일러스트 및 보조 정보 강조에 사용 */
        tint: {
          violet: {
            700: "#4B1FA3",
            600: "#5B27C4",
            500: "#7248D9",
            400: "#8B6EE4",
            300: "#A88FEA",
            200: "#C8B7F4",
            100: "#E5DEF9",
            50: "#F8F4FE"
          },
          blue: {
            700: "#0038B8",
            600: "#004AF5",
            500: "#2F6EFF",
            400: "#5C92FF",
            300: "#8FB4FF",
            200: "#C2D6FF",
            100: "#E0EBFF",
            50: "#F0F5FF"
          },
          red: {
            700: "#C70000",
            600: "#E51A1A",
            500: "#FF2E2E",
            400: "#FF6666",
            300: "#FF9494",
            200: "#FFC2C2",
            100: "#FFE0E0",
            50: "#FFF0F0"
          },
          yellow: {
            700: "#F59B00",
            600: "#FFB200",
            500: "#FFCC00",
            400: "#FFDA47",
            300: "#FFE785",
            200: "#FFF1B8",
            100: "#FFF7D6",
            50: "#FFFAE5"
          },
          green: {
            700: "#00996B",
            600: "#00AD74",
            500: "#00C785",
            400: "#55DD99",
            300: "#88E7B8",
            200: "#BBF2D2",
            100: "#DDF8E6",
            50: "#F0FFF5"
          }
        }
      },
      /** 텍스트, 상태, 배경, 보더, 비활성, Dim 등 UI 의미 전달용 컬러셋 */
      semantic: {
        text: {
          /** 콘텐츠에서 가장 중요한 정보를 전달할 때 사용 */
          primary: "#25282D",
          /** 주요 정보 외의 부가적인 내용을 전달할 때 사용 */
          secondary: "#505862",
          /** 시각적 우선순위가 낮은 텍스트에 사용 */
          tertiary: "#8D97A5",
          /** 상호작용이 불가능하거나 비활성화된 상태의 텍스트에 사용 */
          disabled: "#D1D5DB",
          /** 어두운 배경 위에 사용되는 밝은 텍스트 컬러 */
          inverse: "#FFFFFF"
        },
        state: {
          /** 작업 완료, 저장 성공 등 긍정적인 상태를 나타냄 */
          success: "#00C785",
          /** 주의가 필요한 상황이나 경고 메시지를 전달할 때 사용 */
          warning: "#FFCC00",
          /** 오류 상태나 실패 메시지를 표시할 때 사용 */
          error: "#FF2E2E",
          /** 보조적인 정보나 안내 메시지를 전달할 때 사용 */
          info: "#2F6EFF"
        },
        background: {
          /** 기본 페이지 또는 레이아웃의 배경으로 사용 */
          primary: "#FFFFFF",
          /** Primary 배경과 대비를 주어 시각적 계층을 형성할 때 사용 */
          secondary: "#E8EAED"
        },
        border: {
          /** 강조보다는 미묘한 구분을 목적으로 하며, 디바이더 역할까지 겸함 */
          default: "#EBEBEB",
          /** 콘텐츠 간의 명확한 구획이 필요할 때 사용하는 보더 컬러 */
          strong: "#D6D6D6"
        },
        disabled: {
          /** 텍스트 또는 아이콘이 비활성 상태임을 나타낼 때 사용 */
          foreground: "#D1D5DB",
          /** 버튼, 입력 필드 등 UI가 비활성화된 배경으로 사용 */
          background: "#F3F5F6"
        },
        dim: {
          /** 모달, 드롭다운 등 레이어 위에 표시되는 오버레이 배경 */
          overlay: "#000000B3"
        }
      },
      /** 의료 플랫폼 특성을 반영해 피부, 머리카락, 장기 표현용 컬러 */
      illustration: {
        skin: {
          /** 피부 표현 시 밝은 톤으로 사용 */
          light: "#FFEBE1",
          /** 피부 기본 톤을 표현할 때 사용 */
          base: "#FFDAC4",
          /** 피부 음영 표현용 컬러 */
          shadow: "#FFCBB7",
          /** 피부 깊은 음영이나 입체감을 줄 때 사용 */
          deepshadow: "#F8B29C"
        },
        hair: {
          /** 머리카락 하이라이트 표현용 컬러 */
          light: "#706965",
          /** 머리카락 기본 색상을 표현할 때 사용 */
          base: "#37322F",
          /** 머리카락 음영 및 입체감 표현용 컬러 */
          shadow: "#1A1716"
        },
        organ: {
          /** 긍정적 상태나 특정 장기 강조용 컬러 */
          light: "#FFB5B5",
          /** 장기 표현 시 기본 색상으로 사용 */
          base: "#FF8F8F",
          /** 장기 음영 표현용 컬러 */
          shadow: "#FB7474",
          /** 장기 깊은 음영이나 강조를 위해 사용 */
          deepshadow: "#CD5151"
        }
      }
    };
    colors.primary.mainviolet;
    colors.primary.gray;
    colors.primary.coolGray;
    colors.primary.tint;
    colors.semantic;
    colors.illustration;
  }
});

// src/tokens/typography.ts
var fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textStyles;
var init_typography = __esm({
  "src/tokens/typography.ts"() {
    fontFamily = {
      /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
      primary: "Pretendard"
    };
    fontSize = {
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
      xs: "0.75rem",
      // 12px
      xxs: "0.625rem",
      // 10px
      xxxs: "0.688rem"
      // 11px
    };
    fontWeight = {
      bold: 700,
      semibold: 600,
      medium: 500,
      regular: 400
    };
    lineHeight = {
      xxxxl: "42px",
      xxxl: "36px",
      xxl: "32px",
      xl: "28px",
      l: "24px",
      m: "24px",
      s: "22px",
      xs: "20px",
      xxs: "18px",
      xxxs: "17px"
    };
    letterSpacing = {
      m: "0",
      s: "-1%",
      xs: "-2%"
    };
    textStyles = {
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
  }
});

// src/tokens/spacing.ts
var init_spacing = __esm({
  "src/tokens/spacing.ts"() {
  }
});

// src/tokens/radius.ts
var init_radius = __esm({
  "src/tokens/radius.ts"() {
  }
});

// src/tokens/shadows.ts
var init_shadows = __esm({
  "src/tokens/shadows.ts"() {
  }
});

// src/tokens/borders.ts
var borderWidth, borderStyle, border;
var init_borders = __esm({
  "src/tokens/borders.ts"() {
    borderWidth = {
      /** UI 요소의 기본적인 구분감을 제공할 때 사용 */
      s: "1px",
      /** 1px보다 더 명확한 구분이 필요할 때 사용 */
      m: "1.5px",
      /** 중요한 요소를 강조하거나, 요소 간 강한 대비가 필요할 때 사용 */
      l: "2px"
    };
    borderStyle = {
      solid: "solid",
      dashed: "dashed",
      dotted: "dotted",
      none: "none"
    };
    border = {
      /** 기본 보더 - UI 요소의 기본적인 구분감 제공 */
      s: `${borderWidth.s} ${borderStyle.solid}`,
      /** 중간 보더 - 더 명확한 구분이 필요할 때 */
      m: `${borderWidth.m} ${borderStyle.solid}`,
      /** 큰 보더 - 중요한 요소 강조나 강한 대비가 필요할 때 */
      l: `${borderWidth.l} ${borderStyle.solid}`,
      /** 보더 없음 */
      none: borderStyle.none
    };
  }
});

// src/tokens/index.ts
init_colors();
init_typography();
init_spacing();
init_radius();
init_shadows();
init_borders();

// src/components/text-input/TextInput.tsx
init_colors();
init_borders();
var TextInput = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      placeholder = "Placeholder",
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      disabled = false,
      error = false,
      errorMessage,
      className = "",
      type = "text",
      size = "l"
    } = _b, restProps = __objRest(_b, [
      "placeholder",
      "value",
      "defaultValue",
      "onChange",
      "onFocus",
      "onBlur",
      "disabled",
      "error",
      "errorMessage",
      "className",
      "type",
      "size"
    ]);
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || "");
    const sizeConfig = {
      l: __spreadProps(__spreadValues({
        paddingX: "16px",
        paddingY: "12px",
        borderRadius: "12px",
        height: "48px"
      }, textStyles.body1), {
        fontWeight: fontWeight.regular
      }),
      m: __spreadProps(__spreadValues({
        paddingX: "12px",
        paddingY: "8px",
        borderRadius: "8px",
        height: "40px"
      }, textStyles.body2), {
        fontWeight: fontWeight.regular
      }),
      s: __spreadProps(__spreadValues({
        paddingX: "8px",
        paddingY: "6px",
        borderRadius: "4px",
        height: "32px"
      }, textStyles.body3), {
        fontWeight: fontWeight.regular
      })
    };
    const getStyles = () => {
      const config = sizeConfig[size];
      let styles = {
        width: "100%",
        height: config.height,
        padding: `${config.paddingY} ${config.paddingX}`,
        borderRadius: config.borderRadius,
        fontSize: config.fontSize,
        fontWeight: config.fontWeight,
        lineHeight: config.lineHeight,
        border: `${border.s} transparent`,
        outline: "none",
        transition: "all 0.2s ease",
        fontFamily: "inherit"
      };
      if (disabled) {
        styles = __spreadProps(__spreadValues({}, styles), {
          backgroundColor: colors.semantic.disabled.background,
          color: colors.semantic.disabled.foreground,
          border: `${border.s} ${colors.semantic.disabled.background}`,
          cursor: "not-allowed"
        });
      } else if (error) {
        styles = __spreadProps(__spreadValues({}, styles), {
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.text.primary,
          border: `${border.s} ${colors.semantic.state.error}`
        });
      } else if (isFocused) {
        styles = __spreadProps(__spreadValues({}, styles), {
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.text.primary,
          border: `${border.s} ${colors.primary.mainviolet}`,
          boxShadow: `0 0 0 3px ${colors.primary.tint.violet[100]}`
        });
      } else {
        styles = __spreadProps(__spreadValues({}, styles), {
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.text.primary,
          border: `${border.s} ${colors.semantic.border.default}`
        });
      }
      return styles;
    };
    const handleFocus = () => {
      if (!disabled) {
        setIsFocused(true);
        onFocus == null ? void 0 : onFocus();
      }
    };
    const handleBlur = () => {
      setIsFocused(false);
      onBlur == null ? void 0 : onBlur();
    };
    const handleChange = (e) => {
      const newValue = e.target.value;
      if (value === void 0) {
        setInternalValue(newValue);
      }
      onChange == null ? void 0 : onChange(newValue);
    };
    const inputValue = value !== void 0 ? value : internalValue;
    return /* @__PURE__ */ jsxs("div", { className: `text-input-container ${className}`, children: [
      /* @__PURE__ */ jsx(
        "input",
        __spreadValues({
          ref,
          type,
          value: inputValue,
          placeholder,
          onChange: handleChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
          disabled,
          style: getStyles(),
          className: "text-input"
        }, restProps)
      ),
      error && errorMessage && /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            marginTop: "4px",
            fontSize: "12px",
            color: colors.semantic.state.error,
            fontWeight: fontWeight.regular
          },
          className: "error-message",
          children: errorMessage
        }
      )
    ] });
  }
);
TextInput.displayName = "TextInput";

export { TextInput };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map