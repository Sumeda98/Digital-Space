import { Grid, Typography } from "@mui/material";
import React from "react";
import HeroSection from "./home/HeroSection";
import ClientSection from "./home/ClientSection";
import WeDoSection from "./home/WeDoSection";
import TestimonialSection from "./home/TestimonialSection";
import ProjectSection from "./home/ProjectSection";
import QASection from "./home/QASection";
import WeDoCard from "../components/card/WeDoCard";

const Home = () => {
  return (
    <Grid container rowGap={10}>
      <Grid items>
        <HeroSection />
      </Grid>

      <Grid items style={{ display: "flow", minWidth: "100%" }}>
        <ClientSection />
      </Grid>

      <Grid items>
        <WeDoSection />
      </Grid>

      <Grid items>
        <TestimonialSection />
      </Grid>

      <Grid items>
        <ProjectSection />
      </Grid>

      <Grid items>
      
        <QASection />
      </Grid>
    </Grid>
  );
};

export default Home;
