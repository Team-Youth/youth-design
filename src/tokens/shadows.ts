/**
 * Shadow Design Tokens
 * 그림자는 적용된 UI의 높이(elevation)와 이동 방향, 가장자리 등에 대한 단서를 제공
 */

export const shadows = {
  /** 높이 48px 이하의 작은 요소에 가벼운 깊이감을 줄 때 사용 - 아이콘, 버튼, 배지, 입력 필드, 체크박스 등 */
  s: '0px 1px 8px rgba(0, 0, 0, 0.1)',
  /** 너비 또는 높이가 48px ~ 200px 사이의 중간 크기 요소를 명확히 구분할 때 사용 - 카드, 모달, 드롭다운, 중간 크기 버튼 등 */
  m: '0px 1px 16px rgba(0, 0, 0, 0.1)',
  /** 너비 200px 이상 또는 화면 너비의 50% 이상을 초과하는 큰 요소, 또는 강조가 필요한 구성 요소에 사용 - 다이얼로그, 대형 카드 등 */
  l: '0px 1px 24px rgba(0, 0, 0, 0.12)',
} as const;

export type ShadowTokens = typeof shadows;

export default shadows;
