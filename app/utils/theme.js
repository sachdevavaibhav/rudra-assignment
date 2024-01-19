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
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '&::-webkit-scrollbar': {
            width: 6,
          },

          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#8A92A6',
            borderRadius: 6,
          },

          '&::-webkit-scrollbar-track': {
            backgroundColor: '#C4CCF8',
          },
        }
      }
    }
};

export const theme = createTheme(themeOptions);