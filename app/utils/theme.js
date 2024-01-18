import { createTheme } from "@mui/material/styles";

const themeOptions = {
    palette: {
      primary: {
        main: '#3f51b5',
        light: '#C4CCF8',
        dark: '#0048B2',
      },
      text: {
        primary: '#000000',
        secondary: '#8A92A6',
      },
      error: {
        main: '#C03221',
      },
      background: {
        default: '#E9ECEF',
        paper: '#FFFFFF',
      },
    },
};

export const theme = createTheme(themeOptions);