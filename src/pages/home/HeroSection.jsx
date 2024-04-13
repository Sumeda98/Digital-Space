import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import HeroIMG from "../../assets/images/HeroIMG.png";
import HeroIMG_Mobile from "../../assets/images/HeroIMG_Mobile.png";
import { useTheme } from "@emotion/react";
import Typewriter from "typewriter-effect";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CallMadeIcon from "@mui/icons-material/CallMade";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <div>
      <Grid
        spacing={4}
        container
        sx={{ minHeight: isMobile ? "50vh" : "100vh" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            mt: isMobile ? 8 : 0,
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "left" },
          }}
        >
          <div>
            <Typography
              variant="body1"
              color="text.iris"
              textAlign={isMobile ? "center" : "left"}
            >
              Where your business takes flight.
            </Typography>
            <Typography
              sx={{ fontWeight: 600 }}
              textAlign={isMobile ? "center" : "left"}
              variant={isMobile ? "h5" : "h3"}
            >
              We'll help you reach new heights in the{" "}
              <span style={{ color: theme.palette.primary.main }}>
                Digital World
              </span>
            </Typography>
            <Typography
              textAlign={isMobile ? "center" : "left"}
              variant="body2"
              color="text.secondary"
            >
              We'll amplify your brand's voice, resonating with audiences across
              the digital sphere.
            </Typography>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: isMobile ? "center" : "left",
              }}
            >
              <Button
                sx={{ mr: 2, textTransform: "capitalize", p: 1, px: 2 }}
                variant="contained"
                color="primary"
                endIcon={<KeyboardArrowRightIcon />}
              >
                Start Your Project
              </Button>
              <Button
                sx={{ textTransform: "capitalize", p: 1, px: 2 }}
                variant="outlined"
                color="primary"
                endIcon={<CallMadeIcon />}
              >
                Request demo
              </Button>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "left" },
          }}
        >
          <img
            src={isMobile ? HeroIMG_Mobile : HeroIMG}
            alt="hero"
            style={{ maxWidth: "100%", height: "auto",marginTop:isMobile ? '40px':'0px' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
