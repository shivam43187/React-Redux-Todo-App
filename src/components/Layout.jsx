import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import "../styles/Layout.css"
import CreateTodo from './CreateTodo'
import { removeAll } from '../services/action'
import TodoAlert from './TodoAlert'

export class Layout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showModal: false,
            showAlert: false
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    toggleAlert = () => {
        this.setState({
            showAlert: !this.state.showAlert
        })
    }

    removeAll = () => {
        this.props.dispatch(removeAll())
        this.toggleAlert()  
    }
    
    render() {
        return (
            <>
                <CreateTodo show={this.state.showModal} toggleModal={this.toggleModal} />
                <TodoAlert show={this.state.showAlert} toggleAlert={this.toggleAlert} remove={this.removeAll} />
                <div className="container">
                    <div className="create_todo">
                        <button className="btn btn-primary" onClick={this.toggleModal}>
                            Create Todo
                        </button>
                        <button 
                        className={`btn btn-primary mx-2 ${!this.props.todos.length ? "zero_todo_btn" : ""}`} 
                        onClick={this.toggleAlert}
                        disabled={this.props.todos.length === 0} >
                            Delete All
                        </button>
                    </div>
                    <div className="row">
                        {this.props.todos.map((todo, i) => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                                <Card todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

const mapSateToProps = (state) => {
    return {
        todos: state.todo,
        changes: state.changes
    }
}

export default connect(mapSateToProps)(Layout)
