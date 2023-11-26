import { Typography } from "@mui/material";
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
    <div>
      <HeroSection />
      <div style={{ display: "flow", minWidth: "100%" }}>
        <ClientSection />
      </div>
      <WeDoSection />
      <TestimonialSection />
      <ProjectSection />
      <QASection />
    </div>
  );
};

export default Home;
