import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 51.4948 , lng: -0.1945 },
    zoom: 1
  }
render() {
    return (
      <div className='google-map' style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyCyFh6eKr4p8mbU3_q44e6rK7z1ei4B9TU',
            language: 'en',
          }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
          // onChildMouseEnter={this.onChildMouseCenter}
          // onChildMouseLeave={this.onChildMouseLeave}
          >
          <AnyReactComponent
            lat={ 51.49 }
            lng={ -0.1945 }
          />
        </GoogleMapReact>
      </div>
    );
  }
}
