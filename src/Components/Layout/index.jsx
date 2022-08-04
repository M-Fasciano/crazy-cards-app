import React from "react";
import Header from "../Header";
import Form from "../Form";
import Footer from "../Footer";
import * as Styled from "./styled";

const Layout = () => {
  return (
    <Styled.Main>
      <Header />
      <Form />
      <Footer />
    </Styled.Main>
  );
};

export default Layout;
