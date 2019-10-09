import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
* {
  @import url('https://fonts.googleapis.com/css?family=Oxygen|Raleway&display=swap');
  font-family: 'Oxygen', sans-serif;
  font-family: 'Raleway', sans-serif;
  }
`;



export const AdminTitle = styled.h1`
font-family: 'Oxygen', sans-serif;
font-size: 2em;
`;

export const AdminSubTitle = styled.h3`
font-family: 'Raleway', sans-serif;
font-size: 1.5em;
`
