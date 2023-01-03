import React, { useEffect } from "react";
import { FaWpforms } from "react-icons/fa";
import WhyUsImage from "../../assets/images/whyus.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  WhyUsSection,
  Content,
  Graphic,
  LineOne,
  LineTwo,
  LineThree,
  Heading,
  Description,
  Btn,
  Image,
} from "./WhyUsElements";
function WhyUs() {
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
      <WhyUsSection>
        <Content data-aos="fade-in" data-aos-delay="1000">
          <Graphic>
            <LineOne></LineOne>
            <LineTwo></LineTwo>
            <LineThree></LineThree>
          </Graphic>
          <Heading>Why is it important to involve your children?</Heading>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Description>
          <a href="https://google.com" target="blank">
            Join Now
            <span>
              <FaWpforms />
            </span>
          </a>
        </Content>
        <Image data-aos="fade-in" data-aos-delay="500">
          <img src={WhyUsImage} alt="" />
        </Image>
      </WhyUsSection>
    </>
  );
}

export default WhyUs;
