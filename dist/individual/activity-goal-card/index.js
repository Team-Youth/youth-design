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
    /** 브랜드 아이덴티티를 대표하는 메인 컬러 */
    mainviolet: "#7248D9",
    /** 메인 컬러보다는 덜 강조되지만, 일러스트 및 보조 정보 강조에 사용 */
    tint: {
      violet: {
        100: "#E5DEF9",
        50: "#F8F4FE"
      },
      blue: {
        100: "#E0EBFF",
        50: "#F0F5FF"
      },
      yellow: {
        100: "#FFF7D6",
        50: "#FFFAE5"
      },
      green: {
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
      tertiary: "#8D97A5"},
    state: {
      /** 작업 완료, 저장 성공 등 긍정적인 상태를 나타냄 */
      success: "#00C785",
      /** 주의가 필요한 상황이나 경고 메시지를 전달할 때 사용 */
      warning: "#FFCC00",
      /** 보조적인 정보나 안내 메시지를 전달할 때 사용 */
      info: "#2F6EFF"
    },
    background: {
      /** 기본 페이지 또는 레이아웃의 배경으로 사용 */
      primary: "#FFFFFF",
      /** Primary 배경과 대비를 주어 시각적 계층을 형성할 때 사용 */
      secondary: "#E8EAED"
    }}};

// src/tokens/typography.ts
var fontFamily = {
  /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
  primary: "Pretendard"
};
var fontSize = {
  // 32px
  xxxl: "1.75rem",
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
  xxxl: "36px",
  l: "24px",
  s: "22px",
  xs: "20px",
  xxs: "18px"};
var letterSpacing = {
  m: "0"};
var textStyles = {
  /** 중간 크기 타이틀에 사용 */
  display2: {
    fontSize: fontSize.xxxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxxl,
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

// src/tokens/spacing.ts
var spacing = {
  /** 2px - 최소 간격 */
  xxxs: "2px",
  /** 12px - 작은-중간 간격 */
  s: "12px",
  /** 16px - 기본 간격 */
  m: "16px",
  /** 20px - 중간-큰 간격 */
  l: "20px"};

// src/tokens/radius.ts
var radius = {
  /** 작은 버튼, 입력 필드, 체크박스에 최소한의 둥근 효과를 줄 때 사용 */
  xs: "4px",
  /** 카드, 드롭다운, 배너, 일반 버튼에 기본적인 둥근 스타일을 적용할 때 사용 */
  s: "8px",
  /** 큰 모달, 프로필 이미지, 강조 영역에 둥근 효과를 줄 때 사용 */
  l: "16px"};

// src/tokens/shadows.ts
var shadows = {
  /** 높이 48px 이하의 작은 요소에 가벼운 깊이감을 줄 때 사용 - 아이콘, 버튼, 배지, 입력 필드, 체크박스 등 */
  s: "0px 1px 8px rgba(0, 0, 0, 0.1)"};
var ActivityGoalCard = ({
  title,
  description,
  currentValue,
  goalValue,
  unit,
  theme = "primary",
  icon,
  onClick,
  className = ""
}) => {
  const progressPercentage = Math.min(currentValue / goalValue * 100, 100);
  const isCompleted = progressPercentage >= 100;
  const themeConfig = {
    primary: {
      color: colors.primary.mainviolet,
      bgColor: colors.primary.tint.violet[50],
      lightColor: colors.primary.tint.violet[100]
    },
    success: {
      color: colors.semantic.state.success,
      bgColor: colors.primary.tint.green[50],
      lightColor: colors.primary.tint.green[100]
    },
    warning: {
      color: colors.semantic.state.warning,
      bgColor: colors.primary.tint.yellow[50],
      lightColor: colors.primary.tint.yellow[100]
    },
    info: {
      color: colors.semantic.state.info,
      bgColor: colors.primary.tint.blue[50],
      lightColor: colors.primary.tint.blue[100]
    }
  };
  const currentTheme = themeConfig[theme];
  const cardStyles = {
    padding: spacing.l,
    backgroundColor: currentTheme.bgColor,
    border: `1px solid ${currentTheme.lightColor}`,
    borderRadius: radius.l,
    boxShadow: shadows.s,
    cursor: onClick ? "pointer" : "default",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden"
  };
  const progressBarStyles = {
    width: "100%",
    height: "8px",
    backgroundColor: colors.semantic.background.secondary,
    borderRadius: radius.xs,
    overflow: "hidden",
    position: "relative"
  };
  const progressFillStyles = {
    height: "100%",
    backgroundColor: currentTheme.color,
    borderRadius: radius.xs,
    width: `${progressPercentage}%`,
    transition: "width 0.5s ease",
    position: "relative"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `activity-goal-card ${className} ${isCompleted ? "completed" : ""}`,
      style: cardStyles,
      onClick,
      children: [
        isCompleted && /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: spacing.s,
              right: spacing.s,
              fontSize: "20px",
              animation: "bounce 0.6s ease-in-out"
            },
            children: "\u{1F389}"
          }
        ),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: spacing.m }, children: [
          icon && /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                backgroundColor: currentTheme.color,
                color: colors.semantic.background.primary,
                borderRadius: radius.s,
                marginRight: spacing.s,
                fontSize: "18px"
              },
              children: icon
            }
          ),
          /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                style: __spreadProps(__spreadValues({}, textStyles.heading3), {
                  color: colors.semantic.text.primary,
                  margin: 0,
                  marginBottom: spacing.xxxs
                }),
                children: title
              }
            ),
            description && /* @__PURE__ */ jsx(
              "p",
              {
                style: __spreadProps(__spreadValues({}, textStyles.body3), {
                  color: colors.semantic.text.secondary,
                  margin: 0
                }),
                children: description
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { marginBottom: spacing.s }, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "baseline", gap: spacing.xxxs }, children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                style: __spreadProps(__spreadValues({}, textStyles.display2), {
                  color: currentTheme.color,
                  fontWeight: 700
                }),
                children: currentValue.toLocaleString()
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                style: __spreadProps(__spreadValues({}, textStyles.body2), {
                  color: colors.semantic.text.secondary
                }),
                children: unit
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            "span",
            {
              style: __spreadProps(__spreadValues({}, textStyles.body3), {
                color: colors.semantic.text.tertiary
              }),
              children: [
                "\uBAA9\uD45C: ",
                goalValue.toLocaleString(),
                unit
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { style: progressBarStyles, children: /* @__PURE__ */ jsx("div", { style: progressFillStyles, children: /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "50%",
              background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)",
              borderRadius: `${radius.xs} ${radius.xs} 0 0`
            }
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { style: { marginTop: spacing.s, textAlign: "center" }, children: /* @__PURE__ */ jsx(
          "span",
          {
            style: __spreadProps(__spreadValues({}, textStyles.caption), {
              color: isCompleted ? currentTheme.color : colors.semantic.text.tertiary,
              fontWeight: isCompleted ? 600 : 400
            }),
            children: isCompleted ? "\uBAA9\uD45C \uB2EC\uC131! \u{1F3AF}" : `${progressPercentage.toFixed(1)}% \uB2EC\uC131`
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              right: 0,
              width: "100px",
              height: "100px",
              background: `radial-gradient(circle, ${currentTheme.lightColor} 1px, transparent 1px)`,
              backgroundSize: "12px 12px",
              opacity: 0.3,
              pointerEvents: "none"
            }
          }
        )
      ]
    }
  );
};
var ActivityGoalCard_default = ActivityGoalCard;

export { ActivityGoalCard_default as ActivityGoalCard };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map