import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import "../../Global-Variables/Variables.css";
export const Nav = styled.nav`
  background: var(--clr-primary);
  height: 80px;
  //   margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: var(--default-padding);
  max-width: var(--max-width);
  font-weight: 500;
`;

export const NavLogo = styled(LinkR)`
  justify-self: start;
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    height: 90%;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--clr-white);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLink = styled(LinkR)`
  position: relative;
  color: var(--clr-white);
  display: flex;
  align-items: center;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;

  &::before {
    content: "";
    position: absolute;
    background-color: var(--clr-secondary);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transform-origin: bottom;
    transform: scaleY(0);
    transition: all 0.3s ease-in-out;
    transition-timing-function: cubic-bezier(1, -0.01, 0.48, 0.87);

    z-index: -1;
  }

  &:hover::before {
    transform: scaleY(1);
  }
  &:hover {
    color: var(--clr-black);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  a {
    border-radius: 4px;
    background-color: var(--clr-secondary);
    white-space: nowrap;
    padding: 5px 15px;
    color: var(--clr-black);
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      display: flex;
      margin-left: 5px;
    }

    &:hover {
      color: var(--clr-primary);
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
