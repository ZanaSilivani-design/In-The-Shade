import styled from "styled-components";
import "../Global-Variables/Variables.css";

export const KahootWrapper = styled.div`
  max-width: var(--max-width);
  margin: 3em auto;
  padding: var(--default-padding);
  position: relative;
  isolation: isolate;

  .swiper-pagination-bullet-active {
    background-color: var(--clr-primary) !important;
  }

  .card {
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

    border-radius: 4px;
    position: relative;
    overflow: hidden;
    margin: 2em 0;
    padding: 1em;
    width: 275px;
    height: 160px;

    a {
      padding: 0 0.5em;
      color: var(--clr-white);
      text-decoration: none;
      border-radius: 4px;
      font-size: 2rem;
      position: absolute;
      bottom: 0.7em;
      right: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      .icon {
        margin-right: 2px;
      }
    }
  }
`;
export const QuestionsNumber = styled.div`
  text-align: right;
  color: var(--clr-white);
  font-weight: 600;
  margin-bottom: 0.3em;
`;

export const KahootHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
export const HeadingFade = styled.div`
  position: absolute;
  font-size: clamp(4rem, 4vw + 1rem, 5rem);
  font-weight: 800;
  letter-spacing: 2px;
  user-select: none;
  top: -0.3em;
  left: 0;
  opacity: 5%;
  z-index: -1;
`;

export const Heading = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.5em;
  user-select: none;
  color: var(--clr-white);
  text-transform: capitalize;
`;
