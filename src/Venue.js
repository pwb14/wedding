import React from 'react';
import MapContainer from './MapContainer.js';
import lakeHouse from './images/lakehouse.jpg';

let picStyle = {
    height: "70%",
    width: "70%",
    maxHeight: "100%"
};

let divStyle = {
    textAlign: "center",
    marginTop: "20px"
};
let address = {
    fontWeight: "900"
};
const style2 = {
  marginRight: '16%'
};
const Venue = () =>
    <div style={{height:"100%"}}>
        <h1 className="story-header">Our Venue</h1>
        <h3 className="bc">Lake House at Bulow</h3>
        <img src={lakeHouse} style={picStyle} alt="Lake house at bulow"/>
        <div style={divStyle}>
            <p>926 Hughes Rd</p>
            <p>Johns Island, SC 29455</p>
        </div>
        <div  style={style2}>
        <MapContainer/>
        </div>
    </div>;

export default Venue;
