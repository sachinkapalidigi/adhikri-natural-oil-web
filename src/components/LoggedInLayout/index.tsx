import { theme } from "@/pages/_theme";
import { ThemeProvider } from "@mui/material";
import { ReactElement } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const LoggedInLayout = ({ children }: { children: ReactElement }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default LoggedInLayout;
