import React, { Component } from "react";
import './ShiftHistoryList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from "moment";

export default class ShiftHistoryList extends Component {

    renderList = () => {
        const sortedList = this.props.shifts.sort((a, b) => {
            return new Date(b.date_worked) - new Date(a.date_worked)
        })
        return sortedList.map(tips =>
            <li key={tips.id} className="history_list_item">
                <span className="list_date">{moment(tips.date_worked).format('ddd MMM Do YYYY')}</span>
                <span className="list_tips">${tips.tips}</span>
                <span className="list_hours">{tips.hours} hrs</span>
                <span className="list_buttons">
                    <FontAwesomeIcon icon='pencil-alt' className='fa_buttons' />
                    <FontAwesomeIcon icon='eraser' className='fa_buttons' />
                </span>
            </li>
        ).splice(0, 30)
    }

    render() {
        return (
            <>
                <ul className='shift_history'>
                    {this.renderList()}
                </ul >
            </>
        )
    }
}