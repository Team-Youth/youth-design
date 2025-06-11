import { useState, useEffect } from 'react';
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
      800: "#292929"}},
  /** 텍스트, 상태, 배경, 보더, 비활성, Dim 등 UI 의미 전달용 컬러셋 */
  semantic: {
    background: {
      /** 기본 페이지 또는 레이아웃의 배경으로 사용 */
      primary: "#FFFFFF"}}};

// src/tokens/typography.ts
var fontFamily = {
  /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
  primary: "Pretendard"
};
var fontSize = {
  xxxxl: "2rem",
  // 20px
  l: "1.125rem",
  // 16px
  s: "0.875rem",
  // 14px
  xs: "0.75rem"};
var fontWeight = {
  bold: 700,
  semibold: 600,
  regular: 400
};
var lineHeight = {
  xxxxl: "42px",
  l: "24px",
  s: "22px",
  xs: "20px"};
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
  /** 소제목 등에 사용 */
  heading3: {
    fontSize: fontSize.l,
    fontWeight: fontWeight.semibold,
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
  /** 보조 정보나 컴포넌트 레벨에서 사용 */
  caption: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.xs,
    letterSpacing: letterSpacing.m,
    fontFamily: fontFamily.primary
  }
};

// src/tokens/spacing.ts
var spacing = {
  /** 2px - 최소 간격 */
  xxxs: "2px",
  /** 8px - 작은 간격 */
  xs: "8px",
  /** 12px - 작은-중간 간격 */
  s: "12px",
  /** 16px - 기본 간격 */
  m: "16px",
  /** 20px - 중간-큰 간격 */
  l: "20px"};

// src/tokens/radius.ts
var radius = {
  /** 큰 모달, 프로필 이미지, 강조 영역에 둥근 효과를 줄 때 사용 */
  l: "16px"};
var GreetingHeader = ({
  userName = "\uC775\uBA85",
  customGreeting,
  showDate = true,
  weather,
  onClick,
  className = ""
}) => {
  const [currentTime, setCurrentTime] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => clearInterval(timer);
  }, []);
  const getTimeBasedGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) {
      return {
        greeting: "\uC88B\uC740 \uC544\uCE68\uC774\uC5D0\uC694!",
        emoji: "\u{1F305}",
        bgGradient: "linear-gradient(135deg, #FFE5B4 0%, #FFD700 100%)",
        textColor: colors.primary.gray[800]
      };
    } else if (hour >= 12 && hour < 18) {
      return {
        greeting: "\uD65C\uAE30\uCC2C \uC624\uD6C4\uB124\uC694!",
        emoji: "\u2600\uFE0F",
        bgGradient: "linear-gradient(135deg, #87CEEB 0%, #4FC3F7 100%)",
        textColor: colors.semantic.background.primary
      };
    } else if (hour >= 18 && hour < 22) {
      return {
        greeting: "\uC88B\uC740 \uC800\uB141\uC774\uC5D0\uC694!",
        emoji: "\u{1F307}",
        bgGradient: "linear-gradient(135deg, #FF9A56 0%, #FF6B35 100%)",
        textColor: colors.semantic.background.primary
      };
    } else {
      return {
        greeting: "\uB2A6\uC740 \uC2DC\uAC04\uC774\uB124\uC694!",
        emoji: "\u{1F319}",
        bgGradient: "linear-gradient(135deg, #2C3E50 0%, #4A6741 100%)",
        textColor: colors.semantic.background.primary
      };
    }
  };
  const getWeatherInfo = () => {
    if (!weather || !weather.condition) return null;
    const weatherIcons = {
      sunny: "\u2600\uFE0F",
      cloudy: "\u2601\uFE0F",
      rainy: "\u{1F327}\uFE0F",
      snowy: "\u2744\uFE0F"
    };
    return {
      icon: weatherIcons[weather.condition] || "\u{1F324}\uFE0F",
      temp: weather.temperature
    };
  };
  const timeGreeting = getTimeBasedGreeting();
  const weatherInfo = getWeatherInfo();
  const displayGreeting = customGreeting || timeGreeting.greeting;
  const formatDate = () => {
    const days = ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"];
    const month = currentTime.getMonth() + 1;
    const date = currentTime.getDate();
    const day = days[currentTime.getDay()];
    return `${month}\uC6D4 ${date}\uC77C (${day})`;
  };
  const headerStyles = {
    background: timeGreeting.bgGradient,
    padding: spacing.l,
    borderRadius: radius.l,
    position: "relative",
    overflow: "hidden",
    cursor: onClick ? "pointer" : "default",
    transition: "all 0.3s ease",
    minHeight: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };
  return /* @__PURE__ */ jsxs("div", { className: `greeting-header ${className}`, style: headerStyles, onClick, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          right: 0,
          width: "150px",
          height: "150px",
          background: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "15px 15px",
          opacity: 0.6,
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { style: { position: "relative", zIndex: 1 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: spacing.s }, children: [
        /* @__PURE__ */ jsx("span", { style: { fontSize: "32px", marginRight: spacing.s }, children: timeGreeting.emoji }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "h1",
            {
              style: __spreadProps(__spreadValues({}, textStyles.display1), {
                color: timeGreeting.textColor,
                margin: 0,
                marginBottom: spacing.xxxs,
                textShadow: "0px 1px 2px rgba(0,0,0,0.1)"
              }),
              children: displayGreeting
            }
          ),
          /* @__PURE__ */ jsxs(
            "p",
            {
              style: __spreadProps(__spreadValues({}, textStyles.heading3), {
                color: timeGreeting.textColor,
                margin: 0,
                opacity: 0.9
              }),
              children: [
                userName,
                "\uB2D8 \u{1F4AA}"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: spacing.m
          },
          children: [
            showDate && /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: spacing.xs }, children: [
              /* @__PURE__ */ jsx("span", { style: { fontSize: "16px" }, children: "\u{1F4C5}" }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  style: __spreadProps(__spreadValues({}, textStyles.body2), {
                    color: timeGreeting.textColor,
                    opacity: 0.8
                  }),
                  children: formatDate()
                }
              )
            ] }),
            weatherInfo && /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: spacing.xs }, children: [
              /* @__PURE__ */ jsx("span", { style: { fontSize: "16px" }, children: weatherInfo.icon }),
              weatherInfo.temp && /* @__PURE__ */ jsxs(
                "span",
                {
                  style: __spreadProps(__spreadValues({}, textStyles.body2), {
                    color: timeGreeting.textColor,
                    opacity: 0.8
                  }),
                  children: [
                    weatherInfo.temp,
                    "\xB0C"
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "absolute",
          bottom: spacing.s,
          right: spacing.m,
          opacity: 0.7
        },
        children: /* @__PURE__ */ jsx(
          "span",
          {
            style: __spreadProps(__spreadValues({}, textStyles.caption), {
              color: timeGreeting.textColor,
              fontStyle: "italic"
            }),
            children: getMotivationalMessage()
          }
        )
      }
    )
  ] });
};
var getMotivationalMessage = () => {
  const messages = [
    "\uC624\uB298\uB3C4 \uD654\uC774\uD305! \u{1F4AA}",
    "\uD55C \uAC78\uC74C\uC529 \uB098\uC544\uAC00\uC694 \u{1F6B6}\u200D\u2642\uFE0F",
    "\uAC74\uAC15\uD55C \uD558\uB8E8 \uB418\uC138\uC694! \u{1F31F}",
    "\uB2F9\uC2E0\uC740 \uD560 \uC218 \uC788\uC5B4\uC694! \u2728",
    "\uC791\uC740 \uBCC0\uD654, \uD070 \uC131\uC7A5 \u{1F331}",
    "\uAFB8\uC900\uD568\uC774 \uB2F5\uC785\uB2C8\uB2E4 \u2B50",
    "\uAC74\uAC15\uC774 \uCD5C\uACE0\uC758 \uD22C\uC790\uC608\uC694 \u{1F48E}"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};
var GreetingHeader_default = GreetingHeader;

export { GreetingHeader_default as GreetingHeader };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map