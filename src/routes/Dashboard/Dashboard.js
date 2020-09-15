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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StateSwitch from "../../components/StateSwitch/StateSwitch";
import PaycheckHistoryList from "../../components/PaycheckHistoryList/PaycheckHistoryList";

export default class Dashboard extends Component {

    static contextType = ShiftContext

    state = {
        moneyStep: 'noSelection',
        activeList: null,
    }

    handlePaycheckForm = () => {
        this.setState({ moneyStep: 'paycheckForm' })
    }

    handleShiftForm = () => {
        this.setState({ moneyStep: 'shiftForm' })
    }

    getshifts = () => {
        const decodeAuthToken = jwt.verify(TokenService.getAuthToken(), 'make-that-shmoney')
        return ShiftApiService.getShifts(decodeAuthToken.user_id)
            .then(this.context.setShiftList)
            .catch(this.context.setError)
    }

    getPaychecks = () => {
        const decodeAuthToken = jwt.verify(TokenService.getAuthToken(), 'make-that-shmoney')
        return ShiftApiService.getPaychecks(decodeAuthToken.user_id)
            .then(this.context.setPaycheckList)
            .catch(this.context.setError)
    }

    getUser = () => {
        const decodeAuthToken = jwt.verify(TokenService.getAuthToken(), 'make-that-shmoney')
        return ShiftApiService.getUserData(decodeAuthToken.user_id)
            .then(this.context.setUserData)
            .catch(this.context.setError)
    }

    renderLists = () => {
        if (this.state.activeList === "tips") {
            return (
                <ShiftHistoryList
                    shifts={this.context.shifts}
                    userData={this.context.userData}
                    getUser={this.getUser}
                />
            )
        }
        else if (this.state.activeList === "paychecks") {
            return (
                <PaycheckHistoryList
                    paychecks={this.context.paychecks}
                    userData={this.context.userData}
                    getUser={this.getUser}
                />
            )
        }
    }

    renderAddButton() {
        if (this.context.userData.roles.length === 0) {
            return null
        }
        else if (this.state.activeList === "tips") {
            return (
                <section className='add_income_button'>
                    {this.state.moneyStep === 'noSelection' &&
                        (<FontAwesomeIcon
                            icon="plus"
                            size="3x"
                            className="no_selection_button"
                            onClick={this.handleShiftForm}
                        />)
                    }
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
        else if (this.state.activeList === "paychecks") {
            return (
                <section className='add_income_button'>
                    {this.state.moneyStep === 'noSelection' &&
                        (<FontAwesomeIcon
                            icon="plus"
                            size="3x"
                            className="no_selection_button"
                            onClick={this.handlePaycheckForm}
                        />)
                    }
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
                </section>
            )
        }
    }

    componentDidMount() {
        Promise.all([
            this.getUser(),
            this.getshifts(),
            this.getPaychecks(),
        ])
            .then(() => this.context.setLoadingState())
            .then(() => this.setState({ activeList: 'tips' }))
    }

    handleActiveList = event => {
        this.setState({ activeList: event.target.dataset.txt })
    }

    render() {
        if (this.context.loading)
            return (
                <FontAwesomeIcon icon="spinner" size="4x" className="loading_spinner fa-spin" />
            )
        return (
            <>
                <Header path={this.props.location.pathname} />
                <main className='dashboard_main'>
                    <div className="info_container cartog_background">
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
                    <StateSwitch
                        activeState={this.state.activeList}
                        updateList={this.handleActiveList}
                    />
                    <section className='list_container'>
                        {this.renderLists()}
                    </section>
                    {this.renderAddButton()}
                </main>
            </>
        )
    }
}

