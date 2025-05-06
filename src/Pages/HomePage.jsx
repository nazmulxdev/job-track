import React, { useEffect } from "react";

import Hero from "../Components/Hero";
import Companies from "../Components/Companies";
import FaqSection from "../Components/FaqSection";
import Platform from "../Components/Platform";
import WebsiteDetails from "../Components/WebsiteDetails";

const HomePage = () => {
  useEffect(() => {
    document.title = "JobTrack | Home";
  }, []);
  return (
    <div>
      <Hero></Hero>
      <WebsiteDetails></WebsiteDetails>
      <Companies></Companies>
      <Platform></Platform>
      <FaqSection></FaqSection>
    </div>
  );
};

export default HomePage;
