import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Hero,
  HeroWrapper,
  Graphic,
  LineOne,
  LineThree,
  LineTwo,
  Heading,
  NavItems,
  Content,
} from "./AboutHeroElements";
function AboutHero() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-sine",
      mirror: false,
    });
  }, []);
  return (
    <>
      <Hero>
        <HeroWrapper>
          <Content>
            <Graphic data-aos="fade-in" data-aos-delay="100">
              <LineOne></LineOne>
              <LineTwo></LineTwo>
              <LineThree></LineThree>
            </Graphic>
            <Heading data-aos="fade-in" data-aos-delay="300">
              We all should care about our youth to be successful in this life
              and the hereafter
            </Heading>
            <NavItems data-aos="fade-in" data-aos-delay="500">
              <span className="FadeItem">Home</span>
              <span className="Icon">
                <HiArrowNarrowRight />
              </span>
              <span>About</span>
            </NavItems>
          </Content>
        </HeroWrapper>
      </Hero>
    </>
  );
}

export default AboutHero;
