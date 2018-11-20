import React, { Component } from 'react';
import { Image, Button, Modal } from 'react-bootstrap';

class ButtonForImage extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
        show: false
        };
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    
    render() {
        return (
        <div>
            <Button bsStyle="info" bsSize="small" onClick={this.handleShow}>
            UML Class Diagram
            </Button>
    
            <Modal bsSize="lg" show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>UML Class Diagram</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={this.props.imageSrc} className="Modal-image" rounded/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>
        </div>
        );
    }
}    

export default ButtonForImage;