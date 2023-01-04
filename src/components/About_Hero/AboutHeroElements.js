import styled from "styled-components";
import "../Global-Variables/Variables.css";
import HeroImg from "../../assets/images/About_hero.jpg";
export const Hero = styled.div`
  position: relative;
  background-image: url(${HeroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  isolation: isolate;
  &::before {
    content: "";
    position: absolute;
    background: rgba(21, 79, 48, 0.8);
    inset: 0;
    z-index: -1;
  }
`;
export const HeroWrapper = styled.div`
  max-width: var(--max-width);
  padding: var(--default-padding);
  margin-inline: auto;
`;
export const Content = styled.div`
  padding: 5em 0;
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

export const Heading = styled.div`
  font-size: clamp(1.4rem, 4vw, 3rem);
  line-height: 1.4;
  width: 72%;
  font-weight: 700;
  color: var(--clr-white);
  text-transform: capitalize;

  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;
export const NavItems = styled.div`
  color: var(--clr-white);
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  margin: 2em 0;
  span {
    display: flex;
    align-items: center;
  }
  .FadeItem {
    opacity: 0.5;
  }
  .Icon {
    margin: 0 0.3em;
  }
`;
