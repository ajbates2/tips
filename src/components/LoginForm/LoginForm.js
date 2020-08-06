import React, { Component } from "react";
import './LoginForm.css'
import { Link } from "react-router-dom";

export default class LoginForm extends Component {
    render() {
        return (
            <form className='login_form'>
                <label for="username">Username</label>
                <input type="text" id="username" />
                <label for="password">Password</label>
                <input type="text" id="password" />
                <button><Link to={'/dashboard'}>submit</Link></button>
            </form>
        )
    }
}