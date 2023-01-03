import React from "react";
import Logo from "../../../assets/images/Logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavLink,
  NavItem,
  MobileIcon,
  NavBtn,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={Logo} alt="In The Shade" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
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
          </NavMenu>
          <NavBtn>
            <a href="https://google.com" target="blank">
              Donate
              <span>
                <AiFillHeart />
              </span>
            </a>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
