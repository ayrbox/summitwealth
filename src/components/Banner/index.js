import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

const Banner = ({ image, title }) => {
  const url = image ? image.childImageSharp.fluid.src : '';

  return (
    <div
      className="banner-wrapper"
      style={{
        backgroundImage: image ? `url(${url})` : 'none',
        height: !image && '250px',
      }}
    >
      <div className="image-overlay" />
      <Container className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p>
          One of the UK’s Premier Mortgage and Protection specialists: - Moving
          Home - Remortgaging - First Time Buyer - Buy to Let - Help to Buy -
          Equity Release - Commercial Loans - Bridging Facility - Development
          Finance - Life Assurance - Critical illness Cover - Income Protection
        </p>
      </Container>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  m: 0,
};
