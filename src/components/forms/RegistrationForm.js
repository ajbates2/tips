import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { user_name, email, password } = ev.target

        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: user_name.value,
            email: email.value,
            password: password.value
        })
            .then(user => {
                user_name.value = ''
                email.value = ''
                password.value = ''
                TokenService.saveAuthToken(user.authToken)
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state
        return (
            <form className='rego_form' onSubmit={this.handleSubmit}>
                <label htmlFor="RegoForm_username" className="name_label">What's your name?</label>
                <input type="text" name="user_name" id="RegoForm_username" className="name_input" required />
                <label htmlFor="RegoForm_email" className="">Email address?</label>
                <input type="email" name="email" id="RegoForm_email" required />
                <label htmlFor="RegoForm_password">Password</label>
                <input type="password" name="password" id="RegoForm_password" placeholder="1 caps, 1 numb, and 1 symbol" required />
                <button type="submit">Let's get started</button>
                <div role='alert' className="alert">
                    {error && <p className='red'>{error}</p>}
                </div>
            </form>
        )
    }
}