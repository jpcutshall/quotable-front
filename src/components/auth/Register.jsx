import React, { Component } from 'react'
import './Register.css'

export default class Register extends Component {
    render() {
        return (
            <div className="register">
                <form className="registerForm" onSubmit={this.handleSubmit}>
                    <input className="input" type="text" name="username" placeholder="Username" />
                    <input className="input" type="password" name="password" placeholder="Password" />
                    <input className="input" type="password" name="password-check" placeholder="Password Check" />
                    <input className="button-primary" type="submit" value="Register" />
                </form>
                <p className="small-text">Already have an account? <a href="/login">Login</a></p>
            </div>
        )
    }
}
