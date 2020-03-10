import React, { Fragment } from "react"
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';

import { summitTheme } from '../theme';
import { DrawerProvider } from '../contexts/DrawerContext';
import NavBar from '../containers/NavBar';


import { ResetCSS } from '../assets/css/styles';
import SEO from "../components/seo"
import {
  GlobalStyle,
  LayoutWrapper,
  ContentWrapper,
} from '../containers/summit.style';


const IndexPage = () => (
  <ThemeProvider theme={summitTheme}>
    <Fragment>
      <ResetCSS />
      <SEO title="Home" />
      <GlobalStyle />

      <LayoutWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <NavBar /> 
          </DrawerProvider>
        </Sticky>
        <ContentWrapper>
          <div style={{ height: '200vh'}}>
            <h1>Content</h1>
          </div>
        </ContentWrapper>
      </LayoutWrapper>
    </Fragment>
  </ThemeProvider>
);

export default IndexPage
