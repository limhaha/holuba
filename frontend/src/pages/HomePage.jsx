import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";

import {
  TopBanner,
  Services,
  Feature,
  Feature2,
  Figure,
  Contact,
  BottomBanner,
} from "../components/home";

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <TopBanner />
        <Services />
        <Feature />
        <Feature2 />
        <Figure />
        <Contact />
        <BottomBanner />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
