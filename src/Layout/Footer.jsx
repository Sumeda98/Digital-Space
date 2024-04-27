import React from "react";
import {
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/brand/Logo_White.svg";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.primary.main }}>
      <Container sx={{ paddingY: 10, paddingBottom:2 }}>
        <Grid container justifyContent="center" >
          <Grid item container xs={12} md={4}>
            <Grid item xs={12}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <img
                  src={LogoWhite}
                  alt="Logo"
                  style={{ padding: "10px", height: "auto" }}
                />
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Typography color="text.white" variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                iure? Eaque temporibus ipsum mollitia quibusdam vero? Modi
                reiciendis aperiam similique maiores expedita voluptas veritatis
                nam.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div style={{ display: "flex", marginRight: "20px" }}>
                  <EmailIcon
                    color="text.white"
                    sx={{ fontSize: 20, mr: 1, color: "white" }}
                  />
                  <Typography color="text.white" variant="body2">
                    hello@digitalspace.com
                  </Typography>
                </div>
                <div style={{ display: "flex" }}>
                  <LocalPhoneRoundedIcon
                    sx={{ fontSize: 20, mr: 1, color: "white" }}
                  />
                  <Typography color="text.white" variant="body2">
                    (+94) 11 23 234 45
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                <LinkedInIcon sx={{ fontSize: 25, mr: 2, color: "white" }} />
                <FacebookIcon sx={{ fontSize: 25, mr: 2, color: "white" }} />
                <InstagramIcon sx={{ fontSize: 25, mr: 2, color: "white" }} />
                <TwitterIcon sx={{ fontSize: 25, mr: 2, color: "white" }} />
              </div>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent={{ xs: "left", md: "right" }}
          >
            <Stack spacing={1}>
              <Typography color="text.white" variant="h6" textAlign="left">
                Services
              </Typography>
              <Stack spacing={1}>
                <Typography color="text.white" variant="body2">
                  Staff Augmentation
                </Typography>
                <Typography color="text.white" variant="body2">
                  Mobile App Development
                </Typography>
                <Typography color="text.white" variant="body2">
                  Web App Development
                </Typography>
                <Typography color="text.white" variant="body2">
                  Website Development
                </Typography>
                <Typography color="text.white" variant="body2">
                  Search Engine Optimisation (SEO)
                </Typography>
                <Typography color="text.white" variant="body2">
                  Paid Marketing
                </Typography>
                <Typography color="text.white" variant="body2">
                  Custom Software Development
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent={{ xs: "left", md: "right" }}
          >
            <Stack spacing={1}>
              <Typography color="text.white" variant="h6" textAlign="left">
                Contact
              </Typography>
              <Stack spacing={1}>
                <Typography color="text.white" variant="body2">
                  About Us
                </Typography>
                <Typography color="text.white" variant="body2">
                  Careers We are hiring! t
                </Typography>
                <Typography color="text.white" variant="body2">
                  Our Work
                </Typography>
                <Typography color="text.white" variant="body2">
                  Resources
                </Typography>
                <Typography color="text.white" variant="body2">
                  Contact us
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography color="text.white" variant="h6">
              Subscribe for the Updates
            </Typography>
            <TextField
              sx={{ mt: 2, width: { xs: "80%", md: "40%" } }}
              label="example@mail.com"
              size="small"
              variant="filled"
              color="primary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SendIcon color="primary" />
                    </IconButton>
                  </InputAdornment>
                ),
                style: { backgroundColor: "white", borderRadius: "10px" },
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Divider  sx={{ height: "1px", backgroundColor: "white", mt:8 , width:'100%'}} />
          <Typography sx={{mt:1}} variant="body2" color="text.white" display='flex' justifyContent='center'>
              Design & Developed by Sumedha Bandarigoda.
            </Typography>
        </Grid>
        
      </Container>
    </div>
  );
};

export default Footer;
