import React, { useEffect } from "react";
import Plant from "../../assets/images/plant.png";
import Character from "../../assets/images/mindset.png";
import Leadership from "../../assets/images/team-leader.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Goal,
  GoalsWrapper,
  FadeHeading,
  Content,
  Heading,
  Description,
  Cards,
  Card,
  CardHeading,
  CardDescription,
} from "./GoalsElements";
import { TiArrowForward } from "react-icons/ti";
function Goals() {
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
      <Goal>
        <FadeHeading>KNOWLEDGE</FadeHeading>
        <GoalsWrapper>
          <Content data-aos="fade" data-aos-delay="50">
            <span>
              <TiArrowForward />
            </span>
            <Heading>Goals</Heading>
            <Description>
              What our young people will learn from this program as they
              collaborate with our mentors.
            </Description>
          </Content>
          <Cards>
            <Card data-aos="fade-down" data-aos-delay="100">
              <span>
                <img src={Plant} alt="" />
              </span>
              <CardHeading>Grow In Faith </CardHeading>
              <CardDescription>
                Assist youth in building a strong inner connections with Allah.
              </CardDescription>
            </Card>
            <Card data-aos="fade-in" data-aos-delay="200">
              <span>
                <img src={Character} alt="" />
              </span>
              <CardHeading>Build a Prophetic Character </CardHeading>
              <CardDescription>
                Teach youth about the character of the prophet Muhammad (SAW).
              </CardDescription>
            </Card>
            <Card data-aos="fade-up" data-aos-delay="300">
              <span>
                <img src={Leadership} alt="" />
              </span>
              <CardHeading>Develope Leadership Skills</CardHeading>
              <CardDescription>
                Assist youth in becoming role models and leaders in the society.
              </CardDescription>
            </Card>
          </Cards>
        </GoalsWrapper>
      </Goal>
    </>
  );
}

export default Goals;
