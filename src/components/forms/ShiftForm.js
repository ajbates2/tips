import React, { Component } from "react";
import ShiftApiService from "../../services/shift-api-service";
import ShiftContext from "../../contexts/shiftHistoryContext";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ShiftForm extends Component {

    state = {
        jobSelect: this.props.user.jobs[0].id
    }

    static contextType = ShiftContext

    handleSubmit = ev => {
        ev.preventDefault()
        const { tips, hours, date_worked, job_id, role_id } = ev.target
        ShiftApiService.postShift(this.props.user.id, tips.value, hours.value, date_worked.value, job_id.value, role_id.value)
            .then(() => this.props.onSubmit())
            .catch(this.context.setError)
    }

    render() {
        const today = moment().format('YYYY-MM-DD');
        return (
            <form className='shift_form' onSubmit={this.handleSubmit}>
                <FontAwesomeIcon
                    icon='times'
                    className='close_shift_window'
                    onClick={() => this.props.closeWindow()} />
                <label htmlFor="tips">Tips made</label>
                <input type="number" step="0.01" id="tips" name="tips" placeholder="123" required />
                <label htmlFor="hours">Hours worked</label>
                <input type="number" step="0.01" id="hours" name="hours" placeholder="5.73" required />
                <label htmlFor="job_id">Where did you work?</label>
                <select id="job_id" name="job_id" onChange={ev => this.setState({ jobSelect: Number(ev.target.value) })} required>
                    {this.props.user.jobs.map(job => {
                        return (
                            <option
                                key={job.id}
                                value={job.id}

                            >
                                {job.job_name}
                            </option>
                        )
                    })}
                </select>
                <label htmlFor="role_id">What did you do?</label>
                <select id="role_id" name="role_id" required>
                    {this.props.user.roles.map(role => {
                        if (role.job_id === this.state.jobSelect) {
                            return (
                                <option
                                    key={role.id}
                                    value={role.id}
                                >
                                    {role.role_name}
                                </option>
                            )
                        }
                        else {
                            return null
                        }
                    })}
                </select>
                <label htmlFor="shift_date">When did you work?</label>
                <input type="date" id="shift_date" name="date_worked" defaultValue={today} required />
                <button type="submit">Add shift</button>
            </form>
        )
    }
}