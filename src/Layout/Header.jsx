import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Button, Container, Grid } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Logo from '../assets/brand/Logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function Header({ toggleThemeMode, darkMode }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container> 
      <AppBar elevation='1' position="sticky" sx={{mt:2,borderRadius:2, backgroundColor: darkMode ? '#121212' : 'white',}}>
        <Toolbar>
          
          <Link to="/" style={{textDecoration:'none'}}>
            <img src={Logo} alt="Logo" style={{ padding: '10px' }} />
            </Link>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' ,alignItems:'center'}}>
              <Link to="/" style={{textDecoration:'none'}}>
              <Typography variant="body1" color='text.irish'>
                Home
              </Typography>
              </Link>
              <Link to="services" style={{textDecoration:'none'}}>
              <Typography variant="body1" color='text.irish' sx={{ paddingLeft: '20px' }}>
                Service
              </Typography>
              </Link>
              <Link to="contact" style={{textDecoration:'none'}}>
              <Typography variant="body1" color='text.irish' sx={{ paddingLeft: '20px' }}>
                Contact
              </Typography>
              </Link>
            </Box>
            <Box sx={{ display: 'flex' ,alignItems:'center' ,gap: '10px',}}>
              <div>
              <IconButton>
                <SearchIcon sx={{ color: darkMode?  '#FFFF':'#666666' }} />
              </IconButton>
              </div>
              <div>
              <IconButton color="inherit" onClick={toggleThemeMode}>
                {darkMode ? <DarkModeIcon  /> : <WbSunnyRoundedIcon sx={{ color: '#666666' }} />}
              </IconButton>
              </div>
              <div>
              <Button variant='contained'>Let's Start</Button>
              </div>
            </Box>
         
        </Toolbar>
      </AppBar>
      
      </Container>
    </Box>
  );
}
