import { useState, useMemo } from 'react';
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
  // 24px
  xl: "1.25rem",
  // 20px
  l: "1.125rem",
  // 18px
  m: "1rem",
  // 14px
  xs: "0.75rem"};
var fontWeight = {
  semibold: 600,
  regular: 400
};
var lineHeight = {
  xl: "28px",
  l: "24px",
  m: "24px",
  xs: "20px",
  xxs: "18px"};
var letterSpacing = {
  m: "0"};
var textStyles = {
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
  /** 12px - 작은-중간 간격 */
  s: "12px",
  /** 16px - 기본 간격 */
  m: "16px",
  /** 20px - 중간-큰 간격 */
  l: "20px",
  /** 40px - 최대 간격 */
  xxxl: "40px"
};

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
var ExerciseList = ({
  exercises,
  emptyMessage = "\uB4F1\uB85D\uB41C \uC6B4\uB3D9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",
  emptyIcon = "\u{1F3C3}\u200D\u2642\uFE0F",
  showFilters = true,
  showSearch = true,
  onExerciseClick,
  onFavoriteToggle,
  onCompleteToggle,
  className = ""
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [showCompleted, setShowCompleted] = useState(true);
  const filteredAndSortedExercises = useMemo(() => {
    let filtered = exercises;
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (exercise) => exercise.title.toLowerCase().includes(searchQuery.toLowerCase()) || exercise.description && exercise.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (filterType !== "all") {
      filtered = filtered.filter((exercise) => exercise.type === filterType);
    }
    if (!showCompleted) {
      filtered = filtered.filter((exercise) => !exercise.isCompleted);
    }
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.title.localeCompare(b.title);
        case "duration":
          return (b.duration || 0) - (a.duration || 0);
        case "calories":
          return (b.calories || 0) - (a.calories || 0);
        case "type":
          return (a.type || "").localeCompare(b.type || "");
        default:
          return 0;
      }
    });
    return filtered;
  }, [exercises, searchQuery, filterType, sortBy, showCompleted]);
  const stats = useMemo(() => {
    const completed = exercises.filter((ex) => ex.isCompleted).length;
    const total = exercises.length;
    const totalDuration = exercises.reduce((sum, ex) => sum + (ex.duration || 0), 0);
    const totalCalories = exercises.reduce((sum, ex) => sum + (ex.calories || 0), 0);
    return {
      completed,
      total,
      completionRate: total > 0 ? Math.round(completed / total * 100) : 0,
      totalDuration,
      totalCalories
    };
  }, [exercises]);
  const filterOptions = [
    { value: "all", label: "\uC804\uCCB4", icon: "\u{1F3C3}\u200D\u2642\uFE0F" },
    { value: "cardio", label: "\uC720\uC0B0\uC18C", icon: "\u{1F3C3}\u200D\u2642\uFE0F" },
    { value: "strength", label: "\uADFC\uB825", icon: "\u{1F4AA}" },
    { value: "stretching", label: "\uC2A4\uD2B8\uB808\uCE6D", icon: "\u{1F9D8}\u200D\u2640\uFE0F" },
    { value: "balance", label: "\uBC38\uB7F0\uC2A4", icon: "\u2696\uFE0F" }
  ];
  const sortOptions = [
    { value: "name", label: "\uC774\uB984\uC21C" },
    { value: "duration", label: "\uC2DC\uAC04\uC21C" },
    { value: "calories", label: "\uCE7C\uB85C\uB9AC\uC21C" },
    { value: "type", label: "\uD0C0\uC785\uC21C" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: `exercise-list ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { style: { marginBottom: spacing.l }, children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: spacing.m,
            padding: spacing.m,
            backgroundColor: colors.primary.coolGray[50],
            borderRadius: radius.s,
            border: `1px solid ${colors.semantic.border.default}`
          },
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  style: __spreadProps(__spreadValues({}, textStyles.heading2), {
                    color: colors.semantic.text.primary,
                    margin: 0,
                    marginBottom: spacing.xxxs
                  }),
                  children: "\uB4F1\uB85D\uB41C \uC6B4\uB3D9 \uBAA9\uB85D"
                }
              ),
              /* @__PURE__ */ jsxs(
                "p",
                {
                  style: __spreadProps(__spreadValues({}, textStyles.body3), {
                    color: colors.semantic.text.secondary,
                    margin: 0
                  }),
                  children: [
                    "\uCD1D ",
                    stats.total,
                    "\uAC1C \u2022 \uC644\uB8CC\uC728 ",
                    stats.completionRate,
                    "%"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: spacing.s, alignItems: "center", fontSize: "12px" }, children: [
              stats.totalDuration > 0 && /* @__PURE__ */ jsx("div", { style: { textAlign: "center", color: colors.semantic.text.tertiary }, children: /* @__PURE__ */ jsxs("div", { children: [
                "\u23F1\uFE0F ",
                stats.totalDuration,
                "\uBD84"
              ] }) }),
              stats.totalCalories > 0 && /* @__PURE__ */ jsx("div", { style: { textAlign: "center", color: colors.semantic.text.tertiary }, children: /* @__PURE__ */ jsxs("div", { children: [
                "\u{1F525} ",
                stats.totalCalories,
                "kcal"
              ] }) })
            ] })
          ]
        }
      ),
      (showSearch || showFilters) && /* @__PURE__ */ jsxs("div", { style: { marginBottom: spacing.m }, children: [
        showSearch && /* @__PURE__ */ jsx("div", { style: { marginBottom: spacing.s }, children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "\uC6B4\uB3D9 \uAC80\uC0C9...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            style: {
              width: "100%",
              padding: `${spacing.s} ${spacing.m}`,
              border: `1px solid ${colors.semantic.border.default}`,
              borderRadius: radius.s,
              fontSize: "14px",
              backgroundColor: colors.semantic.background.primary,
              color: colors.semantic.text.primary,
              outline: "none",
              transition: "border-color 0.2s ease"
            },
            onFocus: (e) => {
              e.target.style.borderColor = colors.primary.mainviolet;
            },
            onBlur: (e) => {
              e.target.style.borderColor = colors.semantic.border.default;
            }
          }
        ) }),
        showFilters && /* @__PURE__ */ jsxs(
          "div",
          {
            style: { display: "flex", gap: spacing.s, flexWrap: "wrap", alignItems: "center" },
            children: [
              /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: spacing.xxs }, children: filterOptions.map((option) => /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setFilterType(option.value),
                  style: {
                    padding: `${spacing.xs} ${spacing.s}`,
                    border: `1px solid ${filterType === option.value ? colors.primary.mainviolet : colors.semantic.border.default}`,
                    borderRadius: radius.xs,
                    backgroundColor: filterType === option.value ? colors.primary.mainviolet : colors.semantic.background.primary,
                    color: filterType === option.value ? colors.semantic.background.primary : colors.semantic.text.primary,
                    cursor: "pointer",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: spacing.xxxs,
                    transition: "all 0.2s ease"
                  },
                  children: [
                    /* @__PURE__ */ jsx("span", { children: option.icon }),
                    option.label
                  ]
                },
                option.value
              )) }),
              /* @__PURE__ */ jsx(
                "select",
                {
                  value: sortBy,
                  onChange: (e) => setSortBy(e.target.value),
                  style: {
                    padding: `${spacing.xs} ${spacing.s}`,
                    border: `1px solid ${colors.semantic.border.default}`,
                    borderRadius: radius.xs,
                    backgroundColor: colors.semantic.background.primary,
                    color: colors.semantic.text.primary,
                    fontSize: "12px",
                    cursor: "pointer"
                  },
                  children: sortOptions.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
                }
              ),
              /* @__PURE__ */ jsxs(
                "label",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: spacing.xs,
                    cursor: "pointer",
                    fontSize: "12px",
                    color: colors.semantic.text.secondary
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: showCompleted,
                        onChange: (e) => setShowCompleted(e.target.checked),
                        style: { cursor: "pointer" }
                      }
                    ),
                    "\uC644\uB8CC\uB41C \uC6B4\uB3D9 \uD45C\uC2DC"
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] }),
    filteredAndSortedExercises.length > 0 ? /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: spacing.s
        },
        children: filteredAndSortedExercises.map((exercise) => /* @__PURE__ */ jsx(
          ExerciseCard_default,
          __spreadProps(__spreadValues({}, exercise), {
            width: "fill",
            onClick: () => onExerciseClick == null ? void 0 : onExerciseClick(exercise),
            onFavoriteToggle: () => onFavoriteToggle == null ? void 0 : onFavoriteToggle(exercise.id),
            onCompleteToggle: () => onCompleteToggle == null ? void 0 : onCompleteToggle(exercise.id)
          }),
          exercise.id
        ))
      }
    ) : (
      /* 빈 상태 */
      /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: `${spacing.xxxl} ${spacing.l}`,
            textAlign: "center",
            color: colors.semantic.text.tertiary
          },
          children: [
            /* @__PURE__ */ jsx("div", { style: { fontSize: "48px", marginBottom: spacing.m }, children: emptyIcon }),
            /* @__PURE__ */ jsx(
              "h3",
              {
                style: __spreadProps(__spreadValues({}, textStyles.heading3), {
                  color: colors.semantic.text.secondary,
                  margin: 0,
                  marginBottom: spacing.xs
                }),
                children: emptyMessage
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                style: __spreadProps(__spreadValues({}, textStyles.body3), {
                  color: colors.semantic.text.tertiary,
                  margin: 0,
                  maxWidth: "300px"
                }),
                children: searchQuery || filterType !== "all" ? "\uAC80\uC0C9 \uC870\uAC74\uC744 \uBCC0\uACBD\uD574\uBCF4\uC138\uC694." : "\uC0C8\uB85C\uC6B4 \uC6B4\uB3D9\uC744 \uCD94\uAC00\uD574\uBCF4\uC138\uC694!"
              }
            )
          ]
        }
      )
    )
  ] });
};
var ExerciseList_default = ExerciseList;

export { ExerciseList_default as ExerciseList };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map