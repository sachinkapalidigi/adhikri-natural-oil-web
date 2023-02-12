import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#00c853",
    },
    secondary: {
      main: "#ff3d00",
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
    },
  },
};

export const theme = createTheme(themeOptions);
