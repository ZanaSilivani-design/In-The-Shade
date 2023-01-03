import React, { useEffect } from "react";
import Img from "../../assets/images/About_Section.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  AboutWrapper,
  Content,
  SHeading,
  Graphic,
  Heading,
  Paragraph,
  Image,
} from "./AboutElements";
function AboutSection() {
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
      <AboutWrapper>
        <Content data-aos="fade-in" data-aos-delay="100">
          <SHeading>
            About
            <Graphic></Graphic>
          </SHeading>
          <Heading>In The Shade</Heading>
          <Paragraph>
            In the Shade is a youth mentorship program where college students
            mentor high school students. They model how to be a strong Muslim in
            society and create a support system for high schoolers in the
            community. The youth should want to come to the masjid.
          </Paragraph>
          <Paragraph>
            Youth who grew up in the worship of Allah will be one of the seven
            groups of people whom Allah shades under his throne on the Day of
            Judgement. The Day of Judgment is narrated to last longer than
            50,000 years and will be the hottest day, so the Shade of Allah's
            kursi is a very special privilege. Our work and responsibility, as
            the youth, are incredibly important.
          </Paragraph>
        </Content>
        <Image data-aos="fade-in" data-aos-delay="300">
          <img src={Img} alt="" />
        </Image>
      </AboutWrapper>
    </>
  );
}

export default AboutSection;
