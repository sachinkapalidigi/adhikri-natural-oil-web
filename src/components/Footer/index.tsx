import { theme } from "@/pages/_theme";
import { CopyrightRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material";

const Footer = function () {
  const theme = useTheme();
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "70px",
        backgroundColor: `${theme.palette.primary.main}`,
        color: `${theme.palette.text.primary}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
        fontWeight: "500",
      }}
    >
      <CopyrightRounded />
      Adhikrita natural oil
    </footer>
  );
};

export default Footer;
