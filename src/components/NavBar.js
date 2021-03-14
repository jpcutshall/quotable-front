import React, { Component } from 'react'
import './NavBar.css'

export default class navBar extends Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <li>
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Login/Sign Up</a>

                    </li>
                </ul>
            </div>
        )
    }
}
