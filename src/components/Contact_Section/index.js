import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import Graphic from "../../assets/images/Graphic.png";
import {
  AiTwotonePhone,
  AiTwotoneMail,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import { FaSnapchatSquare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsCheckAll } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import ThreeCircleImg from "../../assets/images/ThreeCircle.png";
import {
  Contact,
  Information,
  InfoWrapper,
  Heading,
  Content,
  ContentItem,
  SocialMedia,
  Image,
  Form,
  Name,
  Email,
  Message,
  FormHeading,
  Btn,
  ImageOne,
  ImageTwo,
  SucessWrapper,
  MessageSuccess,
} from "./ContactElements";

function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ylord5d",
        "template_ujzp31n",
        form.current,
        "d70SyFibjBj_8HSaq"
      )
      .then(
        (result) => {
          setStatus("Success");
        },
        (error) => {
          alert("Sorry there was an error");
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    if (status === "Success") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

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
      <Contact>
        <Information>
          <InfoWrapper>
            <Heading data-aos="fade-in" data-aos-delay="50">
              Contact Information.
            </Heading>
            <Content>
              <ContentItem data-aos="fade-in" data-aos-delay="100">
                <a href="">
                  <span>
                    <AiTwotonePhone />
                  </span>
                  (615) 693-7212
                </a>
              </ContentItem>
              <ContentItem data-aos="fade-in" data-aos-delay="150">
                <a href="">
                  <span>
                    <AiTwotoneMail />
                  </span>
                  intheshade@gmail.com
                </a>
              </ContentItem>
              <ContentItem data-aos="fade-in" data-aos-delay="200">
                <a href="">
                  <span>
                    <MdLocationPin />
                  </span>
                  364 Elysian Fields Ct, Nashville, TN 37211
                </a>
              </ContentItem>
            </Content>
            <SocialMedia data-aos="fade-in" data-aos-delay="250">
              <a href="#" target="blank">
                <AiFillInstagram />
              </a>
              <a href="#" target="blank">
                <AiFillFacebook />
              </a>
              <a href="#" target="blank">
                <AiFillYoutube />
              </a>
              <a href="#" target="blank">
                <FaSnapchatSquare />
              </a>
            </SocialMedia>
            <Image>
              <img src={ThreeCircleImg} alt="" />
            </Image>
          </InfoWrapper>
        </Information>
        <Form>
          <form ref={form} onSubmit={sendEmail}>
            <FormHeading data-aos="fade-in" data-aos-delay="50">
              Reach Out To Us
            </FormHeading>
            {status && renderAlert()}

            <Name data-aos="fade-in" data-aos-delay="100">
              <label>Full Name</label>
              <input
                name="name"
                autocomplete="off"
                type="text"
                id="my_unique_id"
                required
              />
            </Name>
            <Email data-aos="fade-in" data-aos-delay="150">
              <label>Email</label>
              <input name="email" autocomplete="off" type="email" required />
            </Email>
            <Message data-aos="fade-in" data-aos-delay="200">
              <label>Write Your Message....</label>
              <textarea name="message" required maxLength="350"></textarea>
            </Message>
            <Btn>
              <button type="submit">
                Send it
                <FiSend className="Icons" />
              </button>
            </Btn>
            <ImageOne>
              <img src={Graphic} alt="" />
            </ImageOne>
            <ImageTwo>
              <img src={Graphic} alt="" />
            </ImageTwo>
          </form>
        </Form>
      </Contact>
    </>
  );
}
const renderAlert = () => (
  <>
    <SucessWrapper>
      <MessageSuccess>
        <BsCheckAll className="Icons" />
        Your message was successfully sent.
      </MessageSuccess>
    </SucessWrapper>
  </>
);
export default ContactSection;
