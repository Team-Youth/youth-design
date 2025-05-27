'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
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

var LoadingIcon = function () {
  return jsxRuntime.jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "loading-icon",
    children: jsxRuntime.jsx("circle", {
      cx: "8",
      cy: "8",
      r: "6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeDasharray: "37.7",
      strokeDashoffset: "37.7"
    })
  });
};
var BoxButton = function (_a) {
  var _b = _a.type,
    type = _b === void 0 ? 'solid' : _b,
    _c = _a.size,
    size = _c === void 0 ? 'l' : _c,
    _d = _a.disabled,
    disabled = _d === void 0 ? false : _d,
    icon = _a.icon,
    children = _a.children,
    onClick = _a.onClick,
    _e = _a.className,
    className = _e === void 0 ? '' : _e,
    _f = _a.isLoading,
    isLoading = _f === void 0 ? false : _f;
  var _g = react.useState(false),
    isHovered = _g[0],
    setIsHovered = _g[1];
  var _h = react.useState(false),
    isPressed = _h[0],
    setIsPressed = _h[1];
  // Size configurations
  var sizeConfig = {
    l: {
      paddingX: '16px',
      paddingY: '12px',
      gap: '4px',
      borderRadius: '12px',
      width: '320px',
      height: '48px'
    },
    m: {
      paddingX: '12px',
      paddingY: '8px',
      gap: '4px',
      borderRadius: '8px',
      width: '320px',
      height: '40px'
    },
    s: {
      paddingX: '8px',
      paddingY: '6px',
      gap: '4px',
      borderRadius: '4px',
      width: '320px',
      height: '32px'
    }
  };
  var getStyles = function () {
    var config = sizeConfig[size];
    var styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: config.gap,
      padding: "".concat(config.paddingY, " ").concat(config.paddingX),
      borderRadius: config.borderRadius,
      width: config.width,
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
    return jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [(icon === null || icon === void 0 ? void 0 : icon.left) && jsxRuntime.jsx("span", {
        children: icon.left
      }), children && jsxRuntime.jsx("span", {
        children: children
      }), (icon === null || icon === void 0 ? void 0 : icon.right) && jsxRuntime.jsx("span", {
        children: icon.right
      })]
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

exports.BoxButton = BoxButton;
//# sourceMappingURL=index.js.map
