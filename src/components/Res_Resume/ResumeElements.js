import styled from "styled-components";
import "../Global-Variables/Variables.css";

export const Resume = styled.div`
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
  isolation: isolate;
`;

export const ResumeWrapper = styled.div`
  max-width: var(--max-width);
  margin-inline: auto;
  padding: 70px 24px;
  position: relative;
`;
export const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.5em;
  text-transform: capitalize;
`;
export const HeadingFade = styled.div`
  position: absolute;
  font-size: clamp(4rem, 4vw + 1rem, 5rem);
  font-weight: 800;
  letter-spacing: 2px;
  user-select: none;
  top: 0.5em;
  left: 0;
  opacity: 5%;
  z-index: -1;
`;

export const StepsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1em;
  margin-top: 3em;
`;
export const Step = styled.div`
  border: 2px solid var(--clr-secondary);
  text-align: center;
  padding: 2em 1em;
  width: 245px;
  border-radius: 4px;
  margin-inline: auto;
`;
export const Number = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;
export const StepHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const StepDescription = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;
export const Btn = styled.div`
  a {
    color: var(--clr-white);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-self: center;
    border-radius: 4px;
    border: 2px solid var(--clr-secondary);
    width: fit-content;
    padding: 0.3em 0.7em;
    margin: 3em auto;
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    .icon {
      margin-left: 3px;
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
`;
