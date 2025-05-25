export const shadows = {
  s: '0px 1px 8px rgba(0, 0, 0, 0.1)',
  m: '0px 1px 16px rgba(0, 0, 0, 0.1)',
  l: '0px 1px 24px rgba(0, 0, 0, 0.12)',
} as const;

export type ShadowTokens = typeof shadows; 