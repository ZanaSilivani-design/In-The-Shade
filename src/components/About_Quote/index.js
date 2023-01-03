import React, { useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  About,
  AboutWrapper,
  Content,
  Heading,
  Paragraph,
} from "./QueteElements";
function AboutQuote() {
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
      <About>
        <span className="FirstQuote">
          <FaQuoteLeft />
        </span>
        <span className="SecondQuote">
          <FaQuoteRight />
        </span>
        <AboutWrapper>
          <Content>
            <Heading data-aos="fade-in" data-aos-delay="100">
              Abu Huraira reported The Prophet Muhammad said
            </Heading>
            <Paragraph data-aos="fade-in" data-aos-delay="300">
              There are seven whom Allah will shade on a day when there is no
              shade but His. They are a just ruler, a youth who grew up in the
              worship of Allah, one whose heart is attached to the mosques, two
              who love each other, meet each other, and depart from each other
              for the sake of Allah, a man who is tempted by a beautiful woman
              of high status but he rejects her, saying , ‘I fear Allah,’ and
              one who spends in charity and hides it such that his right hand
              does not know what his left hand has given, and one who remembered
              Allah in private and he wept.
            </Paragraph>
          </Content>
        </AboutWrapper>
      </About>
    </>
  );
}

export default AboutQuote;
