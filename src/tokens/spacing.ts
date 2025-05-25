export const spacing = {
  xxxs: '2px',
  xxs: '4px',
  xs: '8px',
  s: '12px',
  m: '16px',
  l: '20px',
  xl: '24px',
  xxl: '32px',
  xxxl: '40px',
} as const;

export type SpacingTokens = typeof spacing; 