import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiTwotoneMessage } from "react-icons/ai";
import HeroGraphic from "../../assets/images/HeroGraphic.png";
import HeroGraphic2 from "../../assets/images/HeroImage4.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HeroWrapper,
  HeroHeading,
  Graphic,
  LineOne,
  LineTwo,
  LineThree,
  Heading,
  Btn,
  HeroLinkOne,
  HeroLinkTwo,
  HeroImage2,
  HeroContainer,
  HeroImage,
} from "./HeroElements";

const Hero = () => {
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
      <HeroContainer>
        <HeroWrapper>
          <HeroHeading>
            <Graphic data-aos="fade-in" data-aos-delay="50">
              <LineOne></LineOne>
              <LineTwo></LineTwo>
              <LineThree></LineThree>
            </Graphic>
            <Heading data-aos="fade-in" data-aos-delay="150">
              be under the <span className="h-span">shade</span> of Allah on a
              day when there is no shade
            </Heading>
            <Btn data-aos="fade-in" data-aos-delay="300">
              <HeroLinkOne to="/contact">
                Contact
                <span>
                  <AiTwotoneMessage />
                </span>
              </HeroLinkOne>
              <HeroLinkTwo to="/about">
                Learn More
                <span>
                  <BsArrowRight />
                </span>
              </HeroLinkTwo>
            </Btn>
          </HeroHeading>
          <HeroImage data-aos="fade-in" data-aos-delay="700">
            <img src={HeroGraphic} alt="" />
          </HeroImage>
          <HeroImage2>
            <img src={HeroGraphic2} alt="" />
          </HeroImage2>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default Hero;
