import React, { Component } from "react";
import './header.css'
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import ShiftContext from "../../contexts/shiftHistoryContext";

export default class Header extends Component {
    static contextType = ShiftContext

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        setTimeout(() => { window.location.reload(true) }, 500)
    }

    renderLogoutLink() {
        return (
            <div className='header_logged_in'>
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
                <h1 className="logo">tips.</h1>
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </header>
        )
    }
}