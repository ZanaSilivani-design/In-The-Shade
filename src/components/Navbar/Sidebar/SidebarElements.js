import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import "../../Global-Variables/Variables.css";
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--clr-primary);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--clr-white);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: var(--clr-white);
  margin-left: 10%;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkR)`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: var(--clr-white);
  cursor: pointer;

  &:hover {
    color: var(--clr-hover);
    transition: 0.2s ease-in-out;
  }
  span {
    display: flex;
    margin-right: 20px;
  }
`;
export const SidebarBtn = styled.div`
  padding: 1em 0;
  a {
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;

    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: var(--clr-white);
    cursor: pointer;

    &:hover {
      color: var(--clr-hover);
      transition: 0.2s ease-in-out;
    }
    span {
      display: flex;
      margin-right: 20px;
    }
  }
`;
