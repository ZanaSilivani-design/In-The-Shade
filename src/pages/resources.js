import React from "react";
import ResourcesHero from "../components/Res_Hero/index";
import KahootSection from "../components/Res_Kahoot";
import ResumeSection from "../components/Res_Resume";
import StoriesSection from "../components/Res_Stories";
import YoutubeSection from "../components/Res_Youtube";
import Footer from "../components/Footer";
function Resources() {
  return (
    <>
      <ResourcesHero />
      <YoutubeSection />
      <StoriesSection />
      <ResumeSection />
      <KahootSection />
      <Footer />
    </>
  );
}

export default Resources;
