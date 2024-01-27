import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  font-family: Roboto, Helvetica, Sans-Serif;
  }

  .Container {
    padding: 1rem;
  }

  @media only screen and (min-width: 600px) {
    .Container {
      padding: 5rem;
    }
  }

  @media only screen and (min-width: 1025px) {
    .Container {
      padding: 0 23.5rem;
    }
  }

  #root {
    height: 100%;
    background-color: var(--background-color);
  }

  :root{
    --background-color: #F7F7F7;
    --primary-color: #FC7C57;
    --error: red;
    --white-color: #fff;
    --black-color: #000;
    --gray-color: #848484
  }

  
`;