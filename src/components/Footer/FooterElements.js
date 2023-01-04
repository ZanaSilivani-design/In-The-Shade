import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import "../Global-Variables/Variables.css";

export const FooterSection = styled.div`
  background: var(--clr-primary);
  position: relative;
`;
export const FooterWrapper = styled.div`
  max-width: var(--max-w-secondary);
  margin-inline: auto;
  padding: 1em 1.5em;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  @media screen and (max-width: 750px) {
    display: block;
  }
`;
export const Logo = styled.div`
  grid-column: 1/2;
  img {
    height: 70px;
  }
`;
export const NavMenu = styled.ul`
  grid-column: 3/11;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 750px) {
    display: block;
    margin: 1em 0;
  }
`;
export const NavItem = styled.li`
  list-style: none;
  margin: 0 1em 0.5em 0;
  a {
    color: var(--clr-white);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
  }
`;
export const NavLink = styled(LinkR)`
  color: var(--clr-white);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
`;
export const SocialMedia = styled.ul`
  grid-column: 11/13;
  display: flex;
`;
export const SocialItem = styled.li`
  list-style: none;
  padding: 0 0 0 1em;
  a {
    color: var(--clr-white);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
  }
  @media screen and (max-width: 750px) {
    padding: 1em 1em 0 0;
  }
`;
export const GoUpIcon = styled.div`
  width: 100%;
  text-align: center;
  padding: 0.5em 0;
  a {
    text-decoration: none;
    font-size: 2.5rem;
    color: var(--clr-white);
  }
  @media screen and (max-width: 750px) {
    text-align: right;
    position: absolute;
    top: 1em;
    right: 1em;
  }
`;
export const Copyright = styled.div`
  padding: 0.2em;
  border-top: 2px solid var(--clr-secondary);
  display: flex;
  font-size: 1rem;
  color: var(--clr-white);
  font-weight: 700;
  justify-content: center;
  span {
    display: flex;
    align-items: center;
  }
`;
