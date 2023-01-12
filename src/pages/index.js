import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/Services_Section";
import WhyUs from "../components/WhyUs";
import Goals from "../components/Goals";
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUs />
      <Goals />
      <FollowUs />
      <Footer />
    </>
  );
}

export default Home;
