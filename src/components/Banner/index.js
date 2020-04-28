import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { withPrefix } from 'gatsby';

const Banner = ({ image, title }) => {
  const url = image ? withPrefix(image.childImageSharp.fluid.src) : '';

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
