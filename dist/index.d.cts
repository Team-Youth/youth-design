import React$1, { ReactNode } from 'react';

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

interface ButtonProps {
    type?: 'solid' | 'outlined' | 'text';
    level?: 'CTA' | 'secondary' | 'tertiary';
    size?: 'l' | 'm' | 's';
    width?: 'fill' | (string & {});
    disabled?: boolean;
    icon?: {
        left?: React$1.ReactNode;
        right?: React$1.ReactNode;
    };
    children?: React$1.ReactNode;
    onClick?: () => void;
    className?: string;
    isLoading?: boolean;
    underline?: boolean;
}
declare const Button: React$1.FC<ButtonProps>;

type FontType = keyof typeof textStyles;
type FontWeight = keyof typeof fontWeight;
interface FontProps {
    /** Typography variant (display1, display2, heading1, etc.) */
    type: FontType;
    /** Font weight override (bold, semibold, medium, regular) */
    fontWeight?: FontWeight;
    /** Text color */
    color?: string;
    /** Hover color */
    hoverColor?: string;
    /** Text alignment */
    align?: 'left' | 'center' | 'right' | 'justify';
    /** White space handling */
    whiteSpace?: 'nowrap' | 'normal' | 'pre-line';
    /** Text overflow with ellipsis */
    noWhiteSpace?: boolean;
    /** Underline decoration */
    underline?: boolean;
    /** Custom className */
    className?: string;
    /** Custom styles */
    style?: React$1.CSSProperties;
    /** Children content */
    children?: ReactNode;
}
declare const Font: React$1.FC<FontProps>;

type IconType = 'hamburger' | 'search' | 'close' | 'check' | 'add' | 'minus' | 'truncation' | 'more' | 'home' | 'home-filled' | 'heart' | 'heart-filled' | 'my-page' | 'my-page-filled' | 'download' | 'modify' | 'duplicate' | 'dialog' | 'arrow-down' | 'arrow-up' | 'arrow-right' | 'arrow-left' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevron-down' | 'calendar' | 'calendar-filled' | 'time-stroke' | 'time-filled' | 'switch-circle-stroke' | 'switch-circle-filled' | 'sound' | 'share-ios' | 'settings-stroke' | 'settings-filled' | 'reset' | 'reload' | 'receipt' | 'radio-selected' | 'radio-resting' | 'question-stroke' | 'question-filled' | 'qr' | 'profile-stroke' | 'profile-filled' | 'print' | 'person-stroke' | 'person-filled' | 'payment-stroke' | 'payment-filled' | 'parcel' | 'number-0' | 'number-1' | 'number-2' | 'number-3' | 'number-4' | 'number-5' | 'number-6' | 'number-7' | 'number-8' | 'number-9' | 'new' | 'minus-circle-stroke' | 'minus-circle-filled' | 'add-circle-stroke' | 'add-circle-filled' | 'microphone' | 'mail-stroke' | 'mail-filled' | 'logo-naver' | 'logo-kakao' | 'logo-google' | 'logo-apple' | 'lock' | 'location-stroke' | 'location-filled' | 'info-stroke' | 'info-filled' | 'image' | 'id-card-stroke' | 'id-card-filled' | 'home-stroke' | 'history-stroke' | 'history-filled' | 'heart-stroke' | 'gym' | 'guide' | 'delete-stroke' | 'delete-filled' | 'dashboard-stroke' | 'dashboard-filled' | 'customer-service' | 'check-circle-stroke' | 'check-circle-filled' | 'checkbox-selected-stroke' | 'checkbox-selected-filled' | 'checkbox-resting' | 'caution-stroke' | 'caution-filled' | 'cancel-stroke' | 'cancel-filled' | 'camera-stroke' | 'camera-filled' | 'call-stroke' | 'call-filled' | 'calendar-stroke' | 'bookmark-stroke' | 'bookmark-filled' | 'bell-stroke' | 'bell-filled';
interface IconProps {
    /** 아이콘 타입 */
    type: IconType;
    /** 아이콘 크기 (픽셀 단위) */
    size?: number;
    /** 아이콘 색상 */
    color?: string;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React$1.CSSProperties;
}
declare const Icon: React$1.FC<IconProps>;

declare const illustMap: {
    readonly empty: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19 1H5C3.89543 1 3 1.89543 3 3V21C3 22.1046 3.89543 23 5 23H13L17 19L21 15V3C21 1.89543 20.1046 1 19 1Z\" fill=\"#F3F5F6\"/>\n<path d=\"M21 15L13 23V15H21Z\" fill=\"#E8EAED\"/>\n</svg>\n";
    readonly man: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#4785FF\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.70173 7.54579C7.22887 7.38105 7.78975 7.67485 7.95448 8.20199L8.51644 10.0003H10.4836L11.0455 8.20199C11.176 7.78452 11.5626 7.50027 12 7.50027C12.4374 7.50027 12.824 7.78452 12.9545 8.20199L13.5164 10.0003H15.4836L16.0455 8.20199C16.2103 7.67485 16.7711 7.38105 17.2983 7.54579C17.8254 7.71052 18.1192 8.2714 17.9545 8.79854L17.5789 10.0003H18C18.5523 10.0003 19 10.448 19 11.0003C19 11.5526 18.5523 12.0003 18 12.0003H16.9539L15.4545 16.7985C15.324 17.216 14.9374 17.5003 14.5 17.5003C14.0626 17.5003 13.676 17.216 13.5455 16.7985L12.0461 12.0003H11.9539L10.4545 16.7985C10.324 17.216 9.93739 17.5003 9.5 17.5003C9.06261 17.5003 8.67598 17.216 8.54552 16.7985L7.04606 12.0003H6C5.44772 12.0003 5 11.5526 5 11.0003C5 10.448 5.44772 10.0003 6 10.0003H6.42106L6.04552 8.79854C5.88079 8.2714 6.17458 7.71052 6.70173 7.54579ZM9.14144 12.0003L9.5 13.5L9.85856 12.0003H9.14144ZM14.1414 12.0003L14.5 13.5L14.8586 12.0003H14.1414Z\" fill=\"white\"/>\n</svg>\n";
    readonly woman: "<svg width=\"14\" height=\"22\" viewBox=\"0 0 14 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.5 13.5C5.5 12.6716 6.17157 12 7 12C7.82843 12 8.5 12.6716 8.5 13.5V20.5C8.5 21.3284 7.82843 22 7 22C6.17157 22 5.5 21.3284 5.5 20.5V13.5Z\" fill=\"#FF8F8F\"/>\n<path d=\"M10 15.5C10.8284 15.5 11.5 16.1716 11.5 17C11.5 17.8284 10.8284 18.5 10 18.5L4 18.5C3.17157 18.5 2.5 17.8284 2.5 17C2.5 16.1716 3.17157 15.5 4 15.5L10 15.5Z\" fill=\"#FF8F8F\"/>\n<path d=\"M5.5 12.5H8.5V15.5H5.5V12.5Z\" fill=\"#D36666\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11ZM7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z\" fill=\"#FF8F8F\"/>\n</svg>\n";
    readonly muscle: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M23 18.069C23 19.2069 19.5862 23 14.2759 23C10.6117 23 7.74793 21.9897 6.5 21.25C6.1684 21.7862 5.99039 22.3696 6 23H1V11.2414C3.09 11.2414 6.13965 10.9228 8.38896 14.1014C9.46595 13.4189 10.7262 13.0826 12 13.1379C13.2242 13.0888 14.4364 13.3958 15.4897 14.0217C15.8558 12.8424 16.336 11.7016 16.9234 10.6155C16.9234 7.80862 16.1686 6.65552 16.1686 6.65552C15.5664 6.90188 14.926 7.04177 14.2759 7.06897C13.3999 7.03319 12.5332 6.87618 11.7003 6.60241C11.5953 6.56947 11.4986 6.51408 11.4171 6.44008C11.3356 6.36608 11.2711 6.27524 11.2282 6.17386C11.1853 6.07247 11.1649 5.96296 11.1685 5.85292C11.172 5.74288 11.1995 5.63493 11.249 5.53655L11.6207 4.8L11.0972 3.48448C11.0316 3.31908 11.026 3.13589 11.0814 2.96679C11.1369 2.79769 11.2498 2.65337 11.4007 2.55897L13.3428 1.34517C13.705 1.1204 14.1227 1.00088 14.549 1H17.4848C17.9074 0.999509 18.3218 1.1167 18.6816 1.33846C19.0414 1.56021 19.3323 1.87775 19.5217 2.25552C20.709 4.61862 23 10.1983 23 18.069Z\" fill=\"#FFDAC4\"/>\n<path d=\"M16.1695 6.65C16.4111 7.09116 16.6288 7.79784 16.7195 8.29259C17.3091 7.72868 17.9325 6.56312 17.9995 5.75C17.9995 5.75 17.0995 6.40224 16.7495 6.5C16.4358 6.59466 16.1695 6.65 16.1695 6.65ZM11.6193 4.8L11.3193 5.39655H13.5857C13.8874 5.39622 14.1767 5.27623 14.39 5.0629C14.6033 4.84956 14.7233 4.56032 14.7237 4.25862V3.87931C14.7237 3.77871 14.6837 3.68223 14.6126 3.6111C14.5414 3.53996 14.445 3.5 14.3444 3.5C14.2438 3.5 14.1473 3.53996 14.0761 3.6111C14.005 3.68223 13.965 3.77871 13.965 3.87931V4.25862C13.965 4.3592 13.925 4.45564 13.8539 4.52676C13.7828 4.59788 13.6863 4.63786 13.5857 4.63793H11.5581L11.6193 4.8Z\" fill=\"#F9B995\"/>\n</svg>\n";
    readonly money: "<svg width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17 0.125C18.0355 0.125 18.875 0.964466 18.875 2V8C18.875 8.75939 18.2594 9.375 17.5 9.375C16.7406 9.375 16.125 8.75939 16.125 8V4.99609L13.0664 8.05371C14.8051 10.7633 14.4917 14.4086 12.122 16.7783C9.38851 19.5118 4.95631 19.5115 2.22262 16.7783C-0.511054 14.0447 -0.511054 9.6116 2.22262 6.87793C4.59198 4.50898 8.236 4.1949 10.9453 5.93262L14.0039 2.875H11C10.2406 2.875 9.62496 2.25939 9.62496 1.5C9.62496 0.740608 10.2406 0.125 11 0.125H17ZM9.99996 9C8.43786 7.43794 5.90579 7.43792 4.34371 9C2.78167 10.5621 2.78167 13.0942 4.34371 14.6562C5.90579 16.2183 8.43786 16.2183 9.99996 14.6562C11.5621 13.0942 11.5621 10.5621 9.99996 9Z\" fill=\"#93D8CC\"/>\n</svg>\n";
    readonly idCard: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20.4792 3.75H3.52083C2.85242 3.75049 2.21151 4.01623 1.73887 4.48887C1.26623 4.96151 1.00049 5.60242 1 6.27083L1 17.7292C1.00049 18.3976 1.26623 19.0385 1.73887 19.5111C2.21151 19.9838 2.85242 20.2495 3.52083 20.25H20.4792C21.1476 20.2495 21.7885 19.9838 22.2611 19.5111C22.7338 19.0385 22.9995 18.3976 23 17.7292V6.27083C22.9995 5.60242 22.7338 4.96151 22.2611 4.48887C21.7885 4.01623 21.1476 3.75049 20.4792 3.75Z\" fill=\"#F1F2F4\"/>\n<path d=\"M7.87467 12.0003C9.14033 12.0003 10.1663 10.9743 10.1663 9.70866C10.1663 8.44301 9.14033 7.41699 7.87467 7.41699C6.60902 7.41699 5.58301 8.44301 5.58301 9.70866C5.58301 10.9743 6.60902 12.0003 7.87467 12.0003Z\" fill=\"#4785FF\"/>\n<path d=\"M12 15.8962C12 16.0785 11.9276 16.2534 11.7986 16.3823C11.6697 16.5112 11.4948 16.5837 11.3125 16.5837H4.4375C4.25516 16.5837 4.0803 16.5112 3.95136 16.3823C3.82243 16.2534 3.75 16.0785 3.75 15.8962V15.4378C3.75049 14.7694 4.01623 14.1285 4.48887 13.6559C4.96151 13.1832 5.60242 12.9175 6.27083 12.917H9.47917C10.1476 12.9175 10.7885 13.1832 11.2611 13.6559C11.7338 14.1285 11.9995 14.7694 12 15.4378V15.8962Z\" fill=\"#4785FF\"/>\n<path d=\"M19.5622 16.5833H14.5205C14.3382 16.5833 14.1633 16.5109 14.0344 16.382C13.9054 16.253 13.833 16.0782 13.833 15.8958C13.833 15.7135 13.9054 15.5386 14.0344 15.4097C14.1633 15.2808 14.3382 15.2083 14.5205 15.2083H19.5622C19.7445 15.2083 19.9194 15.2808 20.0483 15.4097C20.1772 15.5386 20.2497 15.7135 20.2497 15.8958C20.2497 16.0782 20.1772 16.253 20.0483 16.382C19.9194 16.5109 19.7445 16.5833 19.5622 16.5833ZM19.5622 12.9167H14.5205C14.3382 12.9167 14.1633 12.8442 14.0344 12.7153C13.9054 12.5864 13.833 12.4115 13.833 12.2292C13.833 12.0468 13.9054 11.872 14.0344 11.743C14.1633 11.6141 14.3382 11.5417 14.5205 11.5417H19.5622C19.7445 11.5417 19.9194 11.6141 20.0483 11.743C20.1772 11.872 20.2497 12.0468 20.2497 12.2292C20.2497 12.4115 20.1772 12.5864 20.0483 12.7153C19.9194 12.8442 19.7445 12.9167 19.5622 12.9167ZM19.5622 9.25H14.5205C14.3382 9.25 14.1633 9.17757 14.0344 9.04864C13.9054 8.9197 13.833 8.74484 13.833 8.5625C13.833 8.38016 13.9054 8.2053 14.0344 8.07636C14.1633 7.94743 14.3382 7.875 14.5205 7.875H19.5622C19.7445 7.875 19.9194 7.94743 20.0483 8.07636C20.1772 8.2053 20.2497 8.38016 20.2497 8.5625C20.2497 8.74484 20.1772 8.9197 20.0483 9.04864C19.9194 9.17757 19.7445 9.25 19.5622 9.25Z\" fill=\"#686B73\"/>\n</svg>\n";
    readonly thumbup: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.5416 2.31131C14.0743 0.857441 11.5756 1.44185 10.9194 3.39243L10.2204 5.46997C10.1227 5.76038 9.95956 6.02446 9.7436 6.24182L7.64664 8.35241C7.55278 8.44688 7.42511 8.5 7.29194 8.5H5.93053C5.41662 8.5 5 8.94929 5 9.45845V20.5219C5 21.0311 5.41662 21.5 5.93053 21.5H18.7057C20.0141 21.5 21.147 20.5435 21.4309 19.278L22.9174 12.6504C23.3908 10.5392 21.7695 8.5365 19.5867 8.5365H16.4001C16.0798 8.5365 15.8421 8.23959 15.9122 7.92708L16.5429 5.11486C16.75 4.19173 16.4666 3.22778 15.7918 2.55911L15.5416 2.31131Z\" fill=\"#FBC9AD\"/>\n<path d=\"M1 9.5C1 8.94772 1.44772 8.5 2 8.5H7V21.5H2C1.44772 21.5 1 21.0523 1 20.5V9.5Z\" fill=\"#2F6EFF\"/>\n</svg>\n";
    readonly thumbdown: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.5416 21.6887C14.0743 23.1426 11.5756 22.5582 10.9194 20.6076L10.2204 18.53C10.1227 18.2396 9.95956 17.9755 9.7436 17.7582L7.64664 15.6476C7.55278 15.5531 7.42511 15.5 7.29194 15.5H5.93053C5.41662 15.5 5 15.0507 5 14.5415V3.47811C5 2.96894 5.41662 2.5 5.93053 2.5H18.7057C20.0141 2.5 21.147 3.45647 21.4309 4.72201L22.9174 11.3496C23.3908 13.4608 21.7695 15.4635 19.5867 15.4635H16.4001C16.0798 15.4635 15.8421 15.7604 15.9122 16.0729L16.5429 18.8851C16.75 19.8083 16.4666 20.7722 15.7918 21.4409L15.5416 21.6887Z\" fill=\"#FBC9AD\"/>\n<path d=\"M1 3.5C1 2.94772 1.44772 2.5 2 2.5H7V15.5H2C1.44772 15.5 1 15.0523 1 14.5V3.5Z\" fill=\"#474A52\"/>\n</svg>\n";
    readonly coupon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3 6.5C3 5.39543 3.89543 4.5 5 4.5H21C22.1046 4.5 23 5.39543 23 6.5V14.5C23 15.6046 22.1046 16.5 21 16.5H5C3.89543 16.5 3 15.6046 3 14.5V6.5Z\" fill=\"#FFE066\"/>\n<path d=\"M3 6.5C1.89543 6.5 1 7.39543 1 8.5V10C1 10.2761 1.22733 10.4936 1.49494 10.5617C2.36012 10.782 3 11.5663 3 12.5C3 13.4337 2.36012 14.218 1.49494 14.4383C1.22733 14.5064 1 14.7239 1 15V16.5C1 17.6046 1.89543 18.5 3 18.5H19C20.1046 18.5 21 17.6046 21 16.5V8.5C21 7.39543 20.1046 6.5 19 6.5H3Z\" fill=\"#FFB200\"/>\n<path d=\"M15.5 6.5H16.5V8.5C16.5 8.77614 16.2761 9 16 9C15.7239 9 15.5 8.77614 15.5 8.5V6.5Z\" fill=\"white\"/>\n<path d=\"M15.5 16.5C15.5 16.2239 15.7239 16 16 16C16.2761 16 16.5 16.2239 16.5 16.5V18.5H15.5V16.5Z\" fill=\"white\"/>\n<path d=\"M15.5 10.5C15.5 10.2239 15.7239 10 16 10C16.2761 10 16.5 10.2239 16.5 10.5V11.5C16.5 11.7761 16.2761 12 16 12C15.7239 12 15.5 11.7761 15.5 11.5V10.5Z\" fill=\"white\"/>\n<path d=\"M15.5 13.5C15.5 13.2239 15.7239 13 16 13C16.2761 13 16.5 13.2239 16.5 13.5V14.5C16.5 14.7761 16.2761 15 16 15C15.7239 15 15.5 14.7761 15.5 14.5V13.5Z\" fill=\"white\"/>\n<path d=\"M6 10C6 9.72386 6.22386 9.5 6.5 9.5H13C13.2761 9.5 13.5 9.72386 13.5 10C13.5 10.2761 13.2761 10.5 13 10.5H6.5C6.22386 10.5 6 10.2761 6 10Z\" fill=\"white\"/>\n<path d=\"M6 12.5C6 12.2239 6.22386 12 6.5 12H13C13.2761 12 13.5 12.2239 13.5 12.5C13.5 12.7761 13.2761 13 13 13H6.5C6.22386 13 6 12.7761 6 12.5Z\" fill=\"white\"/>\n<path d=\"M6 15C6 14.7239 6.22386 14.5 6.5 14.5H13C13.2761 14.5 13.5 14.7239 13.5 15C13.5 15.2761 13.2761 15.5 13 15.5H6.5C6.22386 15.5 6 15.2761 6 15Z\" fill=\"white\"/>\n</svg>\n";
};
type IllustType = keyof typeof illustMap;

interface IllustProps {
    /** 일러스트 타입 */
    type: IllustType;
    /** 일러스트 크기 (픽셀 단위) */
    size?: number;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React.CSSProperties;
}
declare const Illust: React.FC<IllustProps>;

interface LabelProps {
    /** 라벨의 크기 */
    size?: 'm' | 's';
    /** 라벨의 모양 */
    type?: 'square' | 'capsule';
    /** 라벨의 색상 */
    color?: 'grey' | 'dark' | 'violet' | 'accent' | 'red' | 'green' | 'yellow';
    /** 선행 아이콘 */
    leadingIcon?: React$1.ReactNode;
    /** 후행 아이콘 */
    trailingIcon?: React$1.ReactNode;
    /** 텍스트 내용 */
    children?: React$1.ReactNode;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const Label: React$1.FC<LabelProps>;

interface LottieProps {
    /** Lottie 애니메이션 데이터 (JSON 형태) */
    animationData: object;
    /** 애니메이션 재생 여부 */
    loop?: boolean;
    /** 자동 재생 여부 */
    autoplay?: boolean;
    /** 애니메이션 속도 (1이 기본 속도) */
    speed?: number;
    /** 애니메이션 방향 (1: 정방향, -1: 역방향) */
    direction?: 1 | -1;
    /** 애니메이션 크기 (픽셀 단위) */
    width?: number;
    /** 애니메이션 높이 (픽셀 단위) */
    height?: number;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React$1.CSSProperties;
    /** 애니메이션 완료 시 콜백 */
    onComplete?: () => void;
    /** 애니메이션 반복 시 콜백 */
    onLoopComplete?: () => void;
    /** 특정 세그먼트만 재생할 때 사용 */
    segments?: [number, number];
    /** 애니메이션 렌더링 설정 */
    rendererSettings?: {
        preserveAspectRatio?: string;
        clearCanvas?: boolean;
        progressiveLoad?: boolean;
        hideOnTransparent?: boolean;
    };
}
interface LottieRef {
    /** 애니메이션 재생 */
    play: () => void;
    /** 애니메이션 정지 */
    stop: () => void;
    /** 애니메이션 일시정지 */
    pause: () => void;
    /** 특정 프레임으로 이동 */
    goToAndStop: (frame: number) => void;
    /** 특정 프레임으로 이동하고 재생 */
    goToAndPlay: (frame: number) => void;
    /** 재생 속도 설정 */
    setSpeed: (speed: number) => void;
    /** 재생 방향 설정 */
    setDirection: (direction: 1 | -1) => void;
    /** 애니메이션 인스턴스 가져오기 */
    getLottieInstance: () => any;
}
declare const YouthLottie: React$1.ForwardRefExoticComponent<LottieProps & React$1.RefAttributes<LottieRef>>;

interface TextInputProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    className?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    size?: 'l' | 'm' | 's';
}
declare const TextInput: React$1.ForwardRefExoticComponent<TextInputProps & React$1.RefAttributes<HTMLInputElement>>;

interface TextButtonProps {
    size?: 'm' | 's' | 'xs';
    disabled?: boolean;
    underline?: boolean;
    icon?: {
        left?: React.ReactNode;
        right?: React.ReactNode;
    };
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    width?: string | number;
    height?: string | number;
    chevron?: boolean;
    color?: string;
}
declare const TextButton: React.FC<TextButtonProps>;

interface TabProps {
    type?: 'underline' | 'capsule' | 'toggle';
    size?: 'l' | 'm' | 's';
    selected?: boolean;
    disabled?: boolean;
    /** 아이콘 타입 (Icon 컴포넌트 사용) */
    icon?: IconType;
    number?: string | number;
    children: React$1.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React$1.CSSProperties;
    /** 너비 설정 */
    width?: 'fill' | (string & {});
}
declare const Tab: React$1.FC<TabProps>;

interface TabBarProps {
    type?: 'underline' | 'capsule' | 'toggle';
    size?: 'l' | 'm' | 's';
    /** 너비 설정 */
    width?: 'fill' | (string & {});
    defaultSelectedIndex?: number;
    selectedIndex?: number;
    onTabChange?: (index: number) => void;
    tabs: Array<{
        label: string;
        icon?: IconType;
        number?: string | number;
        disabled?: boolean;
    }>;
    className?: string;
}
declare const TabBar: React$1.FC<TabBarProps>;

interface ChipsProps {
    /** 칩의 크기 */
    size?: 'large' | 'medium';
    /** 칩의 모양 */
    type?: 'square' | 'capsule';
    /** 칩의 상태 */
    state?: 'hover' | 'selected' | 'disabled' | 'resting';
    /** 아이콘 위치 */
    iconPosition?: 'leading' | 'trailing';
    /** 아이콘 요소 */
    icon?: React$1.ReactNode;
    /** 아이콘 색상 */
    iconColor?: string;
    /** 텍스트 내용 */
    children?: React$1.ReactNode;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const Chips: React$1.FC<ChipsProps>;

interface RadioProps {
    /** 라디오 버튼이 선택되었는지 여부 */
    checked?: boolean;
    /** 라디오 버튼이 비활성화되었는지 여부 */
    disabled?: boolean;
    /** 라디오 버튼의 이름 (같은 그룹의 라디오 버튼들은 같은 name을 가져야 함) */
    name?: string;
    /** 라디오 버튼의 값 */
    value?: string;
    /** 라벨 텍스트 */
    label?: string;
    /** 라벨 설명 텍스트 */
    description?: string;
    /** 라벨 위치 */
    labelPosition?: 'right' | 'left';
    /** 크기 */
    size?: 'small' | 'medium' | 'large';
    /** 변경 이벤트 핸들러 */
    onChange?: (checked: boolean, value?: string) => void;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const Radio: React$1.FC<RadioProps>;

interface CheckboxProps {
    /** 체크박스가 선택되었는지 여부 */
    checked?: boolean;
    /** 체크박스가 비활성화되었는지 여부 */
    disabled?: boolean;
    /** 라벨 텍스트 */
    label?: string;
    /** 라벨 설명 텍스트 */
    description?: string;
    /** 라벨 위치 */
    labelPosition?: 'right' | 'left';
    /** 크기 */
    size?: 'small' | 'medium' | 'large';
    /** 변경 이벤트 핸들러 */
    onChange?: (checked: boolean) => void;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const Checkbox: React$1.FC<CheckboxProps>;

interface ToggleProps {
    /** 토글이 켜져있는지 여부 */
    checked?: boolean;
    /** 토글이 비활성화되었는지 여부 */
    disabled?: boolean;
    /** 라벨 텍스트 */
    label?: string;
    /** 라벨 설명 텍스트 */
    description?: string;
    /** 라벨 위치 */
    labelPosition?: 'right' | 'left';
    /** 크기 */
    size?: 'small' | 'medium' | 'large';
    /** 변경 이벤트 핸들러 */
    onChange?: (checked: boolean) => void;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const Toggle: React$1.FC<ToggleProps>;

type ToastStatus = 'success' | 'error' | 'warning' | 'info';
interface ToastProps {
    /** 토스트 상태 */
    status: ToastStatus;
    /** 제목 */
    title: string;
    /** 설명 텍스트 (선택사항) */
    description?: string;
    /** 앞쪽 아이콘 표시 여부 */
    showLeadingIcon?: boolean;
    /** 닫기 버튼 표시 여부 */
    showCloseButton?: boolean;
    /** 닫기 버튼 클릭 핸들러 */
    onClose?: () => void;
    /** 커스텀 클래스명 */
    className?: string;
}
/**
 * 토스트 오버레이 컴포넌트
 *
 * 사용자가 어떤 작업을 완료했을 때, 시스템이 잘 처리됐다는 걸 알려주는 알림입니다.
 * 현재 하고 있는 일을 방해하지 않고, 잠깐 나타났다 사라지는 방식으로 보여집니다.
 */
declare const Toast: React$1.FC<ToastProps>;

interface ToastItem extends Omit<ToastProps, 'onClose'> {
    id?: string;
    duration?: number;
}
interface ToastProviderProps {
    children: ReactNode;
    /** Toast가 표시될 위치 */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    /** 기본 지속 시간 (ms) */
    defaultDuration?: number;
}
/**
 * Toast Provider 컴포넌트
 *
 * react-hot-toast를 래핑하여 기존 Toast 컴포넌트와 함께 사용할 수 있는 Provider입니다.
 */
declare const ToastProvider: React$1.FC<ToastProviderProps>;
/**
 * useToast 훅
 *
 * react-hot-toast를 래핑하여 기존 API 호환성을 유지하면서 Toast를 사용할 수 있는 훅입니다.
 */
declare const useToast: () => {
    success: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    error: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    warning: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    info: (title: string, description?: string, options?: Partial<ToastItem>) => string;
    custom: (options: Omit<ToastItem, "id">) => string;
    remove: (id: string) => void;
    removeAll: () => void;
};

interface PopupProps {
    /** 팝업 제목 */
    title: string;
    /** 팝업 설명 (선택사항) */
    description?: string;
    /** 메인 버튼 props */
    primaryButton: {
        text: string;
        onClick: () => void;
    } & Partial<Omit<ButtonProps, 'onClick'>>;
    /** 보조 버튼 props (선택사항) */
    secondaryButton?: {
        text: string;
        onClick: () => void;
    } & Partial<Omit<ButtonProps, 'onClick'>>;
    /** 팝업이 표시되는지 여부 */
    isOpen: boolean;
    /** 팝업 닫기 핸들러 */
    onClose: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React$1.CSSProperties;
}
declare const Popup: React$1.FC<PopupProps>;

interface ModalProps {
    /** 모달 제목 */
    title: string;
    /** 모달 설명 (선택사항) */
    description?: string;
    /** 모달 내부 컨텐츠 */
    children?: React$1.ReactNode;
    /** 컨텐츠 최대 높이 (기본값: 500px) */
    contentMaxHeight?: number;
    /** 스크롤바 표시 여부 (기본값: false) */
    showScrollbar?: boolean;
    /** 닫기 버튼 표시 여부 */
    showCloseButton?: boolean;
    /** 모달 너비 (기본값: 480px) */
    width?: string | number;
    /** 메인 버튼 props */
    primaryButton: {
        text: string;
        onClick: () => void;
    } & Partial<Omit<ButtonProps, 'onClick'>>;
    /** 보조 버튼 props (선택사항) */
    secondaryButton?: {
        text: string;
        onClick: () => void;
    } & Partial<Omit<ButtonProps, 'onClick'>>;
    /** 모달이 표시되는지 여부 */
    isOpen: boolean;
    /** 모달 닫기 핸들러 */
    onClose: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 모달 컨테이너 추가 스타일 */
    style?: React$1.CSSProperties;
    /** 오버레이 추가 스타일 */
    overlayStyle?: React$1.CSSProperties;
}
declare const Modal: React$1.FC<ModalProps>;

interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface DropdownProps {
    /** 드롭다운 플레이스홀더 텍스트 */
    placeholder?: string;
    /** 선택된 값 */
    value?: string;
    /** 옵션 리스트 */
    options?: DropdownOption[];
    /** 값 변경 시 호출되는 콜백 */
    onChange?: (value: string) => void;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 에러 상태 */
    error?: boolean;
    /** 에러 메시지 */
    errorMessage?: string;
    /** 커스텀 클래스명 */
    className?: string;
    /** Leading 아이콘 타입 (Icon 컴포넌트 사용) */
    leadingIconType?: IconType;
    /** 크기 설정 */
    size?: 'l' | 'm';
    /** 너비 설정 */
    width?: 'fill' | (string & {});
    /** 검색 기능 활성화 여부 */
    enableSearch?: boolean;
    /** 모든 옵션 숨김 여부 (드롭다운 자체를 열지 않음) */
    hideOption?: boolean;
}
declare const Dropdown: React$1.FC<DropdownProps>;

interface TextAreaProps extends Omit<React$1.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
    /** 입력 필드의 placeholder 텍스트 */
    placeholder?: string;
    /** 입력 값 */
    value?: string;
    /** 기본 값 */
    defaultValue?: string;
    /** 값 변경 시 호출되는 콜백 */
    onChange?: (value: string) => void;
    /** 포커스 시 호출되는 콜백 */
    onFocus?: () => void;
    /** 블러 시 호출되는 콜백 */
    onBlur?: () => void;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 에러 상태 */
    error?: boolean;
    /** 에러 메시지 */
    errorMessage?: string;
    /** 커스텀 클래스명 */
    className?: string;
    /** 문자 수 카운터 표시 여부 */
    showCharacterCounter?: boolean;
    /** 최대 문자 수 */
    maxLength?: number;
    /** 상태 (filled/empty) */
    status?: 'filled' | 'empty';
    /** 너비 설정 (기본값: '320px') */
    width?: 'fill' | (string & {}) | number;
}
declare const TextArea: React$1.ForwardRefExoticComponent<TextAreaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

interface TextFieldProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    /** 입력 필드의 placeholder 텍스트 */
    placeholder?: string;
    /** 입력 값 */
    value?: string;
    /** 기본 값 */
    defaultValue?: string;
    /** 값 변경 시 호출되는 콜백 */
    onChange?: (value: string) => void;
    /** 포커스 시 호출되는 콜백 */
    onFocus?: () => void;
    /** 블러 시 호출되는 콜백 */
    onBlur?: () => void;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 읽기 전용 상태 */
    readOnly?: boolean;
    /** 에러 상태 */
    error?: boolean;
    /** 에러 메시지 */
    errorMessage?: string;
    /** 커스텀 클래스명 */
    className?: string;
    /** 입력 타입 */
    type?: 'text' | 'password' | 'email' | 'number' | 'tel';
    /** Leading 아이콘 */
    leadingIcon?: React$1.ReactNode;
    /** Trailing 아이콘 */
    trailingIcon?: React$1.ReactNode;
    /** Leading 아이콘 타입 (Icon 컴포넌트 사용) */
    leadingIconType?: IconType;
    /** Trailing 아이콘 타입 (Icon 컴포넌트 사용) */
    trailingIconType?: IconType;
    /** Leading 아이콘 클릭 핸들러 */
    onLeadingIconClick?: () => void;
    /** Trailing 아이콘 클릭 핸들러 */
    onTrailingIconClick?: () => void;
    /** 상태 (filled/empty) */
    status?: 'filled' | 'empty';
    /** 너비 */
    width?: 'fill' | (string & {}) | number;
}
declare const TextField: React$1.ForwardRefExoticComponent<TextFieldProps & React$1.RefAttributes<HTMLInputElement>>;

interface ExerciseCardProps {
    /** 운동 이름 */
    title: string;
    /** 운동 설명 또는 부가 정보 */
    description?: string;
    /** 운동 타입 (예: 유산소, 근력, 스트레칭) */
    type?: 'cardio' | 'strength' | 'stretching' | 'balance';
    /** 예상 소요시간 (분) */
    duration?: number;
    /** 칼로리 소모량 */
    calories?: number;
    /** 운동 아이콘 또는 이모지 */
    icon?: React$1.ReactNode;
    /** 완료 상태 */
    isCompleted?: boolean;
    /** 즐겨찾기 상태 */
    isFavorite?: boolean;
    /** 너비 설정 ('fill'이면 부모 컨테이너 100%, 아니면 지정된 값) */
    width?: 'fill' | (string & {});
    /** 카드 클릭 핸들러 */
    onClick?: () => void;
    /** 즐겨찾기 토글 핸들러 */
    onFavoriteToggle?: () => void;
    /** 완료 토글 핸들러 */
    onCompleteToggle?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const ExerciseCard: React$1.FC<ExerciseCardProps>;

interface ActivityGoalCardProps {
    /** 목표 제목 */
    title: string;
    /** 목표 설명 */
    description?: string;
    /** 현재 진행 값 */
    currentValue: number;
    /** 목표 값 */
    goalValue: number;
    /** 단위 (예: 분, 회, kcal) */
    unit: string;
    /** 목표 타입에 따른 색상 테마 */
    theme?: 'primary' | 'success' | 'warning' | 'info';
    /** 아이콘 */
    icon?: React$1.ReactNode;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const ActivityGoalCard: React$1.FC<ActivityGoalCardProps>;

interface GreetingHeaderProps {
    /** 사용자 이름 */
    userName?: string;
    /** 커스텀 인사말 (제공되면 기본 인사말 대신 사용) */
    customGreeting?: string;
    /** 날짜 표시 여부 */
    showDate?: boolean;
    /** 날씨 정보 */
    weather?: {
        temperature?: number;
        condition?: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
    };
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const GreetingHeader: React$1.FC<GreetingHeaderProps>;

interface Exercise extends Omit<ExerciseCardProps, 'onClick' | 'onFavoriteToggle' | 'onCompleteToggle'> {
    id: string;
}
interface ExerciseListProps {
    /** 운동 목록 */
    exercises: Exercise[];
    /** 빈 상태 메시지 */
    emptyMessage?: string;
    /** 빈 상태 아이콘 */
    emptyIcon?: React$1.ReactNode;
    /** 필터 옵션 표시 여부 */
    showFilters?: boolean;
    /** 검색 기능 표시 여부 */
    showSearch?: boolean;
    /** 운동 클릭 핸들러 */
    onExerciseClick?: (exercise: Exercise) => void;
    /** 즐겨찾기 토글 핸들러 */
    onFavoriteToggle?: (exerciseId: string) => void;
    /** 완료 토글 핸들러 */
    onCompleteToggle?: (exerciseId: string) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}
declare const ExerciseList: React$1.FC<ExerciseListProps>;

interface StepperProps {
    /** 초기 값 */
    value?: number;
    /** 최소값 */
    min?: number;
    /** 최대값 */
    max?: number;
    /** 값 변경 시 호출되는 콜백 */
    onChange?: (value: number) => void;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 컴포넌트 너비 */
    width?: 'fill' | (string & {});
    /** 에러 상태 */
    error?: boolean;
    /** 에러 메시지 */
    errorMessage?: string;
    /** 포커스 상태 */
    focused?: boolean;
    /** 키보드로 직접 편집 가능 여부 */
    editable?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React$1.CSSProperties;
    /** 단위 (예: "회", "분", "개월") */
    unit?: string;
    /** 증감 폭 (기본값: 1) */
    step?: number;
    /** 시간 관련 값인지 여부 */
    isTime?: boolean;
    /** 시간의 시작 단위 ('sec' | 'min' | 'hour') */
    timeBaseUnit?: 'sec' | 'min' | 'hour';
}
declare const Stepper: React$1.FC<StepperProps>;

export { ActivityGoalCard, type ActivityGoalCardProps, Button, type ButtonProps, Checkbox, type CheckboxProps, Chips, type ChipsProps, Dropdown, type DropdownProps, ExerciseCard, type ExerciseCardProps, ExerciseList, type ExerciseListProps, Font, type FontProps, type FontType, type FontWeight, GreetingHeader, type GreetingHeaderProps, Icon, type IconProps, type IconType, Illust, type IllustProps, type IllustType, Label, type LabelProps, type LottieProps, type LottieRef, Modal, type ModalProps, Popup, type PopupProps, Radio, type RadioProps, Stepper, type StepperProps, Tab, TabBar, type TabBarProps, type TabProps, TextArea, type TextAreaProps, TextButton, type TextButtonProps, TextField, type TextFieldProps, TextInput, type TextInputProps, Toast, type ToastItem, type ToastProps, ToastProvider, type ToastStatus, Toggle, type ToggleProps, YouthLottie, borders, colors, coolGray, fontFamily, fontSize, fontWeight, gray, illustration, letterSpacing, lineHeight, primary, radius, semantic, shadows, spacing, textStyles, tint, tokens, typography, useToast };
