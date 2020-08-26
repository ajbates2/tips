import React, { Component } from "react";
import ShiftContext from "../../contexts/shiftHistoryContext";
import ShiftApiService from "../../services/shift-api-service";

export default class PaycheckForm extends Component {

    static contextType = ShiftContext

    handleSubmit = ev => {
        ev.preventDefault()
        const { check_total, date_received, job_id } = ev.target
        ShiftApiService.postPaycheck(this.props.user.id, check_total.value, date_received.value, job_id.value)
            .then(() => this.props.onSubmit())
            .catch(this.context.setError)
    }

    render() {
        return (
            <form className='paycheck_form' onSubmit={this.handleSubmit}>
                <label htmlFor="check_total">Paycheck amount</label>
                <input type="number" step="0.01" id="check_total" name="check_total" required />
                <label htmlFor="job">Which employer?</label>
                <select id="job" name="job_id" required>
                    {this.props.user.jobs.map(job => {
                        return <option key={job.id} value={job.id}>{job.job_name}</option>
                    })}
                </select>
                <label htmlFor="date_received">Pay date</label>
                <input type="date" id="check_received" name="date_received" required />
                <button type="submit">Add paycheck</button>
            </form>
        )
    }
}