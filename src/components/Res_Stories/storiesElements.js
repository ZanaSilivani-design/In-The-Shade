import styled from "styled-components";
import "../Global-Variables/Variables.css";
import booksImg from "../../assets/images/stories.jpg";
export const StoryWrapper = styled.div`
  max-width: var(--max-width);
  margin-inline: auto;
  margin-bottom: 3em;
  padding: var(--default-padding);
  position: relative;
  isolation: isolate;
  .swiper-pagination-bullet-active {
    background-color: var(--clr-primary) !important;
  }

  .card {
    background: url(${booksImg}) rgba(21, 79, 48);
    background-blend-mode: multiply;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    margin: 2em 0;
    padding: 1em;
    width: 245px;
    height: 150px;
    isolation: isolate;
    scroll-snap-align: start;
    scroll-padding-inline: 1em;

    a {
      background: var(--clr-secondary);
      padding: 0 0.5em;
      color: var(--clr-black);
      text-decoration: none;
      border-radius: 4px;
      font-size: 1rem;
      position: absolute;
      bottom: 1.3em;
      left: 1em;
      cursor: pointer;
      display: flex;
      align-items: center;
      .icon {
        margin-right: 2px;
      }
    }
  }
`;
export const StoryHeading = styled.div`
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
  color: var(--clr-white);
  text-transform: capitalize;
`;
