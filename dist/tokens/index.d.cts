/**
 * Border Design Tokens
 * 컴포넌트에 테두리를 추가하여 구분감을 제공하는 속성
 */
declare const borderWidth: {
    /** UI 요소의 기본적인 구분감을 제공할 때 사용 */
    readonly s: "1px";
    /** 1px보다 더 명확한 구분이 필요할 때 사용 */
    readonly m: "1.5px";
    /** 중요한 요소를 강조하거나, 요소 간 강한 대비가 필요할 때 사용 */
    readonly l: "2px";
};
declare const borderStyle: {
    readonly solid: "solid";
    readonly dashed: "dashed";
    readonly dotted: "dotted";
    readonly none: "none";
};
declare const border: {
    /** 기본 보더 - UI 요소의 기본적인 구분감 제공 */
    readonly s: "1px solid";
    /** 중간 보더 - 더 명확한 구분이 필요할 때 */
    readonly m: "1.5px solid";
    /** 큰 보더 - 중요한 요소 강조나 강한 대비가 필요할 때 */
    readonly l: "2px solid";
    /** 보더 없음 */
    readonly none: "none";
};
declare const borders: {
    readonly borderWidth: {
        /** UI 요소의 기본적인 구분감을 제공할 때 사용 */
        readonly s: "1px";
        /** 1px보다 더 명확한 구분이 필요할 때 사용 */
        readonly m: "1.5px";
        /** 중요한 요소를 강조하거나, 요소 간 강한 대비가 필요할 때 사용 */
        readonly l: "2px";
    };
    readonly borderStyle: {
        readonly solid: "solid";
        readonly dashed: "dashed";
        readonly dotted: "dotted";
        readonly none: "none";
    };
    readonly border: {
        /** 기본 보더 - UI 요소의 기본적인 구분감 제공 */
        readonly s: "1px solid";
        /** 중간 보더 - 더 명확한 구분이 필요할 때 */
        readonly m: "1.5px solid";
        /** 큰 보더 - 중요한 요소 강조나 강한 대비가 필요할 때 */
        readonly l: "2px solid";
        /** 보더 없음 */
        readonly none: "none";
    };
};

declare const __borders_border: typeof border;
declare const __borders_borderStyle: typeof borderStyle;
declare const __borders_borderWidth: typeof borderWidth;
declare const __borders_borders: typeof borders;
declare namespace __borders {
  export { __borders_border as border, __borders_borderStyle as borderStyle, __borders_borderWidth as borderWidth, __borders_borders as borders, borders as default };
}

/**
 * Shadow Design Tokens
 * 그림자는 적용된 UI의 높이(elevation)와 이동 방향, 가장자리 등에 대한 단서를 제공
 */
declare const shadows: {
    /** 높이 48px 이하의 작은 요소에 가벼운 깊이감을 줄 때 사용 - 아이콘, 버튼, 배지, 입력 필드, 체크박스 등 */
    readonly s: "0px 1px 8px rgba(0, 0, 0, 0.1)";
    /** 너비 또는 높이가 48px ~ 200px 사이의 중간 크기 요소를 명확히 구분할 때 사용 - 카드, 모달, 드롭다운, 중간 크기 버튼 등 */
    readonly m: "0px 1px 16px rgba(0, 0, 0, 0.1)";
    /** 너비 200px 이상 또는 화면 너비의 50% 이상을 초과하는 큰 요소, 또는 강조가 필요한 구성 요소에 사용 - 다이얼로그, 대형 카드 등 */
    readonly l: "0px 1px 24px rgba(0, 0, 0, 0.12)";
};
type ShadowTokens = typeof shadows;

type __shadows_ShadowTokens = ShadowTokens;
declare const __shadows_shadows: typeof shadows;
declare namespace __shadows {
  export { type __shadows_ShadowTokens as ShadowTokens, shadows as default, __shadows_shadows as shadows };
}

/**
 * Radius Design Tokens
 * UI 요소의 모서리를 둥글게 하여 부드러운 사용자 경험을 제공
 */
declare const radius: {
    /** 작은 버튼, 입력 필드, 체크박스에 최소한의 둥근 효과를 줄 때 사용 */
    readonly xs: "4px";
    /** 카드, 드롭다운, 배너, 일반 버튼에 기본적인 둥근 스타일을 적용할 때 사용 */
    readonly s: "8px";
    /** 중간 크기의 카드, 팝업, 모달에 부드러운 곡률을 적용할 때 사용 */
    readonly m: "12px";
    /** 큰 모달, 프로필 이미지, 강조 영역에 둥근 효과를 줄 때 사용 */
    readonly l: "16px";
    /** Hero Section과 같은 대형 UI 요소에 강한 둥근 효과를 적용할 때 사용 */
    readonly xl: "20px";
    /** 아바타, 토글 버튼과 같은 완전한 원형 요소에 적용할 때 사용 */
    readonly full: "50%";
};
type RadiusTokens = typeof radius;

type __radius_RadiusTokens = RadiusTokens;
declare const __radius_radius: typeof radius;
declare namespace __radius {
  export { type __radius_RadiusTokens as RadiusTokens, radius as default, __radius_radius as radius };
}

/**
 * Spacing Design Tokens
 * 균일한 요소와 간격을 사용하여 UI의 체계적인 배열을 도와줌
 * 4와 8의 배수에 기반한 스페이싱 시스템
 */
declare const spacing: {
    /** 2px - 최소 간격 */
    readonly xxxs: "2px";
    /** 4px - 매우 작은 간격 */
    readonly xxs: "4px";
    /** 8px - 작은 간격 */
    readonly xs: "8px";
    /** 12px - 작은-중간 간격 */
    readonly s: "12px";
    /** 16px - 기본 간격 */
    readonly m: "16px";
    /** 20px - 중간-큰 간격 */
    readonly l: "20px";
    /** 24px - 큰 간격 */
    readonly xl: "24px";
    /** 32px - 매우 큰 간격 */
    readonly xxl: "32px";
    /** 40px - 최대 간격 */
    readonly xxxl: "40px";
};
type SpacingTokens = typeof spacing;

type __spacing_SpacingTokens = SpacingTokens;
declare const __spacing_spacing: typeof spacing;
declare namespace __spacing {
  export { type __spacing_SpacingTokens as SpacingTokens, spacing as default, __spacing_spacing as spacing };
}

/**
 * Typography Design Tokens
 * 서비스와 사용자가 커뮤니케이션하는 주요 요소
 */
declare const fontFamily: {
    /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
    readonly primary: "Pretendard";
};
declare const fontSize: {
    readonly xxxxl: "2rem";
    readonly xxxl: "1.75rem";
    readonly xxl: "1.5rem";
    readonly xl: "1.25rem";
    readonly l: "1.125rem";
    readonly m: "1rem";
    readonly s: "0.875rem";
    readonly xs: "0.75rem";
    readonly xxs: "0.625rem";
    readonly xxxs: "0.688rem";
};
declare const fontWeight: {
    readonly bold: 700;
    readonly semibold: 600;
    readonly medium: 500;
    readonly regular: 400;
};
declare const lineHeight: {
    readonly xxxxl: "42px";
    readonly xxxl: "36px";
    readonly xxl: "32px";
    readonly xl: "28px";
    readonly l: "24px";
    readonly m: "24px";
    readonly s: "22px";
    readonly xs: "20px";
    readonly xxs: "18px";
    readonly xxxs: "17px";
};
declare const letterSpacing: {
    readonly m: "0";
    readonly s: "-1%";
    readonly xs: "-2%";
};
declare const textStyles: {
    /** 주목도를 높이고 큰 타이틀 영역 강조에 사용 */
    readonly display1: {
        readonly fontSize: "2rem";
        readonly fontWeight: 700;
        readonly lineHeight: "42px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 중간 크기 타이틀에 사용 */
    readonly display2: {
        readonly fontSize: "1.75rem";
        readonly fontWeight: 700;
        readonly lineHeight: "36px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 정보성 카드 타이틀에 주로 사용 */
    readonly heading1: {
        readonly fontSize: "1.5rem";
        readonly fontWeight: 700;
        readonly lineHeight: "32px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 섹션 구분 타이틀 등에 사용 */
    readonly heading2: {
        readonly fontSize: "1.25rem";
        readonly fontWeight: 600;
        readonly lineHeight: "28px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 소제목 등에 사용 */
    readonly heading3: {
        readonly fontSize: "1.125rem";
        readonly fontWeight: 600;
        readonly lineHeight: "24px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 리스트 아이템, 버튼 텍스트 등에 사용 */
    readonly heading4: {
        readonly fontSize: "1rem";
        readonly fontWeight: 600;
        readonly lineHeight: "24px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 부가 정보, 캡션 등에 사용 */
    readonly heading5: {
        readonly fontSize: "0.875rem";
        readonly fontWeight: 600;
        readonly lineHeight: "22px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 주요 본문 텍스트에 사용 */
    readonly body1: {
        readonly fontSize: "1rem";
        readonly fontWeight: 400;
        readonly lineHeight: "24px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 보조 본문 텍스트에 사용 */
    readonly body2: {
        readonly fontSize: "0.875rem";
        readonly fontWeight: 400;
        readonly lineHeight: "22px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 본문 보조, 하위 위계 텍스트 쓰임새로 사용 권장 */
    readonly body3: {
        readonly fontSize: "0.75rem";
        readonly fontWeight: 400;
        readonly lineHeight: "18px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
    /** 보조 정보나 컴포넌트 레벨에서 사용 */
    readonly caption: {
        readonly fontSize: "0.75rem";
        readonly fontWeight: 400;
        readonly lineHeight: "20px";
        readonly letterSpacing: "0";
        readonly fontFamily: "Pretendard";
    };
};
declare const typography: {
    readonly fontFamily: {
        /** 웹사이트에 사용되는 모든 폰트는 Pretendard를 기반으로 함 */
        readonly primary: "Pretendard";
    };
    readonly fontSize: {
        readonly xxxxl: "2rem";
        readonly xxxl: "1.75rem";
        readonly xxl: "1.5rem";
        readonly xl: "1.25rem";
        readonly l: "1.125rem";
        readonly m: "1rem";
        readonly s: "0.875rem";
        readonly xs: "0.75rem";
        readonly xxs: "0.625rem";
        readonly xxxs: "0.688rem";
    };
    readonly fontWeight: {
        readonly bold: 700;
        readonly semibold: 600;
        readonly medium: 500;
        readonly regular: 400;
    };
    readonly lineHeight: {
        readonly xxxxl: "42px";
        readonly xxxl: "36px";
        readonly xxl: "32px";
        readonly xl: "28px";
        readonly l: "24px";
        readonly m: "24px";
        readonly s: "22px";
        readonly xs: "20px";
        readonly xxs: "18px";
        readonly xxxs: "17px";
    };
    readonly letterSpacing: {
        readonly m: "0";
        readonly s: "-1%";
        readonly xs: "-2%";
    };
    readonly textStyles: {
        /** 주목도를 높이고 큰 타이틀 영역 강조에 사용 */
        readonly display1: {
            readonly fontSize: "2rem";
            readonly fontWeight: 700;
            readonly lineHeight: "42px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 중간 크기 타이틀에 사용 */
        readonly display2: {
            readonly fontSize: "1.75rem";
            readonly fontWeight: 700;
            readonly lineHeight: "36px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 정보성 카드 타이틀에 주로 사용 */
        readonly heading1: {
            readonly fontSize: "1.5rem";
            readonly fontWeight: 700;
            readonly lineHeight: "32px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 섹션 구분 타이틀 등에 사용 */
        readonly heading2: {
            readonly fontSize: "1.25rem";
            readonly fontWeight: 600;
            readonly lineHeight: "28px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 소제목 등에 사용 */
        readonly heading3: {
            readonly fontSize: "1.125rem";
            readonly fontWeight: 600;
            readonly lineHeight: "24px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 리스트 아이템, 버튼 텍스트 등에 사용 */
        readonly heading4: {
            readonly fontSize: "1rem";
            readonly fontWeight: 600;
            readonly lineHeight: "24px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 부가 정보, 캡션 등에 사용 */
        readonly heading5: {
            readonly fontSize: "0.875rem";
            readonly fontWeight: 600;
            readonly lineHeight: "22px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 주요 본문 텍스트에 사용 */
        readonly body1: {
            readonly fontSize: "1rem";
            readonly fontWeight: 400;
            readonly lineHeight: "24px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 보조 본문 텍스트에 사용 */
        readonly body2: {
            readonly fontSize: "0.875rem";
            readonly fontWeight: 400;
            readonly lineHeight: "22px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 본문 보조, 하위 위계 텍스트 쓰임새로 사용 권장 */
        readonly body3: {
            readonly fontSize: "0.75rem";
            readonly fontWeight: 400;
            readonly lineHeight: "18px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
        /** 보조 정보나 컴포넌트 레벨에서 사용 */
        readonly caption: {
            readonly fontSize: "0.75rem";
            readonly fontWeight: 400;
            readonly lineHeight: "20px";
            readonly letterSpacing: "0";
            readonly fontFamily: "Pretendard";
        };
    };
};

declare const __typography_fontFamily: typeof fontFamily;
declare const __typography_fontSize: typeof fontSize;
declare const __typography_fontWeight: typeof fontWeight;
declare const __typography_letterSpacing: typeof letterSpacing;
declare const __typography_lineHeight: typeof lineHeight;
declare const __typography_textStyles: typeof textStyles;
declare const __typography_typography: typeof typography;
declare namespace __typography {
  export { typography as default, __typography_fontFamily as fontFamily, __typography_fontSize as fontSize, __typography_fontWeight as fontWeight, __typography_letterSpacing as letterSpacing, __typography_lineHeight as lineHeight, __typography_textStyles as textStyles, __typography_typography as typography };
}

/**
 * Color Design Tokens
 * 브랜드 아이덴티티와 UI 의미 전달을 위한 컬러 시스템
 */
declare const colors: {
    readonly primary: {
        /** 브랜드 아이덴티티를 대표하는 메인 컬러 */
        readonly mainviolet: "#7248D9";
        /** 중립적인 컬러 - Typography 및 넓은 영역 Fill에 사용 */
        readonly gray: {
            readonly 900: "#171717";
            readonly 800: "#292929";
            readonly 700: "#595959";
            readonly 600: "#7A7A7A";
            readonly 500: "#999999";
            readonly 400: "#B8B8B8";
            readonly 300: "#D6D6D6";
            readonly 200: "#EBEBEB";
            readonly 100: "#F5F5F5";
            readonly black: "#000000";
            readonly white: "#FFFFFF";
        };
        /** 넓은 영역에서 Fill로 사용 가능한 중립 색상 계열 */
        readonly coolGray: {
            readonly 900: "#151719";
            readonly 800: "#25282D";
            readonly 700: "#393F46";
            readonly 600: "#505862";
            readonly 500: "#6E7887";
            readonly 400: "#8D97A5";
            readonly 300: "#AFB6C0";
            readonly 200: "#D1D5DB";
            readonly 100: "#E8EAED";
            readonly 50: "#F3F5F6";
        };
        /** 메인 컬러보다는 덜 강조되지만, 일러스트 및 보조 정보 강조에 사용 */
        readonly tint: {
            readonly violet: {
                readonly 700: "#4B1FA3";
                readonly 600: "#5B27C4";
                readonly 500: "#7248D9";
                readonly 400: "#8B6EE4";
                readonly 300: "#A88FEA";
                readonly 200: "#C8B7F4";
                readonly 100: "#E5DEF9";
                readonly 50: "#F8F4FE";
            };
            readonly blue: {
                readonly 700: "#0038B8";
                readonly 600: "#004AF5";
                readonly 500: "#2F6EFF";
                readonly 400: "#5C92FF";
                readonly 300: "#8FB4FF";
                readonly 200: "#C2D6FF";
                readonly 100: "#E0EBFF";
                readonly 50: "#F0F5FF";
            };
            readonly red: {
                readonly 700: "#C70000";
                readonly 600: "#E51A1A";
                readonly 500: "#FF2E2E";
                readonly 400: "#FF6666";
                readonly 300: "#FF9494";
                readonly 200: "#FFC2C2";
                readonly 100: "#FFE0E0";
                readonly 50: "#FFF0F0";
            };
            readonly yellow: {
                readonly 700: "#F59B00";
                readonly 600: "#FFB200";
                readonly 500: "#FFCC00";
                readonly 400: "#FFDA47";
                readonly 300: "#FFE785";
                readonly 200: "#FFF1B8";
                readonly 100: "#FFF7D6";
                readonly 50: "#FFFAE5";
            };
            readonly green: {
                readonly 700: "#00996B";
                readonly 600: "#00AD74";
                readonly 500: "#00C785";
                readonly 400: "#55DD99";
                readonly 300: "#88E7B8";
                readonly 200: "#BBF2D2";
                readonly 100: "#DDF8E6";
                readonly 50: "#F0FFF5";
            };
        };
    };
    /** 텍스트, 상태, 배경, 보더, 비활성, Dim 등 UI 의미 전달용 컬러셋 */
    readonly semantic: {
        readonly text: {
            /** 콘텐츠에서 가장 중요한 정보를 전달할 때 사용 */
            readonly primary: "#25282D";
            /** 주요 정보 외의 부가적인 내용을 전달할 때 사용 */
            readonly secondary: "#505862";
            /** 시각적 우선순위가 낮은 텍스트에 사용 */
            readonly tertiary: "#8D97A5";
            /** 상호작용이 불가능하거나 비활성화된 상태의 텍스트에 사용 */
            readonly disabled: "#D1D5DB";
            /** 어두운 배경 위에 사용되는 밝은 텍스트 컬러 */
            readonly inverse: "#FFFFFF";
        };
        readonly state: {
            /** 작업 완료, 저장 성공 등 긍정적인 상태를 나타냄 */
            readonly success: "#00C785";
            /** 주의가 필요한 상황이나 경고 메시지를 전달할 때 사용 */
            readonly warning: "#FFCC00";
            /** 오류 상태나 실패 메시지를 표시할 때 사용 */
            readonly error: "#FF2E2E";
            /** 보조적인 정보나 안내 메시지를 전달할 때 사용 */
            readonly info: "#2F6EFF";
        };
        readonly background: {
            /** 기본 페이지 또는 레이아웃의 배경으로 사용 */
            readonly primary: "#FFFFFF";
            /** Primary 배경과 대비를 주어 시각적 계층을 형성할 때 사용 */
            readonly secondary: "#E8EAED";
        };
        readonly border: {
            /** 강조보다는 미묘한 구분을 목적으로 하며, 디바이더 역할까지 겸함 */
            readonly default: "#EBEBEB";
            /** 콘텐츠 간의 명확한 구획이 필요할 때 사용하는 보더 컬러 */
            readonly strong: "#D6D6D6";
        };
        readonly disabled: {
            /** 텍스트 또는 아이콘이 비활성 상태임을 나타낼 때 사용 */
            readonly foreground: "#D1D5DB";
            /** 버튼, 입력 필드 등 UI가 비활성화된 배경으로 사용 */
            readonly background: "#F3F5F6";
        };
        readonly dim: {
            /** 모달, 드롭다운 등 레이어 위에 표시되는 오버레이 배경 */
            readonly overlay: "#000000B3";
        };
    };
    /** 의료 플랫폼 특성을 반영해 피부, 머리카락, 장기 표현용 컬러 */
    readonly illustration: {
        readonly skin: {
            /** 피부 표현 시 밝은 톤으로 사용 */
            readonly light: "#FFEBE1";
            /** 피부 기본 톤을 표현할 때 사용 */
            readonly base: "#FFDAC4";
            /** 피부 음영 표현용 컬러 */
            readonly shadow: "#FFCBB7";
            /** 피부 깊은 음영이나 입체감을 줄 때 사용 */
            readonly deepshadow: "#F8B29C";
        };
        readonly hair: {
            /** 머리카락 하이라이트 표현용 컬러 */
            readonly light: "#706965";
            /** 머리카락 기본 색상을 표현할 때 사용 */
            readonly base: "#37322F";
            /** 머리카락 음영 및 입체감 표현용 컬러 */
            readonly shadow: "#1A1716";
        };
        readonly organ: {
            /** 긍정적 상태나 특정 장기 강조용 컬러 */
            readonly light: "#FFB5B5";
            /** 장기 표현 시 기본 색상으로 사용 */
            readonly base: "#FF8F8F";
            /** 장기 음영 표현용 컬러 */
            readonly shadow: "#FB7474";
            /** 장기 깊은 음영이나 강조를 위해 사용 */
            readonly deepshadow: "#CD5151";
        };
    };
};
type ColorTokens = typeof colors;
type PrimaryColors = typeof colors.primary;
type SemanticColors = typeof colors.semantic;
type IllustrationColors = typeof colors.illustration;
/** @deprecated colors.primary 사용을 권장합니다 */
declare const primary: "#7248D9";
/** @deprecated colors.primary.gray 사용을 권장합니다 */
declare const gray: {
    readonly 900: "#171717";
    readonly 800: "#292929";
    readonly 700: "#595959";
    readonly 600: "#7A7A7A";
    readonly 500: "#999999";
    readonly 400: "#B8B8B8";
    readonly 300: "#D6D6D6";
    readonly 200: "#EBEBEB";
    readonly 100: "#F5F5F5";
    readonly black: "#000000";
    readonly white: "#FFFFFF";
};
/** @deprecated colors.primary.coolGray 사용을 권장합니다 */
declare const coolGray: {
    readonly 900: "#151719";
    readonly 800: "#25282D";
    readonly 700: "#393F46";
    readonly 600: "#505862";
    readonly 500: "#6E7887";
    readonly 400: "#8D97A5";
    readonly 300: "#AFB6C0";
    readonly 200: "#D1D5DB";
    readonly 100: "#E8EAED";
    readonly 50: "#F3F5F6";
};
/** @deprecated colors.primary.tint 사용을 권장합니다 */
declare const tint: {
    readonly violet: {
        readonly 700: "#4B1FA3";
        readonly 600: "#5B27C4";
        readonly 500: "#7248D9";
        readonly 400: "#8B6EE4";
        readonly 300: "#A88FEA";
        readonly 200: "#C8B7F4";
        readonly 100: "#E5DEF9";
        readonly 50: "#F8F4FE";
    };
    readonly blue: {
        readonly 700: "#0038B8";
        readonly 600: "#004AF5";
        readonly 500: "#2F6EFF";
        readonly 400: "#5C92FF";
        readonly 300: "#8FB4FF";
        readonly 200: "#C2D6FF";
        readonly 100: "#E0EBFF";
        readonly 50: "#F0F5FF";
    };
    readonly red: {
        readonly 700: "#C70000";
        readonly 600: "#E51A1A";
        readonly 500: "#FF2E2E";
        readonly 400: "#FF6666";
        readonly 300: "#FF9494";
        readonly 200: "#FFC2C2";
        readonly 100: "#FFE0E0";
        readonly 50: "#FFF0F0";
    };
    readonly yellow: {
        readonly 700: "#F59B00";
        readonly 600: "#FFB200";
        readonly 500: "#FFCC00";
        readonly 400: "#FFDA47";
        readonly 300: "#FFE785";
        readonly 200: "#FFF1B8";
        readonly 100: "#FFF7D6";
        readonly 50: "#FFFAE5";
    };
    readonly green: {
        readonly 700: "#00996B";
        readonly 600: "#00AD74";
        readonly 500: "#00C785";
        readonly 400: "#55DD99";
        readonly 300: "#88E7B8";
        readonly 200: "#BBF2D2";
        readonly 100: "#DDF8E6";
        readonly 50: "#F0FFF5";
    };
};
/** @deprecated colors.semantic 사용을 권장합니다 */
declare const semantic: {
    readonly text: {
        /** 콘텐츠에서 가장 중요한 정보를 전달할 때 사용 */
        readonly primary: "#25282D";
        /** 주요 정보 외의 부가적인 내용을 전달할 때 사용 */
        readonly secondary: "#505862";
        /** 시각적 우선순위가 낮은 텍스트에 사용 */
        readonly tertiary: "#8D97A5";
        /** 상호작용이 불가능하거나 비활성화된 상태의 텍스트에 사용 */
        readonly disabled: "#D1D5DB";
        /** 어두운 배경 위에 사용되는 밝은 텍스트 컬러 */
        readonly inverse: "#FFFFFF";
    };
    readonly state: {
        /** 작업 완료, 저장 성공 등 긍정적인 상태를 나타냄 */
        readonly success: "#00C785";
        /** 주의가 필요한 상황이나 경고 메시지를 전달할 때 사용 */
        readonly warning: "#FFCC00";
        /** 오류 상태나 실패 메시지를 표시할 때 사용 */
        readonly error: "#FF2E2E";
        /** 보조적인 정보나 안내 메시지를 전달할 때 사용 */
        readonly info: "#2F6EFF";
    };
    readonly background: {
        /** 기본 페이지 또는 레이아웃의 배경으로 사용 */
        readonly primary: "#FFFFFF";
        /** Primary 배경과 대비를 주어 시각적 계층을 형성할 때 사용 */
        readonly secondary: "#E8EAED";
    };
    readonly border: {
        /** 강조보다는 미묘한 구분을 목적으로 하며, 디바이더 역할까지 겸함 */
        readonly default: "#EBEBEB";
        /** 콘텐츠 간의 명확한 구획이 필요할 때 사용하는 보더 컬러 */
        readonly strong: "#D6D6D6";
    };
    readonly disabled: {
        /** 텍스트 또는 아이콘이 비활성 상태임을 나타낼 때 사용 */
        readonly foreground: "#D1D5DB";
        /** 버튼, 입력 필드 등 UI가 비활성화된 배경으로 사용 */
        readonly background: "#F3F5F6";
    };
    readonly dim: {
        /** 모달, 드롭다운 등 레이어 위에 표시되는 오버레이 배경 */
        readonly overlay: "#000000B3";
    };
};
/** @deprecated colors.illustration 사용을 권장합니다 */
declare const illustration: {
    readonly skin: {
        /** 피부 표현 시 밝은 톤으로 사용 */
        readonly light: "#FFEBE1";
        /** 피부 기본 톤을 표현할 때 사용 */
        readonly base: "#FFDAC4";
        /** 피부 음영 표현용 컬러 */
        readonly shadow: "#FFCBB7";
        /** 피부 깊은 음영이나 입체감을 줄 때 사용 */
        readonly deepshadow: "#F8B29C";
    };
    readonly hair: {
        /** 머리카락 하이라이트 표현용 컬러 */
        readonly light: "#706965";
        /** 머리카락 기본 색상을 표현할 때 사용 */
        readonly base: "#37322F";
        /** 머리카락 음영 및 입체감 표현용 컬러 */
        readonly shadow: "#1A1716";
    };
    readonly organ: {
        /** 긍정적 상태나 특정 장기 강조용 컬러 */
        readonly light: "#FFB5B5";
        /** 장기 표현 시 기본 색상으로 사용 */
        readonly base: "#FF8F8F";
        /** 장기 음영 표현용 컬러 */
        readonly shadow: "#FB7474";
        /** 장기 깊은 음영이나 강조를 위해 사용 */
        readonly deepshadow: "#CD5151";
    };
};

type __colors_ColorTokens = ColorTokens;
type __colors_IllustrationColors = IllustrationColors;
type __colors_PrimaryColors = PrimaryColors;
type __colors_SemanticColors = SemanticColors;
declare const __colors_colors: typeof colors;
declare const __colors_coolGray: typeof coolGray;
declare const __colors_gray: typeof gray;
declare const __colors_illustration: typeof illustration;
declare const __colors_primary: typeof primary;
declare const __colors_semantic: typeof semantic;
declare const __colors_tint: typeof tint;
declare namespace __colors {
  export { type __colors_ColorTokens as ColorTokens, type __colors_IllustrationColors as IllustrationColors, type __colors_PrimaryColors as PrimaryColors, type __colors_SemanticColors as SemanticColors, __colors_colors as colors, __colors_coolGray as coolGray, __colors_gray as gray, __colors_illustration as illustration, __colors_primary as primary, __colors_semantic as semantic, __colors_tint as tint };
}

declare const tokens: {
    readonly colors: () => Promise<typeof __colors>;
    readonly typography: () => Promise<typeof __typography>;
    readonly spacing: () => Promise<typeof __spacing>;
    readonly radius: () => Promise<typeof __radius>;
    readonly shadows: () => Promise<typeof __shadows>;
    readonly borders: () => Promise<typeof __borders>;
};
declare const _default: {
    colors: () => Promise<typeof __colors>;
    typography: () => Promise<typeof __typography>;
    spacing: () => Promise<typeof __spacing>;
    radius: () => Promise<typeof __radius>;
    shadows: () => Promise<typeof __shadows>;
    borders: () => Promise<typeof __borders>;
};

export { borders, colors, coolGray, _default as default, fontFamily, fontSize, fontWeight, gray, illustration, letterSpacing, lineHeight, primary, radius, semantic, shadows, spacing, textStyles, tint, tokens, typography };
