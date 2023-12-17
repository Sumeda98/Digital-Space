import React, { useState } from 'react';
import { TextField, Select, MenuItem } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';


const countries = [
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  // ... add more countries
];

function MobileInput() {
    const [countryCode, setCountryCode] = useState("+1");
    const [phoneNumber, setPhoneNumber] = useState("");
  
    const handleCountryCodeChange = (event) => {
      setCountryCode(event.target.value);
    };
  
    const handlePhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value);
    };
  
    return (
    
        <div style={{ display: "flex" }}>
          <Select
            value={countryCode}
            onChange={handleCountryCodeChange}
            sx={{ width: "50px" }}
          >
            {countries.map((country) => (
              <MenuItem key={country.code} value={country.code}>
                {country.code}
              </MenuItem>
            ))}
          </Select>
          <TextField
            sx={{ width: "100%" }} 
            label="" 
            variant="outlined"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
      
    );
}

export default MobileInput