import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Link } from 'gatsby';

const Banner = ({ image, title, lead, links }) => {
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
        {links && (
          <ul className="banner-links">
            {links.map(({ title, path }) => (
              <li>{path ? <Link to={path}>{title}</Link> : title}</li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string.isRequired,
  lead: PropTypes.string,
  links: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
  }),
};

Banner.defaultProps = {
  m: 0,
};
