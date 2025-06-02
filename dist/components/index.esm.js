import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useState, forwardRef, useEffect, useRef, useMemo, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';

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

var LoadingIcon = function () {
  return jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 50 50",
    className: "loading-icon",
    children: jsx("circle", {
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
  var _h = useState(false),
    isHovered = _h[0],
    setIsHovered = _h[1];
  var _j = useState(false),
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
      return jsx(LoadingIcon, {});
    }
    return jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      },
      children: [(icon === null || icon === void 0 ? void 0 : icon.left) && icon.left, children && jsx("span", {
        children: children
      }), (icon === null || icon === void 0 ? void 0 : icon.right) && icon.right]
    });
  };
  return jsx("button", {
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
  return jsx("span", {
    style: fontStyles,
    className: className,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: children
  });
};

var Lock = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.5 6.5C6.5 3.46243 8.96243 1 12 1C15.0376 1 17.5 3.46243 17.5 6.5V8.5H18C19.6569 8.5 21 9.84315 21 11.5V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V11.5C3 9.84315 4.34315 8.5 6 8.5H6.5V6.5ZM9 8.5H15V6.5C15 4.84315 13.6569 3.5 12 3.5C10.3431 3.5 9 4.84315 9 6.5V8.5ZM11 14.5C11 13.9477 11.4477 13.5 12 13.5C12.5523 13.5 13 13.9477 13 14.5V17.5C13 18.0523 12.5523 18.5 12 18.5C11.4477 18.5 11 18.0523 11 17.5V14.5Z\" fill=\"#25282D\"/></svg>";
var New = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#25282D\"/><path d=\"M15.2337 7.19995C15.786 7.19995 16.2337 7.64767 16.2337 8.19995V16.3812C16.2337 16.9335 15.786 17.3812 15.2337 17.3812H14.93C14.6016 17.3812 14.2942 17.22 14.1074 16.9499L9.93374 10.9125H9.84936V16.3812C9.84936 16.9335 9.40165 17.3812 8.84937 17.3812H8.73999C8.18771 17.3812 7.73999 16.9335 7.73999 16.3812V8.19995C7.73999 7.64767 8.18771 7.19995 8.73999 7.19995H9.06997C9.3994 7.19995 9.7077 7.3622 9.89422 7.63373L14.04 13.6687H14.1384V8.19995C14.1384 7.64767 14.5861 7.19995 15.1384 7.19995H15.2337Z\" fill=\"white\"/></svg>";
var Truncation = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"5.5\" cy=\"20.5\" r=\"1.5\" fill=\"#25282D\"/><circle cx=\"18.5\" cy=\"20.5\" r=\"1.5\" fill=\"#25282D\"/><circle cx=\"12\" cy=\"20.5\" r=\"1.5\" fill=\"#25282D\"/></svg>";
var add = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 3C12.5523 3 13 3.44772 13 4V11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H13V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H11V4C11 3.44772 11.4477 3 12 3Z\" fill=\"#25282D\"/></svg>";
var addCircleFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 6.25C11.4477 6.25 11 6.69772 11 7.25V11H7.25C6.69771 11 6.25 11.4477 6.25 12C6.25 12.5523 6.69771 13 7.25 13H11V16.75C11 17.3023 11.4477 17.75 12 17.75C12.5523 17.75 13 17.3023 13 16.75V13H16.75C17.3023 13 17.75 12.5523 17.75 12C17.75 11.4477 17.3023 11 16.75 11H13V7.25C13 6.69772 12.5523 6.25 12 6.25Z\" fill=\"#25282D\"/></svg>";
var addCircleStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 6.25C12.5523 6.25 13 6.69772 13 7.25V11H16.75C17.3023 11 17.75 11.4477 17.75 12C17.75 12.5523 17.3023 13 16.75 13H13V16.75C13 17.3023 12.5523 17.75 12 17.75C11.4477 17.75 11 17.3023 11 16.75V13H7.25C6.69771 13 6.25 12.5523 6.25 12C6.25 11.4477 6.69771 11 7.25 11H11V7.25C11 6.69772 11.4477 6.25 12 6.25Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z\" fill=\"#25282D\"/></svg>";
var arrowDown = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.7071 15.7071C19.0976 15.3166 19.0976 14.6834 18.7071 14.2929C18.3166 13.9024 17.6834 13.9024 17.2929 14.2929L13 18.5858V3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V18.5858L6.70711 14.2929C6.31658 13.9024 5.68342 13.9024 5.29289 14.2929C4.90237 14.6834 4.90237 15.3166 5.29289 15.7071L11.2929 21.7071C11.6834 22.0976 12.3166 22.0976 12.7071 21.7071L18.7071 15.7071Z\" fill=\"currentColor\"/></svg>";
var arrowLeft = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.29289 18.7071C8.68342 19.0976 9.31658 19.0976 9.70711 18.7071C10.0976 18.3166 10.0976 17.6834 9.70711 17.2929L5.41421 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H5.41421L9.70711 6.70711C10.0976 6.31658 10.0976 5.68342 9.70711 5.29289C9.31658 4.90237 8.68342 4.90237 8.29289 5.29289L2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L8.29289 18.7071Z\" fill=\"currentColor\"/></svg>";
var arrowRight = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071Z\" fill=\"currentColor\"/></svg>";
var arrowUp = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711C18.3166 10.0976 17.6834 10.0976 17.2929 9.70711L13 5.41421V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V5.41421L6.70711 9.70711C6.31658 10.0976 5.68342 10.0976 5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289L11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L18.7071 8.29289Z\" fill=\"currentColor\"/></svg>";
var bellFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.0025 15.2077L19.1006 13.3977V8.9377C19.1259 7.28152 18.5172 5.67261 17.3869 4.40803C16.2565 3.14346 14.6809 2.30863 12.951 2.0577C11.947 1.93256 10.9263 2.01151 9.95711 2.28927C8.9879 2.56703 8.09242 3.03722 7.33043 3.66846C6.56845 4.2997 5.95746 5.07747 5.53826 5.94989C5.11905 6.82231 4.90125 7.76931 4.89941 8.7277V13.3977L2.99746 15.2077C2.75856 15.4376 2.59655 15.729 2.53169 16.0455C2.46684 16.362 2.502 16.6896 2.63279 16.9873C2.76358 17.2851 2.9842 17.5397 3.26706 17.7194C3.54992 17.8991 3.88248 17.9959 4.22316 17.9977H7.77346V18.3377C7.82281 19.3529 8.29538 20.3082 9.08762 20.9942C9.87986 21.6803 10.9271 22.0411 12 21.9977C13.0729 22.0411 14.1201 21.6803 14.9124 20.9942C15.7046 20.3082 16.1772 19.3529 16.2265 18.3377V17.9977H19.7768C20.1175 17.9959 20.4501 17.8991 20.7329 17.7194C21.0158 17.5397 21.2364 17.2851 21.3672 16.9873C21.498 16.6896 21.5332 16.362 21.4683 16.0455C21.4034 15.729 21.2414 15.4376 21.0025 15.2077ZM14.1133 18.3377C14.0547 18.8187 13.8022 19.2598 13.4086 19.569C13.0149 19.8782 12.5103 20.0318 12 19.9977C11.4897 20.0318 10.9851 19.8782 10.5914 19.569C10.1978 19.2598 9.94533 18.8187 9.88673 18.3377V17.9977H14.1133V18.3377Z\" fill=\"#25282D\"/></svg>";
var bellStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.12602 19C8.04375 18.6804 8 18.3453 8 18V17H16V18C16 18.3453 15.9562 18.6804 15.874 19C15.4299 20.7252 13.8638 22 12 22C10.1362 22 8.57006 20.7252 8.12602 19ZM13.7324 19C13.3866 19.5978 12.7403 20 12 20C11.2597 20 10.6134 19.5978 10.2676 19H13.7324Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 4C8.67235 4 6 6.47621 6 10.7368V12.9131C6 14.3741 5.46807 15.7852 4.50363 16.8827C4.50332 16.8833 4.50287 16.8843 4.50238 16.8856C4.50157 16.8878 4.50091 16.8902 4.50048 16.8925C4.50006 16.8948 4.5 16.8964 4.5 16.897C4.5 16.9232 4.50957 16.9507 4.53375 16.9753C4.54527 16.9869 4.55602 16.9933 4.56302 16.9963C4.56846 16.9987 4.57354 17 4.58218 17H19.4033C19.4567 17 19.5 16.9567 19.5 16.9033C19.5 16.8806 19.4918 16.8582 19.4768 16.8404C18.5239 15.7199 18 14.2963 18 12.8248V10.6781C18 6.48554 15.3364 4 12 4ZM4 10.7368C4 5.5 7.44365 2 12 2C16.5564 2 20 5.5 20 10.6781V12.8248C20 13.8213 20.3548 14.7857 21.0004 15.5448C21.3228 15.924 21.5 16.4056 21.5 16.9033C21.5 18.0613 20.5613 19 19.4033 19H4.58218C3.43222 19 2.5 18.0469 2.5 16.897C2.5 16.4091 2.67775 15.9303 3 15.5639C3.6445 14.8313 4 13.8889 4 12.9131V10.7368Z\" fill=\"#25282D\"/></svg>";
var bookmarkFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 1H6C4.34315 1 3 2.34315 3 4V21.4197C3 22.2925 3.70753 23 4.58032 23C4.85534 23 5.1256 22.9282 5.36438 22.7918L11.5039 19.2835C11.8113 19.1078 12.1887 19.1078 12.4961 19.2835L18.6356 22.7918C18.8744 22.9282 19.1447 23 19.4197 23C20.2925 23 21 22.2925 21 21.4197V4C21 2.34315 19.6569 1 18 1Z\" fill=\"#25282D\"/></svg>";
var bookmarkStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 3H6C5.44772 3 5 3.44772 5 4V20.6965L10.5116 17.547C11.4339 17.02 12.5661 17.02 13.4884 17.547L19 20.6965V4C19 3.44772 18.5523 3 18 3ZM6 1H18C19.6569 1 21 2.34315 21 4V21.4197C21 22.2925 20.2925 23 19.4197 23C19.1447 23 18.8744 22.9282 18.6356 22.7918L12.4961 19.2835C12.1887 19.1078 11.8113 19.1078 11.5039 19.2835L5.36438 22.7918C5.1256 22.9282 4.85534 23 4.58032 23C3.70753 23 3 22.2925 3 21.4197V4C3 2.34315 4.34315 1 6 1Z\" fill=\"#25282D\"/></svg>";
var calendarFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22 19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V12H22V19ZM5.5 14C4.94772 14 4.5 14.4477 4.5 15V17C4.5 17.5523 4.94772 18 5.5 18H7.5C8.05228 18 8.5 17.5523 8.5 17V15C8.5 14.4477 8.05228 14 7.5 14H5.5ZM16 2C16.5523 2 17 2.44772 17 3V4H19C20.6569 4 22 5.34315 22 7V10H2V7C2 5.34315 3.34315 4 5 4H7V3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2Z\" fill=\"#000000\"/></svg>";
var calendar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19 6H5C4.44772 6 4 6.44772 4 7V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V7C20 6.44772 19.5523 6 19 6ZM5 4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4Z\" fill=\"#000000\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 2C8.55228 2 9 2.44772 9 3V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V3C7 2.44772 7.44772 2 8 2Z\" fill=\"#000000\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 2C16.5523 2 17 2.44772 17 3V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V3C15 2.44772 15.4477 2 16 2Z\" fill=\"#000000\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 11C2 10.4477 2.44772 10 3 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H3C2.44772 12 2 11.5523 2 11Z\" fill=\"#000000\"/></svg>";
var calendarStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19 6H5C4.44772 6 4 6.44772 4 7V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V7C20 6.44772 19.5523 6 19 6ZM5 4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 2C8.55228 2 9 2.44772 9 3V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V3C7 2.44772 7.44772 2 8 2Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 2C16.5523 2 17 2.44772 17 3V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V3C15 2.44772 15.4477 2 16 2Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 11C2 10.4477 2.44772 10 3 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H3C2.44772 12 2 11.5523 2 11Z\" fill=\"#25282D\"/></svg>";
var callFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.61803 2H7.76985C8.52431 2 9.21456 2.42456 9.55485 3.09791L11.091 6.13762C11.5313 7.00875 11.2784 8.07041 10.4928 8.64957L9.24955 9.56604C9.1039 9.67341 9.05286 9.86792 9.12688 10.033C10.0913 12.1845 11.8139 13.9079 13.9654 14.8724C14.1313 14.9468 14.3265 14.8948 14.4335 14.7477L15.2711 13.596C15.8383 12.816 16.8814 12.552 17.7515 12.9681L20.8629 14.4562C21.5577 14.7885 22 15.4902 22 16.2604V19.382C22 19.7884 21.9054 20.1893 21.7236 20.5528C21.2801 21.4397 20.3736 22 19.382 22H19C10 22 2 14 2 5V4.61803C2 3.6264 2.56027 2.71987 3.44721 2.27639C3.81074 2.09463 4.2116 2 4.61803 2Z\" fill=\"#25282D\"/></svg>";
var callStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.76985 4H4.61803C4.52209 4 4.42746 4.02234 4.34164 4.06525C4.13226 4.16994 4 4.38394 4 4.61803V5C4 12.8954 11.1046 20 19 20H19.382C19.6161 20 19.8301 19.8677 19.9348 19.6584C19.9777 19.5725 20 19.4779 20 19.382V16.2604L16.8885 14.7724L16.0509 15.9241C15.3877 16.8361 14.1763 17.1587 13.1473 16.6974C10.5476 15.5321 8.46691 13.4501 7.30186 10.8511C6.84329 9.82818 7.15895 8.62248 8.06281 7.95618L9.30604 7.03971L7.76985 4ZM7.76985 2H4.61803C4.2116 2 3.81074 2.09463 3.44721 2.27639C2.56027 2.71987 2 3.6264 2 4.61803V5C2 14 10 22 19 22H19.382C20.3736 22 21.2801 21.4397 21.7236 20.5528C21.9054 20.1893 22 19.7884 22 19.382V16.2604C22 15.4902 21.5577 14.7885 20.8629 14.4562L17.7515 12.9681C16.8814 12.552 15.8383 12.816 15.2711 13.596L14.4335 14.7477C14.3265 14.8948 14.1313 14.9468 13.9654 14.8724C11.8139 13.9079 10.0913 12.1845 9.12688 10.033C9.05286 9.86792 9.1039 9.67341 9.24955 9.56604L10.4928 8.64957C11.2784 8.07041 11.5313 7.00875 11.091 6.13762L9.55485 3.09791C9.21456 2.42456 8.52431 2 7.76985 2Z\" fill=\"#25282D\"/></svg>";
var cameraFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6 6L6.67082 4.65836C7.179 3.64201 8.21779 3 9.3541 3H14.6459C15.7822 3 16.821 3.64201 17.3292 4.65836L18 6H20C21.6569 6 23 7.34315 23 9V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6ZM12 17.5C14.2091 17.5 16 15.7091 16 13.5C16 11.2909 14.2091 9.5 12 9.5C9.79086 9.5 8 11.2909 8 13.5C8 15.7091 9.79086 17.5 12 17.5Z\" fill=\"#25282D\"/></svg>";
var cameraStorke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5ZM12 17.5C14.4853 17.5 16.5 15.4853 16.5 13C16.5 10.5147 14.4853 8.5 12 8.5C9.51472 8.5 7.5 10.5147 7.5 13C7.5 15.4853 9.51472 17.5 12 17.5Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.78885 6.89443C7.45007 7.572 6.75754 8 6 8H4C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V9C21 8.44772 20.5523 8 20 8H18C17.2425 8 16.5499 7.572 16.2111 6.89443L15.5403 5.55279C15.3709 5.214 15.0247 5 14.6459 5H9.3541C8.97533 5 8.62907 5.214 8.45967 5.55279L7.78885 6.89443ZM18 6L17.3292 4.65836C16.821 3.64201 15.7822 3 14.6459 3H9.3541C8.21779 3 7.179 3.64201 6.67082 4.65836L6 6H4C2.34315 6 1 7.34315 1 9V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V9C23 7.34315 21.6569 6 20 6H18Z\" fill=\"#25282D\"/></svg>";
var cancelFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM16.0664 7.93359C15.6759 7.54317 15.0428 7.54318 14.6523 7.93359L12 10.585L9.34863 7.93359C8.95812 7.54328 8.32504 7.54321 7.93457 7.93359C7.54411 8.32406 7.54423 8.95712 7.93457 9.34766L10.5859 11.999L7.93457 14.6514C7.54425 15.0419 7.54418 15.675 7.93457 16.0654C8.32505 16.4557 8.95815 16.4557 9.34863 16.0654L12 13.4131L14.6523 16.0654C15.0429 16.4557 15.676 16.4559 16.0664 16.0654C16.4568 15.675 16.4567 15.0419 16.0664 14.6514L13.4141 11.999L16.0664 9.34766C16.4568 8.95718 16.4567 8.3241 16.0664 7.93359Z\" fill=\"#25282D\"/></svg>";
var cancelStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.0659 7.93388C16.4564 8.3244 16.4564 8.95757 16.0659 9.34809L13.4142 11.9997L16.0659 14.6514C16.4564 15.0419 16.4564 15.6751 16.0659 16.0656C15.6753 16.4561 15.0422 16.4561 14.6517 16.0656L12 13.414L9.34835 16.0656C8.95782 16.4561 8.32466 16.4561 7.93414 16.0656C7.54361 15.6751 7.54361 15.0419 7.93414 14.6514L10.5858 11.9997L7.93414 9.34809C7.54361 8.95757 7.54361 8.3244 7.93414 7.93388C8.32466 7.54335 8.95783 7.54335 9.34835 7.93388L12 10.5855L14.6517 7.93388C15.0422 7.54335 15.6753 7.54335 16.0659 7.93388Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z\" fill=\"#25282D\"/></svg>";
var cautionFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 15.25C11.3096 15.25 10.75 15.8096 10.75 16.5C10.75 17.1904 11.3096 17.75 12 17.75C12.6904 17.75 13.25 17.1904 13.25 16.5C13.25 15.8096 12.6904 15.25 12 15.25ZM12 6.25C11.4477 6.25 11 6.69772 11 7.25V13.25C11 13.8023 11.4477 14.25 12 14.25C12.5523 14.25 13 13.8023 13 13.25V7.25C13 6.69772 12.5523 6.25 12 6.25Z\" fill=\"#25282D\"/></svg>";
var cautionStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.75 16.5C10.75 15.8096 11.3096 15.25 12 15.25C12.6904 15.25 13.25 15.8096 13.25 16.5C13.25 17.1904 12.6904 17.75 12 17.75C11.3096 17.75 10.75 17.1904 10.75 16.5Z\" fill=\"#25282D\"/><path d=\"M12 6.25C11.4477 6.25 11 6.69772 11 7.25V13.25C11 13.8023 11.4477 14.25 12 14.25C12.5523 14.25 13 13.8023 13 13.25V7.25C13 6.69772 12.5523 6.25 12 6.25Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z\" fill=\"#25282D\"/></svg>";
var check = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.6585 5.24744C21.0742 5.61112 21.1163 6.24288 20.7526 6.65852L10.2526 18.6585C10.0638 18.8742 9.7916 18.9986 9.50497 19C9.21834 19.0014 8.94488 18.8798 8.754 18.666L3.254 12.5047C2.88622 12.0927 2.92206 11.4605 3.33407 11.0927C3.74608 10.7249 4.37823 10.7608 4.74602 11.1728L9.49252 16.49L19.2474 5.34151C19.6111 4.92587 20.2429 4.88375 20.6585 5.24744Z\" fill=\"#25282D\"/></svg>";
var checkCircleFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM17.1582 7.99707C16.7426 7.63373 16.1106 7.67628 15.7471 8.0918L10.5859 13.9902L8.24609 11.3682C7.87831 10.9562 7.24597 10.9204 6.83398 11.2881C6.422 11.6559 6.38619 12.2882 6.75391 12.7002L9.84766 16.166C10.0385 16.3798 10.312 16.5014 10.5986 16.5C10.8853 16.4986 11.1579 16.3739 11.3467 16.1582L17.2529 9.4082C17.6163 8.99256 17.5737 8.36065 17.1582 7.99707Z\" fill=\"#25282D\"/></svg>";
var checkCircleStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.2526 9.6585C17.6163 9.24287 17.5741 8.61111 17.1585 8.24742C16.7429 7.88374 16.1111 7.92586 15.7474 8.3415L10.5863 14.24L8.24601 11.6183C7.87822 11.2063 7.24607 11.1705 6.83406 11.5383C6.42205 11.9061 6.38621 12.5382 6.75399 12.9502L9.84774 16.4159C10.0386 16.6298 10.3121 16.7514 10.5987 16.75C10.8853 16.7486 11.1576 16.6242 11.3463 16.4085L17.2526 9.6585Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" fill=\"#25282D\"/></svg>";
var checkboxResting = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21 2H3C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2ZM3 0C1.34315 0 0 1.34315 0 3V21C0 22.6569 1.34315 24 3 24H21C22.6569 24 24 22.6569 24 21V3C24 1.34315 22.6569 0 21 0H3Z\" fill=\"#25282D\"/></svg>";
var checkboxSelectedFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 0C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34315 24 0 22.6569 0 21V3C0 1.34315 1.34315 0 3 0H21ZM19.6582 5.99707C19.2426 5.63373 18.6106 5.67628 18.2471 6.0918L9.80469 15.7402L5.74609 11.1934C5.37831 10.7814 4.74599 10.7455 4.33398 11.1133C3.9223 11.481 3.88646 12.1125 4.25391 12.5244L9.06641 17.916C9.25727 18.1298 9.53079 18.2514 9.81738 18.25C10.104 18.2486 10.3767 18.1239 10.5654 17.9082L19.7529 7.4082C20.1163 6.99256 20.0737 6.36065 19.6582 5.99707Z\" fill=\"#25282D\"/></svg>";
var checkboxSelectedStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.6585 5.99744C20.0742 6.36112 20.1163 6.99288 19.7526 7.40852L10.5651 17.9085C10.3763 18.1242 10.1041 18.2486 9.81747 18.25C9.53084 18.2514 9.25738 18.1298 9.0665 17.916L4.254 12.5248C3.88622 12.1128 3.92206 11.4807 4.33407 11.1129C4.74608 10.7451 5.37823 10.781 5.74602 11.193L9.80502 15.74L18.2474 6.09151C18.6111 5.67587 19.2429 5.63375 19.6585 5.99744Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21 2H3C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2ZM3 0C1.34315 0 0 1.34315 0 3V21C0 22.6569 1.34315 24 3 24H21C22.6569 24 24 22.6569 24 21V3C24 1.34315 22.6569 0 21 0H3Z\" fill=\"#25282D\"/></svg>";
var chevronDown = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L18 10L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289ZM12 14.5858L17.2929 9.29289C17.2929 9.29286 17.2929 9.29289 18 10C18.7071 10.7071 18.7071 10.7071 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858Z\" fill=\"#000000\"/></svg>";
var chevronLeft = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L14 18L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071ZM9.41421 12L14.7071 17.2929C14.7071 17.2929 14.7071 17.2929 14 18C13.2929 18.7071 13.2929 18.7071 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12Z\" fill=\"#000000\"/></svg>";
var chevronRight = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L10 6L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289ZM14.5858 12L9.29289 6.70711C9.29286 6.70708 9.29289 6.70711 10 6C10.7071 5.29289 10.7071 5.29286 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12Z\" fill=\"#000000\"/></svg>";
var chevronUp = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929L6 14L6.70711 14.7071C6.31658 15.0976 5.68342 15.0976 5.29289 14.7071ZM12 9.41421L6.70711 14.7071C6.70708 14.7071 6.70711 14.7071 6 14C5.29289 13.2929 5.29286 13.2929 5.29289 13.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L18.7071 13.2929C19.0976 13.6834 19.0976 14.3166 18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071L12 9.41421Z\" fill=\"#000000\"/></svg>";
var close = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071Z\" fill=\"#25282D\"/></svg>";
var customerService = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11 3C8.23858 3 6 5.23858 6 8V11.5H4V8C4 4.13401 7.13401 1 11 1H13C16.8659 1 20 4.13373 20 7.99977V18.0004C20 20.2097 18.209 22 16 22H12.5V20H16C17.1047 20 18 19.1048 18 18.0004V7.99977C18 5.2384 15.7615 3 13 3H11Z\" fill=\"#25282D\"/><path d=\"M16.5 10C16.5 8.89543 17.3954 8 18.5 8H19.5C20.6046 8 21.5 8.89543 21.5 10V15C21.5 16.1046 20.6046 17 19.5 17H18.5C17.3954 17 16.5 16.1046 16.5 15V10Z\" fill=\"#25282D\"/><path d=\"M2.5 10C2.5 8.89543 3.39543 8 4.5 8H5.5C6.60457 8 7.5 8.89543 7.5 10V15C7.5 16.1046 6.60457 17 5.5 17H4.5C3.39543 17 2.5 16.1046 2.5 15V10Z\" fill=\"#25282D\"/><path d=\"M21.5 10C22.3284 10 23 10.6716 23 11.5V13.5C23 14.3284 22.3284 15 21.5 15V10Z\" fill=\"#25282D\"/><path d=\"M2.5 10C1.67157 10 1 10.6716 1 11.5V13.5C1 14.3284 1.67157 15 2.5 15V10Z\" fill=\"#25282D\"/><path d=\"M9 21C9 19.8954 9.89543 19 11 19H13C14.1046 19 15 19.8954 15 21C15 22.1046 14.1046 23 13 23H11C9.89543 23 9 22.1046 9 21Z\" fill=\"#25282D\"/></svg>";
var dashboardFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 4C2 2.89543 2.89543 2 4 2H9C10.1046 2 11 2.89543 11 4V9C11 10.1046 10.1046 11 9 11H4C2.89543 11 2 10.1046 2 9V4Z\" fill=\"#25282D\"/><path d=\"M2 15C2 13.8954 2.89543 13 4 13H9C10.1046 13 11 13.8954 11 15V20C11 21.1046 10.1046 22 9 22H4C2.89543 22 2 21.1046 2 20V15Z\" fill=\"#25282D\"/><path d=\"M13 4C13 2.89543 13.8954 2 15 2H20C21.1046 2 22 2.89543 22 4V9C22 10.1046 21.1046 11 20 11H15C13.8954 11 13 10.1046 13 9V4Z\" fill=\"#25282D\"/><path d=\"M13 15C13 13.8954 13.8954 13 15 13H20C21.1046 13 22 13.8954 22 15V20C22 21.1046 21.1046 22 20 22H15C13.8954 22 13 21.1046 13 20V15Z\" fill=\"#25282D\"/></svg>";
var dashboardStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9 2C10.1046 2 11 2.89543 11 4V9C11 10.1046 10.1046 11 9 11H4C2.89543 11 2 10.1046 2 9V4C2 2.89543 2.89543 2 4 2H9ZM4.5 4C4.22386 4 4 4.22386 4 4.5V8.5C4 8.77614 4.22386 9 4.5 9H8.5C8.77614 9 9 8.77614 9 8.5V4.5C9 4.22386 8.77614 4 8.5 4H4.5Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 2C21.1046 2 22 2.89543 22 4V9C22 10.1046 21.1046 11 20 11H15C13.8954 11 13 10.1046 13 9V4C13 2.89543 13.8954 2 15 2H20ZM15.5 4C15.2239 4 15 4.22386 15 4.5V8.5C15 8.77614 15.2239 9 15.5 9H19.5C19.7761 9 20 8.77614 20 8.5V4.5C20 4.22386 19.7761 4 19.5 4H15.5Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9 13C10.1046 13 11 13.8954 11 15V20C11 21.1046 10.1046 22 9 22H4C2.89543 22 2 21.1046 2 20V15C2 13.8954 2.89543 13 4 13H9ZM4.5 15C4.22386 15 4 15.2239 4 15.5V19.5C4 19.7761 4.22386 20 4.5 20H8.5C8.77614 20 9 19.7761 9 19.5V15.5C9 15.2239 8.77614 15 8.5 15H4.5Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 13C21.1046 13 22 13.8954 22 15V20C22 21.1046 21.1046 22 20 22H15C13.8954 22 13 21.1046 13 20V15C13 13.8954 13.8954 13 15 13H20ZM15.5 15C15.2239 15 15 15.2239 15 15.5V19.5C15 19.7761 15.2239 20 15.5 20H19.5C19.7761 20 20 19.7761 20 19.5V15.5C20 15.2239 19.7761 15 19.5 15H15.5Z\" fill=\"#25282D\"/></svg>";
var deleteFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.1003 1C14.9228 1 16.4 2.47736 16.4001 4.2998H20.8005C21.408 4.29991 21.9001 4.79294 21.9001 5.40039C21.8999 6.00766 21.4078 6.49989 20.8005 6.5H19.7V19.7002C19.6998 21.5226 18.2226 23 16.4001 23H7.60034C5.77787 23 4.30064 21.5226 4.30054 19.7002V6.5H3.19995C2.59275 6.49979 2.10055 6.00759 2.10034 5.40039C2.10034 4.79301 2.59262 4.30002 3.19995 4.2998H7.60034C7.60045 2.47742 9.07776 1.00011 10.9001 1H13.1003ZM9.79956 9.7998C9.19223 9.80002 8.69995 10.293 8.69995 10.9004V16.4004C8.70016 17.0076 9.19236 17.4998 9.79956 17.5C10.4069 17.5 10.8999 17.0077 10.9001 16.4004V10.9004C10.9001 10.2929 10.4071 9.7998 9.79956 9.7998ZM14.2 9.7998C13.5924 9.7998 13.1003 10.2929 13.1003 10.9004V16.4004C13.1006 17.0077 13.5926 17.5 14.2 17.5C14.8073 17.5 15.2993 17.0077 15.2996 16.4004V10.9004C15.2996 10.2929 14.8075 9.7998 14.2 9.7998ZM10.9001 3.2002C10.2928 3.2003 9.80064 3.69245 9.80054 4.2998H14.2C14.1998 3.69238 13.7078 3.2002 13.1003 3.2002H10.9001Z\" fill=\"#25282D\"/></svg>";
var deleteStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"8.69995\" y=\"9.80005\" width=\"2.2\" height=\"7.7\" rx=\"1.1\" fill=\"#25282D\"/><rect x=\"13.1003\" y=\"9.7998\" width=\"2.2\" height=\"7.7\" rx=\"1.1\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.60034 4.3C7.60034 2.47746 9.0778 1 10.9003 1H13.1003C14.9229 1 16.4003 2.47746 16.4003 4.3H20.8003C21.4079 4.3 21.9003 4.79249 21.9003 5.4C21.9003 6.00751 21.4079 6.5 20.8003 6.5H19.7003V19.7C19.7003 21.5225 18.2229 23 16.4003 23H7.60034C5.7778 23 4.30034 21.5225 4.30034 19.7V6.5H3.20034C2.59283 6.5 2.10034 6.00751 2.10034 5.4C2.10034 4.79249 2.59283 4.3 3.20034 4.3H7.60034ZM10.9003 3.2H13.1003C13.7079 3.2 14.2003 3.69249 14.2003 4.3H9.80034C9.80034 3.69249 10.2928 3.2 10.9003 3.2ZM6.50034 6.5V19.7C6.50034 20.3075 6.99283 20.8 7.60034 20.8H16.4003C17.0079 20.8 17.5003 20.3075 17.5003 19.7V6.5H6.50034Z\" fill=\"#25282D\"/></svg>";
var dialog = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.39445 17H19C20.1046 17 21 16.1046 21 15V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V18.5963L5.39445 17ZM6 19L3.38675 20.7422C3.13457 20.9103 2.83827 21 2.53518 21C1.68733 21 1 20.3127 1 19.4648V7C1 4.79086 2.79086 3 5 3H19C21.2091 3 23 4.79086 23 7V15C23 17.2091 21.2091 19 19 19H6Z\" fill=\"#25282D\"/><path d=\"M13.25 11.25C13.25 11.9404 12.6904 12.5 12 12.5C11.3096 12.5 10.75 11.9404 10.75 11.25C10.75 10.5596 11.3096 10 12 10C12.6904 10 13.25 10.5596 13.25 11.25Z\" fill=\"#25282D\"/><path d=\"M17.7002 11.25C17.7002 11.9404 17.1406 12.5 16.4502 12.5C15.7598 12.5 15.2002 11.9404 15.2002 11.25C15.2002 10.5596 15.7598 10 16.4502 10C17.1406 10 17.7002 10.5596 17.7002 11.25Z\" fill=\"#25282D\"/><path d=\"M8.7998 11.25C8.7998 11.9404 8.24016 12.5 7.5498 12.5C6.85945 12.5 6.2998 11.9404 6.2998 11.25C6.2998 10.5596 6.85945 10 7.5498 10C8.24016 10 8.7998 10.5596 8.7998 11.25Z\" fill=\"#25282D\"/></svg>";
var download = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 21C3 20.4477 3.44772 20 4 20L20 20C20.5523 20 21 20.4477 21 21C21 21.5523 20.5523 22 20 22L4 22C3.44772 22 3 21.5523 3 21Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.0401 11.9599C18.4306 12.3504 18.4306 12.9836 18.0401 13.3741L17.333 12.667L16.6259 11.9599C17.0164 11.5694 17.6496 11.5694 18.0401 11.9599ZM11.9996 16.5862L16.6259 11.9599C16.6259 11.9599 16.6259 11.9599 17.333 12.667C18.0401 13.3741 18.0401 13.3741 18.0401 13.3741L12.7067 18.7075C12.3162 19.098 11.683 19.098 11.2925 18.7075L5.95915 13.3741C5.56862 12.9836 5.56862 12.3504 5.95915 11.9599C6.34967 11.5694 6.98284 11.5694 7.37336 11.9599L11.9996 16.5862Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 18.5C11.4477 18.5 11 18.0523 11 17.5L11 3C11 2.44771 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L13 17.5C13 18.0523 12.5523 18.5 12 18.5Z\" fill=\"#25282D\"/></svg>";
var duplicate = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 8V20C5 20.5523 5.44772 21 6 21H14C14.5523 21 15 20.5523 15 20H9C7.34315 20 6 18.6569 6 17V7C5.44772 7 5 7.44772 5 8ZM14 23H6C4.34315 23 3 21.6569 3 20V8C3 6.34315 4.34315 5 6 5H8V17C8 17.5523 8.44772 18 9 18H17V20C17 21.6569 15.6569 23 14 23Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 3H9C8.44772 3 8 3.44772 8 4V17C8 17.5523 8.44772 18 9 18H18C18.5523 18 19 17.5523 19 17V4C19 3.44772 18.5523 3 18 3ZM9 1C7.34315 1 6 2.34315 6 4V17C6 18.6569 7.34315 20 9 20H18C19.6569 20 21 18.6569 21 17V4C21 2.34315 19.6569 1 18 1H9Z\" fill=\"#25282D\"/></svg>";
var guide = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C12.5523 1 13 1.44772 13 2V3H17.9297C18.5984 3.00002 19.2228 3.33424 19.5938 3.89062L20.7227 5.58398C20.9035 5.85525 21 6.17398 21 6.5C21 6.82602 20.9035 7.14475 20.7227 7.41602L19.5938 9.10938C19.2228 9.66576 18.5984 9.99998 17.9297 10H13V11H19C20.1046 11 21 11.8954 21 13V16C21 17.1046 20.1046 18 19 18H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V18H6.07031C5.40163 18 4.77717 17.6658 4.40625 17.1094L3.27734 15.416C3.0965 15.1447 3 14.826 3 14.5C3 14.174 3.0965 13.8553 3.27734 13.584L4.40625 11.8906C4.77717 11.3342 5.40163 11 6.07031 11H11V10H5C3.89543 10 3 9.10457 3 8V5C3 3.89543 3.89543 3 5 3H11V2C11 1.44772 11.4477 1 12 1ZM5.07031 14.5L6.07031 16H19V13H6.07031L5.07031 14.5ZM5 8H17.9297L18.9297 6.5L17.9297 5H5V8Z\" fill=\"#25282D\"/></svg>";
var gym = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 1C4.55228 1 5 1.44772 5 2V3H20C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5H19V6C20.1046 6 21 6.89543 21 8V15C21 16.1046 20.1046 17 19 17H9C7.89543 17 7 16.1046 7 15V8C7 6.89543 7.89543 6 9 6V5H5V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V2C3 1.44772 3.44772 1 4 1ZM11 9C10.7239 9 10.5 9.22386 10.5 9.5V10H10C9.72386 10 9.5 10.2239 9.5 10.5V12.5C9.5 12.7761 9.72386 13 10 13H10.5V13.5C10.5 13.7761 10.7239 14 11 14H12C12.2761 14 12.5 13.7761 12.5 13.5V12.5H15.5V13.5C15.5 13.7761 15.7239 14 16 14H17C17.2761 14 17.5 13.7761 17.5 13.5V13H18C18.2761 13 18.5 12.7761 18.5 12.5V10.5C18.5 10.2239 18.2761 10 18 10H17.5V9.5C17.5 9.22386 17.2761 9 17 9H16C15.7239 9 15.5 9.22386 15.5 9.5V10.5H12.5V9.5C12.5 9.22386 12.2761 9 12 9H11ZM11 6H17V5H11V6Z\" fill=\"#25282D\"/></svg>";
var hamburger = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20Z\" fill=\"#25282D\"/><path d=\"M20 4C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5C3 4.44772 3.44772 4 4 4H20Z\" fill=\"#25282D\"/><path d=\"M20 18C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19C3 18.4477 3.44772 18 4 18H20Z\" fill=\"#25282D\"/></svg>";
var heartFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22 9.01522C22 14.2787 15.6392 18.7521 12.8703 20.719C12.6118 20.9026 12.3057 21 11.9887 21C11.6857 21 11.3928 20.9114 11.1466 20.7349C9.37882 19.4672 2 13.8839 2 9.01499C2 3.48348 8.19048 0.717718 12 5.32721C15.8095 0.717718 22 3.48349 22 9.01522Z\" fill=\"currentColor\"/></svg>";
var heart = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 7.32721C11.4036 7.32721 10.8383 7.06104 10.4584 6.60131C9.07662 4.92942 7.48573 4.75821 6.31197 5.22607C5.07922 5.71745 4 7.03452 4 9.01499C4 9.74225 4.28337 10.6479 4.90623 11.711C5.52017 12.759 6.38647 13.8281 7.35673 14.8441C9.09158 16.6606 11.0112 18.1551 12.0008 18.8833C13.3939 17.8918 15.3615 16.4614 17.029 14.7201C18.8599 12.8079 20 10.8568 20 9.01522C20 7.0346 18.9207 5.71748 17.688 5.2261C16.5143 4.75822 14.9234 4.92942 13.5416 6.60131C13.1617 7.06104 12.5964 7.32721 12 7.32721ZM10.5279 3.96986C11.0433 4.31979 11.5391 4.76952 12 5.32721C12.4609 4.76952 12.9567 4.31979 13.4721 3.96986C17.2168 1.42745 22 4.15276 22 9.01522C22 14.2349 15.7445 18.6777 12.94 20.6695L12.8703 20.719C12.6118 20.9026 12.3057 21 11.9887 21C11.6857 21 11.3928 20.9114 11.1466 20.7349C9.37882 19.4672 2 13.8839 2 9.01499C2 4.15272 6.78316 1.42744 10.5279 3.96986Z\" fill=\"currentColor\"/></svg>";
var heartStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 7.32721C11.4036 7.32721 10.8383 7.06104 10.4584 6.60131C9.07662 4.92942 7.48573 4.75821 6.31197 5.22607C5.07922 5.71745 4 7.03452 4 9.01499C4 9.74225 4.28337 10.6479 4.90623 11.711C5.52017 12.759 6.38647 13.8281 7.35673 14.8441C9.09158 16.6606 11.0112 18.1551 12.0008 18.8833C13.3939 17.8918 15.3615 16.4614 17.029 14.7201C18.8599 12.8079 20 10.8568 20 9.01522C20 7.0346 18.9207 5.71748 17.688 5.2261C16.5143 4.75822 14.9234 4.92942 13.5416 6.60131C13.1617 7.06104 12.5964 7.32721 12 7.32721ZM10.5279 3.96986C11.0433 4.31979 11.5391 4.76952 12 5.32721C12.4609 4.76952 12.9567 4.31979 13.4721 3.96986C17.2168 1.42745 22 4.15276 22 9.01522C22 14.2349 15.7445 18.6777 12.94 20.6695L12.8703 20.719C12.6118 20.9026 12.3057 21 11.9887 21C11.6857 21 11.3928 20.9114 11.1466 20.7349C9.37882 19.4672 2 13.8839 2 9.01499C2 4.15272 6.78316 1.42744 10.5279 3.96986Z\" fill=\"#25282D\"/></svg>";
var historyFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 1C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4C3 2.34315 4.34315 1 6 1H18ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H8ZM8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H16C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10H8ZM8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8H16C16.5523 8 17 7.55228 17 7C17 6.44772 16.5523 6 16 6H8Z\" fill=\"#25282D\"/></svg>";
var historyStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8L16 8C16.5523 8 17 7.55228 17 7C17 6.44771 16.5523 6 16 6L8 6Z\" fill=\"#25282D\"/><path d=\"M7 11C7 10.4477 7.44772 10 8 10L16 10C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12L8 12C7.44772 12 7 11.5523 7 11Z\" fill=\"#25282D\"/><path d=\"M8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H8Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4ZM6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z\" fill=\"#25282D\"/></svg>";
var homeFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.137 2.34387L2.62451 10.4084C2.22583 10.7861 2 11.3111 2 11.8603V20C2 21.1046 2.89543 22 4 22H8.5C9.05228 22 9.5 21.5523 9.5 21V17.5C9.5 16.3954 10.3954 15.5 11.5 15.5H12.5C13.6046 15.5 14.5 16.3954 14.5 17.5V21C14.5 21.5523 14.9477 22 15.5 22H20C21.1046 22 22 21.1046 22 20V11.8603C22 11.3111 21.7742 10.7861 21.3755 10.4084L12.863 2.34387C12.6299 2.12307 12.3211 2 12 2C11.6789 2 11.3701 2.12307 11.137 2.34387Z\" fill=\"currentColor\"/></svg>";
var home = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 4.28132L4 11.8603V20H7.5V17.5C7.5 15.2909 9.29086 13.5 11.5 13.5H12.5C14.7091 13.5 16.5 15.2909 16.5 17.5V20H20L20 11.8603L12 4.28132ZM2.62451 10.4084L11.137 2.34387C11.3701 2.12307 11.6789 2 12 2C12.3211 2 12.6299 2.12307 12.863 2.34387L21.3755 10.4084C21.7742 10.7861 22 11.3111 22 11.8603V20C22 21.1046 21.1046 22 20 22H15.5C14.9477 22 14.5 21.5523 14.5 21V17.5C14.5 16.3954 13.6046 15.5 12.5 15.5H11.5C10.3954 15.5 9.5 16.3954 9.5 17.5V21C9.5 21.5523 9.05228 22 8.5 22H4C2.89543 22 2 21.1046 2 20V11.8603C2 11.3111 2.22583 10.7861 2.62451 10.4084Z\" fill=\"currentColor\"/></svg>";
var homeStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 4.28132L4 11.8603V20H7.5V17.5C7.5 15.2909 9.29086 13.5 11.5 13.5H12.5C14.7091 13.5 16.5 15.2909 16.5 17.5V20H20L20 11.8603L12 4.28132ZM2.62451 10.4084L11.137 2.34387C11.3701 2.12307 11.6789 2 12 2C12.3211 2 12.6299 2.12307 12.863 2.34387L21.3755 10.4084C21.7742 10.7861 22 11.3111 22 11.8603V20C22 21.1046 21.1046 22 20 22H15.5C14.9477 22 14.5 21.5523 14.5 21V17.5C14.5 16.3954 13.6046 15.5 12.5 15.5H11.5C10.3954 15.5 9.5 16.3954 9.5 17.5V21C9.5 21.5523 9.05228 22 8.5 22H4C2.89543 22 2 21.1046 2 20V11.8603C2 11.3111 2.22583 10.7861 2.62451 10.4084Z\" fill=\"#25282D\"/></svg>";
var idCardFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 6.5C1 4.84315 2.34315 3.5 4 3.5H20C21.6569 3.5 23 4.84315 23 6.5V17.5C23 19.1569 21.6569 20.5 20 20.5H4C2.34315 20.5 1 19.1569 1 17.5V6.5Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.5 14C13.5 13.4477 13.9477 13 14.5 13L18.5 13C19.0523 13 19.5 13.4477 19.5 14C19.5 14.5523 19.0523 15 18.5 15L14.5 15C13.9477 15 13.5 14.5523 13.5 14Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.5 10C13.5 9.44772 13.9477 9 14.5 9L16.5 9C17.0523 9 17.5 9.44772 17.5 10C17.5 10.5523 17.0523 11 16.5 11L14.5 11C13.9477 11 13.5 10.5523 13.5 10Z\" fill=\"white\"/><path d=\"M9.5 8H6.5C5.39543 8 4.5 8.89543 4.5 10V14C4.5 15.1046 5.39543 16 6.5 16H9.5C10.6046 16 11.5 15.1046 11.5 14V10C11.5 8.89543 10.6046 8 9.5 8Z\" fill=\"white\"/></svg>";
var idCardStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 5.5H4C3.44772 5.5 3 5.94772 3 6.5V17.5C3 18.0523 3.44772 18.5 4 18.5H20C20.5523 18.5 21 18.0523 21 17.5V6.5C21 5.94772 20.5523 5.5 20 5.5ZM4 3.5C2.34315 3.5 1 4.84315 1 6.5V17.5C1 19.1569 2.34315 20.5 4 20.5H20C21.6569 20.5 23 19.1569 23 17.5V6.5C23 4.84315 21.6569 3.5 20 3.5H4Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.5 14C13.5 13.4477 13.9477 13 14.5 13L18.5 13C19.0523 13 19.5 13.4477 19.5 14C19.5 14.5523 19.0523 15 18.5 15L14.5 15C13.9477 15 13.5 14.5523 13.5 14Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.5 10C13.5 9.44772 13.9477 9 14.5 9L16.5 9C17.0523 9 17.5 9.44772 17.5 10C17.5 10.5523 17.0523 11 16.5 11L14.5 11C13.9477 11 13.5 10.5523 13.5 10Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.5 10C4.5 8.89543 5.39543 8 6.5 8H9.5C10.6046 8 11.5 8.89543 11.5 10V14C11.5 15.1046 10.6046 16 9.5 16H6.5C5.39543 16 4.5 15.1046 4.5 14V10ZM9.5 10H6.5V14H9.5L9.5 10Z\" fill=\"#25282D\"/></svg>";
var image = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.70718 12.121C8.31666 11.7305 7.68349 11.7305 7.29297 12.121L3.70718 15.7068L2.29297 14.2926L5.87876 10.7068C7.05033 9.53523 8.94982 9.53523 10.1214 10.7068L19.9572 20.5426L18.543 21.9568L8.70718 12.121Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.7072 14.121C16.3167 13.7305 15.6835 13.7305 15.293 14.121L13.7072 15.7068L12.293 14.2926L13.8788 12.7068C15.0503 11.5352 16.9498 11.5352 18.1214 12.7068L21.7072 16.2926L20.293 17.7068L16.7072 14.121Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10Z\" fill=\"#25282D\"/></svg>";
var infoFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 9.75C11.4477 9.75 11 10.1977 11 10.75V16.75C11 17.3023 11.4477 17.75 12 17.75C12.5523 17.75 13 17.3023 13 16.75V10.75C13 10.1977 12.5523 9.75 12 9.75ZM12 6.25C11.3096 6.25 10.75 6.80964 10.75 7.5C10.75 8.19036 11.3096 8.75 12 8.75C12.6904 8.75 13.25 8.19035 13.25 7.5C13.25 6.80965 12.6904 6.25 12 6.25Z\" fill=\"#25282D\"/></svg>";
var infoStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.25 7.5C13.25 8.19036 12.6904 8.75 12 8.75C11.3096 8.75 10.75 8.19036 10.75 7.5C10.75 6.80964 11.3096 6.25 12 6.25C12.6904 6.25 13.25 6.80965 13.25 7.5Z\" fill=\"#25282D\"/><path d=\"M12 17.75C12.5523 17.75 13 17.3023 13 16.75L13 10.75C13 10.1977 12.5523 9.75 12 9.75C11.4477 9.75 11 10.1977 11 10.75L11 16.75C11 17.3023 11.4477 17.75 12 17.75Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 1C5.92487 1 1 5.92487 1 12C0.999999 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z\" fill=\"#25282D\"/></svg>";
var locationFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C16.9706 1 21 5.02944 21 10C21 16.9264 14.6282 21.6036 12.918 22.7344C12.6449 22.9149 12.3274 23 12 23C11.6726 23 11.3551 22.9149 11.082 22.7344C9.37183 21.6036 3 16.9264 3 10C3 5.02944 7.02944 1 12 1ZM12 6.5C10.067 6.5 8.5 8.067 8.5 10C8.5 11.933 10.067 13.5 12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.067 13.933 6.5 12 6.5Z\" fill=\"#25282D\"/></svg>";
var locationStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 12.829 6.30152 15.2912 7.93849 17.2633C9.45284 19.0876 11.1484 20.3612 12 20.9421C12.8516 20.3612 14.5472 19.0876 16.0615 17.2633C17.6985 15.2912 19 12.829 19 10ZM12 1C16.9706 1 21 5.02944 21 10C21 16.9264 14.6284 21.6039 12.9182 22.7347C12.6451 22.9152 12.3274 23 12 23C11.6726 23 11.3549 22.9152 11.0818 22.7347C9.37161 21.6039 3 16.9264 3 10C3 5.02944 7.02944 1 12 1Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z\" fill=\"#25282D\"/></svg>";
var logoApple = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.0331 12.6879C18.0641 16.0172 20.9678 17.1251 21 17.1393C20.9754 17.2174 20.536 18.7181 19.4702 20.2683C18.5488 21.6085 17.5925 22.9438 16.0861 22.9714C14.6059 22.9985 14.13 22.0979 12.4377 22.0979C10.7459 22.0979 10.2171 22.9437 8.81591 22.9985C7.36184 23.0533 6.25458 21.5493 5.32554 20.214C3.42717 17.4827 1.97642 12.4959 3.92441 9.12967C4.89213 7.45801 6.62152 6.39945 8.49862 6.3723C9.92648 6.3452 11.2742 7.3283 12.1471 7.3283C13.0194 7.3283 14.6572 6.14603 16.3789 6.31966C17.0997 6.34952 19.1229 6.60942 20.4221 8.50192C20.3174 8.56651 18.0079 9.90449 18.0331 12.6879ZM15.2512 4.51263C16.0232 3.58268 16.5427 2.2881 16.401 1C15.2883 1.04451 13.9427 1.73794 13.1446 2.66738C12.4293 3.49044 11.8028 4.8078 11.9719 6.07041C13.2121 6.16591 14.4792 5.44317 15.2512 4.51263Z\" fill=\"#25282D\"/></svg>";
var logoGoogle = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><mask id=\"mask0_9_640\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"1\" y=\"1\" width=\"22\" height=\"22\"><path d=\"M23 1H1V23H23V1Z\" fill=\"white\"/></mask><g mask=\"url(#mask0_9_640)\"><path d=\"M22.56 12.25C22.56 11.47 22.49 10.7201 22.36 10H12V14.255H17.92C17.665 15.63 16.8901 16.795 15.725 17.575V20.335H19.28C21.36 18.4201 22.56 15.6 22.56 12.25Z\" fill=\"#4285F4\"/><path d=\"M12 23C14.97 23 17.4599 22.0149 19.2799 20.335L15.7249 17.575C14.74 18.235 13.4799 18.6249 12 18.6249C9.1349 18.6249 6.70995 16.6899 5.84491 14.09H2.16992V16.94C3.97997 20.535 7.69995 23 12 23Z\" fill=\"#34A853\"/><path d=\"M5.84495 14.09C5.62495 13.43 5.49999 12.7251 5.49999 12C5.49999 11.275 5.62495 10.57 5.84495 9.91005V7.06006H2.16996C1.42504 8.54506 1 10.2251 1 12C1 13.775 1.42504 15.455 2.16996 16.94L5.84495 14.09Z\" fill=\"#FBBC04\"/><path d=\"M12 5.37503C13.6149 5.37503 15.0649 5.92998 16.2049 7.01997L19.36 3.86495C17.455 2.08999 14.9649 1 12 1C7.69995 1 3.97997 3.46499 2.16992 7.06001L5.84491 9.91C6.70995 7.31004 9.1349 5.37503 12 5.37503Z\" fill=\"#E94235\"/></g></svg>";
var logoKakao = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2.47122C6.20072 2.47122 1.50002 6.2449 1.50002 10.8991C1.50002 13.7937 3.31816 16.3454 6.0868 17.8631L4.92189 22.2848C4.81897 22.6755 5.249 22.9869 5.57923 22.7605L10.6856 19.2587C11.1165 19.3019 11.5544 19.3271 12 19.3271C17.7989 19.3271 22.4999 15.5536 22.4999 10.8991C22.4999 6.2449 17.7989 2.47122 12 2.47122Z\" fill=\"#25282D\"/></svg>";
var logoNaver = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.5614 13.7033L8.14609 3H2V23H8.43861V12.295L15.8539 23H22V3H15.5614V13.7033Z\" fill=\"#25282D\"/></svg>";
var mailFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.08484 5.78863L10.9 13.15C11.6111 13.6833 12.5889 13.6833 13.3 13.15L22.9435 5.9174C22.6723 4.5394 21.4575 3.5 20 3.5H4C2.58824 3.5 1.40425 4.47516 1.08484 5.78863Z\" fill=\"#25282D\"/><path d=\"M23 8.375L16.7667 13.05L22.9921 17.719C22.9973 17.6467 23 17.5737 23 17.5V8.375Z\" fill=\"#25282D\"/><path d=\"M22.1527 19.5895L15.1 14.3L14.5 14.75C13.0778 15.8167 11.1222 15.8167 9.7 14.75L9.09996 14.3L1.93353 19.6748C2.47155 20.1862 3.19913 20.5 4 20.5H20C20.8445 20.5 21.6075 20.1511 22.1527 19.5895Z\" fill=\"#25282D\"/><path d=\"M1.02126 17.859L7.4333 13.05L1 8.225V17.5C1 17.6215 1.00722 17.7413 1.02126 17.859Z\" fill=\"#25282D\"/></svg>";
var mailStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 6.5C1 4.84315 2.34315 3.5 4 3.5H20C21.6569 3.5 23 4.84315 23 6.5V17.5C23 19.1569 21.6569 20.5 20 20.5H4C2.34315 20.5 1 19.1569 1 17.5V6.5ZM4 5.5H20C20.5523 5.5 21 5.94772 21 6.5V7.37501L13.3 13.15C12.5889 13.6833 11.6111 13.6833 10.9 13.15L3 7.22501V6.5C3 5.94772 3.44772 5.5 4 5.5ZM3 9.72501V16.375L7.4333 13.05L3 9.72501ZM3.6069 18.4198C3.72756 18.4714 3.86044 18.5 4 18.5H20C20.1872 18.5 20.3624 18.4486 20.5122 18.3591L15.1 14.3L14.5 14.75C13.0778 15.8167 11.1222 15.8167 9.7 14.75L9.09996 14.3L3.6069 18.4198ZM21 16.225V9.87501L16.7667 13.05L21 16.225Z\" fill=\"#25282D\"/></svg>";
var microphone = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 16.4C14.5211 16.4 16.5714 14.4255 16.5714 12V5.4C16.5714 2.9734 14.5211 1 12 1C9.47886 1 7.42857 2.9734 7.42857 5.4V12C7.42857 14.4255 9.47886 16.4 12 16.4ZM20 12V9.8C20 9.50826 19.8796 9.22847 19.6653 9.02218C19.4509 8.81589 19.1602 8.7 18.8571 8.7C18.554 8.7 18.2633 8.81589 18.049 9.02218C17.8347 9.22847 17.7143 9.50826 17.7143 9.8V12C17.7143 15.0327 15.1509 17.5 12 17.5C8.84914 17.5 6.28571 15.0327 6.28571 12V9.8C6.28571 9.50826 6.16531 9.22847 5.95098 9.02218C5.73665 8.81589 5.44596 8.7 5.14286 8.7C4.83975 8.7 4.54906 8.81589 4.33474 9.02218C4.12041 9.22847 4 9.50826 4 9.8V12C4 15.872 6.98629 19.0752 10.8571 19.612V20.8H7.42857C7.12547 20.8 6.83478 20.9159 6.62045 21.1222C6.40612 21.3285 6.28571 21.6083 6.28571 21.9C6.28571 22.1917 6.40612 22.4715 6.62045 22.6778C6.83478 22.8841 7.12547 23 7.42857 23H16.5714C16.8745 23 17.1652 22.8841 17.3796 22.6778C17.5939 22.4715 17.7143 22.1917 17.7143 21.9C17.7143 21.6083 17.5939 21.3285 17.3796 21.1222C17.1652 20.9159 16.8745 20.8 16.5714 20.8H13.1429V19.612C17.0137 19.0752 20 15.872 20 12Z\" fill=\"#25282D\"/></svg>";
var minus = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20Z\" fill=\"#25282D\"/></svg>";
var minusCircleFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM7.25 11C6.69771 11 6.25 11.4477 6.25 12C6.25 12.5523 6.69771 13 7.25 13H16.75C17.3023 13 17.75 12.5523 17.75 12C17.75 11.4477 17.3023 11 16.75 11H7.25Z\" fill=\"#25282D\"/></svg>";
var minusCircleStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM16.75 11C17.3023 11 17.75 11.4477 17.75 12C17.75 12.5523 17.3023 13 16.75 13H7.25C6.69771 13 6.25 12.5523 6.25 12C6.25 11.4477 6.69771 11 7.25 11H16.75Z\" fill=\"#25282D\"/></svg>";
var modify = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 2C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V11C20 10.4477 20.4477 10 21 10C21.5523 10 22 10.4477 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H13ZM20.8398 5.28223L10.1719 15.9492C9.98435 16.1367 9.73002 16.2422 9.46484 16.2422H8.25781C7.98174 16.2421 7.75781 16.0183 7.75781 15.7422V14.5352C7.75781 14.27 7.86329 14.0157 8.05078 13.8281L18.7178 3.16113L20.8398 5.28223ZM19.4248 2.4541C19.8153 2.0636 20.4483 2.06365 20.8389 2.4541L21.5459 3.16113C21.9364 3.55166 21.9364 4.18467 21.5459 4.5752L21.1924 4.92871L19.0713 2.80762L19.4248 2.4541Z\" fill=\"#25282D\"/></svg>";
var more = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"19.5\" r=\"1.5\" fill=\"#25282D\"/><circle cx=\"12\" cy=\"4.5\" r=\"1.5\" fill=\"#25282D\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"#25282D\"/></svg>";
var myPageFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.25 12C15.0114 12 17.25 9.76142 17.25 7C17.25 4.23858 15.0114 2 12.25 2C9.48858 2 7.25 4.23858 7.25 7C7.25 9.76142 9.48858 12 12.25 12Z\" fill=\"currentColor\"/><path d=\"M9.25 13C5.93629 13 3.25 15.6863 3.25 19V20C3.25 21.1046 4.14543 22 5.25 22H19.25C20.3546 22 21.25 21.1046 21.25 20V19C21.25 15.6863 18.5637 13 15.25 13H9.25Z\" fill=\"currentColor\"/></svg>";
var myPage = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7ZM15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z\" fill=\"currentColor\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 19C3 15.6863 5.68629 13 9 13H15C18.3137 13 21 15.6863 21 19V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V19ZM5 19C5 16.7909 6.79086 15 9 15H15C17.2091 15 19 16.7909 19 19V20H5L5 19Z\" fill=\"currentColor\"/></svg>";
var number_0 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#25282D\"/><path d=\"M8 11.4214C8 9.71032 8.32889 8.38333 8.98667 7.44048C9.66222 6.48016 10.6578 6 11.9733 6C13.3067 6 14.3111 6.48016 14.9867 7.44048C15.6622 8.38333 16 9.70159 16 11.3952C16 13.0889 15.6622 14.4508 14.9867 15.481C14.3111 16.4937 13.3067 17 11.9733 17C10.6578 17 9.66222 16.5024 8.98667 15.5071C8.32889 14.5119 8 13.15 8 11.4214ZM10.3467 11.4214C10.3467 12.5563 10.4622 13.4119 10.6933 13.9881C10.9422 14.5468 11.3689 14.8262 11.9733 14.8262C12.5956 14.8262 13.0311 14.5294 13.28 13.9357C13.5289 13.3421 13.6533 12.4865 13.6533 11.369C13.6533 10.2516 13.5289 9.44841 13.28 8.95952C13.0489 8.45317 12.6222 8.2 12 8.2C11.3956 8.2 10.9689 8.45317 10.72 8.95952C10.4711 9.46587 10.3467 10.2865 10.3467 11.4214Z\" fill=\"white\"/></svg>";
var number_1 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#25282D\"/><path d=\"M12.7222 17C12.3889 17 12.0926 16.8865 11.8333 16.6595C11.5926 16.4325 11.4722 16.1706 11.4722 15.8738V8.93333C11.4722 8.68889 11.3611 8.62778 11.1389 8.75L10.6389 9.0119C10.5648 9.04683 10.4907 9.07302 10.4167 9.09048C10.3426 9.09048 10.2685 9.09048 10.1944 9.09048C9.84259 9.09048 9.55556 8.98571 9.33333 8.77619C9.11111 8.54921 9 8.26984 9 7.9381C9 7.48413 9.25926 7.15238 9.77778 6.94286L11.9167 6.13095C12.1574 6.04365 12.3704 6 12.5556 6C12.9815 6 13.3241 6.12222 13.5833 6.36667C13.8611 6.61111 14 6.93413 14 7.33571L13.9722 15.9262C13.9722 16.2405 13.8519 16.5024 13.6111 16.7119C13.3889 16.904 13.0926 17 12.7222 17Z\" fill=\"white\"/></svg>";
var number_2 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#25282D\"/><path d=\"M9.57456 17C9.23114 17 8.93292 16.884 8.67987 16.6521C8.44491 16.4201 8.32742 16.1346 8.32742 15.7956C8.32742 15.3852 8.50817 15.0105 8.86966 14.6715L11.0115 12.7178C11.8067 11.9862 12.358 11.3885 12.6653 10.9246C12.9725 10.4428 13.1262 9.96107 13.1262 9.47932C13.1262 9.06894 12.9997 8.73885 12.7466 8.48905C12.5116 8.23925 12.1863 8.11436 11.7706 8.11436C11.373 8.11436 11.0476 8.23033 10.7946 8.46229C10.5415 8.69424 10.3698 9.00649 10.2795 9.39903C10.2252 9.66667 10.0897 9.8897 9.87278 10.0681C9.67397 10.2287 9.42092 10.309 9.11366 10.309C8.78832 10.309 8.51721 10.2019 8.30031 9.98783C8.08342 9.77372 7.98401 9.515 8.00209 9.21168C8.03823 8.26602 8.4178 7.49878 9.14077 6.90998C9.88182 6.30333 10.8036 6 11.9062 6C13.0268 6 13.9124 6.32117 14.5631 6.9635C15.2318 7.588 15.5662 8.39984 15.5662 9.39903C15.5662 10.0235 15.4035 10.6212 15.0782 11.1922C14.7709 11.7453 14.301 12.3341 13.6684 12.9586L12.1502 14.4574C11.861 14.7429 11.9242 14.8856 12.3399 14.8856L14.8071 14.8321C15.1686 14.8143 15.4578 14.9124 15.6747 15.1265C15.8916 15.3228 16 15.5904 16 15.9294C16 16.2506 15.9006 16.5093 15.7018 16.7056C15.503 16.9019 15.2409 17 14.9155 17H9.57456Z\" fill=\"white\"/></svg>";
var number_3 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#25282D\"/><path d=\"M11.92 16.9993C11.0311 16.9819 10.2578 16.816 9.6 16.5017C8.94222 16.1875 8.46222 15.7422 8.16 15.1661C8.05333 14.9566 8 14.7733 8 14.6161C8 14.2844 8.14222 14.0225 8.42667 13.8305C8.71111 13.6384 9.00444 13.5424 9.30667 13.5424C9.50222 13.5424 9.68 13.5773 9.84 13.6471C10 13.717 10.1156 13.8392 10.1867 14.0138C10.5067 14.6947 11.1111 15.0351 12 15.0351C12.4622 15.0351 12.8444 14.8955 13.1467 14.6161C13.4667 14.3193 13.6267 13.9527 13.6267 13.5162C13.6267 12.5036 12.9067 12.0234 11.4667 12.0758C11.1467 12.0933 10.8889 12.0147 10.6933 11.8401C10.4978 11.6481 10.4 11.4036 10.4 11.1068C10.4 10.81 10.4889 10.5743 10.6667 10.3997C10.8622 10.2251 11.1022 10.1378 11.3867 10.1378C12.0267 10.1378 12.4711 10.0505 12.72 9.87595C12.9867 9.70136 13.12 9.39582 13.12 8.95934C13.12 8.61015 13.0044 8.357 12.7733 8.19986C12.5422 8.02527 12.2756 7.93797 11.9733 7.93797C11.6889 7.93797 11.4133 7.99908 11.1467 8.1213C10.88 8.24351 10.6667 8.4181 10.5067 8.64507C10.3822 8.81966 10.24 8.94188 10.08 9.01172C9.92 9.06409 9.75111 9.09028 9.57333 9.09028C9.27111 9.09028 8.99556 9.00299 8.74667 8.82839C8.51556 8.63634 8.4 8.39191 8.4 8.09511C8.4 7.97289 8.42667 7.85068 8.48 7.72846C8.76444 7.16977 9.21778 6.74202 9.84 6.44521C10.48 6.1484 11.1822 6 11.9467 6C12.9956 6 13.84 6.27062 14.48 6.81185C15.12 7.33563 15.44 8.034 15.44 8.90696C15.44 9.72754 15.1111 10.4172 14.4533 10.9759C14.9156 11.2028 15.2889 11.552 15.5733 12.0234C15.8578 12.4774 16 12.9575 16 13.4638C16 14.5288 15.6178 15.3931 14.8533 16.0565C14.1067 16.7025 13.1289 17.0168 11.92 16.9993Z\" fill=\"white\"/></svg>";
var number_4 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#25282D\"/><path d=\"M13.2866 17C12.9463 17 12.6687 16.9127 12.4537 16.7381C12.2388 16.581 12.1313 16.3627 12.1313 16.0833V15.219C12.1313 14.9921 12.0149 14.8786 11.7821 14.8786H8.15522C7.79701 14.8786 7.51045 14.7476 7.29552 14.4857C7.09851 14.2238 7 13.9357 7 13.6214C7 13.4992 7.01791 13.377 7.05373 13.2548C7.08955 13.1325 7.14328 13.019 7.21493 12.9143L11.6209 6.60238C11.7642 6.39286 11.9701 6.24444 12.2388 6.15714C12.5254 6.05238 12.794 6 13.0448 6C13.4567 6 13.7881 6.12222 14.0388 6.36667C14.2896 6.59365 14.4239 6.88175 14.4418 7.23095V12.3119C14.4418 12.5389 14.5582 12.6524 14.791 12.6524H14.9522C15.2746 12.6524 15.5254 12.7484 15.7045 12.9405C15.9015 13.1325 16 13.4032 16 13.7524C16 14.0841 15.9015 14.3548 15.7045 14.5643C15.5254 14.7738 15.2746 14.8786 14.9522 14.8786H14.791C14.5582 14.8786 14.4418 14.9921 14.4418 15.219V16.0833C14.4418 16.3627 14.3343 16.581 14.1194 16.7381C13.9224 16.9127 13.6448 17 13.2866 17ZM10.1701 12.6524H11.9164C12.1493 12.6524 12.2657 12.5389 12.2657 12.3119V9.5881C12.2657 9.43095 12.194 9.35238 12.0507 9.35238C11.9791 9.35238 11.9164 9.39603 11.8627 9.48333L10.009 12.3381C9.97313 12.4079 9.95522 12.4603 9.95522 12.4952C9.95522 12.6 10.0269 12.6524 10.1701 12.6524Z\" fill=\"white\"/></svg>";
var number_5 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#25282D\"/><path d=\"M11.531 17C11.0713 17 10.6023 16.9382 10.1241 16.8145C9.64598 16.6908 9.1954 16.4964 8.77241 16.2313C8.25747 15.9663 8 15.5775 8 15.0651C8 14.7647 8.11954 14.4908 8.35862 14.2434C8.5977 13.9783 8.86437 13.8458 9.15862 13.8458C9.45287 13.8458 9.71954 13.943 9.95862 14.1373C10.2529 14.3671 10.5563 14.5349 10.869 14.641C11.2 14.747 11.5126 14.8 11.8069 14.8C12.2851 14.8 12.6897 14.6675 13.0207 14.4024C13.3701 14.1197 13.5448 13.7133 13.5448 13.1831C13.5448 12.6177 13.3609 12.2289 12.9931 12.0169C12.6253 11.7871 12.1747 11.6723 11.6414 11.6723C11.3103 11.6723 10.9609 11.7076 10.5931 11.7783C10.2253 11.849 9.85747 11.9285 9.48966 12.0169C9.23218 12.0169 9.02069 11.9462 8.85517 11.8048C8.68966 11.6635 8.62529 11.4337 8.66207 11.1157L9.15862 7.35181C9.21379 6.89237 9.34253 6.5743 9.54483 6.39759C9.74713 6.20321 9.95862 6.08835 10.1793 6.05301C10.4184 6.01767 10.6391 6 10.8414 6C10.8598 6 10.869 6 10.869 6H14.2897C14.6575 6 14.9425 6.09719 15.1448 6.29157C15.3655 6.46827 15.4759 6.71566 15.4759 7.03374C15.4759 7.36948 15.3655 7.64337 15.1448 7.85542C14.9241 8.0498 14.6391 8.14699 14.2897 8.14699H11.7793C11.5034 8.14699 11.3379 8.27952 11.2828 8.54458L11.0621 9.92289C11.4299 9.7992 11.8345 9.73735 12.2759 9.73735C12.9195 9.73735 13.5172 9.87872 14.069 10.1614C14.6391 10.4442 15.0989 10.8329 15.4483 11.3277C15.8161 11.8225 16 12.3968 16 13.0506C16 13.8811 15.7885 14.5968 15.3655 15.1976C14.9425 15.7807 14.3908 16.2313 13.7103 16.5494C13.0299 16.8498 12.3034 17 11.531 17Z\" fill=\"white\"/></svg>";
var number_6 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#25282D\"/><path d=\"M12 17C10.8089 17 9.84 16.6376 9.09333 15.9129C8.36444 15.171 8 14.2306 8 13.0918C8 12.0737 8.22222 11.0988 8.66667 10.1671C9.11111 9.23529 9.67111 8.41569 10.3467 7.70824C11.04 7.00078 11.7244 6.48314 12.4 6.15529C12.6133 6.05176 12.8178 6 13.0133 6C13.3511 6 13.6267 6.11216 13.84 6.33647C14.0533 6.56078 14.16 6.81098 14.16 7.08706C14.16 7.4149 14 7.68235 13.68 7.88941C13.4667 8.0102 13.1378 8.22588 12.6933 8.53647C12.2667 8.8298 11.8489 9.25255 11.44 9.80471C11.4222 9.82196 11.4222 9.84784 11.44 9.88235C11.4578 9.91686 11.4844 9.93412 11.52 9.93412C11.68 9.89961 11.8311 9.87373 11.9733 9.85647C12.1156 9.82196 12.2489 9.80471 12.3733 9.80471C13.0667 9.80471 13.6889 9.96 14.24 10.2706C14.7911 10.5812 15.2178 11.0039 15.52 11.5388C15.84 12.0737 16 12.6776 16 13.3506C16 14.4204 15.6178 15.3004 14.8533 15.9906C14.1067 16.6635 13.1556 17 12 17ZM11.9467 14.9294C12.48 14.9294 12.8978 14.7827 13.2 14.4894C13.52 14.1961 13.68 13.8078 13.68 13.3247C13.68 12.8243 13.52 12.4361 13.2 12.16C12.8978 11.8667 12.48 11.72 11.9467 11.72C11.4489 11.72 11.0489 11.8667 10.7467 12.16C10.4622 12.4361 10.32 12.8243 10.32 13.3247C10.32 13.8078 10.4622 14.1961 10.7467 14.4894C11.0489 14.7827 11.4489 14.9294 11.9467 14.9294Z\" fill=\"white\"/></svg>";
var number_7 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#25282D\"/><path d=\"M10.7932 17C10.4859 17 10.1966 16.9028 9.92542 16.7084C9.67232 16.4964 9.54576 16.2225 9.54576 15.8867C9.54576 15.71 9.58192 15.551 9.65424 15.4096L13.0712 8.75663C13.1073 8.68594 13.1254 8.59759 13.1254 8.49157C13.1254 8.29719 12.9898 8.2 12.7186 8.2H9.22034C8.87684 8.2 8.58757 8.10281 8.35254 7.90843C8.11751 7.69639 8 7.43133 8 7.11325C8 6.77751 8.11751 6.51245 8.35254 6.31807C8.58757 6.10602 8.87684 6 9.22034 6H14.2102C14.7525 6 15.1864 6.14137 15.5119 6.4241C15.8373 6.70683 16 7.09558 16 7.59036C16 7.89076 15.9277 8.22651 15.7831 8.59759L11.9051 16.2313C11.7966 16.4964 11.6339 16.6908 11.4169 16.8145C11.2181 16.9382 11.0102 17 10.7932 17Z\" fill=\"white\"/></svg>";
var number_8 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#25282D\"/><path d=\"M11.9869 17C10.7628 17 9.79235 16.6944 9.07541 16.0833C8.35847 15.4548 8 14.6254 8 13.5952C8 13.054 8.11366 12.5651 8.34098 12.1286C8.58579 11.6921 8.91803 11.3341 9.3377 11.0548C8.77814 10.496 8.49836 9.82381 8.49836 9.0381C8.49836 8.13016 8.82186 7.39683 9.46885 6.8381C10.1158 6.27937 10.9464 6 11.9607 6C12.9923 6 13.8404 6.2881 14.5049 6.86429C15.1694 7.44048 15.5016 8.16508 15.5016 9.0381C15.5016 9.84127 15.2131 10.5135 14.6361 11.0548C15.5454 11.6659 16 12.5127 16 13.5952C16 14.6254 15.6415 15.4548 14.9246 16.0833C14.2076 16.6944 13.2284 17 11.9869 17ZM11.9869 14.9833C12.529 14.9833 12.9574 14.8524 13.2721 14.5905C13.5869 14.3286 13.7443 13.9794 13.7443 13.5429C13.7443 13.0889 13.5869 12.731 13.2721 12.469C12.9574 12.2071 12.529 12.0762 11.9869 12.0762C11.4623 12.0762 11.0426 12.2071 10.7279 12.469C10.4131 12.731 10.2557 13.0889 10.2557 13.5429C10.2557 13.9794 10.4131 14.3286 10.7279 14.5905C11.0426 14.8524 11.4623 14.9833 11.9869 14.9833ZM11.9607 10.2167C12.3104 10.2167 12.6077 10.1032 12.8525 9.87619C13.1148 9.63175 13.2459 9.35238 13.2459 9.0381C13.2459 8.67143 13.1235 8.38333 12.8787 8.17381C12.6514 7.94683 12.3454 7.83333 11.9607 7.83333C11.5934 7.83333 11.2874 7.9381 11.0426 8.14762C10.8153 8.35714 10.7016 8.65397 10.7016 9.0381C10.7016 9.35238 10.824 9.63175 11.0689 9.87619C11.3137 10.1032 11.6109 10.2167 11.9607 10.2167Z\" fill=\"white\"/></svg>";
var number_9 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#25282D\"/><path d=\"M10.9867 17C10.6489 17 10.3733 16.8878 10.16 16.6635C9.94667 16.4392 9.84 16.189 9.84 15.9129C9.84 15.5851 10 15.3176 10.32 15.1106C10.5156 14.9898 10.8444 14.7655 11.3067 14.4376C11.7867 14.1098 12.2222 13.7043 12.6133 13.2212C12.6489 13.1867 12.6489 13.1522 12.6133 13.1176C12.5956 13.0831 12.56 13.0745 12.5067 13.0918C12.2933 13.1435 12.1156 13.178 11.9733 13.1953C11.8311 13.1953 11.7156 13.1953 11.6267 13.1953C10.9333 13.1953 10.3111 13.04 9.76 12.7294C9.22667 12.4188 8.8 11.9961 8.48 11.4612C8.16 10.9263 8 10.3224 8 9.64941C8 8.57961 8.38222 7.70824 9.14667 7.03529C9.91111 6.3451 10.8622 6 12 6C13.2089 6 14.1778 6.37098 14.9067 7.11294C15.6356 7.83765 16 8.76941 16 9.90824C16 10.909 15.7778 11.8753 15.3333 12.8071C14.8889 13.7388 14.3289 14.5584 13.6533 15.2659C12.9778 15.9733 12.2933 16.4996 11.6 16.8447C11.3867 16.9482 11.1822 17 10.9867 17ZM12.0533 11.28C12.5689 11.28 12.9689 11.1333 13.2533 10.84C13.5378 10.5467 13.68 10.1584 13.68 9.67529C13.68 9.1749 13.5378 8.78667 13.2533 8.51059C12.9689 8.21726 12.5689 8.07059 12.0533 8.07059C11.52 8.07059 11.0933 8.21726 10.7733 8.51059C10.4711 8.78667 10.32 9.1749 10.32 9.67529C10.32 10.1584 10.4711 10.5467 10.7733 10.84C11.0933 11.1333 11.52 11.28 12.0533 11.28Z\" fill=\"white\"/></svg>";
var parcel = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.5 11C8.94772 11 8.5 11.4477 8.5 12C8.5 12.5523 8.94772 13 9.5 13H14.5C15.0523 13 15.5 12.5523 15.5 12C15.5 11.4477 15.0523 11 14.5 11H9.5Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22 8.48683C22 8.16439 21.948 7.84405 21.8461 7.53815L20.6838 4.05132C20.2754 2.82629 19.129 2 17.8377 2H6.16228C4.87099 2 3.72457 2.82629 3.31623 4.05132L2.15395 7.53815C2.05198 7.84405 2 8.16439 2 8.48683V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V8.48683ZM13 4H17.8377C18.2682 4 18.6503 4.27543 18.7864 4.68377L19.5585 7H13V4ZM4 9H20V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V9ZM11 7H4.44152L5.21359 4.68377C5.34971 4.27543 5.73185 4 6.16228 4H11V7Z\" fill=\"#25282D\"/></svg>";
var paymenrFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23 17.5C23 19.1569 21.6569 20.5 20 20.5H4C2.34315 20.5 1 19.1569 1 17.5V10.5H23V17.5ZM15 14.5C14.4477 14.5 14 14.9477 14 15.5C14 16.0523 14.4477 16.5 15 16.5H18C18.5523 16.5 19 16.0523 19 15.5C19 14.9477 18.5523 14.5 18 14.5H15ZM20 3.5C21.6569 3.5 23 4.84315 23 6.5V8.5H1V6.5C1 4.84315 2.34315 3.5 4 3.5H20Z\" fill=\"#25282D\"/></svg>";
var paymentStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 5.5H4C3.44772 5.5 3 5.94772 3 6.5V17.5C3 18.0523 3.44772 18.5 4 18.5H20C20.5523 18.5 21 18.0523 21 17.5V6.5C21 5.94772 20.5523 5.5 20 5.5ZM4 3.5C2.34315 3.5 1 4.84315 1 6.5V17.5C1 19.1569 2.34315 20.5 4 20.5H20C21.6569 20.5 23 19.1569 23 17.5V6.5C23 4.84315 21.6569 3.5 20 3.5H4Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 9.5C1 8.94772 1.44772 8.5 2 8.5H22C22.5523 8.5 23 8.94772 23 9.5C23 10.0523 22.5523 10.5 22 10.5H2C1.44772 10.5 1 10.0523 1 9.5Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 15.5C14 14.9477 14.4477 14.5 15 14.5L18 14.5C18.5523 14.5 19 14.9477 19 15.5C19 16.0523 18.5523 16.5 18 16.5L15 16.5C14.4477 16.5 14 16.0523 14 15.5Z\" fill=\"#25282D\"/></svg>";
var personFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.25 12C15.0114 12 17.25 9.76142 17.25 7C17.25 4.23858 15.0114 2 12.25 2C9.48858 2 7.25 4.23858 7.25 7C7.25 9.76142 9.48858 12 12.25 12Z\" fill=\"#25282D\"/><path d=\"M9.25 13C5.93629 13 3.25 15.6863 3.25 19V20C3.25 21.1046 4.14543 22 5.25 22H19.25C20.3546 22 21.25 21.1046 21.25 20V19C21.25 15.6863 18.5637 13 15.25 13H9.25Z\" fill=\"#25282D\"/></svg>";
var personStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7ZM15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 19C3 15.6863 5.68629 13 9 13H15C18.3137 13 21 15.6863 21 19V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V19ZM5 19C5 16.7909 6.79086 15 9 15H15C17.2091 15 19 16.7909 19 19V20H5L5 19Z\" fill=\"#25282D\"/></svg>";
var print = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.8974 3H2.10264C1.49267 3 1 3.50133 1 4.12202V14.1963C1 14.817 1.49267 15.3183 2.10264 15.3183H5.41056V21H18.607V15.3183H21.8974C22.5073 15.3183 23 14.817 23 14.1963V4.11605C22.9941 3.50133 22.5015 3 21.8974 3ZM16.4076 18.75H7.60997V14.1844H16.4076V18.75ZM18.5953 11.9702H5.39883V9.7321H18.5953V11.9702ZM19.6979 7.47613C19.088 7.47613 18.5953 6.9748 18.5953 6.35411C18.5953 5.73342 19.088 5.2321 19.6979 5.2321C20.3079 5.2321 20.8006 5.73342 20.8006 6.35411C20.8006 6.9748 20.3021 7.47613 19.6979 7.47613Z\" fill=\"#25282D\"/></svg>";
var profileFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5 17.5C5 18.2702 5.19348 18.9951 5.53448 19.629C6.19622 20.1903 6.93195 20.6672 7.72498 21.0427C7.84599 21.1001 7.96834 21.155 8.09196 21.2075C9.2925 21.7177 10.6133 22 12 22C13.5295 22 14.9788 21.6566 16.275 21.0427C17.0681 20.6672 17.8038 20.1904 18.4655 19.629C18.8065 18.9951 19 18.2702 19 17.5C19 15.0147 16.9853 13 14.5 13H9.5C7.01472 13 5 15.0147 5 17.5ZM16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z\" fill=\"#25282D\"/></svg>";
var profileStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11ZM12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.05317 18.5H5V20.4857C5.00579 20.4905 5.01158 20.4952 5.01738 20.5C6.91673 22.0621 9.34884 23 12 23C14.6512 23 17.0833 22.0621 18.9826 20.5C18.9884 20.4952 18.9942 20.4905 19 20.4857V18.5H18.9468C18.5829 15.9558 16.3949 14 13.75 14H10.25C7.60515 14 5.41709 15.9558 5.05317 18.5ZM17 19.014L16.967 18.7832C16.742 17.2101 15.3856 16 13.75 16H10.25C8.61443 16 7.25803 17.2101 7.03302 18.7832L7 19.014V19.4847C8.43 20.4424 10.148 21 12 21C13.852 21 15.57 20.4424 17 19.4847V19.014Z\" fill=\"#25282D\"/></svg>";
var qr = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_118_1722)\"><path d=\"M19.9825 3.3079C20.1658 3.3079 20.3416 3.38083 20.4711 3.51066C20.6007 3.6405 20.6735 3.81658 20.6735 4.00019V8.23358C20.6735 8.41719 20.7463 8.59328 20.8759 8.72311C21.0055 8.85294 21.1813 8.92588 21.3646 8.92588H22.2859C22.4692 8.92588 22.645 8.85294 22.7746 8.72311C22.9042 8.59328 22.977 8.41719 22.977 8.23358V4.00019C22.977 3.20456 22.6615 2.44151 22.0999 1.87891C21.5383 1.31631 20.7767 1.00024 19.9825 1.00024H15.7569C15.5736 1.00024 15.3978 1.07318 15.2683 1.20301C15.1387 1.33284 15.0659 1.50893 15.0659 1.69254V2.6156C15.0659 2.79921 15.1387 2.9753 15.2683 3.10513C15.3978 3.23496 15.5736 3.3079 15.7569 3.3079H19.9825ZM3.99445 3.31251C3.81118 3.31251 3.63541 3.38545 3.50582 3.51528C3.37623 3.64511 3.30342 3.8212 3.30342 4.00481V8.23819C3.30342 8.4218 3.23062 8.59789 3.10103 8.72772C2.97143 8.85755 2.79567 8.93049 2.6124 8.93049H1.69103C1.50776 8.93049 1.33199 8.85755 1.2024 8.72772C1.0728 8.59789 1 8.4218 1 8.23819V4.00481C1 3.20917 1.31549 2.44612 1.87705 1.88352C2.43862 1.32092 3.20027 1.00486 3.99445 1.00486H8.22008C8.40335 1.00486 8.57912 1.0778 8.70871 1.20763C8.8383 1.33746 8.91111 1.51355 8.91111 1.69716V2.62022C8.91111 2.80382 8.8383 2.97991 8.70871 3.10974C8.57912 3.23957 8.40335 3.31251 8.22008 3.31251H3.99445ZM10.755 7.47205C10.755 7.28845 10.6822 7.11236 10.5526 6.98253C10.423 6.8527 10.2472 6.77976 10.064 6.77976H7.20773C7.02446 6.77976 6.84869 6.8527 6.7191 6.98253C6.5895 7.11236 6.5167 7.28845 6.5167 7.47205V10.3324C6.5167 10.516 6.5895 10.6921 6.7191 10.8219C6.84869 10.9517 7.02446 11.0247 7.20773 11.0247H10.064C10.2472 11.0247 10.423 10.9517 10.5526 10.8219C10.6822 10.6921 10.755 10.516 10.755 10.3324V7.47205ZM10.755 13.6404C10.755 13.4568 10.6822 13.2807 10.5526 13.1509C10.423 13.0211 10.2472 12.9481 10.064 12.9481H7.20773C7.02446 12.9481 6.84869 13.0211 6.7191 13.1509C6.5895 13.2807 6.5167 13.4568 6.5167 13.6404V16.5019C6.5167 16.6855 6.5895 16.8616 6.7191 16.9914C6.84869 17.1213 7.02446 17.1942 7.20773 17.1942H10.064C10.2472 17.1942 10.423 17.1213 10.5526 16.9914C10.6822 16.8616 10.755 16.6855 10.755 16.5019V13.6404ZM17.1827 7.47205C17.1827 7.28845 17.1099 7.11236 16.9803 6.98253C16.8507 6.8527 16.6749 6.77976 16.4917 6.77976H13.6377C13.4545 6.77976 13.2787 6.8527 13.1491 6.98253C13.0195 7.11236 12.9467 7.28845 12.9467 7.47205V10.3324C12.9467 10.516 13.0195 10.6921 13.1491 10.8219C13.2787 10.9517 13.4545 11.0247 13.6377 11.0247H16.4917C16.6749 11.0247 16.8507 10.9517 16.9803 10.8219C17.1099 10.6921 17.1827 10.516 17.1827 10.3324V7.47205ZM17.1827 13.6404C17.1827 13.4568 17.1099 13.2807 16.9803 13.1509C16.8507 13.0211 16.6749 12.9481 16.4917 12.9481H13.6377C13.4545 12.9481 13.2787 13.0211 13.1491 13.1509C13.0195 13.2807 12.9467 13.4568 12.9467 13.6404V16.5019C12.9467 16.6855 13.0195 16.8616 13.1491 16.9914C13.2787 17.1213 13.4545 17.1942 13.6377 17.1942H16.4917C16.6749 17.1942 16.8507 17.1213 16.9803 16.9914C17.1099 16.8616 17.1827 16.6855 17.1827 16.5019V13.6404ZM20.6966 20.0003C20.6966 20.1839 20.6238 20.36 20.4942 20.4898C20.3646 20.6197 20.1888 20.6926 20.0055 20.6926H15.7799C15.5966 20.6926 15.4209 20.7655 15.2913 20.8954C15.1617 21.0252 15.0889 21.2013 15.0889 21.3849V22.308C15.0889 22.4916 15.1617 22.6676 15.2913 22.7975C15.4209 22.9273 15.5966 23.0002 15.7799 23.0002H20.0055C20.3988 23.0002 20.7882 22.9227 21.1515 22.7719C21.5148 22.6211 21.8449 22.4002 22.1229 22.1216C22.401 21.843 22.6216 21.5123 22.7721 21.1483C22.9225 20.7844 23 20.3943 23 20.0003V15.7669C23 15.5833 22.9272 15.4072 22.7976 15.2774C22.668 15.1476 22.4922 15.0746 22.309 15.0746H21.3876C21.2043 15.0746 21.0286 15.1476 20.899 15.2774C20.7694 15.4072 20.6966 15.5833 20.6966 15.7669V20.0003ZM3.34373 20.0003C3.34373 20.1839 3.41654 20.36 3.54613 20.4898C3.67572 20.6197 3.85149 20.6926 4.03476 20.6926H8.26039C8.44366 20.6926 8.61943 20.7655 8.74902 20.8954C8.87861 21.0252 8.95142 21.2013 8.95142 21.3849V22.308C8.95142 22.4916 8.87861 22.6676 8.74902 22.7975C8.61943 22.9273 8.44366 23.0002 8.26039 23.0002H4.03476C3.64152 23.0002 3.25214 22.9227 2.88883 22.7719C2.52553 22.6211 2.19542 22.4002 1.91736 22.1216C1.6393 21.843 1.41873 21.5123 1.26825 21.1483C1.11776 20.7844 1.04031 20.3943 1.04031 20.0003V15.7669C1.04031 15.5833 1.11311 15.4072 1.24271 15.2774C1.3723 15.1476 1.54807 15.0746 1.73134 15.0746H2.65271C2.83598 15.0746 3.01174 15.1476 3.14134 15.2774C3.27093 15.4072 3.34373 15.5833 3.34373 15.7669V20.0003Z\" fill=\"#25282D\"/></g><defs><clipPath id=\"clip0_118_1722\"><rect width=\"24\" height=\"24\" fill=\"white\"/></clipPath></defs></svg>";
var questionFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 15.25C11.3096 15.25 10.75 15.8096 10.75 16.5C10.75 17.1904 11.3096 17.75 12 17.75C12.6904 17.75 13.25 17.1904 13.25 16.5C13.25 15.8096 12.6904 15.25 12 15.25ZM12 6.25C10.0184 6.25004 8.50098 7.62968 8.50098 9.5C8.50098 10.0523 8.94869 10.5 9.50098 10.5C10.0533 10.5 10.501 10.0523 10.501 9.5C10.501 8.87036 10.9818 8.25003 12 8.25C13.0166 8.25 13.5 8.87587 13.5 9.5C13.5 9.82293 13.3374 10.0541 12.834 10.5039C12.6724 10.6483 12.5157 10.7604 12.3408 10.8818C12.3265 10.8918 12.3114 10.9024 12.2959 10.9131C12.1422 11.0194 11.936 11.1623 11.7559 11.3291C11.535 11.5336 11.3282 11.793 11.1875 12.1445C11.0518 12.4839 11 12.8529 11 13.25C11 13.8023 11.4478 14.25 12 14.25C12.5523 14.25 13 13.8023 13 13.25C13 13.0223 13.0307 12.9222 13.0449 12.8867C13.0542 12.8635 13.0654 12.8411 13.1143 12.7959C13.1858 12.7296 13.2784 12.6654 13.4814 12.5244C13.6665 12.3959 13.908 12.2266 14.166 11.9961C14.6624 11.5527 15.5 10.7887 15.5 9.5C15.5 7.63817 13.9832 6.25 12 6.25Z\" fill=\"#25282D\"/></svg>";
var questionStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.0001 8.25C10.9818 8.25 10.501 8.87034 10.501 9.5C10.501 10.0523 10.0533 10.5 9.50098 10.5C8.94869 10.5 8.50098 10.0523 8.50098 9.5C8.50098 7.62966 10.0185 6.25 12.0001 6.25C13.9833 6.25 15.5001 7.63817 15.5001 9.5C15.5001 10.7887 14.6626 11.5524 14.1662 11.9958C13.9081 12.2264 13.667 12.3959 13.4819 12.5245C13.2786 12.6656 13.1862 12.73 13.1146 12.7963C13.0654 12.8418 13.0542 12.8638 13.0448 12.8871C13.0306 12.9226 13.0001 13.0223 13.0001 13.25C13.0001 13.8023 12.5524 14.25 12.0001 14.25C11.4478 14.25 11.0001 13.8023 11.0001 13.25C11.0001 12.8527 11.0521 12.4837 11.188 12.1441C11.3287 11.7925 11.535 11.5332 11.7559 11.3287C11.936 11.1619 12.1423 11.0192 12.296 10.913L12.341 10.8818C12.5159 10.7603 12.6722 10.6486 12.8338 10.5042C13.3374 10.0543 13.5001 9.82299 13.5001 9.5C13.5001 8.87587 13.0167 8.25 12.0001 8.25Z\" fill=\"#25282D\"/><path d=\"M12 15.25C11.3096 15.25 10.75 15.8096 10.75 16.5C10.75 17.1904 11.3096 17.75 12 17.75C12.6904 17.75 13.25 17.1904 13.25 16.5C13.25 15.8096 12.6904 15.25 12 15.25Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z\" fill=\"#25282D\"/></svg>";
var radioResting = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z\" fill=\"#25282D\"/></svg>";
var radioSelected = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z\" fill=\"#25282D\"/><path d=\"M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z\" fill=\"#25282D\"/></svg>";
var receipt = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8L16 8C16.5523 8 17 7.55228 17 7C17 6.44771 16.5523 6 16 6L8 6Z\" fill=\"#25282D\"/><path d=\"M7 11C7 10.4477 7.44772 10 8 10L16 10C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12L8 12C7.44772 12 7 11.5523 7 11Z\" fill=\"#25282D\"/><path d=\"M8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H8Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 23C18.0756 23 18.1505 22.9972 18.2247 22.9917C18.3157 22.9972 18.4075 23 18.5 23C20.9853 23 23 20.9853 23 18.5C23 16.9398 22.206 15.565 21 14.7578V4C21 2.34315 19.6569 1 18 1H6C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18ZM14 18.5C14 19.4251 14.2791 20.285 14.7578 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V14.0275C18.8358 14.0093 18.669 14 18.5 14C16.0147 14 14 16.0147 14 18.5ZM18.5 16C19.8402 16 20.9341 17.0545 20.9971 18.3791C20.999 18.4191 21 18.4595 21 18.5C21 19.8807 19.8807 21 18.5 21C17.1193 21 16 19.8807 16 18.5C16 17.1193 17.1193 16 18.5 16Z\" fill=\"#25282D\"/></svg>";
var reload = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 11C20.4 11 20 11.4 20 12C20 14.9 18.5 17.5 16 18.9C12.2 21.1 7.3 19.8 5.1 16C2.9 12.2 4.2 7.3 8 5.1C11.3 3.2 15.3 3.9 17.8 6.5H15.4C14.8 6.5 14.4 6.9 14.4 7.5C14.4 8.1 14.8 8.5 15.4 8.5H19.9C20.5 8.5 20.9 8.1 20.9 7.5V3C20.9 2.4 20.5 2 19.9 2C19.3 2 18.9 2.4 18.9 3V4.8C17 3 14.6 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 11.4 21.6 11 21 11Z\" fill=\"#25282D\"/></svg>";
var reset = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.91 15.51H15.38C15.1148 15.51 14.8604 15.6154 14.6729 15.8029C14.4854 15.9904 14.38 16.2448 14.38 16.51C14.38 16.7752 14.4854 17.0296 14.6729 17.2171C14.8604 17.4046 15.1148 17.51 15.38 17.51H17.78C16.6769 18.6627 15.2544 19.4593 13.6952 19.7974C12.1359 20.1355 10.5112 19.9996 9.02978 19.4072C7.54834 18.8149 6.27787 17.7931 5.38159 16.4732C4.48531 15.1532 4.00418 13.5955 4 12C4 11.7348 3.89464 11.4804 3.70711 11.2929C3.51957 11.1054 3.26522 11 3 11C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2.00529 13.9528 2.58222 15.8613 3.6596 17.49C4.73699 19.1187 6.26767 20.3964 8.06274 21.1652C9.85782 21.9341 11.8387 22.1605 13.761 21.8166C15.6833 21.4727 17.4628 20.5735 18.88 19.23V21C18.88 21.2652 18.9854 21.5196 19.1729 21.7071C19.3604 21.8946 19.6148 22 19.88 22C20.1452 22 20.3996 21.8946 20.5871 21.7071C20.7746 21.5196 20.88 21.2652 20.88 21V16.5C20.8775 16.2416 20.7752 15.9943 20.5943 15.8097C20.4135 15.6251 20.1683 15.5177 19.91 15.51ZM12 2C9.43639 2.00731 6.97349 2.99891 5.12 4.77V3C5.12 2.73478 5.01464 2.48043 4.82711 2.29289C4.63957 2.10536 4.38522 2 4.12 2C3.85478 2 3.60043 2.10536 3.41289 2.29289C3.22536 2.48043 3.12 2.73478 3.12 3V7.5C3.12 7.76522 3.22536 8.01957 3.41289 8.20711C3.60043 8.39464 3.85478 8.5 4.12 8.5H8.62C8.88522 8.5 9.13957 8.39464 9.32711 8.20711C9.51464 8.01957 9.62 7.76522 9.62 7.5C9.62 7.23478 9.51464 6.98043 9.32711 6.79289C9.13957 6.60536 8.88522 6.5 8.62 6.5H6.22C7.32247 5.34787 8.74409 4.5515 10.3024 4.21311C11.8607 3.87472 13.4846 4.00975 14.9656 4.60086C16.4466 5.19198 17.7172 6.21221 18.6142 7.5306C19.5113 8.849 19.9938 10.4054 20 12C20 12.2652 20.1054 12.5196 20.2929 12.7071C20.4804 12.8946 20.7348 13 21 13C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z\" fill=\"#25282D\"/></svg>";
var search = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.9057 16.3198C13.551 17.3729 11.8488 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.5509 16.3199 14.9056L21.7071 20.2927C22.0976 20.6833 22.0976 21.3164 21.7071 21.707C21.3166 22.0975 20.6834 22.0975 20.2929 21.707L14.9057 16.3198ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z\" fill=\"#25282D\"/></svg>";
var settingsFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.0491 2.63648C10.5187 0.557371 13.4813 0.557371 13.9509 2.63648L14.0071 2.8855C14.3115 4.23284 15.8577 4.87336 17.0256 4.13599L17.2415 3.99976C19.0437 2.86169 21.1383 4.95631 20.0003 6.75855L19.864 6.97437C19.1267 8.14235 19.7672 9.68851 21.1145 9.99293L21.3635 10.0491C23.4426 10.5187 23.4426 13.4813 21.3635 13.9509L21.1145 14.0071C19.7672 14.3115 19.1267 15.8577 19.864 17.0256L20.0003 17.2415C21.1383 19.0437 19.0437 21.1383 17.2415 20.0003L17.0256 19.864C15.8577 19.1267 14.3115 19.7672 14.0071 21.1145L13.9509 21.3635C13.4813 23.4426 10.5187 23.4426 10.0491 21.3635L9.99293 21.1145C9.68851 19.7672 8.14235 19.1267 6.97437 19.864L6.75855 20.0003C4.95631 21.1383 2.86169 19.0437 3.99976 17.2415L4.13599 17.0256C4.87336 15.8577 4.23284 14.3115 2.8855 14.0071L2.63648 13.9509C0.557371 13.4813 0.557371 10.5187 2.63648 10.0491L2.8855 9.99293C4.23284 9.68852 4.87337 8.14236 4.13599 6.97437L3.99976 6.75855C2.86169 4.95631 4.95631 2.86169 6.75855 3.99976L6.97437 4.13599C8.14236 4.87337 9.68852 4.23284 9.99293 2.8855L10.0491 2.63648ZM12.0003 8.00025C9.79111 8.00025 8.00025 9.79111 8.00025 12.0003C8.00038 14.2093 9.79119 16.0003 12.0003 16.0003C14.2092 16.0001 16.0001 14.2092 16.0003 12.0003C16.0003 9.79119 14.2093 8.00038 12.0003 8.00025Z\" fill=\"#25282D\"/></svg>";
var settingsStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.8026 3.36917C14.1279 0.382149 9.87183 0.382152 9.19711 3.36917C9.06419 3.95759 8.38895 4.23729 7.87889 3.9152C5.28964 2.28015 2.28016 5.28964 3.9152 7.87889C4.23729 8.38895 3.95759 9.06419 3.36917 9.19711C0.382149 9.87183 0.382152 14.1279 3.36917 14.8026C3.95759 14.9355 4.23729 15.6108 3.9152 16.1208C2.28016 18.7101 5.28964 21.7196 7.87889 20.0845C8.38895 19.7624 9.06419 20.0421 9.19711 20.6305C9.87183 23.6176 14.1279 23.6176 14.8026 20.6305C14.9355 20.0421 15.6108 19.7624 16.1208 20.0845C18.7101 21.7196 21.7196 18.7101 20.0845 16.1208C19.7624 15.6108 20.0421 14.9355 20.6305 14.8026C23.6176 14.1279 23.6176 9.87183 20.6305 9.19711C20.0421 9.06419 19.7624 8.38895 20.0845 7.87889C21.7196 5.28964 18.7101 2.28016 16.1208 3.9152C15.6108 4.23729 14.9355 3.95759 14.8026 3.36917ZM11.148 3.80984C11.353 2.90193 12.6467 2.90193 12.8518 3.80984C13.289 5.74573 15.5106 6.66593 17.1887 5.60626C17.9757 5.10928 18.8904 6.02402 18.3935 6.81103C17.3338 8.48912 18.254 10.7107 20.1899 11.148C21.0978 11.353 21.0978 12.6467 20.1899 12.8518C18.254 13.289 17.3338 15.5106 18.3935 17.1887C18.8904 17.9757 17.9757 18.8904 17.1887 18.3935C15.5106 17.3338 13.289 18.254 12.8518 20.1899C12.6467 21.0978 11.353 21.0978 11.148 20.1899C10.7107 18.254 8.48912 17.3338 6.81103 18.3935C6.02402 18.8904 5.10928 17.9757 5.60626 17.1887C6.66593 15.5106 5.74573 13.289 3.80984 12.8518C2.90193 12.6467 2.90193 11.353 3.80984 11.148C5.74573 10.7107 6.66593 8.48912 5.60626 6.81103C5.10928 6.02402 6.02402 5.10928 6.81103 5.60626C8.48912 6.66593 10.7107 5.74574 11.148 3.80984Z\" fill=\"#25282D\"/></svg>";
var shareIos = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15 10C15 10.5523 15.4477 11 16 11H18C18.5523 11 19 11.4477 19 12V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V12C5 11.4477 5.44772 11 6 11H8C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9H6C4.34315 9 3 10.3431 3 12V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V12C21 10.3431 19.6569 9 18 9H16C15.4477 9 15 9.44772 15 10Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.2929 1.29289C11.6834 0.902369 12.3166 0.902369 12.7071 1.29289L16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711C16.3166 7.09763 15.6834 7.09763 15.2929 6.70711L13 4.41421V14.5C13 15.0523 12.5523 15.5 12 15.5C11.4477 15.5 11 15.0523 11 14.5V4.41421L8.70711 6.70711C8.31658 7.09763 7.68342 7.09763 7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289L11.2929 1.29289Z\" fill=\"#25282D\"/></svg>";
var sound = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.4999 16.0956C16.3476 16.0954 16.1991 16.0488 16.0739 15.9621C15.9488 15.8754 15.853 15.7527 15.7992 15.6102C15.7455 15.4678 15.7364 15.3124 15.7731 15.1646C15.8099 15.0169 15.8907 14.8838 16.0049 14.7831C16.394 14.4315 16.7051 14.0022 16.918 13.5229C17.1309 13.0436 17.2409 12.525 17.2409 12.0006C17.2409 11.4761 17.1309 10.9575 16.918 10.4782C16.7051 9.99896 16.394 9.56967 16.0049 9.21808C15.931 9.15258 15.8708 9.07318 15.8276 8.9844C15.7844 8.89562 15.7592 8.7992 15.7532 8.70066C15.7413 8.50164 15.8089 8.30601 15.9411 8.15683C16.0734 8.00765 16.2595 7.91712 16.4586 7.90516C16.6576 7.89321 16.8532 7.9608 17.0024 8.09308C17.5511 8.58545 17.99 9.18787 18.2904 9.86112C18.5909 10.5344 18.7461 11.2633 18.7461 12.0006C18.7461 12.7378 18.5909 13.4668 18.2904 14.14C17.99 14.8133 17.5511 15.4157 17.0024 15.9081C16.8637 16.0304 16.6848 16.0972 16.4999 16.0956Z\" fill=\"#25282D\"/><path d=\"M19.1627 18.7503C19.0125 18.7498 18.8659 18.7042 18.7419 18.6194C18.6179 18.5346 18.5222 18.4145 18.4673 18.2747C18.4123 18.1349 18.4006 17.9818 18.4337 17.8352C18.4667 17.6887 18.543 17.5555 18.6527 17.4528C19.3949 16.7518 19.9862 15.9066 20.3904 14.969C20.7945 14.0315 21.0029 13.0213 21.0029 12.0003C21.0029 10.9794 20.7945 9.96915 20.3904 9.03158C19.9862 8.09402 19.3949 7.24883 18.6527 6.54781C18.5808 6.48034 18.5229 6.39937 18.4823 6.30953C18.4417 6.21968 18.4192 6.12272 18.416 6.02417C18.4129 5.92563 18.4292 5.82743 18.464 5.73518C18.4988 5.64294 18.5515 5.55846 18.619 5.48656C18.6864 5.41466 18.7674 5.35675 18.8572 5.31615C18.9471 5.27554 19.044 5.25303 19.1426 5.24989C19.2411 5.24676 19.3393 5.26306 19.4316 5.29788C19.5238 5.3327 19.6083 5.38534 19.6802 5.45281C20.5723 6.29415 21.2831 7.30891 21.7689 8.43483C22.2546 9.56075 22.5052 10.7741 22.5052 12.0003C22.5052 13.2266 22.2546 14.4399 21.7689 15.5658C21.2831 16.6917 20.5723 17.7065 19.6802 18.5478C19.54 18.6791 19.3548 18.7516 19.1627 18.7503Z\" fill=\"#25282D\"/><path d=\"M11.7942 4.57573C12.9942 3.87692 14.5 4.74256 14.5 6.1312V17.8688C14.5 19.2574 12.9942 20.1231 11.7942 19.4242L5.39417 15.6972C4.84053 15.3748 4.5 14.7824 4.5 14.1417V9.85826C4.5 9.21759 4.84054 8.6252 5.39417 8.30279L11.7942 4.57573Z\" fill=\"#25282D\"/><path d=\"M1.5 9.5C1.5 8.39543 2.39543 7.5 3.5 7.5H7.5C8.60457 7.5 9.5 8.39543 9.5 9.5V14.5C9.5 15.6046 8.60457 16.5 7.5 16.5H3.5C2.39543 16.5 1.5 15.6046 1.5 14.5V9.5Z\" fill=\"#25282D\"/></svg>";
var switchCircleFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85383C4.07979 4.06253 2.66989 5.7805 1.83733 7.79048C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7886C11.9878 23.2131 14.1995 22.9952 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C23 9.08262 21.8411 6.28473 19.7782 4.22183C17.7153 2.15893 14.9174 1 12 1ZM12 16H8.41L9.71 17.29C9.80373 17.383 9.87813 17.4936 9.9289 17.6154C9.97966 17.7373 10.0058 17.868 10.0058 18C10.0058 18.132 9.97966 18.2627 9.9289 18.3846C9.87813 18.5064 9.80373 18.617 9.71 18.71C9.61704 18.8037 9.50644 18.8781 9.38458 18.9289C9.26272 18.9797 9.13202 19.0058 9 19.0058C8.86799 19.0058 8.73729 18.9797 8.61543 18.9289C8.49357 18.8781 8.38297 18.8037 8.29 18.71L5.29 15.71C5.20626 15.6245 5.14151 15.5223 5.10001 15.41C5.03274 15.2839 4.99834 15.1429 5 15V14.9C5.00594 14.8149 5.02274 14.7309 5.05 14.65C5.04441 14.6169 5.04441 14.5831 5.05 14.55C5.09493 14.4395 5.15928 14.3379 5.24 14.25L8.24 11.25C8.42831 11.0617 8.6837 10.9559 8.95 10.9559C9.21631 10.9559 9.4717 11.0617 9.66 11.25C9.84831 11.4383 9.9541 11.6937 9.9541 11.96C9.9541 12.2263 9.84831 12.4817 9.66 12.67L8.41 14H12C12.2652 14 12.5196 14.1054 12.7071 14.2929C12.8946 14.4804 13 14.7348 13 15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16ZM19 9.06C19.0105 9.14301 19.0105 9.227 19 9.31C19.0056 9.3431 19.0056 9.3769 19 9.41C18.9551 9.52053 18.8907 9.62214 18.81 9.71L15.81 12.71C15.717 12.8037 15.6064 12.8781 15.4846 12.9289C15.3627 12.9797 15.232 13.0058 15.1 13.0058C14.968 13.0058 14.8373 12.9797 14.7154 12.9289C14.5936 12.8781 14.483 12.8037 14.39 12.71C14.2963 12.617 14.2219 12.5064 14.1711 12.3846C14.1203 12.2627 14.0942 12.132 14.0942 12C14.0942 11.868 14.1203 11.7373 14.1711 11.6154C14.2219 11.4936 14.2963 11.383 14.39 11.29L15.59 10H12C11.7348 10 11.4804 9.89464 11.2929 9.70711C11.1054 9.51957 11 9.26522 11 9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8H15.59L14.29 6.71C14.1968 6.61676 14.1228 6.50607 14.0723 6.38425C14.0219 6.26243 13.9959 6.13186 13.9959 6C13.9959 5.7337 14.1017 5.4783 14.29 5.29C14.4783 5.1017 14.7337 4.99591 15 4.99591C15.1319 4.99591 15.2624 5.02188 15.3843 5.07234C15.5061 5.1228 15.6168 5.19676 15.71 5.29L18.71 8.29C18.7938 8.37551 18.8585 8.47774 18.9 8.59C18.9673 8.71609 19.0017 8.8571 19 9V9.06Z\" fill=\"#25282D\"/></svg>";
var switchCircleStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85383C4.07979 4.06253 2.66989 5.7805 1.83733 7.79048C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7886C11.9878 23.2131 14.1995 22.9952 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C23 9.08262 21.8411 6.28473 19.7782 4.22183C17.7153 2.15893 14.9174 1 12 1ZM12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51982 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z\" fill=\"#25282D\"/><path d=\"M18.94 9.31004C18.9505 9.22703 18.9505 9.14304 18.94 9.06004V9.00004C18.9396 8.89387 18.9192 8.78872 18.88 8.69004C18.8385 8.57778 18.7738 8.47555 18.69 8.39004L15.69 5.39004C15.5968 5.2968 15.4861 5.22284 15.3643 5.17238C15.2425 5.12192 15.1119 5.09595 14.98 5.09595C14.8482 5.09595 14.7176 5.12192 14.5958 5.17238C14.474 5.22284 14.3633 5.2968 14.27 5.39004C14.1768 5.48328 14.1028 5.59397 14.0524 5.71579C14.0019 5.83761 13.976 5.96818 13.976 6.10004C13.976 6.2319 14.0019 6.36247 14.0524 6.48429C14.1028 6.60611 14.1768 6.7168 14.27 6.81004L15.59 8.00004H12C11.7348 8.00004 11.4805 8.1054 11.2929 8.29293C11.1054 8.48047 11 8.73482 11 9.00004C11 9.26526 11.1054 9.51961 11.2929 9.70715C11.4805 9.89468 11.7348 10 12 10H15.59L14.29 11.29C14.1963 11.383 14.1219 11.4936 14.0712 11.6155C14.0204 11.7373 13.9943 11.868 13.9943 12C13.9943 12.1321 14.0204 12.2628 14.0712 12.3846C14.1219 12.5065 14.1963 12.6171 14.29 12.71C14.383 12.8038 14.4936 12.8782 14.6155 12.9289C14.7373 12.9797 14.868 13.0058 15 13.0058C15.1321 13.0058 15.2628 12.9797 15.3846 12.9289C15.5065 12.8782 15.6171 12.8038 15.71 12.71L18.71 9.71004C18.7908 9.62218 18.8551 9.52057 18.9 9.41004C18.9193 9.37939 18.9329 9.34551 18.94 9.31004ZM12 14H8.41005L9.71005 12.71C9.89835 12.5217 10.0041 12.2663 10.0041 12C10.0041 11.7337 9.89835 11.4783 9.71005 11.29C9.52174 11.1017 9.26635 10.9959 9.00005 10.9959C8.73375 10.9959 8.47835 11.1017 8.29005 11.29L5.29005 14.29C5.20932 14.3779 5.14498 14.4795 5.10005 14.59C5.09445 14.6231 5.09445 14.6569 5.10005 14.69C5.07278 14.7709 5.05598 14.8549 5.05005 14.94V15C5.05051 15.1062 5.07086 15.2114 5.11005 15.31C5.15155 15.4223 5.2163 15.5245 5.30005 15.61L8.30005 18.61C8.39301 18.7038 8.50361 18.7782 8.62547 18.8289C8.74733 18.8797 8.87804 18.9058 9.01005 18.9058C9.14206 18.9058 9.27277 18.8797 9.39463 18.8289C9.51648 18.7782 9.62709 18.7038 9.72005 18.61C9.81378 18.5171 9.88817 18.4065 9.93894 18.2846C9.98971 18.1628 10.0158 18.0321 10.0158 17.9C10.0158 17.768 9.98971 17.6373 9.93894 17.5155C9.88817 17.3936 9.81378 17.283 9.72005 17.19L8.41005 16H12C12.2653 16 12.5196 15.8947 12.7072 15.7071C12.8947 15.5196 13 15.2653 13 15C13 14.7348 12.8947 14.4805 12.7072 14.2929C12.5196 14.1054 12.2653 14 12 14Z\" fill=\"#25282D\"/></svg>";
var timeFilled = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 6.25C11.4477 6.25 11 6.69772 11 7.25V12C11 12.2652 11.1054 12.5195 11.293 12.707L14.6514 16.0654C15.0419 16.4559 15.6759 16.456 16.0664 16.0654C16.4566 15.675 16.4566 15.0418 16.0664 14.6514L13 11.5859V7.25C13 6.69772 12.5523 6.25 12 6.25Z\" fill=\"#25282D\"/></svg>";
var timeStroke = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 6.25C12.5523 6.25 13 6.69772 13 7.25L13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12L11 7.25C11 6.69772 11.4477 6.25 12 6.25Z\" fill=\"#25282D\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.0663 16.0655C15.6758 16.456 15.0426 16.456 14.6521 16.0655L11.2934 12.7067C10.9028 12.3162 10.9028 11.6831 11.2934 11.2925C11.6839 10.902 12.317 10.902 12.7076 11.2925L16.0663 14.6513C16.4569 15.0418 16.4569 15.675 16.0663 16.0655Z\" fill=\"#25282D\"/></svg>";
var iconMap = {
  lock: Lock,
  new: New,
  truncation: Truncation,
  add: add,
  'add-circle-filled': addCircleFilled,
  'add-circle-stroke': addCircleStroke,
  'arrow-down': arrowDown,
  'arrow-left': arrowLeft,
  'arrow-right': arrowRight,
  'arrow-up': arrowUp,
  'bell-filled': bellFilled,
  'bell-stroke': bellStroke,
  'bookmark-filled': bookmarkFilled,
  'bookmark-stroke': bookmarkStroke,
  'calendar-filled': calendarFilled,
  calendar: calendar,
  'calendar-stroke': calendarStroke,
  'call-filled': callFilled,
  'call-stroke': callStroke,
  'camera-filled': cameraFilled,
  'camera-stroke': cameraStorke,
  'cancel-filled': cancelFilled,
  'cancel-stroke': cancelStroke,
  'caution-filled': cautionFilled,
  'caution-stroke': cautionStroke,
  check: check,
  'check-circle-filled': checkCircleFilled,
  'check-circle-stroke': checkCircleStroke,
  'checkbox-resting': checkboxResting,
  'checkbox-selected-filled': checkboxSelectedFilled,
  'checkbox-selected-stroke': checkboxSelectedStroke,
  'chevron-down': chevronDown,
  'chevron-left': chevronLeft,
  'chevron-right': chevronRight,
  'chevron-up': chevronUp,
  close: close,
  'customer-service': customerService,
  'dashboard-filled': dashboardFilled,
  'dashboard-stroke': dashboardStroke,
  'delete-filled': deleteFilled,
  'delete-stroke': deleteStroke,
  dialog: dialog,
  download: download,
  duplicate: duplicate,
  guide: guide,
  gym: gym,
  hamburger: hamburger,
  'heart-filled': heartFilled,
  heart: heart,
  'heart-stroke': heartStroke,
  'history-filled': historyFilled,
  'history-stroke': historyStroke,
  'home-filled': homeFilled,
  home: home,
  'home-stroke': homeStroke,
  'id-card-filled': idCardFilled,
  'id-card-stroke': idCardStroke,
  image: image,
  'info-filled': infoFilled,
  'info-stroke': infoStroke,
  'location-filled': locationFilled,
  'location-stroke': locationStroke,
  'logo-apple': logoApple,
  'logo-google': logoGoogle,
  'logo-kakao': logoKakao,
  'logo-naver': logoNaver,
  'mail-filled': mailFilled,
  'mail-stroke': mailStroke,
  microphone: microphone,
  minus: minus,
  'minus-circle-filled': minusCircleFilled,
  'minus-circle-stroke': minusCircleStroke,
  modify: modify,
  more: more,
  'my-page-filled': myPageFilled,
  'my-page': myPage,
  'number-0': number_0,
  'number-1': number_1,
  'number-2': number_2,
  'number-3': number_3,
  'number-4': number_4,
  'number-5': number_5,
  'number-6': number_6,
  'number-7': number_7,
  'number-8': number_8,
  'number-9': number_9,
  parcel: parcel,
  'payment-filled': paymenrFilled,
  'payment-stroke': paymentStroke,
  'person-filled': personFilled,
  'person-stroke': personStroke,
  print: print,
  'profile-filled': profileFilled,
  'profile-stroke': profileStroke,
  qr: qr,
  'question-filled': questionFilled,
  'question-stroke': questionStroke,
  'radio-resting': radioResting,
  'radio-selected': radioSelected,
  receipt: receipt,
  reload: reload,
  reset: reset,
  search: search,
  'settings-filled': settingsFilled,
  'settings-stroke': settingsStroke,
  'share-ios': shareIos,
  sound: sound,
  'switch-circle-filled': switchCircleFilled,
  'switch-circle-stroke': switchCircleStroke,
  'time-filled': timeFilled,
  'time-stroke': timeStroke
};

var Icon = function (_a) {
  var type = _a.type,
    _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.color,
    color = _c === void 0 ? colors.primary.coolGray[800] : _c,
    onClick = _a.onClick,
    _d = _a.className,
    className = _d === void 0 ? '' : _d,
    _e = _a.style,
    style = _e === void 0 ? {} : _e;
  var svgContent = iconMap[type];
  var iconStyle = __assign({
    width: size,
    height: size,
    color: color,
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }, style);
  var handleClick = function () {
    if (onClick) {
      onClick();
    }
  };
  var handleKeyDown = function (e) {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };
  if (!svgContent) {
    console.warn("Icon type \"".concat(type, "\" not found"));
    return jsx("div", {
      className: "icon icon--".concat(type, " ").concat(className),
      style: iconStyle,
      onClick: handleClick,
      role: onClick ? 'button' : 'img',
      tabIndex: onClick ? 0 : undefined,
      onKeyDown: handleKeyDown,
      children: jsx("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: jsx("circle", {
          cx: "12",
          cy: "12",
          r: "1",
          fill: color
        })
      })
    });
  }
  // SVG 내용에서 색상을 동적으로 변경
  var processedSvg = svgContent.replace(/fill="[^"]*"/g, "fill=\"".concat(color, "\"")).replace(/stroke="[^"]*"/g, "stroke=\"".concat(color, "\"")).replace(/width="[^"]*"/g, "width=\"".concat(size, "\"")).replace(/height="[^"]*"/g, "height=\"".concat(size, "\""));
  return jsx("div", {
    className: "icon icon--".concat(type, " ").concat(className),
    style: iconStyle,
    onClick: handleClick,
    role: onClick ? 'button' : 'img',
    tabIndex: onClick ? 0 : undefined,
    onKeyDown: handleKeyDown,
    dangerouslySetInnerHTML: {
      __html: processedSvg
    }
  });
};

var Label = function (_a) {
  var _b = _a.size,
    size = _b === void 0 ? 'm' : _b,
    _c = _a.type,
    type = _c === void 0 ? 'square' : _c,
    _d = _a.color,
    color = _d === void 0 ? 'grey' : _d,
    leadingIcon = _a.leadingIcon,
    trailingIcon = _a.trailingIcon,
    children = _a.children,
    _e = _a.className,
    className = _e === void 0 ? '' : _e;
  // Size configurations
  var sizeConfig = {
    m: {
      padding: type === 'square' ? '3px 8px' : '3px 10px',
      paddingWithLeadingIcon: type === 'square' ? '3px 8px 3px 6px' : '3px 10px 3px 8px',
      paddingWithTrailingIcon: type === 'square' ? '3px 6px 3px 8px' : '3px 8px 3px 10px',
      borderRadius: type === 'square' ? '4px' : '16px',
      height: '24px',
      iconSize: '14px',
      gap: '2px',
      fontSize: 'body2'
    },
    s: {
      padding: type === 'square' ? '2px 6px' : '2px 8px',
      paddingWithLeadingIcon: type === 'square' ? '2px 6px 2px 4px' : '2px 8px 2px 6px',
      paddingWithTrailingIcon: type === 'square' ? '2px 4px 2px 6px' : '2px 6px 2px 8px',
      borderRadius: type === 'square' ? '4px' : '12px',
      height: '22px',
      iconSize: '12px',
      gap: '2px',
      fontSize: 'caption'
    }
  };
  // Color configurations
  var colorConfig = {
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
  var config = sizeConfig[size];
  var colorStyle = colorConfig[color];
  // Determine padding based on icon presence
  var getPadding = function () {
    if (leadingIcon && trailingIcon) {
      return config.paddingWithLeadingIcon; // Use leading icon padding style
    } else if (leadingIcon) {
      return config.paddingWithLeadingIcon;
    } else if (trailingIcon) {
      return config.paddingWithTrailingIcon;
    }
    return config.padding;
  };
  var getStyles = function () {
    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: getPadding(),
      borderRadius: config.borderRadius,
      backgroundColor: colorStyle.backgroundColor,
      height: config.height,
      gap: config.gap,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box'
    };
  };
  var getIconStyles = function () {
    return {
      width: config.iconSize,
      height: config.iconSize,
      color: colorStyle.iconColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    };
  };
  return jsxs("div", {
    className: "label label--".concat(size, " label--").concat(type, " label--").concat(color, " ").concat(className),
    style: getStyles(),
    children: [leadingIcon && jsx("span", {
      className: "label__leading-icon",
      style: getIconStyles(),
      children: leadingIcon
    }), children && jsx(Font, {
      type: config.fontSize,
      fontWeight: "medium",
      color: colorStyle.textColor,
      children: children
    }), trailingIcon && jsx("span", {
      className: "label__trailing-icon",
      style: getIconStyles(),
      children: trailingIcon
    })]
  });
};

var TextInput = forwardRef(function (_a, ref) {
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
  var _h = useState(false),
    isFocused = _h[0],
    setIsFocused = _h[1];
  var _j = useState(defaultValue || ''),
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
  return jsxs("div", {
    className: "text-input-container ".concat(className),
    children: [jsx("input", __assign({
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
    }, restProps)), error && errorMessage && jsx("div", {
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
    // 아이콘이 있는지 확인
    var hasIcons = (icon === null || icon === void 0 ? void 0 : icon.left) || (icon === null || icon === void 0 ? void 0 : icon.right);
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
      gap: hasIcons ? '4px' : '0px',
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
    return jsxs(Fragment, {
      children: [(icon === null || icon === void 0 ? void 0 : icon.left) && icon.left, jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [children && jsx("span", {
          children: children
        }), chevron && jsx(Icon, {
          type: "arrow-right",
          size: 20,
          color: textColor
        })]
      }), (icon === null || icon === void 0 ? void 0 : icon.right) && !chevron && icon.right]
    });
  };
  return jsx("button", {
    style: getStyles(),
    onClick: handleClick,
    disabled: disabled,
    className: className,
    children: renderContent()
  });
};

var Chips = function (_a) {
  var _b = _a.size,
    size = _b === void 0 ? 'medium' : _b,
    _c = _a.type,
    type = _c === void 0 ? 'capsule' : _c,
    _d = _a.state,
    state = _d === void 0 ? 'resting' : _d,
    _e = _a.iconPosition,
    iconPosition = _e === void 0 ? 'leading' : _e,
    icon = _a.icon,
    iconColor = _a.iconColor,
    children = _a.children,
    onClick = _a.onClick,
    _f = _a.className,
    className = _f === void 0 ? '' : _f;
  var _g = useState(false),
    isHovered = _g[0],
    setIsHovered = _g[1];
  // Size configurations
  var sizeConfig = {
    large: {
      paddingX: '16px',
      paddingY: '9px',
      borderRadius: type === 'capsule' ? '100px' : '8px',
      height: '40px',
      gap: '4px'
    },
    medium: {
      paddingX: '12px',
      paddingY: '6px',
      borderRadius: type === 'capsule' ? '100px' : '6px',
      height: '32px',
      gap: '4px'
    }
  };
  var getStyles = function () {
    var config = sizeConfig[size];
    var styles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: "".concat(config.paddingY, " ").concat(config.paddingX),
      borderRadius: config.borderRadius,
      height: config.height,
      border: '1px solid transparent',
      cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      gap: config.gap,
      whiteSpace: 'nowrap'
    };
    // State에 따른 스타일링
    switch (state) {
      case 'selected':
        if (type === 'square') {
          styles = __assign(__assign({}, styles), {
            backgroundColor: colors.primary.gray.white,
            border: "1px solid ".concat(colors.primary.mainviolet)
          });
        } else {
          styles = __assign(__assign({}, styles), {
            backgroundColor: colors.primary.mainviolet,
            border: "1px solid ".concat(colors.primary.mainviolet)
          });
        }
        break;
      case 'hover':
        styles = __assign(__assign({}, styles), {
          backgroundColor: colors.primary.coolGray[50],
          border: "1px solid ".concat(colors.primary.coolGray[200])
        });
        break;
      case 'disabled':
        styles = __assign(__assign({}, styles), {
          backgroundColor: colors.semantic.disabled.background,
          border: "1px solid ".concat(colors.semantic.disabled.background),
          cursor: 'not-allowed'
        });
        break;
      case 'resting':
      default:
        if (isHovered) {
          styles = __assign(__assign({}, styles), {
            backgroundColor: colors.primary.coolGray[50],
            border: "1px solid ".concat(colors.primary.coolGray[200])
          });
        } else {
          styles = __assign(__assign({}, styles), {
            backgroundColor: colors.primary.gray.white,
            border: "1px solid ".concat(colors.semantic.border.default)
          });
        }
        break;
    }
    return styles;
  };
  var getTextColor = function () {
    switch (state) {
      case 'selected':
        if (type === 'square') {
          return colors.primary.coolGray[800];
        }
        return colors.primary.gray.white;
      case 'disabled':
        return colors.semantic.disabled.foreground;
      default:
        return colors.primary.coolGray[800];
    }
  };
  var getIconColor = function () {
    if (iconColor) {
      return iconColor;
    }
    switch (state) {
      case 'selected':
        if (type === 'square') {
          return colors.primary.mainviolet;
        }
        return colors.primary.gray.white;
      case 'disabled':
        return colors.semantic.disabled.foreground;
      default:
        return colors.primary.coolGray[800];
    }
  };
  var handleClick = function () {
    if (state !== 'disabled' && onClick) {
      onClick();
    }
  };
  var handleMouseEnter = function () {
    if (state === 'resting') {
      setIsHovered(true);
    }
  };
  var handleMouseLeave = function () {
    setIsHovered(false);
  };
  var renderContent = function () {
    if (!icon) {
      return jsx(Font, {
        type: "body2",
        fontWeight: "medium",
        color: getTextColor(),
        children: children
      });
    }
    if (iconPosition === 'leading') {
      return jsxs(Fragment, {
        children: [jsx("span", {
          className: "chips-icon",
          style: {
            color: getIconColor()
          },
          children: icon
        }), children && jsx(Font, {
          type: "body2",
          fontWeight: "medium",
          color: getTextColor(),
          children: children
        })]
      });
    } else {
      return jsxs(Fragment, {
        children: [children && jsx(Font, {
          type: "body2",
          fontWeight: "medium",
          color: getTextColor(),
          children: children
        }), jsx("span", {
          className: "chips-icon",
          style: {
            color: getIconColor()
          },
          children: icon
        })]
      });
    }
  };
  return jsx("button", {
    className: "chips chips--".concat(size, " chips--").concat(type, " chips--").concat(state, " ").concat(className),
    style: getStyles(),
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    disabled: state === 'disabled',
    type: "button",
    children: renderContent()
  });
};

var Radio = function (_a) {
  var _b = _a.checked,
    checked = _b === void 0 ? false : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    name = _a.name,
    value = _a.value,
    label = _a.label,
    description = _a.description,
    _d = _a.labelPosition,
    labelPosition = _d === void 0 ? 'right' : _d,
    _e = _a.size,
    size = _e === void 0 ? 'medium' : _e,
    onChange = _a.onChange,
    onClick = _a.onClick,
    _f = _a.className,
    className = _f === void 0 ? '' : _f;
  var _g = useState(false),
    isHovered = _g[0],
    setIsHovered = _g[1];
  var getSizeConfig = function () {
    switch (size) {
      case 'small':
        return __assign(__assign({}, textStyles.body3), {
          fontWeight: fontWeight.medium,
          radioSize: '16px',
          dotSize: '8px',
          gap: '4px',
          descriptionFontStyle: __assign(__assign({}, textStyles.body3), {
            fontWeight: fontWeight.regular
          })
        });
      case 'medium':
        return __assign(__assign({}, textStyles.body2), {
          fontWeight: fontWeight.medium,
          radioSize: '18px',
          dotSize: '10px',
          gap: '6px',
          descriptionFontStyle: __assign(__assign({}, textStyles.body3), {
            fontWeight: fontWeight.regular
          })
        });
      case 'large':
        return __assign(__assign({}, textStyles.body1), {
          fontWeight: fontWeight.medium,
          radioSize: '22px',
          dotSize: '14px',
          gap: '8px',
          descriptionFontStyle: __assign(__assign({}, textStyles.body2), {
            fontWeight: fontWeight.regular
          })
        });
      default:
        // large
        return __assign(__assign({}, textStyles.body1), {
          fontWeight: fontWeight.medium,
          radioSize: '22px',
          dotSize: '14px',
          gap: '8px',
          descriptionFontStyle: __assign(__assign({}, textStyles.body2), {
            fontWeight: fontWeight.regular
          })
        });
    }
  };
  var sizeConfig = getSizeConfig();
  var getRadioStyles = function () {
    if (disabled) {
      return {
        width: sizeConfig.radioSize,
        height: sizeConfig.radioSize,
        borderRadius: '50%',
        border: "2px solid ".concat(colors.semantic.disabled.foreground),
        backgroundColor: !checked ? colors.semantic.disabled.background : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'not-allowed',
        transition: 'all 0.2s ease',
        position: 'relative'
      };
    } else if (checked) {
      return {
        width: sizeConfig.radioSize,
        height: sizeConfig.radioSize,
        borderRadius: '50%',
        border: "2px solid ".concat(colors.primary.mainviolet),
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        position: 'relative'
      };
    } else if (isHovered) {
      return {
        width: sizeConfig.radioSize,
        height: sizeConfig.radioSize,
        borderRadius: '50%',
        border: "2px solid ".concat(colors.primary.mainviolet),
        backgroundColor: colors.semantic.background.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        position: 'relative'
      };
    } else {
      return {
        width: sizeConfig.radioSize,
        height: sizeConfig.radioSize,
        borderRadius: '50%',
        border: "2px solid ".concat(colors.semantic.border.strong),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        position: 'relative'
      };
    }
  };
  var getDotStyles = function () {
    return {
      width: sizeConfig.dotSize,
      height: sizeConfig.dotSize,
      borderRadius: '50%',
      backgroundColor: checked ? disabled ? colors.semantic.disabled.foreground : colors.primary.mainviolet : 'transparent',
      transition: 'all 0.2s ease'
    };
  };
  var getLabelStyles = function () {
    return __assign(__assign({}, sizeConfig), {
      color: disabled ? colors.semantic.text.disabled : colors.semantic.text.primary,
      cursor: disabled ? 'not-allowed' : 'pointer'
    });
  };
  var getDescriptionStyles = function () {
    return __assign(__assign({}, sizeConfig.descriptionFontStyle), {
      color: disabled ? colors.semantic.text.disabled : colors.primary.coolGray[300],
      marginTop: '2px',
      cursor: disabled ? 'not-allowed' : 'pointer'
    });
  };
  var handleChange = function () {
    if (!disabled && !checked) {
      onChange === null || onChange === void 0 ? void 0 : onChange(true, value);
      onClick === null || onClick === void 0 ? void 0 : onClick();
    }
  };
  var handleMouseEnter = function () {
    if (!disabled) {
      setIsHovered(true);
    }
  };
  var handleMouseLeave = function () {
    if (!disabled) {
      setIsHovered(false);
    }
  };
  var containerStyles = {
    display: 'flex',
    alignItems: description ? 'flex-start' : 'center',
    gap: sizeConfig.gap,
    flexDirection: labelPosition === 'left' ? 'row-reverse' : 'row',
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
  var radioContainerStyles = {
    paddingTop: description ? '2px' : '0' // label의 라인하이트와 맞추기 위한 조정
  };
  var labelContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  };
  return jsxs("div", {
    className: "youth-radio-button ".concat(className),
    style: containerStyles,
    onClick: handleChange,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [jsx("input", {
      type: "radio",
      name: name,
      value: value,
      checked: checked,
      disabled: disabled,
      onChange: function () {},
      style: {
        display: 'none'
      }
    }), jsx("div", {
      style: radioContainerStyles,
      children: jsx("div", {
        style: getRadioStyles(),
        children: jsx("div", {
          style: getDotStyles()
        })
      })
    }), (label || description) && jsxs("div", {
      style: labelContainerStyles,
      children: [label && jsx("span", {
        style: getLabelStyles(),
        children: label
      }), description && jsx("span", {
        style: getDescriptionStyles(),
        children: description
      })]
    })]
  });
};

var Checkbox = function (_a) {
  var _b = _a.checked,
    checked = _b === void 0 ? false : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    label = _a.label,
    description = _a.description,
    _d = _a.labelPosition,
    labelPosition = _d === void 0 ? 'right' : _d,
    _e = _a.size,
    size = _e === void 0 ? 'medium' : _e,
    onChange = _a.onChange,
    onClick = _a.onClick,
    _f = _a.className,
    className = _f === void 0 ? '' : _f;
  var _g = useState(false),
    isHovered = _g[0],
    setIsHovered = _g[1];
  var getSizeConfig = function () {
    switch (size) {
      case 'small':
        return __assign(__assign({}, textStyles.body2), {
          fontWeight: fontWeight.medium,
          checkboxSize: '16px',
          iconSize: '10px',
          gap: '6px',
          descriptionFontStyle: __assign(__assign({}, textStyles.body3), {
            fontWeight: fontWeight.regular
          })
        });
      case 'large':
        return __assign(__assign({}, textStyles.heading3), {
          fontWeight: fontWeight.medium,
          checkboxSize: '24px',
          iconSize: '18px',
          gap: '10px',
          descriptionFontStyle: __assign(__assign({}, textStyles.body1), {
            fontWeight: fontWeight.regular
          })
        });
      default:
        // medium
        return __assign(__assign({}, textStyles.body1), {
          fontWeight: fontWeight.medium,
          checkboxSize: '20px',
          iconSize: '14px',
          gap: '8px',
          descriptionFontStyle: __assign(__assign({}, textStyles.body2), {
            fontWeight: fontWeight.regular
          })
        });
    }
  };
  var sizeConfig = getSizeConfig();
  var getCheckboxStyles = function () {
    var baseStyles = {
      width: sizeConfig.checkboxSize,
      height: sizeConfig.checkboxSize,
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease',
      position: 'relative'
    };
    if (disabled && checked) {
      // 5. checked + disabled 상태: 내부 배경은 disabled.foreground, 아이콘은 white
      return __assign(__assign({}, baseStyles), {
        border: "2px solid ".concat(colors.semantic.disabled.foreground),
        backgroundColor: colors.semantic.disabled.foreground,
        cursor: 'not-allowed'
      });
    } else if (disabled) {
      // disabled이지만 checked가 아닌 상태
      return __assign(__assign({}, baseStyles), {
        border: "2px solid ".concat(colors.semantic.disabled.foreground),
        backgroundColor: colors.semantic.disabled.background,
        cursor: 'not-allowed'
      });
    } else if (checked && isHovered) {
      // 4. checked + hover 상태: violet600
      return __assign(__assign({}, baseStyles), {
        border: "2px solid ".concat(colors.primary.tint.violet[600]),
        backgroundColor: colors.primary.tint.violet[600],
        cursor: 'pointer'
      });
    } else if (checked) {
      // 4. checked 상태: mainviolet
      return __assign(__assign({}, baseStyles), {
        border: "2px solid ".concat(colors.primary.mainviolet),
        backgroundColor: colors.primary.mainviolet,
        cursor: 'pointer'
      });
    } else if (isHovered) {
      // 2. hover 상태: coolgray 200
      return __assign(__assign({}, baseStyles), {
        border: "2px solid ".concat(colors.primary.coolGray[200]),
        backgroundColor: colors.semantic.background.primary,
        cursor: 'pointer'
      });
    } else {
      // 1. 기본 상태: coolgray 100
      return __assign(__assign({}, baseStyles), {
        border: "2px solid ".concat(colors.primary.coolGray[100]),
        backgroundColor: colors.semantic.background.primary,
        cursor: 'pointer'
      });
    }
  };
  var getIconColor = function () {
    if (disabled && checked) {
      // 5. checked + disabled: white
      return 'white';
    } else if (disabled) {
      // disabled이지만 checked가 아닌 상태 (아이콘이 보이지 않음)
      return colors.semantic.disabled.foreground;
    } else if (checked) {
      // 4. checked 상태: white
      return 'white';
    } else if (isHovered) {
      // 2. hover 상태: coolgray 200
      return colors.primary.coolGray[200];
    } else {
      // 1. 기본 상태: coolgray 100
      return colors.primary.coolGray[100];
    }
  };
  var getLabelStyles = function () {
    return __assign(__assign({}, sizeConfig), {
      color: disabled ? colors.semantic.text.disabled : colors.semantic.text.primary,
      cursor: disabled ? 'not-allowed' : 'pointer'
    });
  };
  var getDescriptionStyles = function () {
    return __assign(__assign({}, sizeConfig.descriptionFontStyle), {
      color: disabled ? colors.semantic.text.disabled : colors.primary.coolGray[300],
      lineHeight: '1.3',
      marginTop: '2px',
      cursor: disabled ? 'not-allowed' : 'pointer'
    });
  };
  var handleChange = function () {
    if (!disabled) {
      onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
      onClick === null || onClick === void 0 ? void 0 : onClick();
    }
  };
  var handleMouseEnter = function () {
    if (!disabled) {
      setIsHovered(true);
    }
  };
  var handleMouseLeave = function () {
    if (!disabled) {
      setIsHovered(false);
    }
  };
  var containerStyles = {
    display: 'flex',
    alignItems: description ? 'flex-start' : 'center',
    gap: sizeConfig.gap,
    flexDirection: labelPosition === 'left' ? 'row-reverse' : 'row',
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
  var labelContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  };
  // Check icon SVG
  var CheckIcon = function () {
    return jsx("svg", {
      width: sizeConfig.iconSize,
      height: sizeConfig.iconSize,
      viewBox: "0 0 14 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: jsx("path", {
        fill: getIconColor(),
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.3821 0.997823C13.7285 1.30089 13.7636 1.82736 13.4605 2.17372L5.80428 10.9237C5.64699 11.1035 5.42012 11.2071 5.18127 11.2083C4.94241 11.2095 4.71453 11.1081 4.55546 10.9299L0.545044 6.43733C0.238554 6.09399 0.268427 5.56719 0.611766 5.2607C0.955106 4.95421 1.4819 4.98409 1.78839 5.32743L5.17089 9.11661L12.2062 1.07622C12.5093 0.729853 13.0358 0.694755 13.3821 0.997823Z"
      })
    });
  };
  return jsxs("div", {
    className: "youth-checkbox ".concat(className),
    style: containerStyles,
    onClick: handleChange,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [jsx("input", {
      type: "checkbox",
      checked: checked,
      disabled: disabled,
      onChange: function () {},
      style: {
        display: 'none'
      }
    }), jsx("div", {
      style: getCheckboxStyles(),
      children: checked && jsx(CheckIcon, {})
    }), (label || description) && jsxs("div", {
      style: labelContainerStyles,
      children: [label && jsx("span", {
        style: getLabelStyles(),
        children: label
      }), description && jsx("span", {
        style: getDescriptionStyles(),
        children: description
      })]
    })]
  });
};

var Toggle = function (_a) {
  var _b = _a.checked,
    checked = _b === void 0 ? false : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    label = _a.label,
    description = _a.description,
    _d = _a.labelPosition,
    labelPosition = _d === void 0 ? 'right' : _d,
    _e = _a.size,
    size = _e === void 0 ? 'medium' : _e,
    onChange = _a.onChange,
    onClick = _a.onClick,
    _f = _a.className,
    className = _f === void 0 ? '' : _f;
  var _g = useState(false),
    isHovered = _g[0],
    setIsHovered = _g[1];
  var getSizeConfig = function () {
    switch (size) {
      case 'small':
        return __assign(__assign({}, textStyles.body2), {
          fontWeight: fontWeight.medium,
          toggleWidth: '32px',
          toggleHeight: '18px',
          thumbSize: '14px',
          thumbOffset: '2px',
          gap: '6px',
          descriptionFontStyle: __assign(__assign({}, textStyles.body3), {
            fontWeight: fontWeight.regular
          })
        });
      case 'large':
        return __assign(__assign({}, textStyles.heading3), {
          fontWeight: fontWeight.medium,
          toggleWidth: '52px',
          toggleHeight: '28px',
          thumbSize: '24px',
          thumbOffset: '2px',
          gap: '10px',
          descriptionFontStyle: __assign(__assign({}, textStyles.body2), {
            fontWeight: fontWeight.regular
          })
        });
      default:
        // medium
        return __assign(__assign({}, textStyles.body1), {
          fontWeight: fontWeight.medium,
          toggleWidth: '48px',
          toggleHeight: '24px',
          thumbSize: '20px',
          thumbOffset: '2px',
          gap: '8px',
          descriptionFontStyle: __assign(__assign({}, textStyles.body2), {
            fontWeight: fontWeight.regular
          })
        });
    }
  };
  var sizeConfig = getSizeConfig();
  var getToggleStyles = function () {
    if (disabled) {
      return {
        width: sizeConfig.toggleWidth,
        height: sizeConfig.toggleHeight,
        borderRadius: sizeConfig.toggleHeight,
        backgroundColor: colors.primary.coolGray[50],
        cursor: 'not-allowed',
        transition: 'all 0.3s ease',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: sizeConfig.thumbOffset
      };
    } else if (isHovered) {
      return {
        width: sizeConfig.toggleWidth,
        height: sizeConfig.toggleHeight,
        borderRadius: sizeConfig.toggleHeight,
        backgroundColor: !checked ? colors.primary.coolGray[200] : colors.primary.tint.green[600],
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: sizeConfig.thumbOffset
      };
    } else if (checked) {
      return {
        width: sizeConfig.toggleWidth,
        height: sizeConfig.toggleHeight,
        borderRadius: sizeConfig.toggleHeight,
        backgroundColor: colors.primary.tint.green[500],
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: sizeConfig.thumbOffset
      };
    } else {
      return {
        width: sizeConfig.toggleWidth,
        height: sizeConfig.toggleHeight,
        borderRadius: sizeConfig.toggleHeight,
        backgroundColor: colors.primary.coolGray[100],
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: sizeConfig.thumbOffset
      };
    }
  };
  var getThumbStyles = function () {
    var thumbPosition = checked ? "calc(".concat(sizeConfig.toggleWidth, " - ").concat(sizeConfig.thumbSize, " - ").concat(parseInt(sizeConfig.thumbOffset) * 2, "px)") : '0px';
    return {
      width: sizeConfig.thumbSize,
      height: sizeConfig.thumbSize,
      borderRadius: '50%',
      backgroundColor: 'white',
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      transform: "translateX(".concat(thumbPosition, ")"),
      position: 'absolute'
    };
  };
  var getLabelStyles = function () {
    return __assign(__assign({}, sizeConfig), {
      color: disabled ? colors.semantic.text.disabled : colors.primary.coolGray[800],
      cursor: disabled ? 'not-allowed' : 'pointer'
    });
  };
  var getDescriptionStyles = function () {
    return __assign(__assign({}, sizeConfig.descriptionFontStyle), {
      color: disabled ? colors.semantic.text.disabled : colors.primary.coolGray[300],
      lineHeight: '1.3',
      marginTop: '2px',
      cursor: disabled ? 'not-allowed' : 'pointer'
    });
  };
  var handleChange = function () {
    if (!disabled) {
      onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
      onClick === null || onClick === void 0 ? void 0 : onClick();
    }
  };
  var handleMouseEnter = function () {
    if (!disabled) {
      setIsHovered(true);
    }
  };
  var handleMouseLeave = function () {
    if (!disabled) {
      setIsHovered(false);
    }
  };
  var containerStyles = {
    display: 'flex',
    alignItems: !description ? 'center' : 'flex-start',
    gap: sizeConfig.gap,
    flexDirection: labelPosition === 'left' ? 'row-reverse' : 'row',
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
  var labelContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  };
  return jsxs("div", {
    className: "youth-toggle ".concat(className),
    style: containerStyles,
    onClick: handleChange,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [jsx("input", {
      type: "checkbox",
      checked: checked,
      disabled: disabled,
      onChange: function () {},
      style: {
        display: 'none'
      }
    }), jsx("div", {
      style: getToggleStyles(),
      children: jsx("div", {
        style: getThumbStyles()
      })
    }), (label || description) && jsxs("div", {
      style: labelContainerStyles,
      children: [label && jsx("span", {
        style: getLabelStyles(),
        children: label
      }), description && jsx("span", {
        style: getDescriptionStyles(),
        children: description
      })]
    })]
  });
};

// 아이콘 컴포넌트들
var CheckCircleIcon = function (_a) {
  var color = _a.color;
  return jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: [jsx("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: color
    }), jsx("path", {
      d: "M8.5 12L10.5 14L15.5 9",
      stroke: "white",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
};
var CloseCircleIcon = function (_a) {
  var color = _a.color;
  return jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: [jsx("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: color
    }), jsx("path", {
      d: "M8 8L16 16M16 8L8 16",
      stroke: "white",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
};
var CautionIcon = function (_a) {
  var color = _a.color;
  return jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: [jsx("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: color
    }), jsx("rect", {
      x: "11",
      y: "7",
      width: "2",
      height: "6",
      fill: "white",
      rx: "1"
    }), jsx("circle", {
      cx: "12",
      cy: "16",
      r: "1",
      fill: "white"
    })]
  });
};
var InfoIcon = function (_a) {
  var color = _a.color;
  return jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: [jsx("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: color
    }), jsx("circle", {
      cx: "12",
      cy: "8",
      r: "1",
      fill: "white"
    }), jsx("rect", {
      x: "11",
      y: "11",
      width: "2",
      height: "6",
      fill: "white",
      rx: "1"
    })]
  });
};
// 상태별 설정
var statusConfig = {
  success: {
    icon: CheckCircleIcon,
    color: colors.semantic.state.success
  },
  error: {
    icon: CloseCircleIcon,
    color: colors.semantic.state.error
  },
  warning: {
    icon: CautionIcon,
    color: colors.semantic.state.warning
  },
  info: {
    icon: InfoIcon,
    color: colors.semantic.state.info
  }
};
/**
 * 토스트 오버레이 컴포넌트
 *
 * 사용자가 어떤 작업을 완료했을 때, 시스템이 잘 처리됐다는 걸 알려주는 알림입니다.
 * 현재 하고 있는 일을 방해하지 않고, 잠깐 나타났다 사라지는 방식으로 보여집니다.
 */
var Toast = function (_a) {
  var status = _a.status,
    title = _a.title,
    description = _a.description,
    _b = _a.showLeadingIcon,
    showLeadingIcon = _b === void 0 ? true : _b,
    _c = _a.showCloseButton,
    showCloseButton = _c === void 0 ? false : _c,
    onClose = _a.onClose,
    _d = _a.className,
    className = _d === void 0 ? '' : _d;
  var config = statusConfig[status];
  var IconComponent = config.icon;
  var handleCloseClick = function () {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };
  var toastStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.m,
    padding: spacing.l,
    backgroundColor: colors.semantic.background.primary,
    borderRadius: radius.l,
    boxShadow: shadows.s,
    width: '360px',
    minHeight: 'fit-content'
  };
  var contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xxs,
    flex: 1
  };
  var titleStyle = __assign(__assign({}, textStyles.heading3), {
    color: colors.semantic.text.primary,
    margin: 0
  });
  var descriptionStyle = __assign(__assign({}, textStyles.body2), {
    color: colors.semantic.text.secondary,
    margin: 0
  });
  var closeButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: spacing.xxs,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.xs,
    transition: 'background-color 0.2s ease'
  };
  return jsxs("div", {
    className: "toast toast--".concat(status, " ").concat(className),
    style: toastStyle,
    role: "alert",
    "aria-live": "polite",
    children: [showLeadingIcon && jsx("div", {
      className: "toast__icon",
      children: jsx(IconComponent, {
        color: config.color
      })
    }), jsxs("div", {
      className: "toast__content",
      style: contentStyle,
      children: [jsx("h3", {
        className: "toast__title",
        style: titleStyle,
        children: title
      }), description && jsx("p", {
        className: "toast__description",
        style: descriptionStyle,
        children: description
      })]
    }), showCloseButton && onClose && jsx("button", {
      className: "toast__close",
      style: closeButtonStyle,
      onClick: handleCloseClick,
      "aria-label": "\uC54C\uB9BC \uB2EB\uAE30",
      onMouseEnter: function (e) {
        e.target.style.backgroundColor = colors.primary.coolGray[100];
      },
      onMouseLeave: function (e) {
        e.target.style.backgroundColor = 'transparent';
      },
      children: jsx(Icon, {
        type: "close",
        size: 16,
        color: colors.semantic.text.tertiary
      })
    })]
  });
};

/**
 * Toast Provider 컴포넌트
 *
 * react-hot-toast를 래핑하여 기존 Toast 컴포넌트와 함께 사용할 수 있는 Provider입니다.
 */
var ToastProvider = function (_a) {
  var children = _a.children,
    _b = _a.position,
    position = _b === void 0 ? 'top-right' : _b,
    _c = _a.defaultDuration,
    defaultDuration = _c === void 0 ? 4000 : _c;
  // react-hot-toast position 매핑
  var getToasterPosition = function (pos) {
    switch (pos) {
      case 'top-right':
        return 'top-right';
      case 'top-left':
        return 'top-left';
      case 'bottom-right':
        return 'bottom-right';
      case 'bottom-left':
        return 'bottom-left';
      case 'top-center':
        return 'top-center';
      case 'bottom-center':
        return 'bottom-center';
      default:
        return 'top-right';
    }
  };
  return jsxs(Fragment, {
    children: [children, jsx(Toaster, {
      position: getToasterPosition(position),
      toastOptions: {
        duration: defaultDuration,
        style: {
          background: 'transparent',
          boxShadow: 'none',
          padding: 0,
          margin: 0
        }
      }
    })]
  });
};
/**
 * useToast 훅
 *
 * react-hot-toast를 래핑하여 기존 API 호환성을 유지하면서 Toast를 사용할 수 있는 훅입니다.
 */
var useToast = function () {
  // 편의 메서드들
  var toastMethods = {
    success: function (title, description, options) {
      var toastData = __assign({
        status: 'success',
        title: title,
        description: description
      }, options);
      return toast.custom(function (t) {
        return jsx(Toast, __assign({}, toastData, {
          onClose: function () {
            return toast.dismiss(t.id);
          },
          showCloseButton: true
        }));
      }, {
        duration: (options === null || options === void 0 ? void 0 : options.duration) || 4000,
        id: options === null || options === void 0 ? void 0 : options.id
      });
    },
    error: function (title, description, options) {
      var toastData = __assign({
        status: 'error',
        title: title,
        description: description
      }, options);
      return toast.custom(function (t) {
        return jsx(Toast, __assign({}, toastData, {
          onClose: function () {
            return toast.dismiss(t.id);
          },
          showCloseButton: true
        }));
      }, {
        duration: (options === null || options === void 0 ? void 0 : options.duration) || 4000,
        id: options === null || options === void 0 ? void 0 : options.id
      });
    },
    warning: function (title, description, options) {
      var toastData = __assign({
        status: 'warning',
        title: title,
        description: description
      }, options);
      return toast.custom(function (t) {
        return jsx(Toast, __assign({}, toastData, {
          onClose: function () {
            return toast.dismiss(t.id);
          },
          showCloseButton: true
        }));
      }, {
        duration: (options === null || options === void 0 ? void 0 : options.duration) || 4000,
        id: options === null || options === void 0 ? void 0 : options.id
      });
    },
    info: function (title, description, options) {
      var toastData = __assign({
        status: 'info',
        title: title,
        description: description
      }, options);
      return toast.custom(function (t) {
        return jsx(Toast, __assign({}, toastData, {
          onClose: function () {
            return toast.dismiss(t.id);
          },
          showCloseButton: true
        }));
      }, {
        duration: (options === null || options === void 0 ? void 0 : options.duration) || 4000,
        id: options === null || options === void 0 ? void 0 : options.id
      });
    },
    custom: function (options) {
      return toast.custom(function (t) {
        return jsx(Toast, __assign({}, options, {
          onClose: function () {
            return toast.dismiss(t.id);
          },
          showCloseButton: true
        }));
      }, {
        duration: options.duration || 4000
      });
    },
    remove: function (id) {
      return toast.dismiss(id);
    },
    removeAll: function () {
      return toast.dismiss();
    }
  };
  return toastMethods;
};

var Popup = function (_a) {
  var title = _a.title,
    description = _a.description,
    primaryButton = _a.primaryButton,
    secondaryButton = _a.secondaryButton,
    isOpen = _a.isOpen,
    onClose = _a.onClose,
    _b = _a.className,
    className = _b === void 0 ? '' : _b,
    _c = _a.style,
    style = _c === void 0 ? {} : _c;
  if (!isOpen) return null;
  var overlayStyle = __assign({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.semantic.dim.overlay,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }, style);
  var popupStyle = {
    backgroundColor: colors.semantic.background.primary,
    borderRadius: '16px',
    padding: '32px',
    minWidth: '480px',
    maxWidth: '90vw',
    maxHeight: '90vh',
    boxShadow: shadows.s,
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  };
  var contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };
  var titleStyle = __assign(__assign({}, textStyles.heading1), {
    color: colors.semantic.text.primary,
    margin: 0
  });
  var descriptionStyle = __assign(__assign({}, textStyles.body1), {
    color: colors.semantic.text.secondary,
    margin: 0
  });
  var buttonContainerStyle = {
    display: 'flex',
    gap: '12px',
    flexDirection: secondaryButton ? 'row' : 'column'
  };
  var handleOverlayClick = function (e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return jsx("div", {
    className: "popup-overlay ".concat(className),
    style: overlayStyle,
    onClick: handleOverlayClick,
    children: jsxs("div", {
      className: "popup",
      style: popupStyle,
      children: [jsxs("div", {
        className: "popup-content",
        style: contentStyle,
        children: [jsx("h1", {
          style: titleStyle,
          children: title
        }), description && jsx("p", {
          style: descriptionStyle,
          children: description
        })]
      }), jsxs("div", {
        className: "popup-buttons",
        style: buttonContainerStyle,
        children: [secondaryButton && jsx(BoxButton, __assign({
          type: "ghost",
          size: "l",
          width: "fill",
          onClick: secondaryButton.onClick
        }, function (_a) {
          _a.text;
            _a.onClick;
            var rest = __rest(_a, ["text", "onClick"]);
          return rest;
        }(secondaryButton), {
          children: secondaryButton.text
        })), jsx(BoxButton, __assign({
          type: "solid",
          size: "l",
          width: "fill",
          onClick: primaryButton.onClick
        }, function (_a) {
          _a.text;
            _a.onClick;
            var rest = __rest(_a, ["text", "onClick"]);
          return rest;
        }(primaryButton), {
          children: primaryButton.text
        }))]
      })]
    })
  });
};

var Modal = function (_a) {
  var title = _a.title,
    description = _a.description,
    contentComponent = _a.contentComponent,
    _b = _a.contentMaxHeight,
    contentMaxHeight = _b === void 0 ? 500 : _b,
    _c = _a.showScrollbar,
    showScrollbar = _c === void 0 ? false : _c,
    _d = _a.showCloseButton,
    showCloseButton = _d === void 0 ? true : _d,
    primaryButton = _a.primaryButton,
    secondaryButton = _a.secondaryButton,
    isOpen = _a.isOpen,
    onClose = _a.onClose,
    _e = _a.className,
    className = _e === void 0 ? '' : _e,
    _f = _a.style,
    style = _f === void 0 ? {} : _f;
  var _g = React.useState(false),
    isContentOverflowing = _g[0],
    setIsContentOverflowing = _g[1];
  var contentRef = React.useRef(null);
  useEffect(function () {
    if (contentComponent && contentRef.current) {
      var _a = contentRef.current,
        scrollHeight = _a.scrollHeight,
        clientHeight = _a.clientHeight;
      setIsContentOverflowing(scrollHeight > clientHeight);
    }
  }, [contentComponent, contentMaxHeight]);
  if (!isOpen) return null;
  var overlayStyle = __assign({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.semantic.dim.overlay,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  }, style);
  var modalStyle = {
    backgroundColor: colors.semantic.background.primary,
    borderRadius: '16px',
    padding: '32px',
    minWidth: '480px',
    maxWidth: 'calc(100vw - 40px)',
    maxHeight: 'calc(100vh - 40px)',
    boxShadow: shadows.m,
    display: 'flex',
    flexDirection: 'column',
    gap: isContentOverflowing ? '0px' : secondaryButton ? '20px' : '24px'
  };
  var headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    flexShrink: 0
  };
  var titleStyle = __assign(__assign({}, textStyles.heading1), {
    color: colors.semantic.text.primary,
    margin: 0,
    flex: 1
  });
  var closeButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    flexShrink: 0
  };
  var contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    flex: 1,
    minHeight: 0
  };
  var descriptionStyle = __assign(__assign({}, textStyles.body1), {
    color: colors.semantic.text.secondary,
    margin: 0
  });
  var imageContainerStyle = {
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    maxHeight: "".concat(contentMaxHeight, "px"),
    overflowY: 'auto',
    scrollbarWidth: showScrollbar ? 'thin' : 'none',
    msOverflowStyle: showScrollbar ? 'auto' : 'none'
  };
  var buttonContainerStyle = __assign({
    display: 'flex',
    gap: '12px',
    flexDirection: secondaryButton ? 'row' : 'column',
    flexShrink: 0
  }, isContentOverflowing && {
    borderTop: "1px solid ".concat(colors.semantic.border.default),
    paddingTop: '20px',
    marginLeft: '-32px',
    marginRight: '-32px',
    paddingLeft: '32px',
    paddingRight: '32px'
  });
  var handleOverlayClick = function (e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  var handleCloseClick = function () {
    onClose();
  };
  return jsx("div", {
    className: "modal-overlay ".concat(className),
    style: overlayStyle,
    onClick: handleOverlayClick,
    children: jsxs("div", {
      className: "modal",
      style: modalStyle,
      children: [jsxs("div", {
        className: "modal-content",
        style: contentStyle,
        children: [jsxs("div", {
          className: "modal-header",
          style: headerStyle,
          children: [jsx("h1", {
            style: titleStyle,
            children: title
          }), showCloseButton && jsx("div", {
            style: closeButtonStyle,
            onClick: handleCloseClick,
            children: jsx(Icon, {
              type: "close",
              size: 24,
              color: colors.semantic.text.secondary
            })
          })]
        }), description && jsx("p", {
          style: descriptionStyle,
          children: description
        }), contentComponent && jsx("div", {
          ref: contentRef,
          style: imageContainerStyle,
          className: showScrollbar ? '' : 'modal-content-scrollable',
          children: contentComponent
        })]
      }), jsxs("div", {
        className: "modal-buttons",
        style: buttonContainerStyle,
        children: [secondaryButton && jsx(BoxButton, __assign({
          type: "ghost",
          size: "l",
          width: "fill",
          onClick: secondaryButton.onClick
        }, function (_a) {
          _a.text;
            _a.onClick;
            var rest = __rest(_a, ["text", "onClick"]);
          return rest;
        }(secondaryButton), {
          children: secondaryButton.text
        })), jsx(BoxButton, __assign({
          type: "solid",
          size: "l",
          width: "fill",
          onClick: primaryButton.onClick
        }, function (_a) {
          _a.text;
            _a.onClick;
            var rest = __rest(_a, ["text", "onClick"]);
          return rest;
        }(primaryButton), {
          children: primaryButton.text
        }))]
      })]
    })
  });
};

var Dropdown = function (_a) {
  var _b = _a.placeholder,
    placeholder = _b === void 0 ? 'Placeholder' : _b,
    value = _a.value,
    _c = _a.options,
    options = _c === void 0 ? [] : _c,
    onChange = _a.onChange,
    _d = _a.disabled,
    disabled = _d === void 0 ? false : _d,
    _e = _a.error,
    error = _e === void 0 ? false : _e,
    errorMessage = _a.errorMessage,
    _f = _a.className,
    className = _f === void 0 ? '' : _f,
    leadingIconType = _a.leadingIconType,
    _g = _a.width,
    width = _g === void 0 ? '320px' : _g,
    _h = _a.enableSearch,
    enableSearch = _h === void 0 ? false : _h,
    _j = _a.hideOption,
    hideOption = _j === void 0 ? false : _j;
  var _k = useState(false),
    isOpen = _k[0],
    setIsOpen = _k[1];
  var _l = useState(false),
    isAnimating = _l[0],
    setIsAnimating = _l[1];
  var _m = useState(false),
    shouldRender = _m[0],
    setShouldRender = _m[1];
  var _o = useState(null),
    hoveredOptionIndex = _o[0],
    setHoveredOptionIndex = _o[1];
  var _p = useState(''),
    searchText = _p[0],
    setSearchText = _p[1];
  var dropdownRef = useRef(null);
  var optionsContainerRef = useRef(null);
  var inputRef = useRef(null);
  var selectedOption = useMemo(function () {
    return options.find(function (option) {
      return option.value === value;
    });
  }, [options, value]);
  var hasSelectedOption = !!selectedOption;
  // 검색 텍스트에 따른 옵션 필터링
  var filteredOptions = useMemo(function () {
    if (!enableSearch || !searchText.trim()) {
      return options;
    }
    return options.filter(function (option) {
      return option.label.toLowerCase().includes(searchText.toLowerCase());
    });
  }, [options, searchText, enableSearch]);
  // 선택된 옵션의 인덱스를 찾기 위한 함수
  var getSelectedOptionIndex = useCallback(function () {
    if (!hasSelectedOption) return -1;
    return filteredOptions.findIndex(function (option) {
      return option.value === value;
    });
  }, [filteredOptions, value, hasSelectedOption]);
  // 선택된 옵션으로 스크롤 이동
  var scrollToSelectedOption = useCallback(function () {
    if (!hasSelectedOption) return;
    // 스크롤 실행 함수
    var performScroll = function () {
      if (!optionsContainerRef.current) return false;
      var selectedIndex = getSelectedOptionIndex();
      if (selectedIndex === -1) return false;
      var container = optionsContainerRef.current;
      var optionElements = container.children;
      var selectedElement = optionElements[selectedIndex];
      if (selectedElement && container.clientHeight > 0) {
        var containerHeight = container.clientHeight;
        var optionHeight = selectedElement.offsetHeight;
        var optionTop = selectedElement.offsetTop;
        // 선택된 옵션이 중앙에 오도록 스크롤 위치 계산
        var scrollTop = optionTop - containerHeight / 2 + optionHeight / 2;
        container.scrollTop = Math.max(0, scrollTop);
        return true;
      }
      return false;
    };
    // 즉시 실행 시도
    if (performScroll()) return;
    // 재시도 로직 (최대 3번)
    var retryCount = 0;
    var maxRetries = 3;
    var retryScroll = function () {
      if (retryCount >= maxRetries) return;
      if (performScroll()) return;
      retryCount++;
      setTimeout(retryScroll, 10); // 10ms씩 지연하여 재시도
    };
    setTimeout(retryScroll, 0);
  }, [hasSelectedOption, getSelectedOptionIndex]);
  // 드롭다운 열기/닫기 애니메이션 관리
  useEffect(function () {
    if (isOpen) {
      // 열기: 먼저 DOM에 마운트하고 애니메이션 시작
      setShouldRender(true);
      // hover 상태 초기화
      setHoveredOptionIndex(null);
      // 첫 번째 requestAnimationFrame으로 DOM 렌더링 대기
      requestAnimationFrame(function () {
        // 두 번째 requestAnimationFrame으로 스크롤 설정 후 애니메이션 시작
        requestAnimationFrame(function () {
          // 스크롤 위치를 애니메이션 시작 직전에 설정
          scrollToSelectedOption();
          setIsAnimating(true);
          // 드롭다운이 열리고 검색이 활성화된 경우 input에 포커스
          if (enableSearch && inputRef.current) {
            inputRef.current.focus();
          }
        });
      });
    } else {
      // 닫기: 애니메이션 시작하고 완료 후 DOM에서 제거
      setIsAnimating(false);
      // hover 상태 초기화
      setHoveredOptionIndex(null);
      // 검색 텍스트 초기화 (검색이 활성화된 경우에만)
      if (enableSearch) {
        setSearchText('');
      }
      var timer_1 = setTimeout(function () {
        setShouldRender(false);
      }, 200); // 애니메이션 duration과 맞춤
      return function () {
        return clearTimeout(timer_1);
      };
    }
  }, [isOpen, enableSearch, scrollToSelectedOption]);
  // 외부 클릭 시 드롭다운 닫기
  useEffect(function () {
    var handleClickOutside = function (event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  // ESC 키로 드롭다운 닫기
  useEffect(function () {
    var handleKeyDown = function (event) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return function () {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);
  var getContainerStyles = useCallback(function () {
    var borderColor = colors.semantic.border.strong; // #D6D6D6
    var backgroundColor = colors.semantic.background.primary; // #FFFFFF
    if (disabled) {
      borderColor = colors.semantic.border.strong;
      backgroundColor = colors.semantic.disabled.background; // #F3F5F6
    } else if (error) {
      borderColor = colors.semantic.state.error; // #FF2E2E
    } else if (isOpen) {
      borderColor = colors.semantic.text.primary; // #25282D
    }
    return __assign({
      display: 'flex',
      alignItems: 'center',
      gap: spacing.xs,
      padding: '13px 16px',
      // Figma 스펙에 맞춤
      backgroundColor: backgroundColor,
      border: "1px solid ".concat(borderColor),
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: width === 'fill' ? '100%' : width,
      boxSizing: 'border-box',
      userSelect: !enableSearch ? 'none' : 'auto'
    }, hideOption && {
      userSelect: 'none'
    });
  }, [disabled, error, isOpen, width, hideOption, enableSearch]);
  var getTextStyles = useCallback(function () {
    var textColor;
    if (disabled) {
      textColor = colors.semantic.disabled.foreground; // #D1D5DB
    } else if (error) {
      textColor = colors.semantic.state.error; // #FF2E2E
    } else if (hasSelectedOption) {
      textColor = colors.semantic.text.primary; // #25282D
    } else {
      textColor = '#AFB6C0'; // Figma 스펙의 placeholder 색상
    }
    return {
      flex: 1,
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '22px',
      // 1.5714285714285714em = 22px
      letterSpacing: '-0.28px',
      // -2%
      fontFamily: 'Pretendard',
      color: textColor,
      userSelect: !enableSearch || hideOption ? 'none' : 'auto' // hideOption도 고려하여 user-select 설정
    };
  }, [disabled, error, hasSelectedOption, enableSearch, hideOption]);
  var getInputStyles = useCallback(function () {
    return {
      flex: 1,
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '22px',
      letterSpacing: '-0.28px',
      fontFamily: 'Pretendard',
      color: colors.semantic.text.primary,
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      width: '100%'
    };
  }, []);
  var getIconColor = useCallback(function () {
    if (disabled) {
      return colors.semantic.disabled.foreground; // #D1D5DB
    } else if (error) {
      return colors.semantic.state.error; // #FF2E2E
    } else {
      return colors.semantic.text.primary; // #25282D
    }
  }, [disabled, error]);
  var getChevronIcon = useCallback(function () {
    return jsx(Icon, {
      type: isOpen ? 'chevron-up' : 'chevron-down',
      size: 20,
      color: "currentColor"
    });
  }, [isOpen]);
  var handleClick = useCallback(function () {
    if (!disabled && !hideOption) {
      setIsOpen(!isOpen);
    }
  }, [disabled, hideOption, isOpen]);
  var handleOptionClick = useCallback(function (optionValue) {
    if (!disabled) {
      onChange === null || onChange === void 0 ? void 0 : onChange(optionValue);
      setIsOpen(false);
    }
  }, [disabled, onChange]);
  var handleKeyDown = useCallback(function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!hideOption) {
        handleClick();
      }
    }
  }, [handleClick, hideOption]);
  var handleInputKeyDown = useCallback(function (event) {
    if (!enableSearch) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      // 첫 번째 필터링된 옵션 선택
      if (filteredOptions.length > 0 && !filteredOptions[0].disabled) {
        handleOptionClick(filteredOptions[0].value);
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      // 첫 번째 옵션에 호버 효과
      if (filteredOptions.length > 0) {
        setHoveredOptionIndex(0);
      }
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setIsOpen(false);
    }
  }, [enableSearch, filteredOptions, handleOptionClick]);
  var handleInputChange = useCallback(function (event) {
    if (!enableSearch) return;
    setSearchText(event.target.value);
    setHoveredOptionIndex(null);
  }, [enableSearch]);
  var getOptionStyles = useCallback(function (option, index, isSelected) {
    var backgroundColor = colors.semantic.background.primary; // #FFFFFF
    var textColor = colors.semantic.text.primary; // #25282D
    if (option.disabled) {
      textColor = colors.semantic.disabled.foreground; // #D1D5DB
    } else if (isSelected) {
      backgroundColor = '#F8F4FE'; // Figma 스펙의 선택된 옵션 배경색
      textColor = '#7248D9'; // Figma 스펙의 선택된 옵션 텍스트 색상
    } else if (hoveredOptionIndex === index) {
      backgroundColor = colors.semantic.disabled.background; // #F3F5F6
    }
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '13px 16px',
      // Figma 스펙에 맞춘 패딩
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '22px',
      letterSpacing: '-0.28px',
      // -2%
      fontFamily: 'Pretendard',
      color: textColor,
      backgroundColor: backgroundColor,
      cursor: option.disabled ? 'not-allowed' : 'pointer',
      transition: 'background-color 0.2s ease'
    };
  }, [hoveredOptionIndex]);
  var dropdownOptionsStyle = useMemo(function () {
    return {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: colors.semantic.background.primary,
      border: "1px solid ".concat(colors.semantic.border.strong),
      borderRadius: '8px',
      // Figma 스펙에 맞춤
      boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.06)',
      // Figma 스펙의 그림자
      zIndex: 1000,
      marginTop: '8px',
      // Figma 스펙에 맞춘 간격
      maxHeight: '200px',
      overflowY: 'auto',
      // 애니메이션 스타일
      opacity: isAnimating ? 1 : 0,
      transform: isAnimating ? 'translateY(0) scaleY(1)' : 'translateY(-8px) scaleY(0.95)',
      transformOrigin: 'top center',
      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
      // 자연스러운 easing
      userSelect: !enableSearch ? 'none' : 'auto' // 검색 기능이 비활성화된 경우 user-select none
    };
  }, [isAnimating, enableSearch]);
  var getCheckIcon = function () {
    return jsx(Icon, {
      type: "check",
      size: 20,
      color: "currentColor"
    });
  };
  // 표시할 텍스트 결정
  var getDisplayText = function () {
    if (isOpen && enableSearch) {
      return searchText;
    }
    return hasSelectedOption ? selectedOption.label : placeholder;
  };
  // 플레이스홀더 텍스트 결정
  var getPlaceholderText = function () {
    if (isOpen && enableSearch) {
      return hasSelectedOption ? selectedOption.label : placeholder;
    }
    return '';
  };
  // Leading 아이콘 렌더링
  var renderLeadingIcon = function () {
    if (!leadingIconType) return null;
    return jsx(Icon, {
      type: leadingIconType,
      size: 20,
      color: getIconColor()
    });
  };
  return jsxs("div", {
    className: "dropdown-wrapper ".concat(className),
    ref: dropdownRef,
    style: {
      position: 'relative'
    },
    children: [jsxs("div", {
      style: getContainerStyles(),
      onClick: !isOpen || !enableSearch ? handleClick : undefined,
      onKeyDown: !isOpen || !enableSearch ? handleKeyDown : undefined,
      tabIndex: disabled || isOpen && enableSearch ? -1 : 0,
      role: "combobox",
      "aria-expanded": isOpen,
      "aria-haspopup": "listbox",
      "aria-disabled": disabled,
      children: [renderLeadingIcon(), isOpen && enableSearch ? jsx("input", {
        ref: inputRef,
        type: "text",
        value: searchText,
        onChange: handleInputChange,
        onKeyDown: handleInputKeyDown,
        placeholder: getPlaceholderText(),
        style: getInputStyles(),
        disabled: disabled
      }) : jsx("div", {
        style: getTextStyles(),
        children: getDisplayText()
      }), jsx("div", {
        style: {
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: getIconColor(),
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease'
        },
        onClick: isOpen && enableSearch ? handleClick : undefined,
        children: getChevronIcon()
      })]
    }), shouldRender && !hideOption && jsx("div", {
      style: dropdownOptionsStyle,
      role: "listbox",
      ref: optionsContainerRef,
      children: filteredOptions.length === 0 ? jsx("div", {
        style: {
          padding: '13px 16px',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '22px',
          color: colors.semantic.disabled.foreground,
          fontFamily: 'Pretendard',
          textAlign: 'center',
          userSelect: !enableSearch ? 'none' : 'auto' // 검색 기능이 비활성화된 경우 user-select none
        },
        children: enableSearch && searchText.trim() ? '검색 결과가 없습니다' : '옵션이 없습니다'
      }) : filteredOptions.map(function (option, index) {
        var isSelected = value === option.value;
        return jsxs("div", {
          style: __assign(__assign({}, getOptionStyles(option, index, isSelected)), {
            userSelect: !enableSearch ? 'none' : 'auto'
          }),
          onClick: function () {
            return !option.disabled && handleOptionClick(option.value);
          },
          onMouseEnter: function () {
            return setHoveredOptionIndex(index);
          },
          onMouseLeave: function () {
            return setHoveredOptionIndex(null);
          },
          role: "option",
          "aria-selected": isSelected,
          "aria-disabled": option.disabled,
          children: [jsx("span", {
            children: option.label
          }), isSelected && jsx("div", {
            style: {
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#7248D9' // Figma 스펙의 체크 아이콘 색상
            },
            children: getCheckIcon()
          })]
        }, option.value);
      })
    }), error && errorMessage && jsx("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing.xxs,
        // 4px
        marginTop: spacing.xxs // 4px
      },
      children: jsx("span", {
        style: {
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '22px',
          color: colors.semantic.state.error,
          fontFamily: 'Pretendard'
        },
        children: errorMessage
      })
    })]
  });
};
Dropdown.displayName = 'Dropdown';

var TextArea = forwardRef(function (_a, ref) {
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
    _f = _a.showCharacterCounter,
    showCharacterCounter = _f === void 0 ? false : _f,
    _g = _a.maxLength,
    maxLength = _g === void 0 ? 1000 : _g,
    status = _a.status,
    _h = _a.width,
    width = _h === void 0 ? '320px' : _h,
    _j = _a.rows,
    rows = _j === void 0 ? 4 : _j,
    restProps = __rest(_a, ["placeholder", "value", "defaultValue", "onChange", "onFocus", "onBlur", "disabled", "error", "errorMessage", "className", "showCharacterCounter", "maxLength", "status", "width", "rows"]);
  var _k = useState(false),
    isFocused = _k[0],
    setIsFocused = _k[1];
  var _l = useState(false),
    isHovered = _l[0],
    setIsHovered = _l[1];
  var _m = useState(defaultValue || ''),
    internalValue = _m[0],
    setInternalValue = _m[1];
  var currentValue = value !== undefined ? value : internalValue;
  var isEmpty = !currentValue || currentValue.length === 0;
  var actualStatus = status || (isEmpty ? 'empty' : 'filled');
  var characterCount = currentValue.length;
  var getContainerStyles = function () {
    var borderColor = colors.semantic.border.strong; // #D6D6D6
    var backgroundColor = colors.semantic.background.primary; // #FFFFFF
    if (disabled) {
      borderColor = colors.semantic.border.strong;
      backgroundColor = colors.semantic.disabled.background; // #F3F5F6
    } else if (error) {
      borderColor = colors.semantic.state.error; // #FF2E2E
    } else if (isFocused) {
      borderColor = colors.semantic.text.primary; // #25282D
    } else if (isHovered) {
      borderColor = colors.semantic.text.primary; // #25282D
    }
    var getWidth = function () {
      if (width === 'fill') {
        return '100%';
      }
      return typeof width === 'number' ? "".concat(width, "px") : width;
    };
    return {
      display: 'flex',
      flexDirection: 'column',
      width: getWidth(),
      border: "1px solid ".concat(borderColor),
      borderRadius: radius.s,
      // 8px
      backgroundColor: backgroundColor,
      transition: 'all 0.2s ease',
      position: 'relative'
    };
  };
  var getTextAreaStyles = function () {
    var textColor = colors.semantic.text.tertiary; // #8D97A5 for placeholder
    if (disabled) {
      textColor = colors.semantic.text.tertiary;
    } else if (error) {
      textColor = colors.semantic.state.error; // #FF2E2E
    } else if (actualStatus === 'filled') {
      textColor = colors.primary.coolGray[700]; // #393F46
    }
    return {
      width: '100%',
      minHeight: '160px',
      padding: "14px ".concat(spacing.m),
      // 14px 16px
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      color: textColor,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '-2%',
      fontFamily: 'Pretendard',
      resize: 'none',
      wordWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      overflowWrap: 'break-word',
      boxSizing: 'border-box'
    };
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
    // 최대 길이 체크
    if (maxLength && newValue.length > maxLength) {
      return;
    }
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };
  var handleMouseEnter = function () {
    if (!disabled && !isFocused) {
      setIsHovered(true);
    }
  };
  var handleMouseLeave = function () {
    setIsHovered(false);
  };
  return jsxs("div", {
    className: "text-area-wrapper ".concat(className),
    children: [jsx("div", {
      style: getContainerStyles(),
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: jsx("textarea", __assign({
        ref: ref,
        value: currentValue,
        placeholder: placeholder,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        disabled: disabled,
        style: getTextAreaStyles(),
        rows: rows,
        maxLength: maxLength
      }, restProps))
    }), (showCharacterCounter || error) && jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: error && errorMessage ? 'space-between' : 'flex-end',
        alignItems: 'center',
        marginTop: spacing.xxs,
        // 4px
        gap: spacing.s // 12px
      },
      children: [error && errorMessage && jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: spacing.xxs // 4px
        },
        children: [jsx(Icon, {
          type: "dialog",
          size: 16,
          color: colors.semantic.state.error
        }), jsx("span", {
          style: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '22px',
            color: colors.semantic.state.error,
            fontFamily: 'Pretendard'
          },
          children: errorMessage
        })]
      }), showCharacterCounter && jsxs("span", {
        style: {
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '22px',
          color: colors.semantic.text.tertiary,
          fontFamily: 'Pretendard',
          textAlign: 'right'
        },
        children: [characterCount, "/", maxLength]
      })]
    }), jsx("style", {
      children: "\n            @keyframes blink {\n              0%, 50% { opacity: 1; }\n              51%, 100% { opacity: 0; }\n            }\n            \n            .text-area-wrapper textarea::placeholder {\n              color: ".concat(colors.semantic.text.tertiary, ";\n            }\n          ")
    })]
  });
});
TextArea.displayName = 'TextArea';

var TextField = forwardRef(function (_a, ref) {
  var _b = _a.placeholder,
    placeholder = _b === void 0 ? 'Placeholder' : _b,
    value = _a.value,
    defaultValue = _a.defaultValue,
    onChange = _a.onChange,
    onFocus = _a.onFocus,
    onBlur = _a.onBlur,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    _d = _a.readOnly,
    readOnly = _d === void 0 ? false : _d,
    _e = _a.error,
    error = _e === void 0 ? false : _e,
    errorMessage = _a.errorMessage,
    _f = _a.className,
    className = _f === void 0 ? '' : _f,
    _g = _a.type,
    type = _g === void 0 ? 'text' : _g,
    leadingIcon = _a.leadingIcon,
    trailingIcon = _a.trailingIcon,
    leadingIconType = _a.leadingIconType,
    trailingIconType = _a.trailingIconType,
    onLeadingIconClick = _a.onLeadingIconClick,
    onTrailingIconClick = _a.onTrailingIconClick,
    status = _a.status,
    _h = _a.width,
    width = _h === void 0 ? '320px' : _h,
    restProps = __rest(_a, ["placeholder", "value", "defaultValue", "onChange", "onFocus", "onBlur", "disabled", "readOnly", "error", "errorMessage", "className", "type", "leadingIcon", "trailingIcon", "leadingIconType", "trailingIconType", "onLeadingIconClick", "onTrailingIconClick", "status", "width"]);
  var _j = useState(false),
    isFocused = _j[0],
    setIsFocused = _j[1];
  var _k = useState(false),
    isHovered = _k[0],
    setIsHovered = _k[1];
  var _l = useState(defaultValue || ''),
    internalValue = _l[0],
    setInternalValue = _l[1];
  var currentValue = value !== undefined ? value : internalValue;
  var isEmpty = !currentValue || currentValue.length === 0;
  var actualStatus = status || (isEmpty ? 'empty' : 'filled');
  var getContainerStyles = useCallback(function () {
    var borderColor = colors.semantic.border.strong; // #D6D6D6
    var backgroundColor = colors.semantic.background.primary; // #FFFFFF
    if (disabled) {
      borderColor = colors.semantic.border.strong;
      backgroundColor = colors.semantic.disabled.background; // #F3F5F6
    } else if (readOnly) {
      borderColor = colors.semantic.border.strong;
      backgroundColor = colors.semantic.background.primary;
    } else if (error) {
      borderColor = colors.semantic.state.error; // #FF2E2E
    } else if (isFocused) {
      borderColor = colors.semantic.text.primary; // #25282D
    } else if (isHovered) {
      borderColor = colors.semantic.text.primary; // #25282D
    }
    var getWidth = function () {
      if (width === 'fill') {
        return '100%';
      }
      return typeof width === 'number' ? "".concat(width, "px") : width;
    };
    return {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.xs,
      // 8px
      padding: "13px ".concat(spacing.m),
      // 13px 16px
      backgroundColor: backgroundColor,
      border: "1px solid ".concat(borderColor),
      borderRadius: radius.s,
      // 8px
      transition: 'all 0.2s ease',
      width: getWidth()
    };
  }, [disabled, readOnly, error, isFocused, isHovered, width]);
  var getInputStyles = useCallback(function () {
    var textColor = colors.semantic.text.tertiary; // #8D97A5 for placeholder
    if (disabled) {
      textColor = colors.semantic.text.tertiary;
    } else if (error) {
      textColor = colors.semantic.state.error; // #FF2E2E
    } else if (actualStatus === 'filled') {
      textColor = colors.semantic.text.primary; // #25282D
    }
    // readOnly일 때 커서 스타일 변경
    var cursorStyle = readOnly ? 'default' : 'text';
    return __assign({
      flex: 1,
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      color: textColor,
      cursor: cursorStyle
    }, textStyles.body1);
  }, [disabled, error, actualStatus, readOnly]);
  var getIconColor = useCallback(function () {
    if (disabled) {
      return colors.semantic.disabled.foreground; // #D1D5DB
    } else if (error) {
      return colors.semantic.state.error; // #FF2E2E
    } else {
      return colors.semantic.text.primary; // #25282D
    }
  }, [disabled, error]);
  var handleFocus = useCallback(function () {
    if (!disabled && !readOnly) {
      setIsFocused(true);
      onFocus === null || onFocus === void 0 ? void 0 : onFocus();
    }
  }, [disabled, readOnly, onFocus]);
  var handleBlur = useCallback(function () {
    setIsFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur();
  }, [onBlur]);
  var handleChange = useCallback(function (e) {
    if (readOnly) return; // readOnly일 때 값 변경 방지
    var newValue = e.target.value;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  }, [value, onChange, readOnly]);
  var handleMouseEnter = useCallback(function () {
    if (!disabled && !readOnly && !isFocused) {
      setIsHovered(true);
    }
  }, [disabled, readOnly, isFocused]);
  var handleMouseLeave = useCallback(function () {
    setIsHovered(false);
  }, []);
  var iconColor = getIconColor();
  // Leading 아이콘 렌더링
  var renderLeadingIcon = function () {
    if (leadingIconType) {
      return jsx(Icon, {
        type: leadingIconType,
        size: 20,
        color: iconColor,
        onClick: onLeadingIconClick
      });
    }
    if (leadingIcon) {
      return jsx("div", {
        style: {
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: iconColor
        },
        children: leadingIcon
      });
    }
    return null;
  };
  // Trailing 아이콘 렌더링
  var renderTrailingIcon = function () {
    if (trailingIconType) {
      return jsx(Icon, {
        type: trailingIconType,
        size: 20,
        color: iconColor,
        onClick: onTrailingIconClick
      });
    }
    if (trailingIcon) {
      return jsx("div", {
        style: {
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: iconColor
        },
        children: trailingIcon
      });
    }
    return null;
  };
  return jsxs("div", {
    className: "text-field-wrapper ".concat(className),
    children: [jsxs("div", {
      style: getContainerStyles(),
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [renderLeadingIcon(), jsx("input", __assign({
        ref: ref,
        type: type,
        value: currentValue,
        placeholder: placeholder,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        disabled: disabled,
        readOnly: readOnly,
        style: getInputStyles()
      }, restProps)), renderTrailingIcon()]
    }), error && errorMessage && jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing.xxs,
        // 4px
        marginTop: spacing.xs // 8px
      },
      children: [jsx(Icon, {
        type: "dialog",
        size: 16,
        color: colors.semantic.state.error
      }), jsx("span", {
        style: {
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '18px',
          color: colors.semantic.state.error,
          fontFamily: 'Pretendard'
        },
        children: errorMessage
      })]
    }), jsx("style", {
      children: "\n            .text-field-wrapper input::placeholder {\n              color: ".concat(colors.semantic.text.tertiary, ";\n            }\n          ")
    })]
  });
});
TextField.displayName = 'TextField';

export { BoxButton, Checkbox, Chips, Dropdown, Font, Icon, Label, Modal, Popup, Radio, TextArea, TextButton, TextField, TextInput, Toast, ToastProvider, Toggle, useToast };
//# sourceMappingURL=index.esm.js.map
