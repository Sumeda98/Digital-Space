import Header from "./Layout/Header";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import '@fontsource/roboto';
import '@fontsource/roboto-slab';
import AppRoutes from "./routes/AppRoutes";


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
        secondary: darkMode ? '#a3a3a3' : '#666666',
        irish: '#5D5FEF',
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
      
      <Container>
        <AppRoutes darkMode={darkMode}/>
        </Container>
      
    </ThemeProvider>
  );
}
