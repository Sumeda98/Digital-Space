import styled from "@emotion/styled";
import {
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";


function Form({ handleFormClose }) {
  const [value, setValue] = React.useState("Individual");
  const [valueEmail, setValueEmail] = React.useState();
  const [error, setError] = React.useState();
  const [valueMobile, setValueMobile] = React.useState();
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return regex.test(email);
  };

  const handleChangeEmail = (event) => {
    setValueEmail(event.target.value);
    if (!validateEmail(event.target.value)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  const submit = () => {};

  const options = [
    "Logo Design",
    "Print Design",
    "Brand Design",
    "Protein",
    "Web Design",
    "SEO",
    "SEM",
    "Lead Gen",
    "PPC",
    "Web Development",
    "Corporate package",
  ];

  const handleChipClick = (option) => {
    const newOptions = [...selectedOptions];
    if (newOptions.includes(option)) {
      newOptions.splice(newOptions.indexOf(option), 1);
    } else {
      newOptions.push(option);
    }
    setSelectedOptions(newOptions);
    console.log(option);
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Get In Touch</Typography>
          </Grid>
          <Grid item xs={12}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <Stack direction="row">
                <FormControlLabel
                  value="Individual"
                  control={<Radio size="small" />}
                  label="Individual"
                />
                <FormControlLabel
                  value="Corporate"
                  control={<Radio size="small" />}
                  label="Corporate"
                />
              </Stack>
            </RadioGroup>
          </Grid>
          <Grid item container xs={12} spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <MuiPhoneNumber
                label=""
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  height: 50,
                }}
                readOnly={false}
                defaultCountry="au"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              
                <Typography sx={{ ml: 8,position:'absolute' }} variant="body2" color="error">
                  {error}
                </Typography>
           
              <TextField fullWidth label="Email" variant="outlined" onChange={handleChangeEmail}/>
              
            </Grid>
            <Grid item xs={12} md={6}>
          <TextField fullWidth label="Company Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField fullWidth label="Web Url" variant="outlined" />  
          </Grid>
          </Grid>
         
          <Grid item xs={12} md={10}>
            <Typography> Service </Typography>
            <div>
              {options.map((option, index) => (
                <Chip
                  key={option}
                  label={option}
                  selected={selectedOptions.includes(option)}
                  onClick={() => handleChipClick(option)}
                  varian={
                    selectedOptions.includes(option) ? "filled" : "outlined"
                  }
                  style={{ marginRight: 10, marginTop: 10 }}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={12}>
          <TextField fullWidth label="arketing Budget" variant="outlined" />  

          </Grid>
          <Grid item xs={12}>
          <TextField fullWidth label="Note" variant="outlined" />  
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="right">
            <Button
              onClick={handleClickOpenDialog}
              variant="contained"
              sx={{ textTransform: "none" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormControl>
      <Dialog
        open={openDialog}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText>
            One of our experts will get in touch with you soon !
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={handleFormClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Form;
