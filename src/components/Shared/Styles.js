import { css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";
import emotionReset from "emotion-reset";

const Styles = css`
  ${emotionNormalize}
  ${emotionReset}

  :root {
    --yellow: 255, 177, 66;
    --blue: 52, 172, 224;
    --red: 255, 82, 82;
    --grey: 132, 129, 122;
    --white: 255, 255, 255;
    --black: 0, 0, 0;
    --fontOpenSans: "Open Sans Condensed", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: normal;
  }

  @media screen and (min-width: 320px) {
    html {
      font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }
  }

  @media screen and (min-width: 1000px) {
    html {
      font-size: 22px;
    }
  }

  body {
    font-family: var(--fontOpenSans);
    color: rgb(var(--white));
    background-color: rgb(var(--yellow));
    cursor: default;
  }

  a {
    outline: 0;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  button {
    outline: 0;
    background: transparent;
    border: 0;
    color: inherit;
    padding: 0;
    cursor: pointer;
  }

  ::-moz-selection {
    background-color: rgba(var(--black), 0.5);
    color: rgb(var(--white));
  }
  ::selection {
    background-color: rgba(var(--black), 0.5);
    color: rgb(var(--white));
  }

  #storybook-root {
    padding: 20px;
  }
`;

export default Styles;
