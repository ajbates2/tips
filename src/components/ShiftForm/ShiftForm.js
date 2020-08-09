import React, { Component } from "react";

export default class ShiftForm extends Component {
    render() {
        return (
            <form className='shift_form'>
                <label htmlFor="tips">tips</label>
                <input type="text" id="tips" placeholder="$123" />
                <label htmlFor="hours">Hours worked</label>
                <input type="text" id="hours" placeholder="5.73" />
                <label htmlFor="job">Select Job</label>
                <select id="job">
                    <option>JL Beers</option>
                    <option>HeadFlyer Brewing</option>
                </select>
                <input type="submit" />
            </form>
        )
    }
}