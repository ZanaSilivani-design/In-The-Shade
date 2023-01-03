import styled from "styled-components";
import "../Global-Variables/Variables.css";
export const Goal = styled.div`
  position: relative;
  background-color: var(--clr-secondary);
  overflow: hidden;
  padding: 2em 0;
  margin: 5em 0;
  isolation: isolate;
`;
export const GoalsWrapper = styled.div`
  max-width: var(--max-w-secondary);
  margin-inline: auto;
  padding: var(--default-padding);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
`;
export const FadeHeading = styled.div`
  font-size: 15rem;
  opacity: 5%;
  font-weight: 600;
  position: absolute;
  user-select: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
export const Content = styled.div`
  width: 70%;
  padding: 3em 0;
  span {
    color: var(--clr-primary);
    font-size: 4rem;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
export const Heading = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin: -15px 0 20px 0;
`;
export const Description = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;
export const Cards = styled.div`
  /* margin: 0 4em 0 0; */
`;
export const Card = styled.div`
  background-color: var(--clr-white);
  padding: 1em;
  border-radius: 4px;
  width: 100%;
  img {
    height: 55px;
    background-color: var(--clr-white);
    border: 3px solid var(--clr-secondary);
    padding: 0.5em;
    border-radius: 50px;
    margin-top: -5em;
  }
  &:nth-child(2) {
    margin: 2em 0 2em -2em;
    @media screen and (max-width: 797px) {
      margin: 2em 0 2em 0;
    }
  }
`;
export const CardHeading = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5em 0 0.2em 0;
`;
export const CardDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;
