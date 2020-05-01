import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

const Banner = ({ image, title, lead }) => {
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
        {lead && <p className="lead">{lead}</p>}
      </Container>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string.isRequired,
  lead: PropTypes.string,
};

Banner.defaultProps = {
  m: 0,
};
