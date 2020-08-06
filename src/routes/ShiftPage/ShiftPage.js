import React, { Component } from "react";
import Header from "../../components/header/header";
import ShiftForm from "../../components/ShiftForm/ShiftForm";

export default class ShiftPage extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="form_align">
                    <ShiftForm />
                </div>
            </>
        )
    }
}