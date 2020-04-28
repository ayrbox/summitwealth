/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import SEO from './seo';
import '../assets/scss/index.scss';

const Layout = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
