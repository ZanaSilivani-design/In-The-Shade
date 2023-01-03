import React from "react";
import AboutSection from "../components/About_About_Section";
import AboutHero from "../components/About_Hero";
import AboutQuote from "../components/About_Quote";
import AboutSolution from "../components/About_Solution";
import AboutTarget from "../components/About_Target";
import Footer from "../components/Footer";
function About() {
  return (
    <>
      <AboutHero />
      <AboutSection />
      <AboutQuote />
      <AboutSolution />
      <AboutTarget />
      <Footer />
    </>
  );
}

export default About;
