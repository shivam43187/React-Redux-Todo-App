import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

export class TodoAlert extends Component {
    render() {
        return (
            <Modal 
            show={this.props.show} 
            onHide={this.props.toggleAlert}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Want to delete All?</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.toggleAlert}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={this.props.remove}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default TodoAlert
