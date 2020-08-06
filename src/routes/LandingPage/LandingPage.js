import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends Component {

    render() {
        return (
            <>
                <header className='landing_header'>
                    <h1>tips.</h1>
                    <p>Keep track of your money.</p>
                </header>
                <nav className='landing_nav'>
                    <ul class="nav-list">
                        {/* change **<Link to=>** after static deploy */}
                        <li><Link to={`/login`}>login</Link></li>
                        <li><Link to={`/register`}>sign up</Link></li>
                    </ul>
                </nav>
                <main>
                    <div class="about">
                        <h2>The service industry isn't a 'fake' job.</h2>
                        <p>The money definitely isn't. Keep track of your income like a 'real' adult.
            Making informed financial decisions is infinitely easier when you actually know your finances.</p>
                    </div>
                    <div class="cta">
                        <h3>Sign up today and take control of your cash</h3>
                        <Link to={`/register`}>Create an account</Link>
                    </div>
                </main>
            </>
        )
    }
}