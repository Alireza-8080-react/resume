import { createTheme } from "@mui/material";
import {
  COLOR_PALETTE_FOREGROUND,
  COLOR_PALETTE_MAIN,
  COLOR_PALETTE_SECONDARY,
} from "./consts/colorPallete";

export const applicationTheme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: COLOR_PALETTE_MAIN,
      contrastText: COLOR_PALETTE_FOREGROUND,
    },
    secondary: {
      main: COLOR_PALETTE_SECONDARY,
      contrastText: COLOR_PALETTE_FOREGROUND,
    },
  },
  typography: {
    fontFamily: "IRANSansXFaNum",
    allVariants: {
      color: COLOR_PALETTE_FOREGROUND,
    },
  },
});
