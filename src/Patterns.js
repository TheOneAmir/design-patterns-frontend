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
                          <PatternFragment title="Abstract Factory Pattern"
                          description="The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes.[1] In normal usage, the client software creates a concrete implementation of the abstract factory and then uses the generic interface of the factory to create the concrete objects that are part of the theme. The client doesn't know (or care) which concrete objects it gets from each of these internal factories, since it uses only the generic interfaces of their products.[1] This pattern separates the details of implementation of a set of objects from their general usage and relies on object composition, as object creation is implemented in methods exposed in the factory interface.[2]

                          An example of this would be an abstract factory class DocumentCreator that provides interfaces to create a number of products (e.g. createLetter() and createResume()). The system would have any number of derived concrete versions of the DocumentCreator class like FancyDocumentCreator or ModernDocumentCreator, each with a different implementation of createLetter() and createResume() that would create a corresponding object like FancyLetter or ModernResume. Each of these products is derived from a simple abstract class like Letter or Resume of which the client is aware. The client code would get an appropriate instance of the DocumentCreator and call its factory methods. Each of the resulting objects would be created from the same DocumentCreator implementation and would share a common theme (they would all be fancy or modern objects). The client would only need to know how to handle the abstract Letter or Resume class, not the specific version that it got from the concrete factory.
                      
                          A factory is the location of a concrete class in the code at which objects are constructed. The intent in employing the pattern is to insulate the creation of objects from their usage and to create families of related objects without having to depend on their concrete classes.[2] This allows for new derived types to be introduced with no change to the code that uses the base class.
                      
                          Use of this pattern makes it possible to interchange concrete implementations without changing the code that uses them, even at runtime. However, employment of this pattern, as with similar design patterns, may result in unnecessary complexity and extra work in the initial writing of code. Additionally, higher levels of separation and abstraction can result in systems that are more difficult to debug and maintain.
                           "
                           refs=""></PatternFragment>
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
                              refs=""
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