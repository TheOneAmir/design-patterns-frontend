import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class NavigationBar extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
            <a href="/patterns">Design Patterns</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
            <NavItem eventKey={1} href="/patterns">
            Patterns
            </NavItem>
            <NavItem eventKey={2} href="/uses">
            Use cases
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Design Patterns</MenuItem>
            <MenuItem eventKey={3.2}>Use Cases</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={1} href="#">
            Sign In
            </NavItem>
            <NavItem eventKey={2} href="#">
            Sign Out
            </NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;