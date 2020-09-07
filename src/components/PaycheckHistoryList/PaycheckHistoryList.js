import React, { Component } from "react";
import './PaycheckHistoryList.css'
import moment from "moment";
import ShiftApiService from "../../services/shift-api-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PaycheckHistoryList extends Component {

    renderList = () => {
        return this.props.paychecks.map(check =>
            <li key={check.id} className="history_list_item">
                <span className="list_job">{check.job.job_name}</span>
                <span className="list_date">{moment(check.date_received).format('ddd M/D/YY')}</span>
                <span className="check_total">${check.check_total}</span>
                <span className="list_buttons">
                    <FontAwesomeIcon
                        icon='trash-alt'
                        className='fa_buttons'
                        onClick={() => {
                            ShiftApiService.deleteCheckRequest(check.id)
                            setTimeout(() => { window.location.reload(true) }, 100)
                        }} />
                </span>
            </li>
        ).splice(0, 30)
    }

    renderFirstEntry = () => {
        if (this.props.paychecks.length === 0) {
            return (<h2 className="instructions bittersweet">Add your first shift or paycheck by clicking the blue button below.</h2>
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