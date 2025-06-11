// src/tokens/colors.ts
var colors = {
  primary: {
    /** 브랜드 아이덴티티를 대표하는 메인 컬러 */
    mainviolet: "#7248D9",
    /** 중립적인 컬러 - Typography 및 넓은 영역 Fill에 사용 */
    gray: {
      900: "#171717",
      800: "#292929",
      700: "#595959",
      600: "#7A7A7A",
      500: "#999999",
      400: "#B8B8B8",
      300: "#D6D6D6",
      200: "#EBEBEB",
      100: "#F5F5F5",
      black: "#000000",
      white: "#FFFFFF"
    },
    /** 넓은 영역에서 Fill로 사용 가능한 중립 색상 계열 */
    coolGray: {
      900: "#151719",
      800: "#25282D",
      700: "#393F46",
      600: "#505862",
      500: "#6E7887",
      400: "#8D97A5",
      300: "#AFB6C0",
      200: "#D1D5DB",
      100: "#E8EAED",
      50: "#F3F5F6"
    },
    /** 메인 컬러보다는 덜 강조되지만, 일러스트 및 보조 정보 강조에 사용 */
    tint: {
      violet: {
        700: "#4B1FA3",
        600: "#5B27C4",
        500: "#7248D9",
        400: "#8B6EE4",
        300: "#A88FEA",
        200: "#C8B7F4",
        100: "#E5DEF9",
        50: "#F8F4FE"
      },
      blue: {
        700: "#0038B8",
        600: "#004AF5",
        500: "#2F6EFF",
        400: "#5C92FF",
        300: "#8FB4FF",
        200: "#C2D6FF",
        100: "#E0EBFF",
        50: "#F0F5FF"
      },
      red: {
        700: "#C70000",
        600: "#E51A1A",
        500: "#FF2E2E",
        400: "#FF6666",
        300: "#FF9494",
        200: "#FFC2C2",
        100: "#FFE0E0",
        50: "#FFF0F0"
      },
      yellow: {
        700: "#F59B00",
        600: "#FFB200",
        500: "#FFCC00",
        400: "#FFDA47",
        300: "#FFE785",
        200: "#FFF1B8",
        100: "#FFF7D6",
        50: "#FFFAE5"
      },
      green: {
        700: "#00996B",
        600: "#00AD74",
        500: "#00C785",
        400: "#55DD99",
        300: "#88E7B8",
        200: "#BBF2D2",
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
      tertiary: "#8D97A5",
      /** 상호작용이 불가능하거나 비활성화된 상태의 텍스트에 사용 */
      disabled: "#D1D5DB",
      /** 어두운 배경 위에 사용되는 밝은 텍스트 컬러 */
      inverse: "#FFFFFF"
    },
    state: {
      /** 작업 완료, 저장 성공 등 긍정적인 상태를 나타냄 */
      success: "#00C785",
      /** 주의가 필요한 상황이나 경고 메시지를 전달할 때 사용 */
      warning: "#FFCC00",
      /** 오류 상태나 실패 메시지를 표시할 때 사용 */
      error: "#FF2E2E",
      /** 보조적인 정보나 안내 메시지를 전달할 때 사용 */
      info: "#2F6EFF"
    },
    background: {
      /** 기본 페이지 또는 레이아웃의 배경으로 사용 */
      primary: "#FFFFFF",
      /** Primary 배경과 대비를 주어 시각적 계층을 형성할 때 사용 */
      secondary: "#E8EAED"
    },
    border: {
      /** 강조보다는 미묘한 구분을 목적으로 하며, 디바이더 역할까지 겸함 */
      default: "#EBEBEB",
      /** 콘텐츠 간의 명확한 구획이 필요할 때 사용하는 보더 컬러 */
      strong: "#D6D6D6"
    },
    disabled: {
      /** 텍스트 또는 아이콘이 비활성 상태임을 나타낼 때 사용 */
      foreground: "#D1D5DB",
      /** 버튼, 입력 필드 등 UI가 비활성화된 배경으로 사용 */
      background: "#F3F5F6"
    },
    dim: {
      /** 모달, 드롭다운 등 레이어 위에 표시되는 오버레이 배경 */
      overlay: "#000000B3"
    }
  },
  /** 의료 플랫폼 특성을 반영해 피부, 머리카락, 장기 표현용 컬러 */
  illustration: {
    skin: {
      /** 피부 표현 시 밝은 톤으로 사용 */
      light: "#FFEBE1",
      /** 피부 기본 톤을 표현할 때 사용 */
      base: "#FFDAC4",
      /** 피부 음영 표현용 컬러 */
      shadow: "#FFCBB7",
      /** 피부 깊은 음영이나 입체감을 줄 때 사용 */
      deepshadow: "#F8B29C"
    },
    hair: {
      /** 머리카락 하이라이트 표현용 컬러 */
      light: "#706965",
      /** 머리카락 기본 색상을 표현할 때 사용 */
      base: "#37322F",
      /** 머리카락 음영 및 입체감 표현용 컬러 */
      shadow: "#1A1716"
    },
    organ: {
      /** 긍정적 상태나 특정 장기 강조용 컬러 */
      light: "#FFB5B5",
      /** 장기 표현 시 기본 색상으로 사용 */
      base: "#FF8F8F",
      /** 장기 음영 표현용 컬러 */
      shadow: "#FB7474",
      /** 장기 깊은 음영이나 강조를 위해 사용 */
      deepshadow: "#CD5151"
    }
  }
};
var primary = colors.primary.mainviolet;
var gray = colors.primary.gray;
var coolGray = colors.primary.coolGray;
var tint = colors.primary.tint;
var semantic = colors.semantic;
var illustration = colors.illustration;

export { colors, coolGray, gray, illustration, primary, semantic, tint };
//# sourceMappingURL=chunk-DY2CS7O2.js.map
//# sourceMappingURL=chunk-DY2CS7O2.js.map