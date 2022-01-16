import { createGlobalStyle, css } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`${css`
  :root {
    --lightGreen: #65e9e4;
    --lightGreenHover: #31c3bd;
    --lightYellow: #ffc860;
    --lightYellowHover: #f2b137;
    --silver: #a8bfc9;
    --silverHover: #dbe8ed;
    --semiDarkNavy: #1f3641;
    --darkNavy: #1a2a33;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  img {
    max-width: 100%;
    /* display: block; */
  }

  body {
    min-height: 100vh;
    background-color: var(--darkNavy);
    font-family: "Outfit", sans-serif;
  }

  #root {
    min-height: 100vh;
  }
`}
`;
