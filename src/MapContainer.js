import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';

const style = {
  width: '70%',
  height: '70%',
  marginLeft: '15.25%'
};
 
export class MapContainer extends React.Component {
render() {
    return (
      <div>
      <Map google={this.props.google} initialCenter={{
            lat: 32.813824,
            lng: -80.134389
          }}
          zoom={12}
          style={style}>
         <Marker
            title={'Our Wedding Venue.'}
            name={'Lake House at Bulow'}
            position={{lat: 32.813824, lng: -80.134389}} />
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBuaIqpGKuXc8VTshX18uiYGAvu7H2ft8M")
})(MapContainer)
