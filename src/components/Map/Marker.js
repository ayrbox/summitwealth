import React from 'react';
import PropTypes from 'prop-types';

const Marker = ({ text }) => (
  <div className="marker">
    {text && <div className="marker-text">{text}</div>}
  </div>
);

Marker.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Marker;
