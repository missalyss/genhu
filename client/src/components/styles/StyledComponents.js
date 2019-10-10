import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`;
* {
  @import url('https://fonts.googleapis.com/css?family=Oxygen|Raleway&display=swap');
  font-family: 'Oxygen', sans-serif;
  font-family: 'Raleway', sans-serif;
  }
`;

export const Title = styled.h1`
  font-family: 'Oxygen', sans-serif;
  font-size: 4em;
`
export const SubHeading = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 2em;
`
export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 1em;
  border-radius: 3px;
  color: white;
  border: 2px solid white;
  margin: 0 auto;
 margin-top: 1em;
  padding: 0.5em 1em;
  width: 11rem;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;


