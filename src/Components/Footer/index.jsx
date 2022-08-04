import React from "react";
import * as Styled from "./styled";

const Footer = () => {
  const copyrightString = (
    <>&copy; Copyright {new Date().getFullYear()}. All rights reserved.</>
  );

  return <Styled.Footer>{copyrightString}</Styled.Footer>;
};

export default Footer;
