import { createGlobalStyle } from "styled-components";
import { Normalize } from "./_normalize";
import { Reset } from "./_reset";
import { BoxSizing } from "./_box-sizing";
import { Shared } from "./_shared";
import { TopLevel } from "./_top-level";
import { Forms } from "./_forms";

const GlobalStyles = createGlobalStyle`
  ${Normalize}
  ${Reset}
  ${BoxSizing}
  ${Shared}
  ${TopLevel}
  ${Forms}
`;

export default GlobalStyles;
