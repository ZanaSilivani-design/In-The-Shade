import React from "react";
import LogoImage from "../../assets/images/Logo.png";
import { TbArrowUpCircle } from "react-icons/tb";
import { FaSnapchatSquare } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineCopyright,
} from "react-icons/ai";
import {
  FooterWrapper,
  Logo,
  NavMenu,
  NavItem,
  NavLink,
  SocialItem,
  SocialMedia,
  FooterSection,
  GoUpIcon,
  Copyright,
} from "./FooterElements";
function Footer() {
  return (
    <>
      <FooterSection>
        <FooterWrapper>
          <Logo>
            <img src={LogoImage} alt="" />
          </Logo>
          <NavMenu>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/resources">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.kindacode.com"
              >
                Donation
              </a>
            </NavItem>
          </NavMenu>
          <SocialMedia>
            <SocialItem>
              <a target="_blank" rel="noreferrer" href="#">
                <AiFillInstagram />
              </a>
            </SocialItem>
            <SocialItem>
              <a target="_blank" rel="noreferrer" href="#">
                <AiFillFacebook />
              </a>
            </SocialItem>
            <SocialItem>
              <a target="_blank" rel="noreferrer" href="#">
                <AiFillYoutube />
              </a>
            </SocialItem>
            <SocialItem>
              <a target="_blank" rel="noreferrer" href="#">
                <FaSnapchatSquare />
              </a>
            </SocialItem>
          </SocialMedia>
        </FooterWrapper>
        <GoUpIcon>
          <a rel="noreferrer" href="#">
            <TbArrowUpCircle />
          </a>
        </GoUpIcon>
        <Copyright>
          In The Shade
          <span>
            <AiOutlineCopyright />
          </span>
          {new Date().getFullYear()}
        </Copyright>
      </FooterSection>
    </>
  );
}

export default Footer;
