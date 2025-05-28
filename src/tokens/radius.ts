/**
 * Radius Design Tokens
 * UI 요소의 모서리를 둥글게 하여 부드러운 사용자 경험을 제공
 */

export const radius = {
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
  full: '50%',
} as const;

export type RadiusTokens = typeof radius;

export default radius;
