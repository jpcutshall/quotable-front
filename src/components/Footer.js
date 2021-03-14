import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <ul className="footer">
                    <li>
                        <a href="/">about</a>
                    </li>
                    <li>
                        <a href="/">Terms of Service</a>
                    </li>
                    <li>
                        <a href="/">Help</a>
                    </li>
                    <li>
                        <a href="/">careers</a>
                    </li>
                    <li>
                        <a href="/">developer info</a>
                    </li>
                </ul>
            </div>
        )
    }
}
