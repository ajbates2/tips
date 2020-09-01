import React, { Component } from "react";
import RegistrationForm from "../../components/forms/RegistrationForm";
import Header from "../../components/header/header";

export default class RegistrationPage extends Component {
    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/dashboard')
    }

    render() {
        return (
            <>
                <Header />
                <div className="form_align">
                    <RegistrationForm
                        onRegistrationSuccess={this.handleRegistrationSuccess} />
                </div>
            </>
        )
    }
}