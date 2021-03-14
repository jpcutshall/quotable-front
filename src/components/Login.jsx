import React, { Component } from 'react'

export default class Login extends Component {
    
    handleSubmit(e){
        //Post to API to login
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" value="Login" />
                </form>
                <p className="small-text">Don't have an account? <a href="/">Sign up</a></p>
            </div>
        )
    }
}
