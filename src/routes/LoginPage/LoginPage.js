import React, { Component } from "react";
import Header from "../../components/header/header";
import LoginForm from "../../components/LoginForm/LoginForm";

export default class LoginPage extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="form_align">
                    <LoginForm />
                </div>
            </>
        )
    }
}