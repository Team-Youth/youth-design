'use strict';

var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
var Svg = require('react-native-svg');
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

var getIconSvg = function (type, size, color) {
  var iconMap = {
    hamburger: jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "M3 12h18M3 6h18M3 18h18",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    search: jsxRuntime.jsxs(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: [jsxRuntime.jsx(Svg.Circle, {
        cx: "11",
        cy: "11",
        r: "8",
        stroke: color,
        strokeWidth: "2"
      }), jsxRuntime.jsx(Svg.Path, {
        d: "m21 21-4.35-4.35",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })]
    }),
    close: jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "m18 6-12 12M6 6l12 12",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    check: jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "M20 6 9 17l-5-5",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    add: jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "M12 5v14M5 12h14",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    minus: jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "M5 12h14",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    home: jsxRuntime.jsxs(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: [jsxRuntime.jsx(Svg.Path, {
        d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), jsxRuntime.jsx(Svg.Path, {
        d: "M9 22V12h6v10",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })]
    }),
    heart: jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    'arrow-down': jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "M12 5v14M5 12l7 7 7-7",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    'arrow-up': jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "M12 19V5M5 12l7-7 7 7",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    'arrow-right': jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "M5 12h14M12 5l7 7-7 7",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    'arrow-left': jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "M19 12H5M12 19l-7-7 7-7",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    'chevron-left': jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "m15 18-6-6 6-6",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    'chevron-right': jsxRuntime.jsx(Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: jsxRuntime.jsx(Svg.Path, {
        d: "m9 18 6-6-6-6",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    })
  };
  return iconMap[type] || iconMap.close; // fallback to close icon
};
var Icon = function (_a) {
  var type = _a.type,
    _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.color,
    color = _c === void 0 ? colors.primary.coolGray[800] : _c,
    onPress = _a.onPress,
    style = _a.style;
  var iconSvg = getIconSvg(type, size, color);
  if (onPress) {
    return jsxRuntime.jsx(reactNative.TouchableOpacity, {
      onPress: onPress,
      style: [{
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center'
      }, style],
      activeOpacity: 0.7,
      children: iconSvg
    });
  }
  return iconSvg;
};

var Button = function (_a) {
  var _b = _a.type,
    type = _b === void 0 ? 'solid' : _b,
    _c = _a.level,
    level = _c === void 0 ? 'CTA' : _c,
    _d = _a.size,
    size = _d === void 0 ? 'l' : _d,
    width = _a.width,
    _e = _a.disabled,
    disabled = _e === void 0 ? false : _e,
    leftIcon = _a.leftIcon,
    rightIcon = _a.rightIcon,
    iconOnly = _a.iconOnly,
    children = _a.children,
    onPress = _a.onPress,
    style = _a.style,
    _f = _a.isLoading,
    isLoading = _f === void 0 ? false : _f,
    _g = _a.underline,
    underline = _g === void 0 ? false : _g;
  var isIconOnlyButton = Boolean(iconOnly && !children);
  // Size configurations
  var sizeConfig = {
    l: {
      paddingHorizontal: isIconOnlyButton ? 16 : 16,
      paddingVertical: isIconOnlyButton ? 12 : 12,
      borderRadius: 12,
      height: 48,
      fontSize: 16,
      fontWeight: '500',
      iconSize: isIconOnlyButton ? 24 : 20,
      gap: 4
    },
    m: {
      paddingHorizontal: isIconOnlyButton ? 16 : type === 'text' ? 12 : 12,
      paddingVertical: isIconOnlyButton ? 12 : type === 'text' ? 0 : 8,
      borderRadius: isIconOnlyButton ? 12 : type === 'text' ? 12 : 8,
      height: isIconOnlyButton ? 40 : type === 'text' ? 24 : 40,
      fontSize: 14,
      fontWeight: '500',
      iconSize: 16,
      gap: 4
    },
    s: {
      paddingHorizontal: isIconOnlyButton ? 16 : type === 'text' ? 8 : 8,
      paddingVertical: isIconOnlyButton ? 12 : type === 'text' ? 0 : 6,
      borderRadius: isIconOnlyButton ? 12 : type === 'text' ? 12 : 4,
      height: isIconOnlyButton ? 40 : type === 'text' ? 20 : 32,
      fontSize: 12,
      fontWeight: '500',
      iconSize: type === 'text' ? 14 : 16,
      gap: 4
    },
    xs: {
      paddingHorizontal: 4,
      paddingVertical: 0,
      borderRadius: 12,
      height: 20,
      fontSize: 12,
      fontWeight: leftIcon || rightIcon ? '500' : '400',
      iconSize: 14,
      gap: 4
    }
  };
  var getButtonStyle = function () {
    if (size === 'xs' && type !== 'text') {
      throw new Error('xs size is only available for text type buttons');
    }
    if (type === 'text' && size === 'l') {
      throw new Error('large size is not available for text type buttons');
    }
    var config = sizeConfig[size];
    var getWidth = function () {
      if (width === 'fill') {
        return '100%';
      }
      if (typeof width === 'number') {
        return width;
      }
      return undefined;
    };
    var buttonStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: config.paddingHorizontal,
      paddingVertical: config.paddingVertical,
      borderRadius: config.borderRadius,
      width: getWidth(),
      height: config.height,
      borderWidth: type === 'text' ? 0 : 1,
      borderColor: 'transparent'
    };
    if (type === 'solid') {
      buttonStyle = __assign(__assign({}, buttonStyle), getSolidStyle(level, disabled, isLoading));
    } else if (type === 'outlined') {
      buttonStyle = __assign(__assign({}, buttonStyle), getOutlinedStyle(disabled));
    } else if (type === 'text') {
      buttonStyle = __assign(__assign({}, buttonStyle), getTextStyle());
    }
    return buttonStyle;
  };
  var getTextStyleConfig = function () {
    var config = sizeConfig[size];
    var textColor = colors.semantic.text.primary;
    if (disabled) {
      textColor = colors.semantic.disabled.foreground;
    } else if (type === 'solid') {
      if (level === 'CTA') {
        textColor = colors.semantic.background.primary;
      } else if (level === 'secondary') {
        textColor = colors.primary.mainviolet;
      } else if (level === 'tertiary') {
        textColor = colors.semantic.text.primary;
      }
    }
    return {
      fontSize: config.fontSize,
      fontWeight: config.fontWeight,
      color: textColor,
      textDecorationLine: type === 'text' && underline ? 'underline' : 'none'
    };
  };
  var getSolidStyle = function (level, disabled, isLoading) {
    if (disabled) {
      return {
        backgroundColor: colors.semantic.disabled.background,
        borderColor: colors.semantic.disabled.background
      };
    }
    if (isLoading) {
      if (level === 'CTA') {
        return {
          backgroundColor: colors.primary.mainviolet,
          borderColor: colors.primary.mainviolet
        };
      } else if (level === 'secondary') {
        return {
          backgroundColor: colors.primary.tint.violet[200],
          borderColor: colors.primary.tint.violet[200]
        };
      } else if (level === 'tertiary') {
        return {
          backgroundColor: colors.semantic.disabled.background,
          borderColor: colors.semantic.disabled.background
        };
      }
    }
    var levelColors = {
      CTA: {
        backgroundColor: colors.primary.mainviolet,
        borderColor: colors.primary.mainviolet
      },
      secondary: {
        backgroundColor: colors.primary.tint.violet[100],
        borderColor: colors.primary.tint.violet[100]
      },
      tertiary: {
        backgroundColor: colors.semantic.disabled.background,
        borderColor: colors.semantic.disabled.background
      }
    };
    return levelColors[level];
  };
  var getOutlinedStyle = function (disabled, isLoading) {
    if (disabled) {
      return {
        backgroundColor: colors.semantic.background.primary,
        borderColor: colors.semantic.disabled.foreground
      };
    }
    return {
      backgroundColor: colors.semantic.background.primary,
      borderColor: colors.semantic.border.strong
    };
  };
  var getTextStyle = function (disabled) {
    return {
      backgroundColor: 'transparent',
      borderWidth: 0
    };
  };
  var getIconColor = function () {
    if (disabled) {
      return colors.semantic.disabled.foreground;
    }
    if (type === 'solid') {
      if (level === 'CTA') {
        return colors.semantic.background.primary;
      } else if (level === 'secondary') {
        return colors.primary.mainviolet;
      } else if (level === 'tertiary') {
        return colors.semantic.text.primary;
      }
    }
    return colors.semantic.text.primary;
  };
  var handlePress = function () {
    if (!disabled && !isLoading && onPress) {
      onPress();
    }
  };
  var renderContent = function () {
    if (isLoading) {
      return jsxRuntime.jsx(reactNative.ActivityIndicator, {
        size: "small",
        color: getIconColor()
      });
    }
    var config = sizeConfig[size];
    var iconColor = getIconColor();
    if (isIconOnlyButton && iconOnly) {
      return jsxRuntime.jsx(Icon, {
        type: iconOnly,
        size: config.iconSize,
        color: iconColor
      });
    }
    return jsxRuntime.jsxs(reactNative.View, {
      style: [styles$1.contentContainer, {
        gap: leftIcon || rightIcon ? config.gap : 0
      }],
      children: [leftIcon && jsxRuntime.jsx(Icon, {
        type: leftIcon,
        size: config.iconSize,
        color: iconColor
      }), children && jsxRuntime.jsx(reactNative.Text, {
        style: getTextStyleConfig(),
        children: children
      }), rightIcon && jsxRuntime.jsx(Icon, {
        type: rightIcon,
        size: config.iconSize,
        color: iconColor
      })]
    });
  };
  return jsxRuntime.jsx(reactNative.TouchableOpacity, {
    style: [getButtonStyle(), style],
    onPress: handlePress,
    disabled: disabled || isLoading,
    activeOpacity: 0.7,
    children: renderContent()
  });
};
var styles$1 = reactNative.StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

var TextInput = function (_a) {
  var placeholder = _a.placeholder,
    value = _a.value,
    onChangeText = _a.onChangeText,
    onFocus = _a.onFocus,
    onBlur = _a.onBlur,
    _b = _a.disabled,
    disabled = _b === void 0 ? false : _b,
    _c = _a.error,
    error = _c === void 0 ? false : _c,
    errorMessage = _a.errorMessage,
    label = _a.label,
    _d = _a.required,
    required = _d === void 0 ? false : _d,
    leftIcon = _a.leftIcon,
    rightIcon = _a.rightIcon,
    _e = _a.keyboardType,
    keyboardType = _e === void 0 ? 'default' : _e,
    _f = _a.secureTextEntry,
    secureTextEntry = _f === void 0 ? false : _f,
    maxLength = _a.maxLength,
    _g = _a.multiline,
    multiline = _g === void 0 ? false : _g,
    _h = _a.numberOfLines,
    numberOfLines = _h === void 0 ? 1 : _h,
    style = _a.style,
    inputStyle = _a.inputStyle;
  var _j = react.useState(false),
    isFocused = _j[0],
    setIsFocused = _j[1];
  var handleFocus = function (e) {
    setIsFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  var handleBlur = function (e) {
    setIsFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  var getContainerStyle = function () {
    var borderColor = colors.semantic.border.default;
    if (error) {
      borderColor = colors.semantic.state.error;
    } else if (isFocused) {
      borderColor = colors.primary.mainviolet;
    } else if (disabled) {
      borderColor = colors.semantic.disabled.foreground;
    }
    return {
      borderWidth: 1,
      borderColor: borderColor,
      borderRadius: 8,
      backgroundColor: disabled ? colors.semantic.disabled.background : colors.semantic.background.primary,
      paddingHorizontal: 12,
      paddingVertical: multiline ? 12 : 14,
      minHeight: multiline ? numberOfLines * 20 + 24 : 48
    };
  };
  var getInputStyle = function () {
    return {
      flex: 1,
      fontSize: 14,
      color: disabled ? colors.semantic.disabled.foreground : colors.semantic.text.primary,
      textAlignVertical: multiline ? 'top' : 'center',
      includeFontPadding: false
    };
  };
  var getLabelStyle = function () {
    return {
      fontSize: 14,
      fontWeight: '500',
      color: colors.semantic.text.primary,
      marginBottom: 8
    };
  };
  var getErrorStyle = function () {
    return {
      fontSize: 12,
      color: colors.semantic.state.error,
      marginTop: 4
    };
  };
  var iconColor = disabled ? colors.semantic.disabled.foreground : error ? colors.semantic.state.error : colors.semantic.text.tertiary;
  return jsxRuntime.jsxs(reactNative.View, {
    style: style,
    children: [label && jsxRuntime.jsxs(reactNative.Text, {
      style: getLabelStyle(),
      children: [label, required && jsxRuntime.jsx(reactNative.Text, {
        style: {
          color: colors.semantic.state.error
        },
        children: " *"
      })]
    }), jsxRuntime.jsxs(reactNative.View, {
      style: [styles.inputContainer, getContainerStyle()],
      children: [leftIcon && jsxRuntime.jsx(reactNative.View, {
        style: styles.iconContainer,
        children: jsxRuntime.jsx(Icon, {
          type: leftIcon,
          size: 20,
          color: iconColor
        })
      }), jsxRuntime.jsx(reactNative.TextInput, {
        style: [getInputStyle(), inputStyle],
        placeholder: placeholder,
        placeholderTextColor: colors.semantic.text.tertiary,
        value: value,
        onChangeText: onChangeText,
        onFocus: handleFocus,
        onBlur: handleBlur,
        editable: !disabled,
        keyboardType: keyboardType,
        secureTextEntry: secureTextEntry,
        maxLength: maxLength,
        multiline: multiline,
        numberOfLines: multiline ? numberOfLines : 1,
        textAlignVertical: multiline ? 'top' : 'center'
      }), rightIcon && jsxRuntime.jsx(reactNative.View, {
        style: styles.iconContainer,
        children: jsxRuntime.jsx(Icon, {
          type: rightIcon,
          size: 20,
          color: iconColor
        })
      })]
    }), error && errorMessage && jsxRuntime.jsx(reactNative.Text, {
      style: getErrorStyle(),
      children: errorMessage
    })]
  });
};
var styles = reactNative.StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    marginHorizontal: 4
  }
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
// Font Sizes (clamp를 사용한 반응형 폰트)
var fontSize = {
  xxxxl: 'clamp(1.75rem, 4vw, 2rem)',
  // 28px ~ 32px
  xxxl: 'clamp(1.5rem, 3.5vw, 1.75rem)',
  // 24px ~ 28px
  xxl: 'clamp(1.25rem, 3vw, 1.5rem)',
  // 20px ~ 24px
  xl: 'clamp(1.125rem, 2.5vw, 1.25rem)',
  // 18px ~ 20px
  l: 'clamp(1rem, 2vw, 1.125rem)',
  // 16px ~ 18px
  m: 'clamp(0.875rem, 1.5vw, 1rem)',
  // 14px ~ 16px
  s: 'clamp(0.75rem, 1.25vw, 0.875rem)',
  // 12px ~ 14px
  xs: 'clamp(0.625rem, 1vw, 0.75rem)',
  // 10px ~ 12px
  xxs: 'clamp(0.5625rem, 0.875vw, 0.625rem)',
  // 9px ~ 10px
  xxxs: 'clamp(0.625rem, 1vw, 0.688rem)' // 10px ~ 11px
};
// Font Weights
var fontWeight = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400
};
// Line Heights (상대 단위로 변경)
var lineHeight = {
  xxxxl: '1.3',
  // 130%
  xxxl: '1.3',
  // 130%
  xxl: '1.33',
  // 133%
  xl: '1.4',
  // 140%
  l: '1.33',
  // 133%
  m: '1.5',
  // 150%
  s: '1.57',
  // 157%
  xs: '1.67',
  // 167%
  xxs: '1.8',
  // 180%
  xxxs: '1.55' // 155%
};
// Letter Spacings
var letterSpacing = {
  m: '0',
  s: '-1%',
  xs: '-2%'
};
// Responsive breakpoints for additional control
var breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px'
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
  textStyles: textStyles,
  breakpoints: breakpoints
};

var typography$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    breakpoints: breakpoints,
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

exports.Button = Button;
exports.Icon = Icon;
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
