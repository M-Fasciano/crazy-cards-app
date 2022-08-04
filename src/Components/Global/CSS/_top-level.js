import { css } from "styled-components";
import { color } from "../variables";

export const TopLevel = css`
  html {
    height: 100%;
  }

  /**
   *  1. When the footer 'quick links' button is clicked,
   *     the footer is positioned fixed. Padding here prevents
   *     the content from shunting downwards to fill the space
   *     previosuly occupied by the footer when it was in document flow
   *  2. Ensure min-height when viewport is:
   *     - above 670px
   *     - landscape orientation and < 670px
   */
  body {
    background-color: ${color.lightBlue};
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    height: 100%;
    justify-content: space-between;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: inherit;
    font-weight: 400;
  }

  * {
    outline: none;
  }
`;
