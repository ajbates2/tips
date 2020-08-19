import React, { Component } from "react";
import Header from "../../components/header/header";
import LoginForm from "../../components/LoginForm/LoginForm";

export default class LoginPage extends Component {
    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    handleLoginSuccess = () => {
        const { history } = this.props
        history.push('/dashboard')
    }

    render() {
        return (
            <>
                <Header />
                <div className="form_align">
                    <LoginForm onLoginSuccess={this.handleLoginSuccess} />
                </div>
            </>
        )
    }
}