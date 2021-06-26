import React, { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createTodo } from '../services/action'

export class CreateTodo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: '',
            text: '',
            showError: false
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, () => {
            if(this.state.title && this.state.text){
                if(this.state.showError){
                    this.setState({
                        showError: false
                    })
                }
            }
        })
    }

    saveTodo = () => {
        const { title, text } = this.state
        if(title && text){
            this.props.dispatch(createTodo({
                id: this.props.todos.length,
                title,
                text,
                done: false
            }))
            this.clearData()
        }else{
            this.setState({
                showError: true
            })
        }
    }

    clearData = () => {
        this.setState({
            title: '',
            text: '',
            showError: false
        }, () => this.props.toggleModal())
    }
    
    render() {
        return (
            <Modal 
            show={this.props.show} 
            onHide={this.clearData}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { this.state.showError ?
                        <div class="alert alert-danger mb-2" role="alert">
                            All Fields Required!
                        </div>
                    : null}
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input type="text" class="form-control" value={this.state.title} name="title" onChange={this.handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" rows="3" value={this.state.text} name="text" onChange={this.handleChange}></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.clearData}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.saveTodo}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapSateToProps = (state) => {
    return {
        todos: state.todo
    }
}

export default connect(mapSateToProps)(CreateTodo)
