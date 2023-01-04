import styled from "styled-components";
import "../Global-Variables/Variables.css";
import { Link as LinkR } from "react-router-dom";

export const WhyUsSection = styled.div`
  max-width: var(--max-w-secondary);
  padding: var(--default-padding);
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  @media screen and (max-width: 935px) {
    display: block;
  }
`;
export const Content = styled.div`
  grid-column: 1/5;
  grid-row: 1/2;
  background: rgba(255, 255, 255, 0.8);
  padding: 2em;
  border-radius: 4px;

  a {
    position: relative;
    background-color: var(--clr-primary);
    text-decoration: none;
    color: var(--clr-white);
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.3em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 160px;
    margin: 1.5em 0em 0em 0em;
    border-radius: 4px;
    overflow: hidden;
    isolation: isolate;
    transition: all 0.3s ease-in-out;
    .Icon {
      margin-left: 0.5em;
    }
    &::after {
      content: "";
      position: absolute;
      background-color: var(--clr-secondary);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      transform: scale(0, 1);
      transform-origin: left;
      transition: all 0.3s ease-in-out;
      transition-timing-function: cubic-bezier(1, -0.01, 0.48, 0.87);
    }
    &:hover {
      color: var(--clr-black);
    }
    &:hover::after {
      transform: scale(1, 1);
    }
  }

  @media screen and (max-width: 935px) {
    padding: 0em 0em 1em 0em;
  }
`;
export const Graphic = styled.div`
  display: flex;
  margin-bottom: 1em;
`;
export const LineOne = styled.div`
  background-color: var(--clr-primary);
  width: 4em;
  height: 0.5em;
  border-radius: 50em;
`;
export const LineTwo = styled.div`
  background-color: var(--clr-primary);
  width: 2.5em;
  height: 0.5em;
  border-radius: 50em;
  opacity: 0.7;
  margin-left: -4px;
`;
export const LineThree = styled.div`
  background-color: var(--clr-primary);
  width: 1.5em;
  height: 0.5em;
  border-radius: 50em;
  opacity: 0.3;
  margin-left: -4px;
`;
export const Heading = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.3em;
`;
export const Description = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;
export const Image = styled.div`
  grid-column: 3/-1;
  grid-row: 1/2;
  z-index: -1;
  img {
    width: 100%;
    border-radius: 4px;
  }
`;
