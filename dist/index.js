'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/**
 * Color Design Tokens
 * 브랜드 아이덴티티와 UI 의미 전달을 위한 컬러 시스템
 */
// All colors export
var colors = {
  primary: {
    /** 브랜드 아이덴티티를 대표하는 메인 컬러 */
    mainviolet: '#7248D9',
    /** 중립적인 컬러 - Typography 및 넓은 영역 Fill에 사용 */
    gray: {
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
    },
    /** 넓은 영역에서 Fill로 사용 가능한 중립 색상 계열 */
    coolGray: {
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
    },
    /** 메인 컬러보다는 덜 강조되지만, 일러스트 및 보조 정보 강조에 사용 */
    tint: {
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
    }
  },
  /** 텍스트, 상태, 배경, 보더, 비활성, Dim 등 UI 의미 전달용 컬러셋 */
  semantic: {
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
  },
  /** 의료 플랫폼 특성을 반영해 피부, 머리카락, 장기 표현용 컬러 */
  illustration: {
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
  }
};
// 하위 호환성을 위한 개별 export (deprecated)
/** @deprecated colors.primary 사용을 권장합니다 */
var primary = colors.primary.mainviolet;
/** @deprecated colors.primary.gray 사용을 권장합니다 */
var gray = colors.primary.gray;
/** @deprecated colors.primary.coolGray 사용을 권장합니다 */
var coolGray = colors.primary.coolGray;
/** @deprecated colors.primary.tint 사용을 권장합니다 */
var tint = colors.primary.tint;
/** @deprecated colors.semantic 사용을 권장합니다 */
var semantic = colors.semantic;
/** @deprecated colors.illustration 사용을 권장합니다 */
var illustration = colors.illustration;

var colors$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    colors: colors,
    coolGray: coolGray,
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
// Font Sizes (rem 단위로 반응형 지원)
var fontSize = {
  xxxxl: '2rem',
  // 32px
  xxxl: '1.75rem',
  // 28px
  xxl: '1.5rem',
  // 24px
  xl: '1.25rem',
  // 20px
  l: '1.125rem',
  // 18px
  m: '1rem',
  // 16px
  s: '0.875rem',
  // 14px
  xs: '0.75rem',
  // 12px
  xxs: '0.625rem',
  // 10px
  xxxs: '0.688rem' // 11px
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
  xxxxl: '42px',
  xxxl: '36px',
  xxl: '32px',
  xl: '28px',
  l: '24px',
  m: '24px',
  s: '22px',
  xs: '20px',
  xxs: '18px',
  xxxs: '17px'
};
// Letter Spacings
var letterSpacing = {
  m: '0',
  s: '-1%',
  xs: '-2%'
};
// Text Styles (React.CSSProperties 호환)
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
 * Design Tokens Entry Point
 * 모든 디자인 토큰을 중앙에서 관리합니다
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

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var LoadingIcon = function () {
  return jsxRuntime.jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 50 50",
    className: "loading-icon",
    children: jsxRuntime.jsx("circle", {
      cx: "25",
      cy: "25",
      r: "20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "4",
      strokeLinecap: "round"
    })
  });
};
var BoxButton = function (_a) {
  var _b = _a.type,
    type = _b === void 0 ? 'solid' : _b,
    _c = _a.size,
    size = _c === void 0 ? 'l' : _c,
    _d = _a.width,
    width = _d === void 0 ? '320px' : _d,
    _e = _a.disabled,
    disabled = _e === void 0 ? false : _e,
    icon = _a.icon,
    children = _a.children,
    onClick = _a.onClick,
    _f = _a.className,
    className = _f === void 0 ? '' : _f,
    _g = _a.isLoading,
    isLoading = _g === void 0 ? false : _g;
  var _h = react.useState(false),
    isHovered = _h[0],
    setIsHovered = _h[1];
  var _j = react.useState(false),
    isPressed = _j[0],
    setIsPressed = _j[1];
  // Size configurations
  var sizeConfig = {
    l: __assign(__assign({
      paddingX: '16px',
      paddingY: '12px',
      borderRadius: '12px',
      width: '320px',
      height: '48px'
    }, textStyles.body1), {
      fontWeight: fontWeight.medium
    }),
    m: __assign(__assign({
      paddingX: '12px',
      paddingY: '8px',
      borderRadius: '8px',
      width: '320px',
      height: '40px'
    }, textStyles.body2), {
      fontWeight: fontWeight.medium
    }),
    s: __assign(__assign({
      paddingX: '8px',
      paddingY: '6px',
      borderRadius: '4px',
      width: '320px',
      height: '32px'
    }, textStyles.body3), {
      fontWeight: fontWeight.medium
    })
  };
  var getStyles = function () {
    var config = sizeConfig[size];
    // width 동적 설정
    var getWidth = function () {
      if (width === 'fill') {
        return '100%';
      }
      return width;
    };
    var styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: "".concat(config.paddingY, " ").concat(config.paddingX),
      borderRadius: config.borderRadius,
      width: getWidth(),
      height: config.height,
      border: '1px solid transparent',
      cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      fontSize: '14px',
      fontWeight: '500'
    };
    if (type === 'solid') {
      if (disabled) {
        styles = __assign(__assign({}, styles), {
          backgroundColor: colors.semantic.disabled.background,
          color: colors.semantic.disabled.foreground,
          border: "1px solid ".concat(colors.semantic.disabled.background),
          cursor: 'not-allowed'
        });
      } else if (isPressed) {
        styles = __assign(__assign({}, styles), {
          backgroundColor: colors.primary.tint.violet[700],
          color: colors.semantic.background.primary,
          border: "1px solid ".concat(colors.primary.tint.violet[700])
        });
      } else if (isHovered) {
        styles = __assign(__assign({}, styles), {
          backgroundColor: colors.primary.tint.violet[600],
          color: colors.semantic.background.primary,
          border: "1px solid ".concat(colors.primary.tint.violet[600])
        });
      } else {
        styles = __assign(__assign({}, styles), {
          backgroundColor: colors.primary.mainviolet,
          color: colors.semantic.background.primary,
          border: "1px solid ".concat(colors.primary.mainviolet)
        });
      }
    } else if (type === 'ghost') {
      if (disabled) {
        styles = __assign(__assign({}, styles), {
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.disabled.foreground,
          border: "".concat(border.s, " ").concat(colors.semantic.disabled.foreground),
          cursor: 'not-allowed'
        });
      } else if (isPressed || isHovered) {
        styles = __assign(__assign({}, styles), {
          backgroundColor: colors.primary.coolGray[100],
          color: colors.semantic.text.primary,
          border: "".concat(border.s, " ").concat(colors.semantic.border.strong)
        });
      } else {
        styles = __assign(__assign({}, styles), {
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.text.primary,
          border: "".concat(border.s, " ").concat(colors.semantic.border.strong)
        });
      }
    }
    // Loading state overrides
    if (isLoading) {
      if (type === 'solid') {
        styles = __assign(__assign({}, styles), {
          backgroundColor: colors.primary.mainviolet,
          color: colors.semantic.background.primary,
          border: "".concat(border.s, " ").concat(colors.primary.mainviolet),
          cursor: 'not-allowed'
        });
      } else {
        styles = __assign(__assign({}, styles), {
          backgroundColor: colors.semantic.background.primary,
          color: colors.semantic.text.primary,
          border: "".concat(border.s, " ").concat(colors.semantic.border.strong),
          cursor: 'not-allowed'
        });
      }
    }
    return styles;
  };
  var handleClick = function () {
    if (!disabled && !isLoading && onClick) {
      onClick();
    }
  };
  var handleMouseEnter = function () {
    if (!disabled && !isLoading) {
      setIsHovered(true);
    }
  };
  var handleMouseLeave = function () {
    setIsHovered(false);
    setIsPressed(false);
  };
  var handleMouseDown = function () {
    if (!disabled && !isLoading) {
      setIsPressed(true);
    }
  };
  var handleMouseUp = function () {
    setIsPressed(false);
  };
  var renderContent = function () {
    if (isLoading) {
      return jsxRuntime.jsx(LoadingIcon, {});
    }
    return jsxRuntime.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      },
      children: [(icon === null || icon === void 0 ? void 0 : icon.left) && icon.left, children && jsxRuntime.jsx("span", {
        children: children
      }), (icon === null || icon === void 0 ? void 0 : icon.right) && icon.right]
    });
  };
  return jsxRuntime.jsx("button", {
    style: getStyles(),
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    disabled: disabled || isLoading,
    className: className,
    children: renderContent()
  });
};

var Font = function (_a) {
  var type = _a.type,
    fontWeight$1 = _a.fontWeight,
    _b = _a.color,
    color = _b === void 0 ? colors.semantic.text.primary : _b,
    hoverColor = _a.hoverColor,
    _c = _a.align,
    align = _c === void 0 ? 'left' : _c,
    whiteSpace = _a.whiteSpace,
    _d = _a.noWhiteSpace,
    noWhiteSpace = _d === void 0 ? false : _d,
    _e = _a.underline,
    underline = _e === void 0 ? false : _e,
    className = _a.className,
    style = _a.style,
    children = _a.children;
  var baseStyle = textStyles[type];
  var fontStyles = __assign(__assign(__assign(__assign({}, baseStyle), fontWeight$1 && {
    fontWeight: fontWeight[fontWeight$1]
  }), {
    color: color,
    textAlign: align,
    whiteSpace: noWhiteSpace ? 'nowrap' : whiteSpace || 'normal',
    textOverflow: noWhiteSpace ? 'ellipsis' : undefined,
    overflow: noWhiteSpace ? 'hidden' : undefined,
    textDecoration: underline ? 'underline' : 'none',
    margin: 0,
    padding: 0,
    transition: 'color 0.2s ease'
  }), style);
  var handleMouseEnter = function (e) {
    if (hoverColor) {
      e.currentTarget.style.color = hoverColor;
    }
  };
  var handleMouseLeave = function (e) {
    if (hoverColor) {
      e.currentTarget.style.color = color;
    }
  };
  return jsxRuntime.jsx("span", {
    style: fontStyles,
    className: className,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: children
  });
};

var TextInput = react.forwardRef(function (_a, ref) {
  var _b = _a.placeholder,
    placeholder = _b === void 0 ? 'Placeholder' : _b,
    value = _a.value,
    defaultValue = _a.defaultValue,
    onChange = _a.onChange,
    onFocus = _a.onFocus,
    onBlur = _a.onBlur,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    _d = _a.error,
    error = _d === void 0 ? false : _d,
    errorMessage = _a.errorMessage,
    _e = _a.className,
    className = _e === void 0 ? '' : _e,
    _f = _a.type,
    type = _f === void 0 ? 'text' : _f,
    _g = _a.size,
    size = _g === void 0 ? 'l' : _g,
    restProps = __rest(_a, ["placeholder", "value", "defaultValue", "onChange", "onFocus", "onBlur", "disabled", "error", "errorMessage", "className", "type", "size"]);
  var _h = react.useState(false),
    isFocused = _h[0],
    setIsFocused = _h[1];
  var _j = react.useState(defaultValue || ''),
    internalValue = _j[0],
    setInternalValue = _j[1];
  // Size configurations
  var sizeConfig = {
    l: __assign(__assign({
      paddingX: '16px',
      paddingY: '12px',
      borderRadius: '12px',
      height: '48px'
    }, textStyles.body1), {
      fontWeight: fontWeight.regular
    }),
    m: __assign(__assign({
      paddingX: '12px',
      paddingY: '8px',
      borderRadius: '8px',
      height: '40px'
    }, textStyles.body2), {
      fontWeight: fontWeight.regular
    }),
    s: __assign(__assign({
      paddingX: '8px',
      paddingY: '6px',
      borderRadius: '4px',
      height: '32px'
    }, textStyles.body3), {
      fontWeight: fontWeight.regular
    })
  };
  var getStyles = function () {
    var config = sizeConfig[size];
    var styles = {
      width: '100%',
      height: config.height,
      padding: "".concat(config.paddingY, " ").concat(config.paddingX),
      borderRadius: config.borderRadius,
      fontSize: config.fontSize,
      fontWeight: config.fontWeight,
      lineHeight: config.lineHeight,
      border: "".concat(border.s, " transparent"),
      outline: 'none',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit'
    };
    if (disabled) {
      styles = __assign(__assign({}, styles), {
        backgroundColor: colors.semantic.disabled.background,
        color: colors.semantic.disabled.foreground,
        border: "".concat(border.s, " ").concat(colors.semantic.disabled.background),
        cursor: 'not-allowed'
      });
    } else if (error) {
      styles = __assign(__assign({}, styles), {
        backgroundColor: colors.semantic.background.primary,
        color: colors.semantic.text.primary,
        border: "".concat(border.s, " ").concat(colors.semantic.state.error)
      });
    } else if (isFocused) {
      styles = __assign(__assign({}, styles), {
        backgroundColor: colors.semantic.background.primary,
        color: colors.semantic.text.primary,
        border: "".concat(border.s, " ").concat(colors.primary.mainviolet),
        boxShadow: "0 0 0 3px ".concat(colors.primary.tint.violet[100])
      });
    } else {
      styles = __assign(__assign({}, styles), {
        backgroundColor: colors.semantic.background.primary,
        color: colors.semantic.text.primary,
        border: "".concat(border.s, " ").concat(colors.semantic.border.default)
      });
    }
    return styles;
  };
  var handleFocus = function () {
    if (!disabled) {
      setIsFocused(true);
      onFocus === null || onFocus === void 0 ? void 0 : onFocus();
    }
  };
  var handleBlur = function () {
    setIsFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur();
  };
  var handleChange = function (e) {
    var newValue = e.target.value;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };
  var inputValue = value !== undefined ? value : internalValue;
  return jsxRuntime.jsxs("div", {
    className: "text-input-container ".concat(className),
    children: [jsxRuntime.jsx("input", __assign({
      ref: ref,
      type: type,
      value: inputValue,
      placeholder: placeholder,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      disabled: disabled,
      style: getStyles(),
      className: "text-input"
    }, restProps)), error && errorMessage && jsxRuntime.jsx("div", {
      style: {
        marginTop: '4px',
        fontSize: '12px',
        color: colors.semantic.state.error,
        fontWeight: fontWeight.regular
      },
      className: "error-message",
      children: errorMessage
    })]
  });
});
TextInput.displayName = 'TextInput';

var ChevronRightIcon = function (_a) {
  var color = _a.color;
  return jsxRuntime.jsx("svg", {
    width: "21",
    height: "20",
    viewBox: "0 0 21 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: jsxRuntime.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.24408 4.4107C8.56951 4.08527 9.09715 4.08527 9.42259 4.4107L8.83333 4.99996L8.24408 5.58922C7.91864 5.26378 7.91864 4.73614 8.24408 4.4107ZM12.6548 9.99996L8.24408 5.58922C8.24405 5.58919 8.24408 5.58922 8.83333 4.99996C9.42259 4.4107 9.42256 4.41068 9.42259 4.4107L14.4226 9.4107C14.748 9.73614 14.748 10.2638 14.4226 10.5892L9.42259 15.5892C9.09715 15.9147 8.56951 15.9147 8.24408 15.5892C7.91864 15.2638 7.91864 14.7361 8.24408 14.4107L12.6548 9.99996Z",
      fill: color || 'currentColor'
    })
  });
};
var TextButton = function (_a) {
  var _b = _a.size,
    size = _b === void 0 ? 'm' : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    _d = _a.underline,
    underline = _d === void 0 ? false : _d,
    icon = _a.icon,
    children = _a.children,
    onClick = _a.onClick,
    _e = _a.className,
    className = _e === void 0 ? '' : _e,
    width = _a.width,
    height = _a.height,
    _f = _a.chevron,
    chevron = _f === void 0 ? false : _f,
    color = _a.color;
  // Size configurations
  var sizeConfig = {
    m: __assign(__assign({}, textStyles.body1), {
      fontWeight: fontWeight.medium,
      padding: '4px 8px'
    }),
    s: __assign(__assign({}, textStyles.body2), {
      fontWeight: fontWeight.medium,
      padding: '3px 6px'
    }),
    xs: __assign(__assign({}, textStyles.body3), {
      fontWeight: fontWeight.medium,
      padding: '2px 4px'
    })
  };
  var getTextColor = function () {
    if (disabled) {
      return colors.semantic.disabled.foreground;
    }
    return color || colors.primary.coolGray[800];
  };
  var getStyles = function () {
    var config = sizeConfig[size];
    var textColor = getTextColor();
    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: config.padding,
      border: 'none',
      background: 'transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontSize: config.fontSize,
      lineHeight: config.lineHeight,
      fontWeight: config.fontWeight,
      color: textColor,
      textDecoration: underline ? 'underline' : 'none',
      textUnderlineOffset: underline ? '2px' : undefined,
      width: width || 'auto',
      height: height || 'auto',
      minWidth: 'fit-content',
      minHeight: 'fit-content',
      gap: '4px',
      transition: 'all 0.2s ease'
    };
  };
  var handleClick = function () {
    if (!disabled && onClick) {
      onClick();
    }
  };
  var renderContent = function () {
    var textColor = getTextColor();
    return jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [(icon === null || icon === void 0 ? void 0 : icon.left) && icon.left, jsxRuntime.jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [children && jsxRuntime.jsx("span", {
          children: children
        }), chevron && jsxRuntime.jsx(ChevronRightIcon, {
          color: textColor
        })]
      }), (icon === null || icon === void 0 ? void 0 : icon.right) && !chevron && icon.right]
    });
  };
  return jsxRuntime.jsx("button", {
    style: getStyles(),
    onClick: handleClick,
    disabled: disabled,
    className: className,
    children: renderContent()
  });
};

exports.BoxButton = BoxButton;
exports.Font = Font;
exports.TextButton = TextButton;
exports.TextInput = TextInput;
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
