import { useState } from 'react';
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
    /** 넓은 영역에서 Fill로 사용 가능한 중립 색상 계열 */
    coolGray: {
      50: "#F3F5F6"
    },
    /** 메인 컬러보다는 덜 강조되지만, 일러스트 및 보조 정보 강조에 사용 */
    tint: {
      violet: {
        500: "#7248D9",
        50: "#F8F4FE"
      },
      blue: {
        500: "#2F6EFF",
        50: "#F0F5FF"
      },
      red: {
        500: "#FF2E2E",
        50: "#FFF0F0"
      },
      green: {
        500: "#00C785",
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
      success: "#00C785"},
    background: {
      /** 기본 페이지 또는 레이아웃의 배경으로 사용 */
      primary: "#FFFFFF"},
    border: {
      /** 강조보다는 미묘한 구분을 목적으로 하며, 디바이더 역할까지 겸함 */
      default: "#EBEBEB"}}};

// src/tokens/typography.ts
var fontFamily = {
  /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
  primary: "Pretendard"
};
var fontSize = {
  // 18px
  m: "1rem",
  // 14px
  xs: "0.75rem"};
var fontWeight = {
  semibold: 600,
  regular: 400
};
var lineHeight = {
  m: "24px",
  xs: "20px",
  xxs: "18px"};
var letterSpacing = {
  m: "0"};
var textStyles = {
  /** 리스트 아이템, 버튼 텍스트 등에 사용 */
  heading4: {
    fontSize: fontSize.m,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.m,
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
  /** 4px - 매우 작은 간격 */
  xxs: "4px",
  /** 8px - 작은 간격 */
  xs: "8px",
  /** 16px - 기본 간격 */
  m: "16px"};

// src/tokens/radius.ts
var radius = {
  /** 작은 버튼, 입력 필드, 체크박스에 최소한의 둥근 효과를 줄 때 사용 */
  xs: "4px",
  /** 카드, 드롭다운, 배너, 일반 버튼에 기본적인 둥근 스타일을 적용할 때 사용 */
  s: "8px",
  /** 중간 크기의 카드, 팝업, 모달에 부드러운 곡률을 적용할 때 사용 */
  m: "12px"};

// src/tokens/shadows.ts
var shadows = {
  /** 높이 48px 이하의 작은 요소에 가벼운 깊이감을 줄 때 사용 - 아이콘, 버튼, 배지, 입력 필드, 체크박스 등 */
  s: "0px 1px 8px rgba(0, 0, 0, 0.1)",
  /** 너비 또는 높이가 48px ~ 200px 사이의 중간 크기 요소를 명확히 구분할 때 사용 - 카드, 모달, 드롭다운, 중간 크기 버튼 등 */
  m: "0px 1px 16px rgba(0, 0, 0, 0.1)"};
var ExerciseCard = ({
  title,
  description,
  type = "cardio",
  duration,
  calories,
  icon,
  isCompleted = false,
  isFavorite = false,
  width = "300px",
  onClick,
  onFavoriteToggle,
  onCompleteToggle,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const typeConfig = {
    cardio: {
      color: colors.primary.tint.blue[500],
      bgColor: colors.primary.tint.blue[50],
      icon: "\u{1F3C3}\u200D\u2642\uFE0F",
      label: "\uC720\uC0B0\uC18C"
    },
    strength: {
      color: colors.primary.tint.red[500],
      bgColor: colors.primary.tint.red[50],
      icon: "\u{1F4AA}",
      label: "\uADFC\uB825"
    },
    stretching: {
      color: colors.primary.tint.green[500],
      bgColor: colors.primary.tint.green[50],
      icon: "\u{1F9D8}\u200D\u2640\uFE0F",
      label: "\uC2A4\uD2B8\uB808\uCE6D"
    },
    balance: {
      color: colors.primary.tint.violet[500],
      bgColor: colors.primary.tint.violet[50],
      icon: "\u2696\uFE0F",
      label: "\uBC38\uB7F0\uC2A4"
    }
  };
  const currentTypeConfig = typeConfig[type];
  const getWidth = () => {
    if (width === "fill") {
      return "100%";
    }
    return width;
  };
  const cardStyles = {
    display: "flex",
    alignItems: "center",
    padding: spacing.m,
    backgroundColor: isCompleted ? colors.primary.coolGray[50] : colors.semantic.background.primary,
    border: `1px solid ${isHovered ? currentTypeConfig.color : colors.semantic.border.default}`,
    borderRadius: radius.m,
    boxShadow: isHovered ? shadows.m : shadows.s,
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
    opacity: isCompleted ? 0.7 : 1,
    position: "relative",
    overflow: "hidden",
    width: getWidth(),
    minWidth: "300px"
    // 최소 너비 설정
  };
  const handleCardClick = (e) => {
    e.stopPropagation();
    if (onClick) onClick();
  };
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (onFavoriteToggle) onFavoriteToggle();
  };
  const handleCompleteClick = (e) => {
    e.stopPropagation();
    if (onCompleteToggle) onCompleteToggle();
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `exercise-card ${className}`,
      style: __spreadValues({}, cardStyles),
      onClick: handleCardClick,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        isCompleted && /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "4px",
              height: "100%",
              backgroundColor: colors.semantic.state.success
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              backgroundColor: currentTypeConfig.bgColor,
              borderRadius: radius.s,
              marginRight: spacing.m,
              fontSize: "20px"
            },
            children: icon || currentTypeConfig.icon
          }
        ),
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: spacing.xxs }, children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                style: __spreadProps(__spreadValues({}, textStyles.heading4), {
                  color: isCompleted ? colors.semantic.text.tertiary : colors.semantic.text.primary,
                  margin: 0,
                  textDecoration: isCompleted ? "line-through" : "none"
                }),
                children: title
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                style: __spreadProps(__spreadValues({}, textStyles.caption), {
                  color: currentTypeConfig.color,
                  backgroundColor: currentTypeConfig.bgColor,
                  padding: `${spacing.xxxs} ${spacing.xs}`,
                  borderRadius: radius.xs,
                  marginLeft: spacing.xs,
                  fontSize: "10px",
                  fontWeight: 500
                }),
                children: currentTypeConfig.label
              }
            )
          ] }),
          description && /* @__PURE__ */ jsx(
            "p",
            {
              style: __spreadProps(__spreadValues({}, textStyles.body3), {
                color: colors.semantic.text.secondary,
                margin: 0,
                marginBottom: spacing.xs,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              }),
              children: description
            }
          ),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: spacing.m, alignItems: "center" }, children: [
            duration && /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: spacing.xxs }, children: [
              /* @__PURE__ */ jsx("span", { style: { fontSize: "12px" }, children: "\u23F1\uFE0F" }),
              /* @__PURE__ */ jsxs(
                "span",
                {
                  style: __spreadProps(__spreadValues({}, textStyles.caption), {
                    color: colors.semantic.text.tertiary
                  }),
                  children: [
                    duration,
                    "\uBD84"
                  ]
                }
              )
            ] }),
            calories && /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: spacing.xxs }, children: [
              /* @__PURE__ */ jsx("span", { style: { fontSize: "12px" }, children: "\u{1F525}" }),
              /* @__PURE__ */ jsxs(
                "span",
                {
                  style: __spreadProps(__spreadValues({}, textStyles.caption), {
                    color: colors.semantic.text.tertiary
                  }),
                  children: [
                    calories,
                    "kcal"
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: spacing.xs, alignItems: "center" }, children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleFavoriteClick,
              style: {
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                padding: spacing.xxs,
                borderRadius: radius.xs,
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              title: isFavorite ? "\uC990\uACA8\uCC3E\uAE30 \uD574\uC81C" : "\uC990\uACA8\uCC3E\uAE30 \uCD94\uAC00",
              children: isFavorite ? "\u2B50" : "\u2606"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleCompleteClick,
              style: {
                background: "none",
                border: `1px solid ${isCompleted ? colors.semantic.state.success : colors.semantic.border.default}`,
                cursor: "pointer",
                padding: spacing.xs,
                borderRadius: radius.xs,
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isCompleted ? colors.semantic.state.success : "transparent"
              },
              title: isCompleted ? "\uC644\uB8CC \uCDE8\uC18C" : "\uC644\uB8CC \uD45C\uC2DC",
              children: /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    fontSize: "12px",
                    color: isCompleted ? colors.semantic.background.primary : colors.semantic.text.tertiary
                  },
                  children: isCompleted ? "\u2713" : "\u25CB"
                }
              )
            }
          )
        ] })
      ]
    }
  );
};
var ExerciseCard_default = ExerciseCard;

export { ExerciseCard_default as ExerciseCard };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map