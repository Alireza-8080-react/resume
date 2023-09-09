import { createTheme } from '@mui/material';

import {
  COLOR_PALETTE_BACKGROUND_DARK,
  COLOR_PALETTE_BACKGROUND_LIGHT,
  COLOR_PALETTE_FOREGROUND_DARK,
  COLOR_PALETTE_FOREGROUND_LIGHT,
  COLOR_PALETTE_MAIN,
  COLOR_PALETTE_SECONDARY
} from './constants/colorPalette';

export const applicationTheme = (prefersDarkMode: boolean) => {
  const BACKGROUND = prefersDarkMode
    ? COLOR_PALETTE_BACKGROUND_DARK
    : COLOR_PALETTE_BACKGROUND_LIGHT;
  const FOREGROUND = prefersDarkMode
    ? COLOR_PALETTE_FOREGROUND_DARK
    : COLOR_PALETTE_FOREGROUND_LIGHT;
  return createTheme({
    palette: {
      background: {
        default: BACKGROUND,
        paper: BACKGROUND
      },
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        contrastText: COLOR_PALETTE_FOREGROUND_DARK,
        main: COLOR_PALETTE_MAIN
      },
      secondary: {
        contrastText: COLOR_PALETTE_FOREGROUND_DARK,
        main: COLOR_PALETTE_SECONDARY
      }
    },
    typography: {
      allVariants: {
        color: FOREGROUND
      },
      fontFamily: 'IRANSansXFaNum'
    }
  });
};
