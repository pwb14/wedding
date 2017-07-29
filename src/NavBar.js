import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () =>
  <div className="story-header">
    <Link to="/ourstory">Our Story</Link>
    <Link to="/bridalparty">Bridal Party</Link>
  </div>;

export default NavBar;