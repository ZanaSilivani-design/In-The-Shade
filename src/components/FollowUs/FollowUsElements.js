import styled from "styled-components";
import "../Global-Variables/Variables.css";

export const FollowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
  max-width: var(--max-w-secondary);
  padding: var(--default-padding);
  margin-inline: auto;
  margin-bottom: 5em;
`;
export const Mentor = styled.div`
  padding: 1em;
`;
export const Heading = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0 0 0.5em 0;
`;
export const Description = styled.div`
  margin: 0 0 1.2em 0;
`;
export const Btn = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    margin: 0 1em 0 0;
    display: flex;
  }
  a:nth-child(1) {
    position: relative;
    background-color: var(--clr-primary);
    color: var(--clr-white);
    padding: 0.3em 1em;
    border-radius: 4px;
    width: 126px;
    overflow: hidden;
    isolation: isolate;
    transition: all 0.3s ease-in-out;

    span {
      display: flex;
      margin-left: 5px;
      align-self: center;
    }

    &::before {
      content: "";
      position: absolute;
      background-color: var(--clr-secondary);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      transform-origin: left top;
      transform: scale(0);
      transition: all 0.3s ease-in-out;
      transition-timing-function: cubic-bezier(1, -0.01, 0.48, 0.87);
    }
    &:hover::before {
      transform: scale(1);
    }
    &:hover {
      color: var(--clr-black);
    }
  }
  a:nth-child(2) {
    color: var(--clr-primary);
    border-radius: 4px;
    span {
      display: flex;
      margin-left: 5px;
      align-self: center;
    }
  }
`;
export const Follow = styled.div`
  padding: 1em;
`;
export const SocialMediaIcons = styled.div`
  a {
    font-size: 1.3rem;
    text-decoration: none;
    color: var(--clr-primary);
    margin-right: 0.5em;
  }
`;
