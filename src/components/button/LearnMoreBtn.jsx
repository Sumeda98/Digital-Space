import { Typography } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const LearnMoreBtn = () => {
  const theme = useTheme();
  return (
    <div>
      <Link style={{textDecoration:'none', color:theme.palette.mode === 'dark' ? 'white' : 'black'}}>
      <div style={{display:'flex'}}>
        <Typography variant='h6' sx={{fontSize:'16px',}}>Learn More</Typography>
        <div>
        <EastIcon sx={{ml:1, fontSize:'18px', marginTop:'4px'}}/>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default LearnMoreBtn