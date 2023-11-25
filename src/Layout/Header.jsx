import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Button, Container, Grid, Drawer, List, ListItem, Divider,SliverAppBar,Sliver } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Logo from "../assets/brand/Logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AppRoutes from "../routes/AppRoutes";

export default function Header({ toggleThemeMode, darkMode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <Box sx={{ flexGrow: 1, }}>
      <Container>
        <AppBar
          elevation="1"
          position="sticky"
          sx={{
            mt:1,
            borderRadius: 2,
            backgroundColor: darkMode ? "#121212" : "white",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={Logo} alt="Logo" style={{ maxWidth: "80%", height: "auto" }} />
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: isActive("/") ? 500 : 500 }}
                  color={isActive("/") ? "text.iris" : "text.secondary"}
                >
                  Home
                </Typography>
              </Link>
              <Link to="services" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  color={
                    isActive("/services") ? "text.iris" : "text.secondary"
                  }
                  sx={{
                    paddingLeft: "30px",
                    fontWeight: isActive("/services") ? 500 : 500,
                  }}
                >
                  Service
                </Typography>
              </Link>
              <Link to="contact" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  color={isActive("/contact") ? "text.iris" : "text.secondary"}
                  sx={{
                    paddingLeft: "30px",
                    fontWeight: isActive("/contact") ? 500 : 500,
                  }}
                >
                  Contact
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div>
                <IconButton>
                  <SearchIcon sx={{ color: darkMode ? "#FFFF" : "#666666" }} />
                </IconButton>
              </div>
              <div>
                <IconButton color="inherit" onClick={toggleThemeMode}>
                  {darkMode ? (
                    <DarkModeIcon />
                  ) : (
                    <WbSunnyOutlinedIcon sx={{ color: "#666666" }} />
                  )}
                </IconButton>
              </div>
              <div>
                <Button
                sx={{textTransform:'capitalize',p:1,px:3}}
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  Let's Start
                </Button>
              </div>
            </Box>
            <IconButton
              color="primary"
              onClick={handleDrawerOpen}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon sx={{fontSize:35}}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          sx={{ display: { xs: "block", md: "none" }}}
        >
          
            <List sx={{mx:10}}>
              <ListItem>Home</ListItem>
              <Divider/>
              <ListItem>Home</ListItem>
              <Divider/>
              <ListItem>Home</ListItem>
              <Divider/>
            </List>
          
        </Drawer>
        <AppRoutes/>
      </Container>
    </Box>
  );
}
