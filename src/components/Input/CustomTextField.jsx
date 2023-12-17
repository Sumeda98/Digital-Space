import { Typography } from "@material-ui/core";
import { TextField } from "@mui/material";
import React from "react";

function CustomTextField(props) {
  return (
    <div>
      <Typography>Name</Typography>
      <TextField
        sx={{ width: "100%", backgroundColor: "white", borderRadius: 1 }}
        label=""
        variant="outlined"
        InputProps={{
          sx: {
            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover": {
              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default CustomTextField;
