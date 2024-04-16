import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Typography,
  Button,
  Container,
  Grid,
  Drawer,
  List,
  ListItem,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { GoSun } from "react-icons/go";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Logo from "../assets/brand/Logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AppRoutes from "../routes/AppRoutes";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Form from "../components/Form/Form";
import CloseIcon from "@mui/icons-material/Close";

export default function Header({ toggleThemeMode, darkMode }) {

  const location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [isFormOpen, setFormOpen] = React.useState(false);

  const handleClickOpenDialog = () => { setOpenDialog(true);};
  const handleCloseDialog = () => {setOpenDialog(false);};
  const handleDrawerOpen = () => {setDrawerOpen(true);};
  const handleDrawerClose = () => {setDrawerOpen(false);};
  const handleFormOpen = () => {setFormOpen(true);};
  const handleFormClose = () => {setFormOpen(false);};

  const isActive = (path) => location.pathname === path;

  const pages = [
    {path: "/", label: "Home"},
    {path: "/about-us", label: "About us"},
    {path: "/services", label: "Services"},
    {path: "/contact", label: "Contact"},
    {path: "/blog", label: "Contact"},
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation="0"
        position="sticky"
        sx={{
          paddingBlock: 1,
          // mt: 1,
          // borderRadius: 2,
          // border: "0.5px solid rgba(145, 158, 171, 0.3)",
          boxShadow: darkMode
            ? "rgba(145, 158, 171, 0.4) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 1px 20px -1px"
            : "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
          backgroundColor: darkMode ? "#121212" : "white",
        }}
      >
        <Container>
          <Toolbar sx={{ padding: "0px !important" , justifyContent:'space-between'}}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src={Logo}
                alt="Logo"
                style={{ maxWidth: "80%", height: "auto" }}
              />
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
                  color={isActive("/") ? "text.iris" : "text.primary"}
                >
                  Home
                </Typography>
              </Link>
              <Link to="services" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  color={isActive("/services") ? "text.iris" : "text.primary"}
                  sx={{
                    paddingLeft: "30px",
                  }}
                >
                  Service
                </Typography>
              </Link>
              <Link to="contact" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  color={isActive("/contact") ? "text.iris" : "text.primary"}
                  sx={{
                    paddingLeft: "30px",
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
                justifyContent: "right",
                gap: "10px",
              }}
            >
              <div>
                <IconButton onClick={handleClickOpenDialog}>
                  <IoSearchOutline
                    style={{ color: darkMode ? "#FFFF" : "#222222" }}
                  />
                </IconButton>
              </div>
              <div>
                <IconButton color="inherit" onClick={toggleThemeMode}>
                  {darkMode ? (
                    <DarkModeIcon />
                  ) : (
                    <GoSun style={{ color: "#222222" }} />
                  )}
                </IconButton>
              </div>
              <div>
                <Button
                  sx={{ textTransform: "capitalize", p: 1, px: 3 }}
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                  onClick={handleFormOpen}
                >
                  Let's Start
                </Button>
              </div>
            </Box>
            <IconButton
              color="primary"
              onClick={toggleThemeMode}
              sx={{ ml: 10, display: { xs: "flex", md: "none" } }}
            >
              {darkMode ? (
                <DarkModeIcon />
              ) : (
                <GoSun sx={{ color: "#666666" }} />
              )}
            </IconButton>

            <IconButton
              color="primary"
              onClick={handleDrawerOpen}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* =============== Menu Drawer=========== */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ width: 300 }}>
          <List>
            <ListItem>
              <IconButton
                color="primary"
                onClick={handleClickOpenDialog}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <IoSearchOutline
                  sx={{ color: darkMode ? "#FFFF" : "#666666" }}
                />
              </IconButton>
            </ListItem>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ListItem
                sx={{ color: isActive("/") ? "text.iris" : "text.secondary" }}
                onClick={handleDrawerClose}
              >
                Home
              </ListItem>
            </Link>
            <Divider />
            <Link to="services" style={{ textDecoration: "none" }}>
              <ListItem
                sx={{
                  color: isActive("/services") ? "text.iris" : "text.secondary",
                }}
                onClick={handleDrawerClose}
              >
                Service
              </ListItem>
            </Link>
            <Divider />
            <Link to="contact" style={{ textDecoration: "none" }}>
              <ListItem
                sx={{
                  color: isActive("/contact") ? "text.iris" : "text.secondary",
                }}
                onClick={handleDrawerClose}
              >
                Contact
              </ListItem>
            </Link>
            <Divider />
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleFormOpen}
                elevation={0}
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  p: 1,
                  px: 3,
                }}
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
              >
                Let's Start
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {/* =============== End Menu Drawer=========== */}
      {/* =============== Form Drawer=========== */}
      {/* <Drawer anchor="left" open={isFormOpen} onClose={handleFormClose}>
          <Box sx={{ width: { xs: 350, sm: 500, md: 900 }, p: 4 }}>
            <Form handleFormClose={handleFormClose} />
            <IconButton
              onClick={handleFormClose}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Drawer> */}
      {/* =============== End Form Drawer=========== */}
      <Container>
        <AppRoutes />
      </Container>
      <Dialog
        fullWidth
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Search here what you want"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              fullWidth
              label="Search.."
              size="small"
              variant="outlined"
              color="primary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <IoSearchOutline color="primary" />
                    </IconButton>
                  </InputAdornment>
                ),
                style: { backgroundColor: "white", borderRadius: "10px" },
              }}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
