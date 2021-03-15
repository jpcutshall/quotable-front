import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
    
    handleSubmit(e){
        //Post to API to login
        e.preventDefault();
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <input className="input" type="text" name="username" placeholder="Username" />
                    <input className="input" type="password" name="password" placeholder="Password" />
                    <input className="button-primary" type="submit" value="Login" />
                </form>
                <p className="small-text">Don't have an account? <a href="/">Sign up</a></p>
            </div>
        )
    }
}
