import React, { Component } from "react";
import './ShiftHistoryList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from "moment";
import ShiftApiService from "../../services/shift-api-service";
import JobForm from "../forms/JobForm";
import RoleForm from "../forms/RoleForm";

export default class ShiftHistoryList extends Component {

    renderList = () => {
        return this.props.shifts.map(shift =>
            <li key={shift.id} className="history_list_item">
                <span className="list_job">{shift.role.title} at {shift.role.employer}</span>
                <span className="list_date">{moment.utc(shift.date_worked).format('ddd M/D/YY')}</span>
                <span className="tip_row">tips:</span>
                <span className="list_tips">${shift.tips}</span>
                <span className="hour_row">hours:</span>
                <span className="list_hours">{shift.hours}</span>
                <span className="list_buttons">
                    {/* <FontAwesomeIcon icon='pencil-alt' className='fa_buttons' /> */}
                    <FontAwesomeIcon
                        icon='trash-alt'
                        className='fa_buttons'
                        onClick={() => {
                            ShiftApiService.deleteShiftRequest(shift.id)
                            setTimeout(() => { window.location.reload() }, 100)
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
        else if (this.props.shifts.length === 0) {
            return (<h2 className="instructions bittersweet">Add your first shift or paycheck by clicking the blue button below.</h2>
            )
        }
    }

    bgLenAdjust() {
        if (this.props.shifts.length >= 3) {
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