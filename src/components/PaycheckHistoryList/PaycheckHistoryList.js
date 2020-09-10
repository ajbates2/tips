import React, { Component } from "react";
import './PaycheckHistoryList.css'
import moment from "moment";
import ShiftApiService from "../../services/shift-api-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobForm from "../forms/JobForm";
import RoleForm from "../forms/RoleForm";

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
        if (this.props.userData.jobs.length === 0) {
            return (
                <div className="setup_container">
                    <h3 className="bittersweet">Add your first job!</h3>
                    <JobForm onSubmit={() => this.props.getUser()} />
                    <p className="bittersweet">
                        You can add mulitple employers in user info
                    </p>
                </div>
            )
        }
        else if (this.props.userData.roles.length === 0) {
            return (
                <div className="setup_container">
                    <h3 className="bittersweet">
                        Add your first role at {this.props.userData.jobs[0].job_name}.
                    </h3>
                    <RoleForm onSubmit={() => this.props.getUser()} />
                    <p className="bittersweet">
                        You can add multiple roles in user info
                    </p>
                </div>
            )
        }
        else if (this.props.paychecks.length === 0) {
            return (<h2 className="instructions bittersweet">Add your first paycheck by clicking the blue button below.</h2>
            )
        }
    }

    bgLenAdjust() {
        if (this.props.paychecks.length >= 3) {
            return 'correct_background'
        }
    }

    render() {
        return (
            <>
                <ul className={`shift_history ${this.bgLenAdjust()}`}>
                    {this.renderFirstEntry()}
                    {this.renderList()}
                </ul >
            </>
        )
    }
}