import Header from "./Layout/Header";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import { Box } from "@mui/material";

export default function App() {
  const storedThemeMode = localStorage.getItem('themeMode');
  const [darkMode, setDarkMode] = useState(storedThemeMode === 'dark');

  const toggleThemeMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('themeMode', newMode ? 'dark' : 'light');
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode? '#121212':'#FFF',
      },
      primary: {
        main: '#7c4dff',
      },
      secondary: {
        main: '#536dfe',
      },
    },
    
    typography: {
      fontFamily: 'Poppins',
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleThemeMode={toggleThemeMode} darkMode={darkMode} />
      
        <Home darkMode={darkMode}/>
      
    </ThemeProvider>
  );
}
