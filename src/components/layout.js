import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import SEO from './seo';
import CookieBanner from './CookieBanner';
import '../assets/scss/index.scss';
import ContactBox from './ContactBox';

const Layout = ({ title, children }) => {
  return (
    <>
      <CookieBanner />
      <SEO title={title} />
      <Header />
      <main>{children}</main>
      <ContactBox />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
