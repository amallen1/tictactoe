import { createGlobalStyle, css } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`${css`
  :root {
    --lightGreen: #31c3bd;
    --lightGreenHover: #65e9e4;
    --lightGreenShadow: rgba(17, 140, 135, 1);
    --lightYellow: #f2b137;
    --lightYellowHover: #ffc860;
    --lightYellowShadow: rgba(204, 139, 19, 1);
    --silver: #a8bfc9;
    --silverHover: #dbe8ed;
    --semiDarkNavy: #1f3641;
    --darkNavy: #1a2a33;
    --darkNavyShadow: rgba(16, 33, 42, 1);
    --semiSilver: rgba(168, 191, 201, 0.05);
    --grayShadow: rgba(107, 137, 151, 1);

    --markImage: url("./assets/icon-x-outline.svg");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: var(--darkNavy);
    font-family: "Outfit", sans-serif;
    text-transform: uppercase;
  }

  h3 {
    font-size: 20px;
    letter-spacing: 1.25px;
  }

  #root {
    min-height: 100vh;
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

  button {
    background-color: transparent;
    cursor: pointer;
  }
`}
`;
