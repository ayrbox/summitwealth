import React, { Fragment } from "react"
import { ThemeProvider } from 'styled-components';
import { summitTheme } from '../theme';

import { ResetCSS } from '../assets/css/styles';
import {
  CircleLoader,
} from '../containers/summit.style';


// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <ThemeProvider theme={summitTheme}>
    <Fragment>
      <ResetCSS />
      <SEO title="Summit Wealth" />
      <ResetCSS />
      <h1>Content</h1>
    </Fragment>
  </ThemeProvider>
);

export default IndexPage
