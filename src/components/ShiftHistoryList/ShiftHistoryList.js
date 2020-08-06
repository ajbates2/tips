import React, { Component } from "react";
import './ShiftHistoryList.css'

export default class ShiftHistoryList extends Component {
    render() {
        return (
            <ul className='shift_history'>
                <li>Mon 8/3 - $100 - 5.5 hrs</li>
                <li>Mon 8/4 - $100 - 5.5 hrs</li>
                <li>Mon 8/5 - $100 - 5.5 hrs</li>
            </ul>
        )
    }
}