import React, { Component } from "react";
import ShiftContext from "../../contexts/shiftHistoryContext";
import ShiftApiService from "../../services/shift-api-service";

export default class JobForm extends Component {

    static contextType = ShiftContext

    handleSubmit = ev => {
        ev.preventDefault()
        const { job_name } = ev.target
        ShiftApiService.postJob(this.context.userData.id, job_name.value)
            .then(() => this.props.onSubmit())
            .catch(this.context.setError)
    }

    render() {
        return (
            <>
                <div>Add your first job!</div>
                <form className='job_form' onSubmit={this.handleSubmit}>
                    <label htmlFor="job_name">Name of employer</label>
                    <input type="text" id="job_name" name="job_name" required />
                    <button type="submit">Add new employer</button>
                </form>
                <div>You will be able to add multiple employers in a future version.</div>
            </>
        )
    }
}