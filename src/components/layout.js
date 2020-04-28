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
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
