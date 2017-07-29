import React from 'react';
import MapContainer from './MapContainer.js';


const Venue = () =>
    <div style={{height:"100%"}}>
        <h1 className="story-header">Our Venue</h1>
        <h3>Lake House at Bulow</h3>
            <a className="text-center" href="https://ccprc.com/1519/The-Lake-House-at-Bulow"><b>Website</b></a>
        <MapContainer />
    </div>;

export default Venue;
