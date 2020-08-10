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
            <li key={tips.id} className="history_list_item">
                <span className="list_date">{format(tips.date, 'EEE MMM do yyyy')}</span>
                <span className="list_tips">${tips.tips}</span>
                <span className="list_hours">{tips.hours} hrs</span>
                <span className="list_buttons">
                    <button>delete</button>
                    <button>update</button>
                </span>
            </li>
        )
    }

    render() {
        return (
            <>
                <h3>History</h3>
                <ul className='shift_history'>
                    {this.renderList()}
                </ul >
            </>
        )
    }
}

