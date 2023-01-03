import styled from "styled-components";
import "../Global-Variables/Variables.css";

export const About = styled.div`
  background-color: var(--clr-secondary);
  position: relative;
  padding: 5em 0;
  overflow: hidden;
  margin-bottom: 5em;
  .FirstQuote {
    position: absolute;
    left: 10%;

    font-size: 10rem;
    opacity: 0.04;
  }
  .SecondQuote {
    position: absolute;
    right: 10%;
    font-size: 10rem;
    opacity: 0.04;
  }
`;
export const AboutWrapper = styled.div`
  max-width: var(--max-width);
  padding: var(--default-padding);
  margin-inline: auto;
`;
export const Content = styled.div``;
export const Heading = styled.div`
  color: var(--clr-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1em;
`;
export const Paragraph = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
`;
