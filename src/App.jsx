import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import "@fontsource/roboto";
import "@fontsource/roboto-slab";

export default function App() {
  const storedThemeMode = localStorage.getItem("themeMode");
  const [darkMode, setDarkMode] = useState(storedThemeMode === "dark");

  const toggleThemeMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("themeMode", newMode ? "dark" : "light");
  };

  const primaryColor = '#5D5FEF';

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            fontFamily: "Allerta",
            fontSize:'1rem'
           
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: 'rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
          }
        }
      },
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#FFFF",
      },
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: "#D9D9FF",
      },
      text: {
        primary: darkMode ? "#FFFFFF" : "#19191A",
        secondary: darkMode ? "#a3a3a3" : "#666666",
        iris: primaryColor,
        white: '#FFFF'
      },
    },
    typography: {
      fontFamily: "Roboto",
      h1: {
        fontFamily: "Allerta",
      },
      h2: {
        fontFamily: "Allerta",
      },
      h3: {
        fontFamily: "Allerta",
      },
      h4: {
        fontFamily: "Allerta",
      },
      h5: {
        fontFamily: "Allerta",
      },
      h6: {
        fontFamily: "Allerta",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header  toggleThemeMode={toggleThemeMode} darkMode={darkMode}/>
      <Footer />
    </ThemeProvider>
  );
}
