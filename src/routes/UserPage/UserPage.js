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

    renderJobList = () => {
        return (
            this.context.userData.jobs.map(job => {
                return (
                    <li key={job.id}>
                        {job.job_name}
                    </li>
                )
            })
        )
    }

    renderRoleList = () => {
        return (
            this.context.userData.roles.map(role => {
                return (
                    <li key={role.id}>
                        {role.role_name}
                    </li>
                )
            })
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
                <p className="alert">This view is still under construction. For this version of the app this is all you will need.</p>
                <div className='user_container'>
                    <span className='employer_list'>
                        <ul>
                            <h2>Employers</h2>
                            {this.renderJobList()}
                        </ul>
                    </span>
                    <span className='role_list'>
                        <ul>
                            <h2>Roles</h2>
                            {this.renderRoleList()}
                        </ul>
                    </span>
                </div>
                <div className="setup_container">
                    <JobForm />
                </div>
                <div className="setup_container">
                    <RoleForm />
                </div>
            </>
        )
    }
}