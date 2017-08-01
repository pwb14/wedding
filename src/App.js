import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import OurStory from './OurStory.js';
import Home from './Home.js';
import BridalParty from './BridalParty';
import TravelAndLeisure from './TravelAndLeisure';
import Venue from './Venue.js';
import AdditionalInfo from './AdditionalInfo.js';
import './styles/main.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import NavBar from './NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="row">
        <NavBar/>
      </div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/ourstory' component={OurStory}/>
          <Route path='/bridalparty' component={BridalParty}/>
          <Route path='/travel' component={TravelAndLeisure}/>
          <Route path='/venue' component={Venue}/>
          <Route path='/additional' component={AdditionalInfo}/>
        </Switch>
      </div>
    );
  }
}

export default App;
