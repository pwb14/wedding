import React from 'react';
import MapContainer from './MapContainer.js';
import rue from './images/rue.jpg';
import hometeam from './images/hometeam.jpg';
import marthalous from './images/marthalous.jpg';

let picStyle = {
    height: "30%",
    width: "30%",
    maxHeight: "100%"
};

let divStyle={
    marginRight: "10%",
    marginLeft: "10%",
    marginTop: "5%",
    marginBottom: "5%"
};

const TravelAndLeisure = () =>
    <div style={{height:"100%"}}>
        <h1 className="story-header">Travel and Leisure</h1>
        <div className="bridal-party">
            <h3 className="story-header">Hotels</h3>
            <div style={divStyle}>For your conveniece, we have reserved rooms at the following <a href="http://app.hiskipper.com/reservations/group/ddce30eb-54e8-4b05-b4e7-a254aef3ef93/hotels?resource_key=VqbBwnI0Zp">hotels</a>.  If you have any issues or questions please email us at <a href="mailto:parkerandmadisonbednar@gmail.com" target="_top">parkerandmadisonbednar@gmail.com</a></div>
            <h3 className="story-header">Our Favorite Restaurants</h3>
            <div>
                <h4 className="bc">Rue de Jean</h4>
                <img src={rue} style={picStyle} alt="Rue de Jean"/>
                <div style={divStyle}>One of our favorite retaurants, Rue de Jean is a french restaurant with a bit of southern flair.  
                A little on the pricy side, their Foie Gras is prepared wonderfully via sous vide.  
                Moments we shared here: Graduation Party with the Parents, Dates for just Foie Gras.</div>
            </div>
            <div>
                <h4 className="bc">Hometeam BBQ</h4>
                <img src={hometeam} style={picStyle} alt="Rue de Jean"/>
                <div style={divStyle}>Hometeam BBQ is home to some of the best BBQ in Charleston with a wonderful atmosphere and delicious drinks.  
                Highly recommended for BBQ novices who want to experience true Carolina cooking.</div>
            </div>
            <div>
                <h4 className="bc">Martha Lou's Kitchen</h4>
                <img src={marthalous} style={picStyle} alt="Rue de Jean"/>
                <div style={divStyle}>Martha Lou's Kitchen is a Charleston institution.  This unimposing restaurant run by a local family houses the 
                best fried chicken we have ever had and truly highlights Lowcountry Soul Food.</div>
            </div>

            <h3 className="story-header">Our Favorite Activities</h3>
            <div>
                <a className="text-center" href="http://www.charlestonuu.org/"><b>Where We Got Engaged</b></a>
            </div>
            <div>
                <a className="text-center" href="http://www.scaquarium.org/"><b>South Carolina Aquarium</b></a>
            </div>
            <div>
                <a className="text-center" href="http://www.charleston-sc.gov/Facilities/Facility/Details/81"><b>Hampton Park</b></a>
            </div>
            <div>
                <a className="text-center" href="https://www.revelrybrewingco.com/"><b>Revelry Brewing</b></a>
            </div>    

            

        </div>
    </div>;

export default TravelAndLeisure;
