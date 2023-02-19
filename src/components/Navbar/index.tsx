import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Divider, Link } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const pages = {
  Sales: "/sales",
  Inventory: "/inventory",
  Production: "/production",
  Expenses: "/expenses",
  "Customer Production": "/customer-production",
};

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(false);

  const handleOpenNavMenu = () => {
    setAnchorElNav(!anchorElNav);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* TODO: change to logo */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          {/* md and above */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Adhikrita Natural Oil
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {anchorElNav ? <ClearIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
          {/* TODO: change to logo */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {/* xs device only */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Adhikrita
          </Typography>
          {/* md to lg devices */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Object.keys(pages).map((page) => (
              <Link
                key={page}
                color="text.primary"
                href={pages[page as keyof typeof pages]}
                underline="none"
                // variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
              color="secondary"
              onClick={() => {
                // TODO: logout functionality
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
        {/* Open here */}
        <Divider />
        {Boolean(anchorElNav) && (
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              paddingBottom: "0.5rem",
            }}
          >
            {Object.keys(pages).map((page) => (
              <Box
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  padding: "0 0.8rem",
                  ":hover": {
                    opacity: 0.6,
                  },
                }}
                key={page}
              >
                <Link
                  color="text.primary"
                  href={pages[page as keyof typeof pages]}
                  underline="none"
                  sx={{
                    width: "100%",
                    display: "flex",
                    margin: "0.8rem",
                  }}
                >
                  {page}
                </Link>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </AppBar>
  );
}
export default Navbar;
