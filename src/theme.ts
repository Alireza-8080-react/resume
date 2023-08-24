import { createTheme } from '@mui/material';

import {
  COLOR_PALETTE_BACKGROUND_2,
  COLOR_PALETTE_FOREGROUND,
  COLOR_PALETTE_MAIN,
  COLOR_PALETTE_SECONDARY
} from './consts/colorPallete';

export const applicationTheme = createTheme({
  palette: {
    background: {
      default: COLOR_PALETTE_BACKGROUND_2,
      paper: COLOR_PALETTE_BACKGROUND_2
    },
    primary: {
      contrastText: COLOR_PALETTE_FOREGROUND,
      main: COLOR_PALETTE_MAIN
    },
    secondary: {
      contrastText: COLOR_PALETTE_FOREGROUND,
      main: COLOR_PALETTE_SECONDARY
    }
  },
  typography: {
    allVariants: {
      color: COLOR_PALETTE_FOREGROUND
    },
    fontFamily: 'IRANSansXFaNum'
  }
});
