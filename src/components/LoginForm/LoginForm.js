import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }

    state = { error: null }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { email, password } = ev.target

        AuthApiService.postLogin({
            email: email.value,
            password: password.value,
        })
            .then(res => {
                email.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state
        return (
            <form
                className='LoginForm'
                onSubmit={this.handleSubmitJwtAuth}
            >
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <label htmlFor="LoginForm_email">email</label>
                <input type="email" id="LoginForm_Email" name="email" required />
                <label htmlFor="LoginForm_password">password</label>
                <input type="password" id="LoginForm_password" name="password" required />
                <button type="submit">Login</button>
            </form>
        )
    }
}