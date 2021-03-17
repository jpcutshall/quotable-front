import React, { Component } from 'react'
import './NavBar.css'

export default class navBar extends Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                        
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </div>
        )
    }
}
