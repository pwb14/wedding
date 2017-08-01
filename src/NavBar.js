import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () =>
  <div className="story-header">
    <Link className="col-sm-2 bc" to="/">Home</Link>
    <Link className="col-sm-2 bc" to="/ourstory">Our Story</Link>
    <Link className="col-sm-2 bc" to="/bridalparty">Bridal Party</Link>
    <Link className="col-sm-2 bc" to="/travel">Travel and Leisure</Link>
    <Link className="col-sm-2 bc" to="/venue">Venue</Link>
    <Link className="col-sm-2 bc" to="/additional">Additional Info</Link>
  </div>;

export default NavBar;