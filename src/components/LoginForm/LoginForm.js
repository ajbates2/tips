import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends Component {
    render() {
        return (
            <form className='login_form'>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
                <button><Link to={'/dashboard'}>submit</Link></button>
            </form>
        )
    }
}