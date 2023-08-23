import { createTheme } from '@mui/material';

export const applicationTheme = createTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      contrastText: '#0077f3',
      dark: '#0977fe',
      light: '#000',
      main: '#0977fe'
    },
    secondary: {
      contrastText: '#eee330',
      main: '#ffe334'
    }
  },
  typography: {
    fontFamily: 'IRANSansXFaNum',
    fontSize: 14
  }
});
