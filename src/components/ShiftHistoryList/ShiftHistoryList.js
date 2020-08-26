import React, { Component } from "react";
import './ShiftHistoryList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from "moment";
import ShiftApiService from "../../services/shift-api-service";

export default class ShiftHistoryList extends Component {

    renderList = () => {
        return this.props.shifts.map(shift =>
            <li key={shift.id} className="history_list_item">
                <span className="list_date">{moment(shift.date_worked).format('ddd MMM Do YYYY')}</span>
                <span className="list_tips">${shift.tips}</span>
                <span className="list_hours">{shift.hours} hrs</span>
                <span className="list_job">{shift.role.employer} - {shift.role.title}</span>
                <span className="list_buttons">
                    {/* <FontAwesomeIcon icon='pencil-alt' className='fa_buttons' /> */}
                    <FontAwesomeIcon
                        icon='trash-alt'
                        className='fa_buttons'
                        onClick={() => {
                            ShiftApiService.deleteShiftRequest(shift.id)
                            setTimeout(() => { window.location.reload(true) }, 100)
                        }} />
                </span>
            </li>
        ).splice(0, 30)
    }

    renderFirstEntry = () => {
        if (this.props.shifts.length && this.props.paychecks.length === 0) {
            return (<h2>Add your first shift or paycheck by clicking the blue button below.</h2>
            )
        }
        else {
            return null
        }
    }
    render() {
        return (
            <>
                {this.renderFirstEntry()}
                <ul className='shift_history'>
                    {this.renderList()}
                </ul >
            </>
        )
    }
}