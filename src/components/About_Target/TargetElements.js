import styled from "styled-components";
import "../Global-Variables/Variables.css";

export const Target = styled.div`
  max-width: var(--max-width);
  padding: var(--default-padding);
  display: grid;
  place-items: end;
  margin-inline: auto;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  align-items: center;
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`;
export const Content = styled.div``;
export const SHeading = styled.div`
  color: var(--clr-primary);
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.3em;
`;
export const Graphic = styled.div`
  background-color: var(--clr-primary);
  height: 3px;
  width: 2em;
  border-radius: 50px;
  margin: 0 0 5px 5px;
`;
export const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5em;
`;
export const Paragraph = styled.div`
  padding: 0 0 0.8em 0;
`;
export const Image = styled.div`
  margin-bottom: 3em;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    @media screen and (max-width: 887px) {
      display: none;
    }
  }
`;
export const MobileImage = styled.div`
  display: none;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1.5em;
  }
  @media screen and (max-width: 887px) {
    display: block;
  }
`;
