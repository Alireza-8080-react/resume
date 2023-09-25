import { createTheme } from '@mui/material';

import { colorPalette } from './constants/colorPalette';

export const applicationTheme = (prefersDarkMode: boolean) => {
  const background = prefersDarkMode ? colorPalette.backgroundDark : colorPalette.backgroundLight;
  const foreground = prefersDarkMode ? colorPalette.foregroundDark : colorPalette.foregroundLight;
  return createTheme({
    palette: {
      background: {
        default: background,
        paper: background
      },
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        contrastText: colorPalette.foregroundDark,
        main: colorPalette.main
      },
      secondary: {
        contrastText: colorPalette.foregroundDark,
        main: colorPalette.secondary
      }
    },
    typography: {
      allVariants: {
        color: foreground,
        fontFamily: 'Croissant One'
      }
    }
  });
};
