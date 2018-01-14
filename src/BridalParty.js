//I know I could have done in index file here, I did not becauase I did it piecemeal 
//like the rest of this app.
import React from 'react';
import alex from './images/alex.png';
import harry from './images/harry.png';
import schwick from './images/schwick.png';
import sean from './images/sean.png';
import clayton from './images/clayton.png';
import wayne from './images/wayne.png';
import april from './images/April.png';
import charlie from './images/charlie.png';
import austin from './images/Austin.png';
import carson from './images/carson.png';
import erin from './images/erin.png';
import carly from './images/Carly.png';
import colleen from './images/Colleen.png';
import marissa from './images/Marissa.png';
import katie from './images/Katie.png';
import laura from './images/Laura.png';
import brett from './images/Brett.png';
import { Col, Row } from 'react-bootstrap';

const BridalParty = () =>
    <div style={{height:"100%"}}>
        <h1 className="story-header">Bridal Party</h1>
        <div className="bridal-party">
            <Row>
                <Col sm={6}>
                    <h2 className="bc">Groomsmen</h2>
                </Col>
                <Col sm={6}>
                    <h2 className="bc">Bridesmaids</h2>
                </Col>
            </Row>
            <Row className="background1">
                <Col sm={6}>
                    <img src={alex} className="img-circle" alt="Alex Bednar"/>
                    <div>
                        Best Man and brother, <strong>Alex Bednar</strong> is the best brother that Parker could ask for, 
                        even if he is wrong most of the time.
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={april} className="img-circle" alt="Alex Bednar"/>
                    <div>
                        Maid of Honor and queen of "Home Team BBQ," <strong>April Dunlap</strong> is a sweet, sassy and supportive friend since
                         Maddi's College of Charleston days.
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <img src={harry} className="img-circle" alt="Harrison Peacock"/>
                    <div>
                        <strong>Harrison Peacock</strong> is one of the oldest friends of the groom and has always been 
                        there for all of his friends since anyone can remember.
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={carson} className="img-circle" alt="Harrison Peacock"/>
                    <div>
                        Maid of Honor and fiercely loyal friend, <strong>Carson Fisher</strong> met Maddi at a Catalina Wine Mixer
                        during Freshman year...and the rest is history.
                    </div>
                </Col>
            </Row>
            <Row className="background1">
                <Col sm={6}>
                    <img src={clayton} className="img-circle" alt="Clayton Turner"/>
                    <div>
                        <strong>Clayton Turner</strong> is one of the closest friends of Parker and Maddi.  As you can see,
                        he is very excited about this wedding.
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={erin} className="img-circle" alt="Harrison Peacock"/>
                    <div>
                        Maid of Honor and pontoon boat dweller, <strong>Erin Fisher</strong> has been a shoulder for Maddi to lean on 
                        from their days as Gamecocks, to their transition to Cougars.
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <img src={schwick} className="img-circle" alt="Jonathan Schwickwrath"/>
                    <div>
                        <strong>John "Schwick" Schwickrath</strong> is an old friend of Parker's and is always the life of the
                        party, just watch him dance.
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={carly} className="img-circle" alt="Harrison Peacock"/>
                    <div>
                        Bridesmaid and future veterinarian, <strong>Carly Iulo</strong> has blessed Maddi with her unrelenting 
                        love and New Jersey sass since their Rec Center Soccer days back in the 90s.
                    </div>
                </Col>
            </Row>
            <Row className="background1">
                <Col sm={6}>
                    <img src={sean} className="img-circle" alt="Sean Flanagan"/>
                    <div>
                        A great man and the friendliest person Parker and Maddi know, <strong>Sean Flanagan</strong> is an honored guest
                        at this wedding.
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={colleen} className="img-circle" alt="Harrison Peacock"/>
                    <div>
                        Bridesmaid and childhood friend, Maddi couldn't buy a friend like <strong>Colleen Cooper</strong> for a million bucks!
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <img src={wayne} className="img-circle" alt="Wayne Perry"/>
                    <div>
                        Easily the funniest man in this bridal party, <strong>Wayne Perry</strong> is a lovable dude with a great
                        love for Classic Rock.  Just ask him about it.
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={katie} className="img-circle" alt="Harrison Peacock"/>
                    <div>
                         Bridesmaid and screen printing extraordinaire, <strong>Katie Doyle</strong> has been the "shake" to Maddi's
                          "bake" through all of their sporting adventures - whether it be high school lacrosse or adult kickball.
                    </div>
                </Col>
            </Row>
            <Row className="background1">
                <Col sm={6}>
                    <img src={charlie} className="img-circle" alt="Wayne Perry"/>
                    <div>
                        <strong>Charlie Rioux</strong> is one of the smartest guys we know and a wonderful friend. 
                        He brightens the mood of any group he is a part of.
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={laura} className="img-circle" alt="Harrison Peacock"/>
                    <div>
                         Bridesmaid and Boston transplant, <strong>Laura Cooper</strong> is a childhood friend whom Maddi always spends 
                         hours on the phone with laughing more than talking.
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <img src={austin} className="img-circle" alt="Wayne Perry"/>
                    <div>
                        <strong>Austin Edwards</strong> is the brother of the bride and one of the biggest sports fans we know.  Whether it be the Cowboys (BOOO!)
                        or the Gamecocks, he is watching every game.
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={marissa} className="img-circle" alt="Harrison Peacock"/>
                    <div>
                        Bridesmaid and professional smiler, <strong>Marissa Nichols</strong> always kept Maddi's car stocked 
                        with mix cds full of classic rock and the All American Rejects during their high school years.
                    </div>
                </Col>
                
            </Row>
            <Row className="background1">
                <Col sm={12}>
                    <img src={brett} className="img-circle" alt="Wayne Perry"/>
                    <div>
                        <strong>Brett Snyder</strong> is the officiant and friend of Parker and Madison.  He is also the reigning champion of our Fantasy Football league - whether we like it or not.
                    </div>
                </Col>
            </Row>
        </div>
    </div>;

export default BridalParty;


 //            <img src={sean} className="img-circle" alt="Sean Flanagan"/>
 //            <div>
 //                A great man and the friendliest person Parker and Maddi know, Sean Flanagan is an honored guest
 //                at this wedding.
 //            </div>
 //            <img src={wayne} className="img-circle" alt="Wayne Perry"/>
 //            <div>
 //                Easily the funniest man in this bridal party, Wayne Perry is a lovable dude with a great
 //                love for Classic Rock.  Just ask him about it.
 //            </div>
 //            <img src={charlie} className="img-circle" alt="Wayne Perry"/>
 //            <div>
 //                Charlie is a one of the smartest guys we know and a wonderful friend. 
 //                He brightens the mood of any group he is a part of.
 //            </div>
 //            <img src={austin} className="img-circle" alt="Wayne Perry"/>
 //            <div>
 //                Austin is the brother of the bride and one of the biggest sports fans we know.  Whether it be the Cowboys (BOOO!)
 //                or the Gamecocks, he is watching every game.
 //            </div>
 //           