import React, { useEffect } from "react";
import arrowGraphic from "../../assets/images/arrowdown.png";
import spiritual from "../../assets/images/praying.png";
import academic from "../../assets/images/academic.png";
import art from "../../assets/images/art-studies.png";
import sports from "../../assets/images/balls-sports.png";
import brain from "../../assets/images/brain.png";
import network from "../../assets/images/network.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Services,
  FadedHeading,
  Heading,
  Cards,
  Card,
  CardHeading,
  CardImage,
  CardDescription,
  CardNumber,
  CardGraphic,
  GraphicOne,
  GraphicTwo,
  GraphicThree,
  ArrowIcon,
} from "./ServicesElements";
function ServicesSection() {
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
      <Services>
        <FadedHeading>Services</FadedHeading>
        <Heading>
          What we offer to the youth
          <ArrowIcon>
            <img src={arrowGraphic} alt="" />
          </ArrowIcon>
        </Heading>
        <Cards>
          <Card data-aos="fade-in" data-aos-delay="50">
            <CardImage>
              <img src={spiritual} alt="" />
            </CardImage>
            <CardHeading>Spiritual</CardHeading>
            <CardDescription>
              Teach the universal tenants of Islam free from personal and
              cultural bias.
            </CardDescription>
            <CardNumber>1</CardNumber>
            <CardGraphic>
              <GraphicOne></GraphicOne>
              <GraphicTwo></GraphicTwo>
              <GraphicThree></GraphicThree>
            </CardGraphic>
          </Card>
          <Card data-aos="fade-in" data-aos-delay="100">
            <CardImage>
              <img src={sports} alt="" />
            </CardImage>
            <CardHeading>Physical</CardHeading>
            <CardDescription>
              Every month there will be physical activities for the youths to
              participate.
            </CardDescription>
            <CardNumber>2</CardNumber>
            <CardGraphic>
              <GraphicOne></GraphicOne>
              <GraphicTwo></GraphicTwo>
              <GraphicThree></GraphicThree>
            </CardGraphic>
          </Card>
          <Card data-aos="fade-in" data-aos-delay="150">
            <CardImage>
              <img src={brain} alt="" />
            </CardImage>
            <CardHeading>Mental</CardHeading>
            <CardDescription>
              We have weekly sessions with youths to help them develop mentally.
            </CardDescription>
            <CardNumber>3</CardNumber>
            <CardGraphic>
              <GraphicOne></GraphicOne>
              <GraphicTwo></GraphicTwo>
              <GraphicThree></GraphicThree>
            </CardGraphic>
          </Card>
          <Card data-aos="fade-in" data-aos-delay="200">
            <CardImage>
              <img src={academic} alt="" />
            </CardImage>
            <CardHeading>Academic</CardHeading>
            <CardDescription>
              We have mentors in various fields, allowing us to guide the youths
              academically.
            </CardDescription>
            <CardNumber>4</CardNumber>
            <CardGraphic>
              <GraphicOne></GraphicOne>
              <GraphicTwo></GraphicTwo>
              <GraphicThree></GraphicThree>
            </CardGraphic>
          </Card>
          <Card data-aos="fade-in" data-aos-delay="250">
            <CardImage>
              <img src={network} alt="" />
            </CardImage>
            <CardHeading>Social</CardHeading>
            <CardDescription>
              We will provide help for youth to become role model and leaders in
              the community.
            </CardDescription>
            <CardNumber>5</CardNumber>
            <CardGraphic>
              <GraphicOne></GraphicOne>
              <GraphicTwo></GraphicTwo>
              <GraphicThree></GraphicThree>
            </CardGraphic>
          </Card>
          <Card data-aos="fade-in" data-aos-delay="300">
            <CardImage>
              <img src={art} alt="" />
            </CardImage>
            <CardHeading>Art & Culture</CardHeading>
            <CardDescription>
              We will have activities and events for youths to join to grow
              their craft.
            </CardDescription>
            <CardNumber>6</CardNumber>
            <CardGraphic>
              <GraphicOne></GraphicOne>
              <GraphicTwo></GraphicTwo>
              <GraphicThree></GraphicThree>
            </CardGraphic>
          </Card>
        </Cards>
      </Services>
    </>
  );
}

export default ServicesSection;
