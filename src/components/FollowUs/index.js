import React, { useEffect } from "react";
import { FaSnapchatSquare, FaWpforms } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FollowWrapper,
  Mentor,
  Heading,
  Description,
  Btn,
  Follow,
  SocialMediaIcons,
} from "./FollowUsElements";
function FollowUs() {
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
      <FollowWrapper>
        <Mentor data-aos="fade-in" data-aos-delay="100">
          <Heading>Mentors Joining </Heading>
          <Description>
            If you are a college student interested in mentoring, please fill
            out the google form, and we'll get in touch.
          </Description>
          <Btn>
            <a href="https://google.com" target="blank">
              Join Now
              <span>
                <FaWpforms />
              </span>
            </a>
            <a href="" download>
              Overview
              <span>
                <HiDownload />
              </span>
            </a>
          </Btn>
        </Mentor>
        <Follow data-aos="fade-in" data-aoa-delay="300">
          <Heading>Follow Us</Heading>
          <Description>
            Please follow us on social media to get the latest updates about in
            the shade program and its events.
          </Description>
          <SocialMediaIcons>
            <a href="" target="blank">
              <AiFillInstagram />
            </a>
            <a href="" target="blank">
              <AiFillFacebook />
            </a>
            <a href="" target="blank">
              <AiFillYoutube />
            </a>
            <a href="" target="blank">
              <FaSnapchatSquare />
            </a>
          </SocialMediaIcons>
        </Follow>
      </FollowWrapper>
    </>
  );
}

export default FollowUs;
