import React, { Component } from 'react';
import Patterns from './Patterns';
import UseCases from './Uses';
import NavigationBar from './Navigationbar';
import { BrowserRouter, Route, } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Jumbotron, Button } from 'react-bootstrap';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavigationBar></NavigationBar>
          <BrowserRouter>
              <Route path="/patterns" component={Patterns}/>
          </BrowserRouter>
          <BrowserRouter>
              <Route path="/uses" component={UseCases}/>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;