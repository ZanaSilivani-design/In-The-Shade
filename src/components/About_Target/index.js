import React, { useEffect } from "react";
import Img from "../../assets/images/About_Section.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Target,
  Content,
  SHeading,
  Graphic,
  Heading,
  Paragraph,
  Image,
  MobileImage,
} from "./TargetElements";

function AboutTarget() {
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
      <Target>
        <MobileImage data-aos="fade-in" data-aos-delay="100">
          <img src={Img} alt="" />
        </MobileImage>
        <Content data-aos="fade-in" data-aos-delay="300">
          <SHeading>
            Our Target <Graphic></Graphic>
          </SHeading>
          <Heading>Our Program Includes</Heading>

          <Paragraph>
            Youth who grew up in the worship of Allah will be one of the seven
            groups of people whom Allah shades under his throne on the Day of
            Judgement. The Day of Judgment is narrated to last longer than
            50,000 years and will be the hottest day, so the Shade of Allah's
            kursi is a very special privilege. Our work and responsibility, as
            the youth, are incredibly important.
          </Paragraph>
        </Content>
        <Image data-aos="fade-in" data-aos-delay="100">
          <img src={Img} alt="" />
        </Image>
      </Target>
    </>
  );
}

export default AboutTarget;
