import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './LandingPage.css'
import TokenService from "../../services/token-service";

export default class LandingPage extends Component {

    componentDidMount() {
        if (TokenService.hasAuthToken() === true) {
            this.props.history.push('/dashboard')
        }
    }

    render() {
        return (
            <div className="landing">
                <header className='landing_header'>
                    <h1>tips.</h1>
                    <p>Keep track of your money.</p>
                </header>
                <nav className='landing_nav'>
                    <ul className="nav-list">
                        {/* change **<Link to=>** after static deploy */}
                        <li><Link to={`/login`}>login</Link></li>
                        <li><Link to={`/register`}>sign up</Link></li>
                    </ul>
                </nav>
                <main>
                    <div className="about">
                        <h2>The service industry isn't a 'fake' job.</h2>
                        <p>The money definitely isn't. Keep track of your income like a 'real' adult.
            Making informed financial decisions is infinitely easier when you actually know your finances.</p>
                    </div>
                    <div className="cta">
                        <h3>Sign up today and take control of your cash</h3>
                        <Link to={`/register`}>Create an account</Link>
                    </div>
                </main>
            </div>
        )
    }
}