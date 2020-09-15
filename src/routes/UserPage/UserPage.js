import React, { Component } from 'react'
import Header from "../../components/header/header"
import JobForm from '../../components/forms/JobForm'
import RoleForm from '../../components/forms/RoleForm'
import ShiftContext from '../../contexts/shiftHistoryContext'
import TokenService from '../../services/token-service'
import ShiftApiService from '../../services/shift-api-service'
import jwt from 'jsonwebtoken'
import './UserPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class UserPage extends Component {

    static contextType = ShiftContext

    getUser = () => {
        const decodeAuthToken = jwt.verify(TokenService.getAuthToken(), 'make-that-shmoney')
        return ShiftApiService.getUserData(decodeAuthToken.user_id)
            .then(this.context.setUserData)
            .catch(this.context.setError)
    }

    componentDidMount() {
        Promise.all([
            this.getUser()
        ])
            .then(() => this.context.setLoadingState())
    }

    renderRoleList = (jobId) => {
        const filteredList = this.context.userData.roles.filter(role =>
            role.job_id === jobId
        )
        return filteredList.map(role =>
            <li key={role.id} className="role_list_card">
                <span className='role_name'>{role.role_name}</span>
                <span className='hourly_rate'>${role.hourly_rate}/hr</span>
            </li>
        )
    }

    renderJobCards = () => {
        return this.context.userData.jobs.map(job =>
            <ul key={job.id} className="job_card">
                <h2 className='job_card_name'>{job.job_name}</h2>
                {this.renderRoleList(job.id)}
            </ul>
        )
    }

    render() {
        if (this.context.loading)
            return (
                <FontAwesomeIcon icon="spinner" size="4x" className="loading_spinner fa-spin" />
            )
        return (
            <>
                <Header path={this.props.location.pathname} />
                <h1 className='user_name cartog_background'>{this.context.userData.user_name}</h1>
                <div className='user_container'>
                    {this.renderJobCards()}
                </div>
                <div className="setup_container">
                    <JobForm onSubmit={() => this.getUser()} />
                </div>
                <div className="setup_container">
                    <RoleForm onSubmit={() => this.getUser()} />
                </div>
            </>
        )
    }
}