import styled from "styled-components";
import "../Global-Variables/Variables.css";

export const Services = styled.div`
  position: relative;
  margin: 5em auto;
  max-width: var(--max-w-secondary);
`;
export const FadedHeading = styled.div`
  position: absolute;
  font-size: clamp(4rem, 4vw + 1rem, 5rem);
  font-weight: 600;
  letter-spacing: 2px;
  user-select: none;
  opacity: 5%;
  z-index: -1;
`;
export const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px 24px;
  display: flex;
`;
export const ArrowIcon = styled.div`
  img {
    width: 50px;
    margin-left: 0.5em;
    @media screen and (max-width: 599px) {
      display: none;
    }
  }
`;
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  padding: var(--default-padding);
  margin: 0.7em auto 0 auto;
`;
export const Card = styled.div`
  background: var(--clr-secondary);
  position: relative;
  width: 270px;
  padding: 1.5em 1.2em;
  margin: 0 auto 1.5em auto;
  border-radius: 4px;
  overflow: hidden;
`;
export const CardImage = styled.div`
  img {
    width: 70px;
  }
`;
export const CardHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1em;
`;
export const CardDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.8em;
`;
export const CardNumber = styled.h1`
  position: absolute;
  top: 0.3em;
  right: 0.5em;
  font-weight: 600;
  font-size: 2.7rem;
  opacity: 30%;
`;
export const CardGraphic = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
export const GraphicOne = styled.div`
  background: var(--clr-primary);
  height: 30px;
  width: 20px;
`;
export const GraphicTwo = styled.div`
  background: var(--clr-primary);
  height: 20px;
  width: 20px;
  opacity: 30%;
`;
export const GraphicThree = styled.div`
  background: var(--clr-primary);
  height: 15px;
  width: 20px;
  opacity: 10%;
`;
