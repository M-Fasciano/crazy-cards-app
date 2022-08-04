import { css } from "styled-components";
import { color } from "../variables";

export const Forms = css`
  /* FORM RESET */
  input,
  label,
  select,
  button,
  textarea {
    background: none;
    border: 0;
    box-shadow: none;
    display: inline-block;
    margin: 0;
    padding: 8px 10px;
    vertical-align: middle;
    white-space: normal;
    font-size: 1rem;
    line-height: 1em;
  }

  /* Buttons */
  button,
  input[type="reset"],
  input[type="button"],
  input[type="submit"] {
    width: auto;
  }

  /**
   *	Textarea:
   *	1. Move the label to the top
   *  2. Turn off scroll bars in IE unless needed
   */
  textarea {
    vertical-align: top; /* [1] */
    overflow: auto; /* [2] */
    resize: none;
  }

  /* Restyle defaults */
  label {
    color: ${color.black};
    line-height: 1;
  }

  input,
  select,
  textarea {
    background-color: ${color.white};
    border: 2px solid ${color.border};
    border-radius: 3px;
    line-height: 1.4em;
    width: 100%;
  }
`;
