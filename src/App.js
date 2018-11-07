import React, { Component } from 'react';
import Map from './Map';
import './App.css';

const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDOZhqc1xFTxXoUTIUP7Q9mEhlT-edNm3Y&v=3.exp&libraries=geometry,drawing,places"

class App extends Component {
  render() {
    return (
      <Map
        isMarkerShown
        googleMapURL={url}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />} />
    );
  }
}

export default App;
