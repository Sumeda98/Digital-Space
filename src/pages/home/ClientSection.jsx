import { Grid, Typography } from "@mui/material";
import React from "react";
import Logo1 from "../../assets/images/Brand1.svg";
import Logo2 from "../../assets/images/Brand2.svg";
import Logo3 from "../../assets/images/Brand3.svg";
import Logo4 from "../../assets/images/Brand4.svg";
import Logo5 from "../../assets/images/Brand5.svg";
import Logo6 from "../../assets/images/Brand6.svg";
import { useTheme } from "@emotion/react";

const ClientSection = () => {
  const theme = useTheme();

  const logos = [
    { id: 1, src: { Logo1 }, alt: "Logo 1" },
    { id: 2, src: { Logo1 }, alt: "Logo 2" },
    { id: 3, src: { Logo1 }, alt: "Logo 3" },
  ];

  const brandStyle = {
    logoSlider: {
      display: "flex",
      overflowX: "hidden",
      whiteSpace: "nowrap",
      /* animation: 'slide infinite 50s linear', */
    },
    logoImage: {
      display: "inline-block",
      margin: "80px 20px",
      height: "100px",
    },
    slideAnimation: {
      "@keyframes slide": {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(-100%)",
        },
      },
    },
  };

  return (
    <div>
      <div style={{ marginTop: "40px" }}>
        <Typography textAlign="center" variant="h4" sx={{ fontWeight: 600 }}>
          Our Customers
        </Typography>
        <Typography
          textAlign="center"
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 600 }}
        >
          23,000 + Customers in over 40 Countries grow there business with{" "}
          <span style={{ color: theme.palette.primary.main }}>
            Digital Space
          </span>
        </Typography>
        <div style={brandStyle.logoSlider}>
          <img style={brandStyle.logoImage} src={Logo1} alt="Logo1" />
          <img style={brandStyle.logoImage} src={Logo2} alt="Logo1" />
          <img style={brandStyle.logoImage} src={Logo3} alt="Logo1" />
          <img style={brandStyle.logoImage} src={Logo4} alt="Logo1" />
          <img style={brandStyle.logoImage} src={Logo5} alt="Logo1" />
          <img style={brandStyle.logoImage} src={Logo6} alt="Logo1" />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
