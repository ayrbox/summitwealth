import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

const Map = ({ center, zoom }) => (
  <div style={{ height: '400px', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: '' }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <Marker lat={center.lat} lng={center.lng} text="Summit Wealth Ltd." />
    </GoogleMapReact>
  </div>
);

Map.defaultProps = {
  center: {
    lat: 51.383473,
    lng: 0.509276,
  },
  zoom: 17,
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
};

export default Map;
