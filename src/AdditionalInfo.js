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
        <h1 className="story-header">Additional Information</h1>
        <div className="bridal-party">
         <h5 className="bc">If you wish to give a gift to the bride and groom, Parker and 
         Maddi are registered at the following locations:</h5>
        
        <div>
            <a className="text-center" href="https://www.amazon.com/wedding/madison-edwards-parker-bednar-charleston-june-2018/registry/2YTIU2EH2S9T9"><b>Amazon</b></a>

        </div>
        <div>
            <a className="text-center" href="https://www.target.com/gift-registry/giftgiver?registryId=61fb970a25d54eb989b16087584264a3&ref=registryWebEmailShare&lnk=registry_custom_url#1"><b>Target</b></a> 

        </div>
        <div>
            <a className="text-center" href="https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=544648185&eventType=Wedding&pwsurl="><b>Bed Bath & Beyond</b></a>
        </div>
        <div>
            <a className="text-center" href="http://www.honeyfund.com/wedding/HouseBednar"><b>Honeyfund</b></a>
        </div>
        <h5 className="bc">If you would prefer to make a charitable donation in Parker and Maddi's names, consider donating to     <a href="http://www.tebohotrust.org.za/index.asp?pid=6"><b>The Teboho Trust Foundation</b></a>
.</h5>
        </div>
    </div>;



export default TravelAndLeisure;
