import React from "react";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { FaRegNewspaper, FaBoxOpen } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/" onClick={toggle}>
              <span>
                <AiFillHome />
              </span>
              Home
            </SidebarLink>
            <SidebarLink to="/about" onClick={toggle}>
              <span>
                <FaRegNewspaper />
              </span>
              About
            </SidebarLink>
            <SidebarLink to="/resources" onClick={toggle}>
              <span>
                <FaBoxOpen />
              </span>
              Resources
            </SidebarLink>
            <SidebarLink to="/contact" onClick={toggle}>
              <span>
                <MdContactPage />
              </span>
              Contact
            </SidebarLink>
            <SidebarBtn>
              <a href="https://google.com" target="blank" onClick={toggle}>
                <span>
                  <AiFillHeart />
                </span>
                Donate
              </a>
            </SidebarBtn>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
