export const GRADIENT_COLORS = [
  '#F68237',
  '#D67050',
  '#BB5E69',
  '#A34A80',
  '#893997',
  '#6E2AAF',
  '#5919C2',
  '#4215A8',
  '#361879',
] as const;

export const GRADIENT_CSS = `linear-gradient(135deg, ${GRADIENT_COLORS.join(', ')})`;
export const GRADIENT_CSS_H = `linear-gradient(90deg, ${GRADIENT_COLORS.join(', ')})`;

export const COLORS = {
  bgPrimary: '#0F0F0F',
  bgSecondary: '#1F1F1F',
  bgCard: '#2C2C2C',
  bgCardHover: '#333333',
  textPrimary: '#FFFFFF',
  textMuted: '#A0A0A0',
  textSubtle: '#6B6B6B',
  border: '#3A3A3A',
} as const;

export const TYPOGRAPHY = {
  fontSans: "'Inter', system-ui, sans-serif",
  fontDisplay: "'Space Grotesk', 'Inter', system-ui, sans-serif",
} as const;

export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
  },
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
} as const;
