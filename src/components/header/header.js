import React, { Component } from "react";
import './header.css'
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";

export default class Header extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                    logout
            </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link
                    to='/register'>
                    sign up
            </Link>
                <Link
                    to='/login'>
                    log in
            </Link>
            </div>
        )
    }


    render() {
        return (
            <header className='dashboard_header'>
                <Link to={'/'}><h1>tips.</h1></Link>
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </header>
        )
    }
}