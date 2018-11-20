import React, { Component } from 'react';
import { Button, Image, Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel } from 'react-bootstrap';
const umlClass = require('./images/AbstractFactoryClass.png');

class CollapsiblePanel extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false
        };
      }

    render() {
        return (
            <div>
            <Panel id="collapsible-panel-example-2">
            <Panel.Heading>
                <Panel.Title toggle componentClass="h3">{this.props.heading}</Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
                <Panel.Body>
                {this.props.body}
                </Panel.Body>
            </Panel.Collapse>
            </Panel>
            </div>
        );
    }
}    

export default CollapsiblePanel;