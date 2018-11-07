import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import styles from './styles.json';

const defaultOptions = {
  fullscreenControl: false,
  scaleControl: false,
  mapTypeControl: false,
  zoomControl: false,
  streetViewControl: false,
  styles,
};

const Map = withScriptjs(withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 35.8022086, lng: -78.6594805 }}
    defaultOptions={defaultOptions}
  />
)));

export default Map;
