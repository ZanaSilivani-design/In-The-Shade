import styled from "styled-components";
import "../Global-Variables/Variables.css";

export const Hero = styled.div`
  background-image: linear-gradient(
    to right,
    #154f30,
    #144d2f,
    #134b2d,
    #134a2c,
    #12482b,
    #11462a,
    #114529,
    #104328,
    #104126,
    #0f3e25,
    #0f3c23,
    #0e3a22
  );
  color: var(--clr-white);
  font-weight: 600;
  padding: 6em 1em;
  overflow: hidden;
`;
export const HeroWrapper = styled.div`
  max-width: var(--max-width);
  margin-inline: auto;
  padding: var(--default-padding);
`;

export const Heading = styled.div`
  font-size: clamp(2rem, 4vw + 1rem, 4.5rem);
  font-weight: 700;
`;
export const Content = styled.div`
  margin-top: 0.5em;
  margin-bottom: 6em;
  font-size: 1.1rem;
  font-weight: 500;
  width: min(100%, 500px);
`;
export const Links = styled.div`
  font-size: 1rem;
  font-weight: 600;
  span {
    margin-right: 1em;
  }
  a {
    text-decoration: none;
    color: var(--clr-white);
    background-color: rgba(53, 126, 87, 0.25);
    padding: 0.8em;
    margin: 0 0.7em 0.5em 0;
    border-radius: 4px;
    display: inline-block;
  }
`;
