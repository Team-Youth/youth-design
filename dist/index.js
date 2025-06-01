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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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

// 아이콘 SVG 임포트 (동적으로 로드하기 위한 매핑)
var iconMap = {
  hamburger: '/src/components/icon/assets/hamburger.svg',
  search: '/src/components/icon/assets/search.svg',
  close: '/src/components/icon/assets/close.svg',
  check: '/src/components/icon/assets/check.svg',
  add: '/src/components/icon/assets/add.svg',
  minus: '/src/components/icon/assets/minus.svg',
  truncation: '/src/components/icon/assets/Truncation.svg',
  more: '/src/components/icon/assets/more.svg',
  home: '/src/components/icon/assets/homeStroke.svg',
  'home-filled': '/src/components/icon/assets/homeFilled.svg',
  heart: '/src/components/icon/assets/heartStroke.svg',
  'heart-filled': '/src/components/icon/assets/heartFilled.svg',
  'my-page': '/src/components/icon/assets/profileStroke.svg',
  'my-page-filled': '/src/components/icon/assets/profileFilled.svg',
  download: '/src/components/icon/assets/download.svg',
  modify: '/src/components/icon/assets/modify.svg',
  duplicate: '/src/components/icon/assets/duplicate.svg',
  dialog: '/src/components/icon/assets/dialog.svg',
  'arrow-down': '/src/components/icon/assets/chevronDown.svg',
  'arrow-up': '/src/components/icon/assets/arrowUp.svg',
  'arrow-right': '/src/components/icon/assets/chevronRight.svg',
  'arrow-left': '/src/components/icon/assets/chevronLeft.svg',
  'chevron-left': '/src/components/icon/assets/chevronLeft.svg',
  'chevron-right': '/src/components/icon/assets/chevronRight.svg',
  'chevron-up': '/src/components/icon/assets/chevronUp.svg',
  'chevron-down': '/src/components/icon/assets/chevronDown.svg',
  calendar: '/src/components/icon/assets/calendarStroke.svg',
  'calendar-filled': '/src/components/icon/assets/calendarFilled.svg',
  'time-stroke': '/src/components/icon/assets/timeStroke.svg',
  'time-filled': '/src/components/icon/assets/timeFilled.svg',
  'switch-circle-stroke': '/src/components/icon/assets/switchCircleStroke.svg',
  'switch-circle-filled': '/src/components/icon/assets/switchCircleFilled.svg',
  sound: '/src/components/icon/assets/sound.svg',
  'share-ios': '/src/components/icon/assets/shareIos.svg',
  'settings-stroke': '/src/components/icon/assets/settingsStroke.svg',
  'settings-filled': '/src/components/icon/assets/settingsFilled.svg',
  reset: '/src/components/icon/assets/reset.svg',
  reload: '/src/components/icon/assets/reload.svg',
  receipt: '/src/components/icon/assets/receipt.svg',
  'radio-selected': '/src/components/icon/assets/radioSelected.svg',
  'radio-resting': '/src/components/icon/assets/radioResting.svg',
  'question-stroke': '/src/components/icon/assets/questionStroke.svg',
  'question-filled': '/src/components/icon/assets/questionFilled.svg',
  qr: '/src/components/icon/assets/qr.svg',
  'profile-stroke': '/src/components/icon/assets/profileStroke.svg',
  'profile-filled': '/src/components/icon/assets/profileFilled.svg',
  print: '/src/components/icon/assets/print.svg',
  'person-stroke': '/src/components/icon/assets/personStroke.svg',
  'person-filled': '/src/components/icon/assets/personFilled.svg',
  'payment-stroke': '/src/components/icon/assets/paymentStroke.svg',
  'payment-filled': '/src/components/icon/assets/paymenrFilled.svg',
  parcel: '/src/components/icon/assets/parcel.svg',
  'number-0': '/src/components/icon/assets/number=0.svg',
  'number-1': '/src/components/icon/assets/number=1.svg',
  'number-2': '/src/components/icon/assets/number=2.svg',
  'number-3': '/src/components/icon/assets/number=3.svg',
  'number-4': '/src/components/icon/assets/number=4.svg',
  'number-5': '/src/components/icon/assets/number=5.svg',
  'number-6': '/src/components/icon/assets/number=6.svg',
  'number-7': '/src/components/icon/assets/number=7.svg',
  'number-8': '/src/components/icon/assets/number=8.svg',
  'number-9': '/src/components/icon/assets/number=9.svg',
  new: '/src/components/icon/assets/New.svg',
  'minus-circle-stroke': '/src/components/icon/assets/minusCircleStroke.svg',
  'minus-circle-filled': '/src/components/icon/assets/minusCircleFilled.svg',
  microphone: '/src/components/icon/assets/microphone.svg',
  'mail-stroke': '/src/components/icon/assets/mailStroke.svg',
  'mail-filled': '/src/components/icon/assets/mailFilled.svg',
  'logo-naver': '/src/components/icon/assets/logoNaver.svg',
  'logo-kakao': '/src/components/icon/assets/logoKakao.svg',
  'logo-google': '/src/components/icon/assets/logoGoogle.svg',
  'logo-apple': '/src/components/icon/assets/logoApple.svg',
  lock: '/src/components/icon/assets/Lock.svg',
  'location-stroke': '/src/components/icon/assets/locationStroke.svg',
  'location-filled': '/src/components/icon/assets/locationFilled.svg',
  'info-stroke': '/src/components/icon/assets/infoStroke.svg',
  'info-filled': '/src/components/icon/assets/infoFilled.svg',
  image: '/src/components/icon/assets/image.svg',
  'id-card-stroke': '/src/components/icon/assets/idCardStroke.svg',
  'id-card-filled': '/src/components/icon/assets/idCardFilled.svg',
  'home-stroke': '/src/components/icon/assets/homeStroke.svg',
  'history-stroke': '/src/components/icon/assets/historyStroke.svg',
  'history-filled': '/src/components/icon/assets/historyFilled.svg',
  'heart-stroke': '/src/components/icon/assets/heartStroke.svg',
  gym: '/src/components/icon/assets/gym.svg',
  guide: '/src/components/icon/assets/guide.svg',
  'delete-stroke': '/src/components/icon/assets/deleteStroke.svg',
  'delete-filled': '/src/components/icon/assets/deleteFilled.svg',
  'dashboard-stroke': '/src/components/icon/assets/dashboardStroke.svg',
  'dashboard-filled': '/src/components/icon/assets/dashboardFilled.svg',
  'customer-service': '/src/components/icon/assets/customerService.svg',
  'check-circle-stroke': '/src/components/icon/assets/checkCircleStroke.svg',
  'check-circle-filled': '/src/components/icon/assets/checkCircleFilled.svg',
  'checkbox-selected-stroke': '/src/components/icon/assets/checkboxSelectedStroke.svg',
  'checkbox-selected-filled': '/src/components/icon/assets/checkboxSelectedFilled.svg',
  'checkbox-resting': '/src/components/icon/assets/checkboxResting.svg',
  'caution-stroke': '/src/components/icon/assets/cautionStroke.svg',
  'caution-filled': '/src/components/icon/assets/cautionFilled.svg',
  'cancel-stroke': '/src/components/icon/assets/cancelStroke.svg',
  'cancel-filled': '/src/components/icon/assets/cancelFilled.svg',
  'camera-stroke': '/src/components/icon/assets/cameraStorke.svg',
  'camera-filled': '/src/components/icon/assets/cameraFilled.svg',
  'call-stroke': '/src/components/icon/assets/callStroke.svg',
  'call-filled': '/src/components/icon/assets/callFilled.svg',
  'calendar-stroke': '/src/components/icon/assets/calendarStroke.svg',
  'bookmark-stroke': '/src/components/icon/assets/bookmarkStroke.svg',
  'bookmark-filled': '/src/components/icon/assets/bookmarkFilled.svg',
  'bell-stroke': '/src/components/icon/assets/bellStroke.svg',
  'bell-filled': '/src/components/icon/assets/bellFilled.svg'
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
  var _f = react.useState(''),
    svgContent = _f[0],
    setSvgContent = _f[1];
  react.useEffect(function () {
    var loadSvg = function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var response, svgText, error_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3,, 4]);
              return [4 /*yield*/, fetch(iconMap[type])];
            case 1:
              response = _a.sent();
              return [4 /*yield*/, response.text()];
            case 2:
              svgText = _a.sent();
              // SVG 내용에서 fill 색상을 동적으로 변경
              svgText = svgText.replace(/fill="[^"]*"/g, "fill=\"".concat(color, "\""));
              setSvgContent(svgText);
              return [3 /*break*/, 4];
            case 3:
              error_1 = _a.sent();
              console.error("Failed to load icon: ".concat(type), error_1);
              return [3 /*break*/, 4];
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };
    loadSvg();
  }, [type, color]);
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
  return jsxRuntime.jsx("div", {
    className: "icon icon--".concat(type, " ").concat(className),
    style: iconStyle,
    onClick: handleClick,
    role: onClick ? 'button' : 'img',
    tabIndex: onClick ? 0 : undefined,
    onKeyDown: handleKeyDown,
    dangerouslySetInnerHTML: {
      __html: svgContent
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
  return jsxRuntime.jsxs("div", {
    className: "label label--".concat(size, " label--").concat(type, " label--").concat(color, " ").concat(className),
    style: getStyles(),
    children: [leadingIcon && jsxRuntime.jsx("span", {
      className: "label__leading-icon",
      style: getIconStyles(),
      children: leadingIcon
    }), children && jsxRuntime.jsx(Font, {
      type: config.fontSize,
      fontWeight: "medium",
      color: colorStyle.textColor,
      children: children
    }), trailingIcon && jsxRuntime.jsx("span", {
      className: "label__trailing-icon",
      style: getIconStyles(),
      children: trailingIcon
    })]
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
    return jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [(icon === null || icon === void 0 ? void 0 : icon.left) && icon.left, jsxRuntime.jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [children && jsxRuntime.jsx("span", {
          children: children
        }), chevron && jsxRuntime.jsx(Icon, {
          type: "arrow-right",
          size: 20,
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
  var _g = react.useState(false),
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
      return jsxRuntime.jsx(Font, {
        type: "body2",
        fontWeight: "medium",
        color: getTextColor(),
        children: children
      });
    }
    if (iconPosition === 'leading') {
      return jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [jsxRuntime.jsx("span", {
          className: "chips-icon",
          style: {
            color: getIconColor()
          },
          children: icon
        }), children && jsxRuntime.jsx(Font, {
          type: "body2",
          fontWeight: "medium",
          color: getTextColor(),
          children: children
        })]
      });
    } else {
      return jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [children && jsxRuntime.jsx(Font, {
          type: "body2",
          fontWeight: "medium",
          color: getTextColor(),
          children: children
        }), jsxRuntime.jsx("span", {
          className: "chips-icon",
          style: {
            color: getIconColor()
          },
          children: icon
        })]
      });
    }
  };
  return jsxRuntime.jsx("button", {
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
  var _g = react.useState(false),
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
  var labelContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  };
  return jsxRuntime.jsxs("div", {
    className: "youth-radio-button ".concat(className),
    style: containerStyles,
    onClick: handleChange,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [jsxRuntime.jsx("input", {
      type: "radio",
      name: name,
      value: value,
      checked: checked,
      disabled: disabled,
      onChange: function () {},
      style: {
        display: 'none'
      }
    }), jsxRuntime.jsx("div", {
      style: getRadioStyles(),
      children: jsxRuntime.jsx("div", {
        style: getDotStyles()
      })
    }), (label || description) && jsxRuntime.jsxs("div", {
      style: labelContainerStyles,
      children: [label && jsxRuntime.jsx("span", {
        style: getLabelStyles(),
        children: label
      }), description && jsxRuntime.jsx("span", {
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
  var _g = react.useState(false),
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
    return jsxRuntime.jsx("svg", {
      width: sizeConfig.iconSize,
      height: sizeConfig.iconSize,
      viewBox: "0 0 14 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: jsxRuntime.jsx("path", {
        fill: getIconColor(),
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.3821 0.997823C13.7285 1.30089 13.7636 1.82736 13.4605 2.17372L5.80428 10.9237C5.64699 11.1035 5.42012 11.2071 5.18127 11.2083C4.94241 11.2095 4.71453 11.1081 4.55546 10.9299L0.545044 6.43733C0.238554 6.09399 0.268427 5.56719 0.611766 5.2607C0.955106 4.95421 1.4819 4.98409 1.78839 5.32743L5.17089 9.11661L12.2062 1.07622C12.5093 0.729853 13.0358 0.694755 13.3821 0.997823Z"
      })
    });
  };
  return jsxRuntime.jsxs("div", {
    className: "youth-checkbox ".concat(className),
    style: containerStyles,
    onClick: handleChange,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [jsxRuntime.jsx("input", {
      type: "checkbox",
      checked: checked,
      disabled: disabled,
      onChange: function () {},
      style: {
        display: 'none'
      }
    }), jsxRuntime.jsx("div", {
      style: getCheckboxStyles(),
      children: checked && jsxRuntime.jsx(CheckIcon, {})
    }), (label || description) && jsxRuntime.jsxs("div", {
      style: labelContainerStyles,
      children: [label && jsxRuntime.jsx("span", {
        style: getLabelStyles(),
        children: label
      }), description && jsxRuntime.jsx("span", {
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
  var _g = react.useState(false),
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
  return jsxRuntime.jsxs("div", {
    className: "youth-toggle ".concat(className),
    style: containerStyles,
    onClick: handleChange,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [jsxRuntime.jsx("input", {
      type: "checkbox",
      checked: checked,
      disabled: disabled,
      onChange: function () {},
      style: {
        display: 'none'
      }
    }), jsxRuntime.jsx("div", {
      style: getToggleStyles(),
      children: jsxRuntime.jsx("div", {
        style: getThumbStyles()
      })
    }), (label || description) && jsxRuntime.jsxs("div", {
      style: labelContainerStyles,
      children: [label && jsxRuntime.jsx("span", {
        style: getLabelStyles(),
        children: label
      }), description && jsxRuntime.jsx("span", {
        style: getDescriptionStyles(),
        children: description
      })]
    })]
  });
};

// 아이콘 컴포넌트들
var CheckCircleIcon = function (_a) {
  var color = _a.color;
  return jsxRuntime.jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: [jsxRuntime.jsx("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: color
    }), jsxRuntime.jsx("path", {
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
  return jsxRuntime.jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: [jsxRuntime.jsx("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: color
    }), jsxRuntime.jsx("path", {
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
  return jsxRuntime.jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: [jsxRuntime.jsx("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: color
    }), jsxRuntime.jsx("rect", {
      x: "11",
      y: "7",
      width: "2",
      height: "6",
      fill: "white",
      rx: "1"
    }), jsxRuntime.jsx("circle", {
      cx: "12",
      cy: "16",
      r: "1",
      fill: "white"
    })]
  });
};
var InfoIcon = function (_a) {
  var color = _a.color;
  return jsxRuntime.jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: [jsxRuntime.jsx("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: color
    }), jsxRuntime.jsx("circle", {
      cx: "12",
      cy: "8",
      r: "1",
      fill: "white"
    }), jsxRuntime.jsx("rect", {
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
  return jsxRuntime.jsxs("div", {
    className: "toast toast--".concat(status, " ").concat(className),
    style: toastStyle,
    role: "alert",
    "aria-live": "polite",
    children: [showLeadingIcon && jsxRuntime.jsx("div", {
      className: "toast__icon",
      children: jsxRuntime.jsx(IconComponent, {
        color: config.color
      })
    }), jsxRuntime.jsxs("div", {
      className: "toast__content",
      style: contentStyle,
      children: [jsxRuntime.jsx("h3", {
        className: "toast__title",
        style: titleStyle,
        children: title
      }), description && jsxRuntime.jsx("p", {
        className: "toast__description",
        style: descriptionStyle,
        children: description
      })]
    }), showCloseButton && onClose && jsxRuntime.jsx("button", {
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
      children: jsxRuntime.jsx(Icon, {
        type: "close",
        size: 16,
        color: colors.semantic.text.tertiary
      })
    })]
  });
};

// Context 생성
var ToastContext = react.createContext(undefined);
/**
 * Toast Provider 컴포넌트
 *
 * 앱 전체에서 Toast를 관리할 수 있는 Context를 제공합니다.
 */
var ToastProvider = function (_a) {
  var children = _a.children,
    _b = _a.position,
    position = _b === void 0 ? 'top-right' : _b,
    _c = _a.defaultDuration,
    defaultDuration = _c === void 0 ? 4000 : _c;
  var _d = react.useState([]),
    toasts = _d[0],
    setToasts = _d[1];
  // Toast 추가
  var addToast = react.useCallback(function (toast) {
    var _a;
    var id = "toast-".concat(Date.now(), "-").concat(Math.random());
    var duration = (_a = toast.duration) !== null && _a !== void 0 ? _a : defaultDuration;
    var newToast = __assign(__assign({}, toast), {
      id: id,
      duration: duration
    });
    setToasts(function (prev) {
      return __spreadArray(__spreadArray([], prev, true), [newToast], false);
    });
    // 자동 제거
    if (duration > 0) {
      setTimeout(function () {
        removeToast(id);
      }, duration);
    }
    return id;
  }, [defaultDuration]);
  // Toast 제거
  var removeToast = react.useCallback(function (id) {
    setToasts(function (prev) {
      return prev.filter(function (toast) {
        return toast.id !== id;
      });
    });
  }, []);
  // 모든 Toast 제거
  var removeAllToasts = react.useCallback(function () {
    setToasts([]);
  }, []);
  // 위치별 스타일
  var getContainerStyle = function (position) {
    var baseStyle = {
      position: 'fixed',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.s,
      pointerEvents: 'none'
    };
    switch (position) {
      case 'top-right':
        return __assign(__assign({}, baseStyle), {
          top: spacing.xl,
          right: spacing.xl
        });
      case 'top-left':
        return __assign(__assign({}, baseStyle), {
          top: spacing.xl,
          left: spacing.xl
        });
      case 'bottom-right':
        return __assign(__assign({}, baseStyle), {
          bottom: spacing.xl,
          right: spacing.xl,
          flexDirection: 'column-reverse'
        });
      case 'bottom-left':
        return __assign(__assign({}, baseStyle), {
          bottom: spacing.xl,
          left: spacing.xl,
          flexDirection: 'column-reverse'
        });
      case 'top-center':
        return __assign(__assign({}, baseStyle), {
          top: spacing.xl,
          left: '50%',
          transform: 'translateX(-50%)'
        });
      case 'bottom-center':
        return __assign(__assign({}, baseStyle), {
          bottom: spacing.xl,
          left: '50%',
          transform: 'translateX(-50%)',
          flexDirection: 'column-reverse'
        });
      default:
        return __assign(__assign({}, baseStyle), {
          top: spacing.xl,
          right: spacing.xl
        });
    }
  };
  var contextValue = {
    addToast: addToast,
    removeToast: removeToast,
    removeAllToasts: removeAllToasts
  };
  return jsxRuntime.jsxs(ToastContext.Provider, {
    value: contextValue,
    children: [children, toasts.length > 0 && jsxRuntime.jsx("div", {
      style: getContainerStyle(position),
      children: toasts.map(function (toast) {
        return jsxRuntime.jsx("div", {
          style: {
            pointerEvents: 'auto'
          },
          children: jsxRuntime.jsx(Toast, __assign({}, toast, {
            onClose: function () {
              return removeToast(toast.id);
            },
            showCloseButton: true
          }))
        }, toast.id);
      })
    })]
  });
};
/**
 * useToast 훅
 *
 * Toast를 간편하게 사용할 수 있는 훅입니다.
 */
var useToast = function () {
  var context = react.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  // 편의 메서드들
  var toast = {
    success: function (title, description, options) {
      return context.addToast(__assign({
        status: 'success',
        title: title,
        description: description
      }, options));
    },
    error: function (title, description, options) {
      return context.addToast(__assign({
        status: 'error',
        title: title,
        description: description
      }, options));
    },
    warning: function (title, description, options) {
      return context.addToast(__assign({
        status: 'warning',
        title: title,
        description: description
      }, options));
    },
    info: function (title, description, options) {
      return context.addToast(__assign({
        status: 'info',
        title: title,
        description: description
      }, options));
    },
    custom: function (options) {
      return context.addToast(options);
    },
    remove: context.removeToast,
    removeAll: context.removeAllToasts
  };
  return toast;
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
  return jsxRuntime.jsx("div", {
    className: "popup-overlay ".concat(className),
    style: overlayStyle,
    onClick: handleOverlayClick,
    children: jsxRuntime.jsxs("div", {
      className: "popup",
      style: popupStyle,
      children: [jsxRuntime.jsxs("div", {
        className: "popup-content",
        style: contentStyle,
        children: [jsxRuntime.jsx("h1", {
          style: titleStyle,
          children: title
        }), description && jsxRuntime.jsx("p", {
          style: descriptionStyle,
          children: description
        })]
      }), jsxRuntime.jsxs("div", {
        className: "popup-buttons",
        style: buttonContainerStyle,
        children: [secondaryButton && jsxRuntime.jsx(BoxButton, __assign({
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
        })), jsxRuntime.jsx(BoxButton, __assign({
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
    image = _a.image,
    _b = _a.showCloseButton,
    showCloseButton = _b === void 0 ? true : _b,
    primaryButton = _a.primaryButton,
    secondaryButton = _a.secondaryButton,
    isOpen = _a.isOpen,
    onClose = _a.onClose,
    _c = _a.className,
    className = _c === void 0 ? '' : _c,
    _d = _a.style,
    style = _d === void 0 ? {} : _d;
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
  var modalStyle = {
    backgroundColor: colors.semantic.background.primary,
    borderRadius: '16px',
    padding: '32px',
    minWidth: '480px',
    maxWidth: '90vw',
    maxHeight: '90vh',
    boxShadow: shadows.m,
    display: 'flex',
    flexDirection: 'column',
    gap: secondaryButton ? '20px' : '24px'
  };
  var headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px'
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
    gap: '16px'
  };
  var descriptionStyle = __assign(__assign({}, textStyles.body1), {
    color: colors.semantic.text.secondary,
    margin: 0
  });
  var imageStyle = {
    width: '100%',
    height: '240px',
    borderRadius: '8px',
    backgroundColor: colors.primary.coolGray[100],
    objectFit: 'cover'
  };
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
  var handleCloseClick = function () {
    onClose();
  };
  return jsxRuntime.jsx("div", {
    className: "modal-overlay ".concat(className),
    style: overlayStyle,
    onClick: handleOverlayClick,
    children: jsxRuntime.jsxs("div", {
      className: "modal",
      style: modalStyle,
      children: [jsxRuntime.jsxs("div", {
        className: "modal-content",
        style: contentStyle,
        children: [jsxRuntime.jsxs("div", {
          className: "modal-header",
          style: headerStyle,
          children: [jsxRuntime.jsx("h1", {
            style: titleStyle,
            children: title
          }), showCloseButton && jsxRuntime.jsx("div", {
            style: closeButtonStyle,
            onClick: handleCloseClick,
            children: jsxRuntime.jsx(Icon, {
              type: "close",
              size: 24,
              color: colors.semantic.text.secondary
            })
          })]
        }), description && jsxRuntime.jsx("p", {
          style: descriptionStyle,
          children: description
        }), image && jsxRuntime.jsx("img", {
          src: image,
          alt: "",
          style: imageStyle,
          onError: function (e) {
            // 이미지 로드 실패 시 placeholder 스타일로 변경
            e.target.style.backgroundImage = 'none';
            e.target.style.backgroundColor = colors.primary.coolGray[100];
          }
        })]
      }), jsxRuntime.jsxs("div", {
        className: "modal-buttons",
        style: buttonContainerStyle,
        children: [secondaryButton && jsxRuntime.jsx(BoxButton, __assign({
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
        })), jsxRuntime.jsx(BoxButton, __assign({
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
    _j = _a.hideEmptyOption,
    hideEmptyOption = _j === void 0 ? false : _j;
  var _k = react.useState(false),
    isOpen = _k[0],
    setIsOpen = _k[1];
  var _l = react.useState(false),
    isAnimating = _l[0],
    setIsAnimating = _l[1];
  var _m = react.useState(false),
    shouldRender = _m[0],
    setShouldRender = _m[1];
  var _o = react.useState(null),
    hoveredOptionIndex = _o[0],
    setHoveredOptionIndex = _o[1];
  var _p = react.useState(''),
    searchText = _p[0],
    setSearchText = _p[1];
  var dropdownRef = react.useRef(null);
  var inputRef = react.useRef(null);
  var selectedOption = react.useMemo(function () {
    return options.find(function (option) {
      return option.value === value;
    });
  }, [options, value]);
  var hasSelectedOption = !!selectedOption;
  // 검색 텍스트에 따른 옵션 필터링
  var filteredOptions = react.useMemo(function () {
    if (!enableSearch || !searchText.trim()) {
      return options;
    }
    return options.filter(function (option) {
      return option.label.toLowerCase().includes(searchText.toLowerCase());
    });
  }, [options, searchText, enableSearch]);
  // 드롭다운 열기/닫기 애니메이션 관리
  react.useEffect(function () {
    if (isOpen) {
      // 열기: 먼저 DOM에 마운트하고 애니메이션 시작
      setShouldRender(true);
      // 두 번의 requestAnimationFrame으로 확실히 DOM 렌더링 후 애니메이션 시작
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
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
  }, [isOpen, enableSearch]);
  // 외부 클릭 시 드롭다운 닫기
  react.useEffect(function () {
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
  react.useEffect(function () {
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
  var getContainerStyles = react.useCallback(function () {
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
    return {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.xs,
      // 8px
      padding: '13px 16px',
      // Figma 스펙에 맞춤
      backgroundColor: backgroundColor,
      border: "1px solid ".concat(borderColor),
      borderRadius: '8px',
      // Figma 스펙에 맞춤
      transition: 'all 0.2s ease',
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: width === 'fill' ? '100%' : width,
      boxSizing: 'border-box'
    };
  }, [disabled, error, isOpen, width]);
  var getTextStyles = react.useCallback(function () {
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
      color: textColor
    };
  }, [disabled, error, hasSelectedOption]);
  var getInputStyles = react.useCallback(function () {
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
  var getIconColor = react.useCallback(function () {
    if (disabled) {
      return colors.semantic.disabled.foreground; // #D1D5DB
    } else if (error) {
      return colors.semantic.state.error; // #FF2E2E
    } else {
      return colors.semantic.text.primary; // #25282D
    }
  }, [disabled, error]);
  var getChevronIcon = react.useCallback(function () {
    return jsxRuntime.jsx(Icon, {
      type: isOpen ? 'chevron-up' : 'chevron-down',
      size: 20,
      color: "currentColor"
    });
  }, [isOpen]);
  var handleClick = react.useCallback(function () {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  }, [disabled, isOpen]);
  var handleOptionClick = react.useCallback(function (optionValue) {
    if (!disabled) {
      onChange === null || onChange === void 0 ? void 0 : onChange(optionValue);
      setIsOpen(false);
    }
  }, [disabled, onChange]);
  var handleKeyDown = react.useCallback(function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  }, [handleClick]);
  var handleInputKeyDown = react.useCallback(function (event) {
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
  var handleInputChange = react.useCallback(function (event) {
    if (!enableSearch) return;
    setSearchText(event.target.value);
    setHoveredOptionIndex(null);
  }, [enableSearch]);
  var getOptionStyles = react.useCallback(function (option, index, isSelected) {
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
  var dropdownOptionsStyle = react.useMemo(function () {
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
      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)' // 자연스러운 easing
    };
  }, [isAnimating]);
  var getCheckIcon = function () {
    return jsxRuntime.jsx(Icon, {
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
    return jsxRuntime.jsx(Icon, {
      type: leadingIconType,
      size: 20,
      color: getIconColor()
    });
  };
  return jsxRuntime.jsxs("div", {
    className: "dropdown-wrapper ".concat(className),
    ref: dropdownRef,
    style: {
      position: 'relative'
    },
    children: [jsxRuntime.jsxs("div", {
      style: getContainerStyles(),
      onClick: !isOpen || !enableSearch ? handleClick : undefined,
      onKeyDown: !isOpen || !enableSearch ? handleKeyDown : undefined,
      tabIndex: disabled || isOpen && enableSearch ? -1 : 0,
      role: "combobox",
      "aria-expanded": isOpen,
      "aria-haspopup": "listbox",
      "aria-disabled": disabled,
      children: [renderLeadingIcon(), isOpen && enableSearch ? jsxRuntime.jsx("input", {
        ref: inputRef,
        type: "text",
        value: searchText,
        onChange: handleInputChange,
        onKeyDown: handleInputKeyDown,
        placeholder: getPlaceholderText(),
        style: getInputStyles(),
        disabled: disabled
      }) : jsxRuntime.jsx("div", {
        style: getTextStyles(),
        children: getDisplayText()
      }), jsxRuntime.jsx("div", {
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
    }), shouldRender && jsxRuntime.jsx("div", {
      style: dropdownOptionsStyle,
      role: "listbox",
      children: filteredOptions.length === 0 ? !hideEmptyOption && jsxRuntime.jsx("div", {
        style: {
          padding: '13px 16px',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '22px',
          color: colors.semantic.disabled.foreground,
          fontFamily: 'Pretendard',
          textAlign: 'center'
        },
        children: enableSearch && searchText.trim() ? '검색 결과가 없습니다' : '옵션이 없습니다'
      }) : filteredOptions.map(function (option, index) {
        var isSelected = value === option.value;
        return jsxRuntime.jsxs("div", {
          style: getOptionStyles(option, index, isSelected),
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
          children: [jsxRuntime.jsx("span", {
            children: option.label
          }), isSelected && jsxRuntime.jsx("div", {
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
    }), error && errorMessage && jsxRuntime.jsx("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing.xxs,
        // 4px
        marginTop: spacing.xxs // 4px
      },
      children: jsxRuntime.jsx("span", {
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

var TextArea = react.forwardRef(function (_a, ref) {
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
  var _k = react.useState(false),
    isFocused = _k[0],
    setIsFocused = _k[1];
  var _l = react.useState(false),
    isHovered = _l[0],
    setIsHovered = _l[1];
  var _m = react.useState(defaultValue || ''),
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
  return jsxRuntime.jsxs("div", {
    className: "text-area-wrapper ".concat(className),
    children: [jsxRuntime.jsx("div", {
      style: getContainerStyles(),
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: jsxRuntime.jsx("textarea", __assign({
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
    }), (showCharacterCounter || error) && jsxRuntime.jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: error && errorMessage ? 'space-between' : 'flex-end',
        alignItems: 'center',
        marginTop: spacing.xxs,
        // 4px
        gap: spacing.s // 12px
      },
      children: [error && errorMessage && jsxRuntime.jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: spacing.xxs // 4px
        },
        children: [jsxRuntime.jsx(Icon, {
          type: "dialog",
          size: 16,
          color: colors.semantic.state.error
        }), jsxRuntime.jsx("span", {
          style: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '22px',
            color: colors.semantic.state.error,
            fontFamily: 'Pretendard'
          },
          children: errorMessage
        })]
      }), showCharacterCounter && jsxRuntime.jsxs("span", {
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
    }), jsxRuntime.jsx("style", {
      children: "\n            @keyframes blink {\n              0%, 50% { opacity: 1; }\n              51%, 100% { opacity: 0; }\n            }\n            \n            .text-area-wrapper textarea::placeholder {\n              color: ".concat(colors.semantic.text.tertiary, ";\n            }\n          ")
    })]
  });
});
TextArea.displayName = 'TextArea';

var TextField = react.forwardRef(function (_a, ref) {
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
  var _j = react.useState(false),
    isFocused = _j[0],
    setIsFocused = _j[1];
  var _k = react.useState(false),
    isHovered = _k[0],
    setIsHovered = _k[1];
  var _l = react.useState(defaultValue || ''),
    internalValue = _l[0],
    setInternalValue = _l[1];
  var currentValue = value !== undefined ? value : internalValue;
  var isEmpty = !currentValue || currentValue.length === 0;
  var actualStatus = status || (isEmpty ? 'empty' : 'filled');
  var getContainerStyles = react.useCallback(function () {
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
  var getInputStyles = react.useCallback(function () {
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
  var getIconColor = react.useCallback(function () {
    if (disabled) {
      return colors.semantic.disabled.foreground; // #D1D5DB
    } else if (error) {
      return colors.semantic.state.error; // #FF2E2E
    } else {
      return colors.semantic.text.primary; // #25282D
    }
  }, [disabled, error]);
  var handleFocus = react.useCallback(function () {
    if (!disabled && !readOnly) {
      setIsFocused(true);
      onFocus === null || onFocus === void 0 ? void 0 : onFocus();
    }
  }, [disabled, readOnly, onFocus]);
  var handleBlur = react.useCallback(function () {
    setIsFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur();
  }, [onBlur]);
  var handleChange = react.useCallback(function (e) {
    if (readOnly) return; // readOnly일 때 값 변경 방지
    var newValue = e.target.value;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  }, [value, onChange, readOnly]);
  var handleMouseEnter = react.useCallback(function () {
    if (!disabled && !readOnly && !isFocused) {
      setIsHovered(true);
    }
  }, [disabled, readOnly, isFocused]);
  var handleMouseLeave = react.useCallback(function () {
    setIsHovered(false);
  }, []);
  var iconColor = getIconColor();
  // Leading 아이콘 렌더링
  var renderLeadingIcon = function () {
    if (leadingIconType) {
      return jsxRuntime.jsx(Icon, {
        type: leadingIconType,
        size: 20,
        color: iconColor,
        onClick: onLeadingIconClick
      });
    }
    if (leadingIcon) {
      return jsxRuntime.jsx("div", {
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
      return jsxRuntime.jsx(Icon, {
        type: trailingIconType,
        size: 20,
        color: iconColor,
        onClick: onTrailingIconClick
      });
    }
    if (trailingIcon) {
      return jsxRuntime.jsx("div", {
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
  return jsxRuntime.jsxs("div", {
    className: "text-field-wrapper ".concat(className),
    children: [jsxRuntime.jsxs("div", {
      style: getContainerStyles(),
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [renderLeadingIcon(), jsxRuntime.jsx("input", __assign({
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
    }), error && errorMessage && jsxRuntime.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing.xxs,
        // 4px
        marginTop: spacing.xs // 8px
      },
      children: [jsxRuntime.jsx(Icon, {
        type: "dialog",
        size: 16,
        color: colors.semantic.state.error
      }), jsxRuntime.jsx("span", {
        style: {
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '18px',
          color: colors.semantic.state.error,
          fontFamily: 'Pretendard'
        },
        children: errorMessage
      })]
    }), jsxRuntime.jsx("style", {
      children: "\n            .text-field-wrapper input::placeholder {\n              color: ".concat(colors.semantic.text.tertiary, ";\n            }\n          ")
    })]
  });
});
TextField.displayName = 'TextField';

exports.BoxButton = BoxButton;
exports.Checkbox = Checkbox;
exports.Chips = Chips;
exports.Dropdown = Dropdown;
exports.Font = Font;
exports.Icon = Icon;
exports.Label = Label;
exports.Modal = Modal;
exports.Popup = Popup;
exports.Radio = Radio;
exports.TextArea = TextArea;
exports.TextButton = TextButton;
exports.TextField = TextField;
exports.TextInput = TextInput;
exports.Toast = Toast;
exports.ToastProvider = ToastProvider;
exports.Toggle = Toggle;
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
exports.useToast = useToast;
//# sourceMappingURL=index.js.map
