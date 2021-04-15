import React, { Component } from "react";
import Header from "../../components/header/header";
import LoginForm from "../../components/forms/LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class LoginPage extends Component {
    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    state = {
        loading: false
    }

    handleLoginSuccess = () => {
        const { history } = this.props
        history.push('/dashboard')
    }

    loadingState = () => {
        this.setState({ loading: true })
    }

    render() {
        if (this.state.loading)
            return (
                <FontAwesomeIcon icon="spinner" size="5x" className="loading_spinner fa-spin" />
            )
        return (
            <>
                <Header />
                <div className="form_align">
                    <LoginForm
                        onLoginSuccess={this.handleLoginSuccess}
                        loadingState={() => this.loadingState()}
                    />
                </div>
            </>
        )
    }
}