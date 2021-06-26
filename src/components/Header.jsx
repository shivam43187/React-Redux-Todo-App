import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                            <h2>Todo App</h2>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header
