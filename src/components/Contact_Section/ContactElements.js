import styled from "styled-components";
import "../Global-Variables/Variables.css";
export const Contact = styled.div`
  display: grid;
  height: 90vh;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Information = styled.div`
  background-color: var(--clr-primary);
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: end;
  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;

export const InfoWrapper = styled.div`
  padding: 2em;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 750px) {
    padding: 2em 1em;
  }
`;

export const Heading = styled.div`
  color: var(--clr-white);
  font-size: clamp(1.7rem, 4vw + 1rem, 4rem);
  font-weight: 700;
`;
export const Content = styled.div`
  margin: 4em 0;
`;
export const ContentItem = styled.div`
  padding: 1em 0;
  a {
    text-decoration: none;
    color: var(--clr-white);
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    span {
      margin-right: 1em;
    }
  }
`;
export const SocialMedia = styled.div`
  a {
    text-decoration: none;
    color: var(--clr-white);
    font-size: 1.4rem;
    font-weight: 400;
    cursor: pointer;
    margin-right: 0.5em;
  }
`;
export const Image = styled.div`
  img {
    width: 100%;
  }
`;
export const Form = styled.div`
  background-color: var(--clr-secondary);
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: start;

  form {
    padding: 2em;
    width: 100%;
    max-width: 600px;
    position: relative;
    isolation: isolate;
  }
  @media screen and (max-width: 750px) {
    display: block;
    form {
      padding: 2em 1em;
      margin-inline: auto;
    }
  }
`;

export const FormHeading = styled.div`
  margin-bottom: 0.5em;
  color: var(--clr-primary);
  font-size: clamp(1.7rem, 4vw + 1rem, 4rem);
  font-weight: 700;
`;

export const Name = styled.div`
  label {
    font-size: 1.2rem;
    font-weight: 500;
    display: block;
    margin-bottom: 0.5em;
  }
  input {
    width: 100%;
    height: 2.5em;
    border: none;
    border-radius: 4px;
    caret-color: var(--clr-primary);
    padding: 0 1em;
    font-size: 1rem;
    &:focus,
    &:active {
      outline: none;
    }
  }
`;
export const Email = styled.div`
  margin: 2em 0;
  label {
    font-size: 1.2rem;
    font-weight: 500;
    display: block;
    margin-bottom: 0.5em;
  }
  input {
    width: 100%;
    height: 2.5em;
    border: none;
    border-radius: 4px;
    caret-color: var(--clr-primary);
    padding: 0 1em;
    font-size: 1rem;

    &:focus,
    &:active {
      outline: none;
    }
  }
`;
export const Message = styled.div`
  label {
    font-size: 1.2rem;
    font-weight: 500;
    display: block;
    margin-bottom: 0.5em;
  }
  textarea {
    resize: none;
    width: 100%;
    height: 15em;
    border: none;
    border-radius: 4px;
    caret-color: var(--clr-primary);
    padding: 1em 1em;
    font-size: 1rem;

    &:focus,
    &:active {
      outline: none;
    }
  }
`;
export const Btn = styled.div`
  button {
    background-color: var(--clr-primary);
    color: var(--clr-white);
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5em 1.5em;
    border-radius: 4px;
    cursor: pointer;
    align-self: center;
    border: none;
    outline: none;
    margin-top: 2em;
    isolation: isolate;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    .Icons {
      display: flex;
      align-items: center;
      margin-left: 0.3em;
    }

    &:hover {
      background-color: #0e3420;
    }
  }
`;
export const ImageOne = styled.div`
  img {
    position: absolute;
    top: 2em;
    left: 2em;
    z-index: -1;
    width: 200px;
  }
`;
export const ImageTwo = styled.div`
  img {
    position: absolute;
    bottom: 2em;
    right: 2em;
    z-index: -1;
    width: 200px;
  }
`;
export const SucessWrapper = styled.div`
  background-color: rgba(117, 211, 153, 0.7);
  border-radius: 4px;
  margin-bottom: 0.5em;
  border-left: 5px solid var(--clr-primary);
`;

export const MessageSuccess = styled.div`
  color: var(--clr-primary);
  font-size: 1rem;
  font-weight: 600;
  padding: 1em;
  display: flex;
  align-items: center;
  .Icons {
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    margin-right: 0.3em;
  }
`;
