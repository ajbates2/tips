import React, { Component } from "react";
import './header.css'
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import ShiftContext from "../../contexts/shiftHistoryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends Component {
    static contextType = ShiftContext

    state = {
        menuOpen: false
    }

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        setTimeout(() => { window.location.reload(true) }, 500)
    }

    handleMenuClick = () => {
        this.setState({ menuOpen: true })
    }

    renderCorrectLink = () => {
        if (this.props.path === '/dashboard') {
            return (
                <Link to='/user'>user info</Link>
            )
        }

        if (this.props.path === '/user') {
            return (
                <Link to='/dashboard'>dashboard</Link>
            )
        }
    }

    renderMenu() {
        return (
            <div className='header_logged_in'>
                {this.renderCorrectLink()}
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                    logout
                </Link>
            </div>
        )
    }

    renderMenuButton() {
        if (this.state.menuOpen) return this.renderMenu()
        return (
            <FontAwesomeIcon icon="bars" className="hamburger" onClick={() => this.handleMenuClick()} />
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
                <Link to='/dashboard'>
                    <h1 className="logo">tips.</h1>
                </Link>
                {TokenService.hasAuthToken()
                    ? this.renderMenuButton()
                    : this.renderLoginLink()}
            </header>
        )
    }
}