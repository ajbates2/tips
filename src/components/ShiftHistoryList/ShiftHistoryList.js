import React, { Component } from "react";
import './ShiftHistoryList.css'
import store from '../../store'
import { format } from "date-fns";

export default class ShiftHistoryList extends Component {

    renderList = () => {
        return store.shift.map(tips =>
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