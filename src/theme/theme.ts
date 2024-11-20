import { createTheme, Theme } from '@mui/material/styles';
import { lightTokens, darkTokens } from './tokens';
import { primitives } from './primitives';
import { typography } from './typography';

declare module '@mui/material/styles' {
  interface Theme {
    tokens: {
      border: {
        default: string;
      };
    };
  }
  interface ThemeOptions {
    tokens?: {
      border?: {
        default?: string;
      };
    };
  }
  interface Palette {
    neutral: {
      25: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }
  interface PaletteOptions {
    neutral?: {
      25: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }

  interface TypeText {
    default: string;
    secondary: string;
    disabled: string;
  }

  interface Button {
    backgroundPrimaryDefault: string;
    backgroundPrimaryHover: string;
    textPrimary: string;
    backgroundDisabled: string;
    textDisabled: string;
    backgroundSecondaryHover: string;
  }

  interface Icon {
    default: string;
    disabled: string;
  }

  interface Menu {
    backgroundHover: string;
  }
}

const createAppTheme = (mode: 'light' | 'dark'): Theme => {
  const tokens = mode === 'light' ? lightTokens : darkTokens;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: primitives.colors.brand[400],
        light: primitives.colors.brand[300],
        dark: primitives.colors.brand[500],
      },
      secondary: {
        main: primitives.colors.semantic.blue[500],
        light: primitives.colors.semantic.blue[300],
        dark: primitives.colors.semantic.blue[700],
      },
      error: {
        main: primitives.colors.semantic.red[500],
        light: primitives.colors.semantic.red[300],
        dark: primitives.colors.semantic.red[700],
      },
      warning: {
        main: primitives.colors.semantic.yellow[500],
        light: primitives.colors.semantic.yellow[300],
        dark: primitives.colors.semantic.yellow[700],
      },
      background: {
        default: mode === 'light' ? primitives.colors.neutral[25] : primitives.colors.neutral[800],
        paper: primitives.colors.base.white,
      },
      text: {
        primary: tokens.text.default,
        secondary: tokens.text.secondary,
        disabled: tokens.text.disabled,
      },
      divider: primitives.colors.neutral[300],
    },
    spacing: (factor: number) => `${0.25 * factor}rem`,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography,
    tokens: {
      border: {
        default: tokens.border.default,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '8px',
            fontWeight: 600,
          },
          contained: {
            backgroundColor: tokens.button.backgroundPrimaryDefault,
            color: tokens.button.textPrimary,
            '&:hover': {
              backgroundColor: tokens.button.backgroundPrimaryHover,
            },
            '&.Mui-disabled': {
              backgroundColor: tokens.button.backgroundDisabled,
              color: tokens.button.textDisabled,
            },
          },
          outlined: {
            borderColor: primitives.colors.neutral[300],
            color: tokens.text.default,
            '&:hover': {
              borderColor: primitives.colors.neutral[300],
              backgroundColor: tokens.button.backgroundSecondaryHover,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: primitives.colors.base.white,
            borderRadius: '12px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.04)',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: tokens.icon.default,
            '&:hover': {
              backgroundColor: tokens.menu.backgroundHover,
            },
            '&.Mui-disabled': {
              color: tokens.icon.disabled,
            },
          },
        },
      },
    },
  });
};

export default createAppTheme;
