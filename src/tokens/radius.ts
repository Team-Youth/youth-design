export const radius = {
  xs: '4px',
  s: '8px',
  m: '12px',
  l: '16px',
  xl: '20px',
  full: '50%',
} as const;

export type RadiusTokens = typeof radius; 