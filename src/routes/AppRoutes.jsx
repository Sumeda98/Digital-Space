import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
