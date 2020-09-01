import React, { Component } from "react";
import './Dashboard.css'
import EHR from "../../components/EHR/ehr";
import MTD from "../../components/MTD/mtd";
import YTD from "../../components/YTD/ytd";
import ShiftHistoryList from "../../components/ShiftHistoryList/ShiftHistoryList";
import Header from "../../components/header/header"
import ShiftForm from "../../components/forms/ShiftForm";
import PaycheckForm from "../../components/forms/PaycheckForm"
import ShiftContext from "../../contexts/shiftHistoryContext";
import ShiftApiService from "../../services/shift-api-service";
import jwt from 'jsonwebtoken'
import TokenService from "../../services/token-service";
import JobForm from "../../components/forms/JobForm";
import RoleForm from "../../components/forms/RoleForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Dashboard extends Component {

    static contextType = ShiftContext

    state = {
        moneyStep: 'noSelection'
    }

    handleMoneyForm = () => {
        this.setState({ moneyStep: 'selectForm' })
    }

    handlePaycheckForm = () => {
        this.setState({ moneyStep: 'paycheckForm' })
    }

    handleShiftForm = () => {
        this.setState({ moneyStep: 'shiftForm' })
    }

    getshifts = () => {
        const decodeAuthToken = jwt.verify(TokenService.getAuthToken(), 'make-that-shmoney')
        ShiftApiService.getShifts(decodeAuthToken.user_id)
            .then(this.context.setShiftList)
            .catch(this.context.setError)
    }

    getPaychecks = () => {
        const decodeAuthToken = jwt.verify(TokenService.getAuthToken(), 'make-that-shmoney')
        ShiftApiService.getPaychecks(decodeAuthToken.user_id)
            .then(this.context.setPaycheckList)
            .catch(this.context.setError)
    }

    getUser = () => {
        const decodeAuthToken = jwt.verify(TokenService.getAuthToken(), 'make-that-shmoney')
        ShiftApiService.getUserData(decodeAuthToken.user_id)
            .then(this.context.setUserData)
            .catch(this.context.setError)
    }

    renderAccountCreation = () => {
        if (this.context.userData.jobs.length === 0) {
            return (
                <JobForm onSubmit={() => this.getUser()} />
            )
        }
        else if (this.context.userData.roles.length === 0) {
            return (
                <RoleForm onSubmit={() => this.getUser()} />
            )
        }
        else {
            return (
                <ShiftHistoryList
                    shifts={this.context.shifts}
                    paychecks={this.context.paychecks} />
            )
        }
    }

    renderAddButton() {
        if (this.context.userData.roles.length === 0) {
            return null
        }
        else {
            return (
                <section className='add_income_button'>
                    {this.state.moneyStep === 'noSelection' &&
                        (<FontAwesomeIcon
                            icon="plus"
                            size="3x"
                            className="no_selection_button"
                            onClick={this.handleMoneyForm}
                        />)
                    }
                    {this.state.moneyStep === 'selectForm' &&
                        (<div className="income_selection">
                            <button onClick={this.handlePaycheckForm}>Paycheck</button>
                            <button onClick={this.handleShiftForm}>Shift Earnings</button>
                        </div>
                        )}
                    {this.state.moneyStep === 'paycheckForm' && (
                        <PaycheckForm
                            user={this.context.userData}
                            closeWindow={() => this.setState({ moneyStep: 'noSelection' })}
                            onSubmit={() => {
                                this.setState({ moneyStep: 'noSelection' })
                                this.getPaychecks()
                            }}
                        />
                    )}
                    {this.state.moneyStep === 'shiftForm' && (
                        <ShiftForm
                            user={this.context.userData}
                            closeWindow={() => this.setState({ moneyStep: 'noSelection' })}
                            onSubmit={() => {
                                this.setState({ moneyStep: 'noSelection' })
                                this.getshifts()
                            }}
                        />
                    )}
                </section>
            )
        }
    }

    componentDidMount() {
        this.getUser()
        this.getshifts()
        this.getPaychecks()
    }

    render() {
        return (
            <>
                <Header />
                <main className='dashboard_main'>
                    <div className="info_container">
                        <section className='ehr_box info_box'>
                            <EHR
                                shifts={this.context.shifts}
                                paychecks={this.context.paychecks} />
                        </section>
                        <section className='mtd_box info_box'>
                            <MTD
                                shifts={this.context.shifts}
                                paychecks={this.context.paychecks} />
                        </section>
                        <section className='ytd_box info_box'>
                            <YTD
                                shifts={this.context.shifts}
                                paychecks={this.context.paychecks} />
                        </section>
                    </div>
                    <section className='shiftHistory_box'>
                        {this.renderAccountCreation()}
                    </section>
                    {this.renderAddButton()}
                </main>

            </>
        )
    }
}

