import { primitives } from './primitives';

const createTokens = (mode: 'light' | 'dark') => {
  const tokens = {
    text: {
      default: mode === 'light' ? primitives.colors.neutral[900] : primitives.colors.base.white,
      placeholder: primitives.colors.neutral[500],
      secondary: primitives.colors.neutral[700],
      tertiary: primitives.colors.neutral[400],
      disabled: primitives.colors.neutral[400],
      defaultInverse: primitives.colors.base.white,
      black: primitives.colors.neutral[900],
      aiBlueText: primitives.colors.brand[300],
      aiPurpleText: primitives.colors.semantic.purple[400]
    },
    border: {
      default: mode === 'light' ? primitives.colors.neutral[300] : primitives.colors.neutral[500],
      hover: primitives.colors.brand[500],
      focusVisible: primitives.colors.brand[300],
      disabled: primitives.colors.neutral[200],
      errorHover: primitives.colors.semantic.red[500],
      errorFocus: primitives.colors.semantic.red[200]
    },
    background: {
      page: primitives.colors.neutral[25],
      rightSidebar: primitives.colors.neutral[800],
      primaryBright: primitives.colors.brand[400],
      secondary: primitives.colors.neutral[25],
      card: primitives.colors.neutral[25],
      leftNavbar: primitives.colors.neutral[25]
    },
    input: {
      background: primitives.colors.base.white,
      backgroundDisabled: primitives.colors.neutral[50]
    },
    icon: {
      default: primitives.colors.neutral[900],
      secondary: primitives.colors.neutral[500],
      tertiary: primitives.colors.neutral[400],
      disabled: primitives.colors.neutral[300],
      primaryInverse: primitives.colors.base.white,
      primaryInverseSelected: primitives.colors.brand[800]
    },
    button: {
      backgroundPrimaryDefault: primitives.colors.brand[300],
      backgroundPrimaryHover: primitives.colors.brand[800],
      textPrimary: primitives.colors.neutral[900],
      textDisabled: primitives.colors.neutral[400],
      backgroundDisabled: primitives.colors.neutral[50],
      textSecondary: primitives.colors.brand[800],
      textSecondaryHover: primitives.colors.base.black,
      backgroundSecondaryHover: primitives.colors.brand[50],
      backgroundInverseHover: primitives.colors.brand[400],
      backgroundInverseSelected: primitives.colors.base.white,
      textInverseDisabled: primitives.colors.neutral[400],
      backgroundInverseFocusVisible: primitives.colors.neutral[900]
    },
    menu: {
      backgroundHover: primitives.colors.brand[50],
      backgroundSelected: primitives.colors.brand[100],
      backgroundDefault: mode === 'light' ? primitives.colors.base.white : primitives.colors.neutral[800],
      inverseHover: primitives.colors.brand[400],
      inverseSelected: primitives.colors.brand[300]
    },
    submenu: {
      background: mode === 'light' ? primitives.colors.base.white : primitives.colors.neutral[800],
      backgroundHover: primitives.colors.brand[50],
      backgroundSelected: primitives.colors.brand[100],
      inverseHover: primitives.colors.brand[400],
      inverseSelected: primitives.colors.brand[300]
    },
    badge: {
      backgroundDefault: primitives.colors.brand[50],
      backgroundHover: primitives.colors.brand[100],
      backgroundError: primitives.colors.semantic.red[50],
      backgroundErrorHover: primitives.colors.semantic.red[100],
      backgroundDisabled: primitives.colors.neutral[100],
      backgroundDisabledHover: primitives.colors.neutral[200],
      backgroundPositive: primitives.colors.semantic.green[200],
      backgroundWarning: primitives.colors.semantic.yellow[100],
      backgroundBlue: primitives.colors.semantic.blue[100],
      backgroundPurple: primitives.colors.semantic.purple[100],
      backgroundOrange: primitives.colors.semantic.orange[100],
      backgroundPink: primitives.colors.semantic.pink[100]
    },
    tooltip: {
      default: primitives.colors.semantic.purple[900],
      inverse: primitives.colors.semantic.purple[50]
    },
    controls: {
      backgroundDefault: primitives.colors.brand[600],
      backgroundHover: primitives.colors.brand[700],
      backgroundErrorDefault: primitives.colors.semantic.red[600],
      backgroundErrorHover: primitives.colors.semantic.red[700],
      backgroundDisabled: primitives.colors.neutral[300],
      backgroundDisabledUnselected: primitives.colors.neutral[50],
      borderDefault: primitives.colors.neutral[400],
      borderDisabled: primitives.colors.neutral[200],
      borderHover: primitives.colors.brand[700],
      borderErrorHover: primitives.colors.semantic.red[700],
      borderErrorDefault: primitives.colors.semantic.red[600]
    },
    table: {
      backgroundDefault: primitives.colors.base.white,
      backgroundHover: primitives.colors.brand[50]
    },
    transparency: {
      backgroundNeutral: primitives.colors.base.white,
      backgroundSuccess: '#31ff99',
      backgroundError: primitives.colors.semantic.red[300],
      backgroundWarning: primitives.colors.semantic.yellow[300]
    }
  };

  return tokens;
};

export const lightTokens = createTokens('light');
export const darkTokens = createTokens('dark');
