import styled from "styled-components";
import "../Global-Variables/Variables.css";

export const YoutubeWrapper = styled.div`
  max-width: var(--max-width);
  margin: 3em auto;
  padding: var(--default-padding);
  position: relative;
  isolation: isolate;
  .swiper-pagination-bullet-active {
    background-color: var(--clr-primary) !important;
  }

  .card {
    background: var(--clr-secondary);
    border-radius: 4px;
    border-left: 5px solid var(--clr-primary);
    position: relative;
    overflow: hidden;
    margin: 2em 0;
    padding: 1em;
    width: 245px;
    height: 150px;
    isolation: isolate;
    scroll-snap-align: start;
    scroll-padding-inline: 1em;
    img {
      position: absolute;
      width: 200px;
      top: -5.5em;
      right: -5.5em;
      opacity: 0.2;
      z-index: -1;
    }
    a {
      color: var(--clr-black);
      text-decoration: none;
      font-size: 1.7rem;
      position: absolute;
      bottom: 0.3em;
      right: 0.7em;
      cursor: pointer;
    }
  }
`;
export const YoutubeHeading = styled.div`
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
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.5em;
  user-select: none;
`;
