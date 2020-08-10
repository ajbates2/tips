import React, { Component } from "react";
import './ShiftHistoryList.css'
import { format } from "date-fns";
import ShiftContext from "../../contexts/shiftHistoryContext";

export default class ShiftHistoryList extends Component {

    static contextType = ShiftContext

    renderList = () => {
        const sortedList = this.context.shifts.sort((a, b) => {
            return b.date - a.date
        })
        return sortedList.map(tips =>
            <li key={tips.id}>
                {format(tips.date, 'EEE MMM do yyyy')} - ${tips.tips} - {tips.hours} hrs
            </li>
        )
    }

    render() {
        return (
            <ul className='shift_history'>
                {this.renderList()}
            </ul >
        )
    }
}

