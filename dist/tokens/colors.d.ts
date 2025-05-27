/**
 * Color Design Tokens
 * 브랜드 아이덴티티와 UI 의미 전달을 위한 컬러 시스템
 */
export declare const colors: {
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
export type ColorTokens = typeof colors;
export type PrimaryColors = typeof colors.primary;
export type SemanticColors = typeof colors.semantic;
export type IllustrationColors = typeof colors.illustration;
/** @deprecated colors.primary 사용을 권장합니다 */
export declare const primary: "#7248D9";
/** @deprecated colors.primary.gray 사용을 권장합니다 */
export declare const gray: {
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
export declare const coolGray: {
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
export declare const tint: {
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
export declare const semantic: {
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
export declare const illustration: {
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
