"use client";

import { createTheme } from "@mui/material";
import { COLOR_PALETTE_NOMAD } from "./consts/colorPallete";

export const applicationTheme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: COLOR_PALETTE_NOMAD,
    },
    secondary: {
      contrastText: "#eee330",
      main: "#ffe334",
    },
  },
  typography: {
    fontFamily: "IRANSansXFaNum",
    allVariants: {
      color: COLOR_PALETTE_NOMAD,
    },
  },
});
