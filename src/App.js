import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Jumbotron, Button } from 'react-bootstrap';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Design Patterns</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
          Patterns
          </NavItem>
          <NavItem eventKey={2} href="#">
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
      <Jumbotron>
      <div className="Tabdiv">
        <Tabs
          id="controlled-tab-example"
          >
          <Tab eventKey={1} title="Creational">
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row className="clearfix center nested-tabs">
                    <Col sm={3}>
                      <Nav bsStyle="pills" stacked>
                      <NavItem eventKey="ffirst">Creational</NavItem>
                      <NavItem eventKey="ssecond">Structural</NavItem>
                      <NavItem eventKey="tthird">Other</NavItem>
                      </Nav>
                    </Col>
                    <Col sm={5}>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="ffirst">
                        First item
                        </Tab.Pane>
                        <Tab.Pane eventKey="ssecond">
                        Second
                        </Tab.Pane>
                        <Tab.Pane eventKey="tthird">
                        Third
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              <Tab.Pane eventKey="second">
                Tab 2 content
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                Tab 2 content
              </Tab.Pane>
            </div>
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Tab 3" disabled>
            Tab 3 content
          </Tab>
        </Tabs>
        </div>
        </Jumbotron>
      </div>
    );
  }
}

export default App;