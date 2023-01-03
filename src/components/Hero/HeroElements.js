import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import "../Global-Variables/Variables.css";

export const HeroContainer = styled.div`
  background-color: var(--clr-primary);
  height: 90vh;
  position: relative;
  isolation: isolate;
  overflow: hidden;
`;
export const HeroWrapper = styled.div`
  color: var(--clr-white);
  display: grid;
  align-items: center;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  margin-inline: auto;
  max-width: var(--max-width);
  padding: var(--default-padding);
`;
export const HeroHeading = styled.div`
  grid-column: 1/7;
  grid-row: 1/2;
`;
export const Graphic = styled.div`
  display: flex;
  margin-bottom: 1em;
`;
export const LineOne = styled.div`
  background-color: var(--clr-secondary);
  width: 4em;
  height: 0.5em;
  border-radius: 50em;
`;
export const LineTwo = styled.div`
  background-color: var(--clr-secondary);
  width: 3em;
  height: 0.5em;
  border-radius: 50em;
  opacity: 0.5;
  margin-left: -2px;
`;
export const LineThree = styled.div`
  background-color: var(--clr-secondary);
  width: 2em;
  height: 0.5em;
  border-radius: 50em;
  opacity: 0.3;
  margin-left: -2px;
`;
export const Heading = styled.h1`
  line-height: 1.2;
  font-size: clamp(1.7rem, 4vw + 1rem, 3.7rem);
  width: 80%;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin: 0 0 0.8em 0;
  font-weight: 600;
  .h-span {
    background: var(--clr-secondary);
    color: var(--clr-primary);
    padding: 0.1em 0.1em 0.01em 0.1em;
    border-radius: 4px;
  }
  @media screen and (max-width: 725px) {
    width: 100%;
  }
`;
export const Btn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 345px) {
    display: block;
  }
`;
export const HeroLinkOne = styled(LinkR)`
  position: relative;
  text-decoration: none;
  color: var(--clr-black);
  background: var(--clr-white);
  padding: 5px 20px;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  overflow: hidden;
  isolation: isolate;
  span {
    display: flex;
    margin-left: 7px;
    font-size: 1.3rem;
  }

  &::before {
    content: "";
    position: absolute;
    background-color: var(--clr-secondary);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scale(0, 1);
    transform-origin: center;
    z-index: -1;
    transition: all 0.3s ease-in-out;
    transition-timing-function: cubic-bezier(1, -0.01, 0.48, 0.87);
  }
  &:hover {
    color: var(--clr-black);
  }
  &:hover::before {
    transform: scale(1, 1);
  }

  @media screen and (max-width: 345px) {
    width: 143px;
  }
`;
export const HeroLinkTwo = styled(LinkR)`
  text-decoration: none;
  margin-left: 1em;
  color: var(--clr-secondary);
  font-size: 1.2rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  span {
    display: flex;
    margin-left: 7px;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;
  }
  &:hover span {
    margin-left: 0.5em;
  }

  @media screen and (max-width: 345px) {
    display: none;
  }
`;
export const HeroImage = styled.div`
  grid-column: 4/-1;
  grid-row: 1/2;
  img {
    width: 100%;
    display: none;

    @media screen and (min-width: 2001px) {
      display: block;
    }
  }
`;
export const HeroImage2 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 78%;
  img {
    width: 100%;
    @media screen and (max-width: 800px) {
      display: none;
    }
    @media screen and (min-width: 2000px) {
      display: none;
    }
  }
`;
