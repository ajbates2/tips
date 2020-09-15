import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import ShiftContext from '../../contexts/shiftHistoryContext'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }

    static contextType = ShiftContext

    state = {
        error: null,
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { email, password } = ev.target

        AuthApiService.postLogin({
            email: email.value,
            password: password.value,
        })
            .then(this.props.loadingState())
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

    handleLoadingState = ev => {
        ev.preventDefault()
        this.props.loadingState()
    }

    render() {
        const { error } = this.state
        return (
            <form
                className='LoginForm'
                onSubmit={this.handleSubmitJwtAuth}
            >
                <label htmlFor="LoginForm_email">email</label>
                <input type="email" id="LoginForm_Email" name="email" required />
                <label htmlFor="LoginForm_password">password</label>
                <input type="password" id="LoginForm_password" name="password" required />
                <button type="submit">Login</button>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
            </form>
        )
    }
}