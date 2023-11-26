import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import TestimonialCard from "../../components/card/TestimonialCard";
import Avatar1 from "../../assets/images/Avatar1.svg";
import Avatar2 from "../../assets/images/Avatar2.svg";
import Avatar3 from "../../assets/images/Avatar3.svg";


const TestimonialSection = () => {
  return (
    
    <div style={{ marginTop: "100px" , }}>
      <Typography textAlign="center" variant="h4" sx={{ fontWeight: 600 }}>
        Testimonials
      </Typography>
      <Typography textAlign="center" variant="body2" color="text.secondary">
        A shout out from our clients about their experiences working with us.
      </Typography>
      <Grid rowSpacing={2} columnSpacing={2} container xs={12} sx={{ mt: 6 }}>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <TestimonialCard
            avatar={
              <Avatar
                sx={{ width: 56, height: 56 }}
                alt="Remy Sharp"
                src={Avatar1}
              />
            }
            name="Kate Lora"
            time="10 min ago"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, dicta at architecto distinctio sed impedit esse, illo cupiditate odio inventore maiores accusantium, aperiam corporis error doloribus numquam? Accusamus, et iure."
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <TestimonialCard
            avatar={
              <Avatar
                sx={{ width: 56, height: 56 }}
                alt="Remy Sharp"
                src={Avatar2}
              />
            }
            name="Micky Silva"
            time="3 days ago"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, dicta at architecto distinctio sed impedit esse, illo cupiditate odio inventore maiores accusantium, aperiam corporis error doloribus numquam? Accusamus, et iure."
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <TestimonialCard
            avatar={
              <Avatar
                sx={{ width: 56, height: 56 }}
                alt="Remy Sharp"
                src={Avatar3}
              />
            }
            name="John Doe"
            time="1 month ago"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, dicta at architecto distinctio sed impedit esse, illo cupiditate odio inventore maiores accusantium, aperiam corporis error doloribus numquam? Accusamus, et iure."
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TestimonialSection;
