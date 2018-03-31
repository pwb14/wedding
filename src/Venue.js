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
const style3 = {
    marginTop: "3%",
    fontFamily: 'Bree Serif'
};
const style6 = {
    marginBottom: '5%'  
};
const style7 = {
    paddingLeft: '10%',
    paddingRight: '10%'
};
const Venue = () =>
    <div style={{height:"100%"}}>
        <h1 className="story-header">Our Venue</h1>
        <h3 className="bc">Lake House at Bulow</h3>
        <img src={lakeHouse} style={picStyle} alt="Lake house at bulow"/>
        <div style={divStyle}>
            <p>926 Hughes Rd</p>
            <p>Johns Island, SC 29455</p>
            <p style={style3}>Ceremony will start at 5:30pm</p>
            <p style={style3}>Cocktails, dinner and dancing to follow at 6pm</p>
            <p style={style3}>Suggested Attire: Dressy Casual</p>

            <p style={style7}>Cocktail or sun dresses for women</p>
            <p style={style7}>Suit and tie or dinner jacket for men</p>
            <p style={style3}>Transportation</p>
            <p style={style7}>We're providing ride credits on the Lyft app to encourage our guests not to drink and drive. Here's how you can get a $10 credit on a Lyft ride:</p>

            <p style={style7}>1. If you do not already have the Lyft app, download it from the Apple or Android store. To set up an account, you will need to provide credit card information in the event that your ride goes over $10.</p>

            <p style={style7}>2. Add the promo code to the "Promo" section of the app before you request your ride. You must be in "Personal" mode for the code to apply. You will only need to enter this code one time for the duration of the event.</p>

            <p style={style7}>3. This code will only work if you are going to or from the wedding venue.</p>

            <p style={style6}>Promo Code: BEDNAR18</p>
        </div>
        <div  style={style2}>
        <MapContainer/>
        </div>
    </div>;

export default Venue;
