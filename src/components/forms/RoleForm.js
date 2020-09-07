import React, { Component } from "react";
import ShiftContext from "../../contexts/shiftHistoryContext";
import ShiftApiService from "../../services/shift-api-service";

export default class RoleForm extends Component {

    static contextType = ShiftContext

    handleSubmit = ev => {
        ev.preventDefault()
        const { role_name, hourly_rate, job_id } = ev.target
        ShiftApiService.postRole(this.context.userData.id, role_name.value, hourly_rate.value, job_id.value)
            .then(() => this.props.onSubmit())
            .catch(this.context.setError)
    }

    render() {
        return (
            <form className='role_form' onSubmit={this.handleSubmit}>
                <label htmlFor="role_name">What is your title?</label>
                <input type="text" id="role_name" name="role_name" placeholder="Server, Bartender, Barista, etc.." required />
                <label htmlFor="hourly_rate">What is your hourly wage?</label>
                <input type="number" step=".01" id="hourly_rate" name="hourly_rate" placeholder="10.00" required />
                <label htmlFor="job">Which employer?</label>
                <select id="job" name="job_id" required>
                    {this.context.userData.jobs.map(job => {
                        return <option key={job.id} value={job.id}>{job.job_name}</option>
                    })}
                </select>
                <button type="submit">Add new role</button>
            </form>
        )
    }
}