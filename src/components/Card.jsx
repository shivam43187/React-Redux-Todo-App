import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeTodo, updateTodo } from '../services/action'
import "../styles/card.css"

export class Card extends Component {

    handleChange = (event) => {
        const value = event.target.value
        console.log(value, this.props.todo)
        this.props.dispatch(
            updateTodo({
                id: this.props.todo.id,
                text: value,
                title: this.props.todo.title
            })
        )

    }

    removeTodo = () => {
        this.props.dispatch(removeTodo(this.props.todo.id))
    }

    render() {
        console.log(this.props)
        return (
            <div className="todo_card">
                <div className="card_header">
                    <span className="card_title">
                        {this.props.todo.title}
                    </span>
                </div>
                <div className="card_body">
                    <textarea value={this.props.todo.text} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="card_footer">
                    <span className="card_titleIcon" onClick={this.removeTodo}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        )
    }
}

export default connect()(Card)
