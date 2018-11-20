import React, { Component } from 'react';
import AbstractFactoryFragment from './AbstractFactoryFragment';
import ButtonForImage from './ButtonImage.js';
import PatternFragment from './PatternFragment';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel, ListGroupItem } from 'react-bootstrap';
import { ListGroup, Button } from 'react-bootstrap';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import './App.css';
const abstractFactoryClassDiagram = require('./images/AbstractFactoryClass.png');

class Patterns extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      chosenPattern: "abstractFactory"
    };
  }
  render() {
    return (
      <div className="App">
      <div className="Tabdiv">
        <Tabs
          id="controlled-tab-example"
          >
          <Tab eventKey={1} title="Creational">
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row className="clearfix center nested-tabs">
                    <Col sm={2}>
                      <Nav bsStyle="pills" stacked>
                      <NavItem eventKey="ffirst">Abstract Factory Pattern</NavItem>
                      <NavItem eventKey="ssecond">Builder Pattern</NavItem>
                      <NavItem eventKey="tthird">Dependency Injection</NavItem>
                      <NavItem eventKey="ffourth">Factory Pattern</NavItem>
                      <NavItem eventKey="ffifth">Lazy Initialization</NavItem>
                      </Nav>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="ffirst">
                        <div>
                          <AbstractFactoryFragment></AbstractFactoryFragment>
                        </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="ssecond">
                              <PatternFragment title="Builder Pattern"
                              description = "The Builder design pattern is one of the twenty-three well-known GoF design patterns[1] that describe how to solve recurring design problems in object-oriented software. The Builder design pattern solves problems like:[2]
      How can a class (the same construction process) create different representations of a complex object?
      How can a class that includes creating a complex object be simplified?
      Creating and assembling the parts of a complex object directly within a class is inflexible. It commits the class to creating a particular representation of the complex object and makes it impossible to change the representation later independently from (without having to change) the class.
      
      The Builder design pattern describes how to solve such problems:
      
      Encapsulate creating and assembling the parts of a complex object in a separate Builder object.
      A class delegates object creation to a Builder object instead of creating the objects directly.
      A class (the same construction process) can delegate to different Builder objects to create different representations of a complex object."
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="tthird">
                        Third
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                    <Col sm={1}>
                    <ListGroup>
                      <ListGroupItem>
                        <ButtonForImage imageSrc={abstractFactoryClassDiagram}/>
                      </ListGroupItem>
                    </ListGroup>
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
          <Tab eventKey={2} title="Structural">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Other">
            Tab 3 content
          </Tab>
        </Tabs>
        </div>
      </div>
    );
  }
}

export default Patterns;