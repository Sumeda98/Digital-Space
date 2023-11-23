import Header from "./Layout/Header";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import '@fontsource/roboto';
import '@fontsource/roboto-slab';


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
        main: '#5D5FEF',
      },
      secondary: {
        main: '#D9D9FF',
      },
      text: {
        primary: darkMode ? '#FFFFFF' : '#19191A',
        secondary: darkMode ? '#CCCCCC' : '#666666', 
      },
    },
    typography: {
      fontFamily: 'Roboto',
      h1: {
        fontFamily: 'Roboto Slab',
      },
      h2: {
        fontFamily: 'Roboto Slab',
      },
      h3: {
        fontFamily: 'Roboto Slab',
      },
      h4: {
        fontFamily: 'Roboto Slab',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleThemeMode={toggleThemeMode} darkMode={darkMode} />
      
        <Home darkMode={darkMode}/>
      
    </ThemeProvider>
  );
}
