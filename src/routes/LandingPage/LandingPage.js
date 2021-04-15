import React, { Component } from 'react';
import './LandingPage.css';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
	componentDidMount() {
		if (TokenService.hasAuthToken() === true) {
			this.props.history.push('/dashboard');
		}
	}

	render() {
		return (
			<div className='landing'>
				<nav className='landing_nav'>
					<ul className='nav-list'>
						<li>
							<Link to={`/login`}>login</Link>
						</li>
						<li>
							<Link to={`/register`}>sign up</Link>
						</li>
					</ul>
				</nav>
				<header className='landing_header cartog_background'>
					<div>
						<h1>tips.</h1>
						<p>Keep track of your money.</p>
					</div>
				</header>
				<div className='demo_creds'>
					<h3>Demo Credentials</h3>
					<p>
						email: foo@bar.com <br />
						password: password
					</p>
				</div>
				<section className='landing_main'>
					<div className='landing_main_container'>
						<h2>Under Construction</h2>
						<p>
							The current plan is to completely rebuild the
							front-end in Next.js, followed by a React-Native
							app.
						</p>
						<div>
							<button className='github_button'>
								<a
									className='github_link'
									href='https://github.com/ajbates2/tips'
									target='_blank'
									rel='noopener noreferrer'
								>
									GitHub Repo
								</a>
							</button>
							<button className='github_button'>
								<a
									className='github_link'
									href='https://www.ajbates.dev/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Portfolio
								</a>
							</button>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
