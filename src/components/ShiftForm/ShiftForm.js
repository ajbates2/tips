import React, { Component } from "react";

export default class ShiftForm extends Component {
    render() {
        return (
            <form className='shift_form'>
                <label htmlFor="tips">tips</label>
                <input type="number" step="0.01" id="tips" placeholder="$123" />
                <label htmlFor="hours">Hours worked</label>
                <input type="number" step="0.01" id="hours" placeholder="5.73" />
                <label htmlFor="shift_date">Select Job</label>
                <input type="date" id="shift_date" />
                <input type="submit" />
            </form>
        )
    }
}