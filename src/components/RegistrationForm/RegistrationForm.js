import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";

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
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        return (
            <form className='rego_form' onSubmit={this.handleSubmit}>
                <label htmlFor="RegoForm_username">What's your name?</label>
                <input type="text" name="user_name" id="RegoForm_username" required />
                <label htmlFor="RegoForm_email">Email address?</label>
                <input type="email" name="email" id="RegoForm_email" required />
                <label htmlFor="RegoForm_password">Password</label>
                <input type="password" name="password" id="RegoForm_password" required />
                <button type="submit">Let's get started</button>
            </form>
        )
    }
}