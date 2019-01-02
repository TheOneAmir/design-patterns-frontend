import React, { Component } from 'react';
import CollapsiblePanel from './CollapsiblePanel'
import { Button, Image, Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel } from 'react-bootstrap';
const umlClass = require('./images/AbstractFactoryClass.png');

class PatternFragment extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false
        };
      }

    render() {
        return (
            <div>
            <Panel>
            <Panel.Heading>
                <Panel.Title componentClass="h3">{this.props.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <CollapsiblePanel heading="Overview" body={this.props.description}/>
                <CollapsiblePanel heading="Description" />
                <CollapsiblePanel heading="Use Cases" />
                <CollapsiblePanel heading="References" body={this.props.refs}/>
            </Panel.Body>
            </Panel>
            </div>
        );
    }
}    

export default PatternFragment;