import React, { Component } from "react";
import './header.css'
import { Link } from "react-router-dom";

export default class Header extends Component {

    render() {
        return (
            <header className='dashboard_header'>
                <h1>tips.</h1>
                <Link to={'/'}>logout</Link>
            </header>
        )
    }
}