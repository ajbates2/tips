import React, { Component } from "react";
import ShiftApiService from "../../services/shift-api-service";
import ShiftContext from "../../contexts/shiftHistoryContext";

export default class ShiftForm extends Component {

    static contextType = ShiftContext

    handleSubmit = ev => {
        ev.preventDefault()
        const { tips, hours, date_worked, job_id, role_id } = ev.target
        ShiftApiService.postShift(this.props.user.id, tips.value, hours.value, date_worked.value, job_id.value, role_id.value)
            .then(() => this.props.onSubmit())
            .catch(this.context.setError)
    }

    logSubmit = ev => {
        ev.preventDefault()
        let data = document.getElementById("job")
        console.log(data.value)
    }

    render() {
        return (
            <form className='shift_form' onSubmit={this.handleSubmit}>
                <label htmlFor="tips">tips</label>
                <input type="number" step="0.01" id="tips" name="tips" placeholder="123" required />
                <label htmlFor="hours">Hours worked</label>
                <input type="number" step="0.01" id="hours" name="hours" placeholder="5.73" required />
                <label htmlFor="job">Where did you work?</label>
                <select id="job" name="job_id" required>
                    {this.props.user.jobs.map(job => {
                        return <option key={job.id} value={job.id}>{job.job_name}</option>
                    })}
                </select>
                <label htmlFor="role">What did you do?</label>
                <select id="role" name="role_id" required>
                    {this.props.user.roles.map(role => {
                        return <option key={role.id} value={role.id}>{role.role_name}</option>
                    })}
                </select>
                <label htmlFor="shift_date">Select Job</label>
                <input type="date" id="shift_date" name="date_worked" required />
                <button type="submit">Add shift</button>
            </form>
        )
    }
}

