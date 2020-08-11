import React, { Component } from "react";

export default class PaycheckForm extends Component {
    render() {
        return (
            <form className='paycheck_form'>
                <label htmlFor="paycheck">Paycheck amount</label>
                <input type="number" step="0.01" id="paycheck" />
                <label htmlFor="check_date">Pay date</label>
                <input type="date" id="check_date" />
                <button>submit</button>
            </form>
        )
    }
}