import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Header from "../../components/header/header";

export default class RegistrationPage extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="form_align">
                    <RegistrationForm />
                </div>
            </>
        )
    }
}