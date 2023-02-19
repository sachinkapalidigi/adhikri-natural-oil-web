import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#E7473C",
    },
    secondary: {
      main: "#F0F0F0",
    },
    text: {
      primary: "#F0F0F0",
    },
  },
};

export const theme = createTheme(themeOptions);
