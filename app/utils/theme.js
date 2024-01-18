import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weights: [400, 500, 600, 700],
})

const themeOptions = {
    palette: {
      primary: {
        main: '#3A57E8',
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
    typography: {
        fontFamily: inter.style.fontFamily,
    },
};

export const theme = createTheme(themeOptions);