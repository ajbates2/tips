import React, { Component } from "react";
import './Dashboard.css'
import EHR from "../../components/EHR/ehr";
import MTD from "../../components/MTD/mtd";
import YTD from "../../components/YTD/ytd";
import ShiftHistoryList from "../../components/ShiftHistoryList/ShiftHistoryList";
import Header from "../../components/header/header"
import ShiftForm from "../../components/ShiftForm/ShiftForm";
import PaycheckForm from "../../components/PaycheckForm/PaycheckForm"

export default class Dashboard extends Component {

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

    render() {
        return (
            <>
                <Header />
                <main className='dashboard_main'>
                    <section className='ehr_box'>
                        <EHR />
                    </section>
                    <section className='mtd_box'>
                        <MTD />
                    </section>
                    <section className='ytd_box'>
                        <YTD />
                    </section>
                    <section className='shiftHistory_box'>
                        <ShiftHistoryList />
                    </section>
                </main>
                <section className='add_income_button'>
                    {this.state.moneyStep === 'noSelection' &&
                        (<button onClick={this.handleMoneyForm}>add income</button>)}
                    {this.state.moneyStep === 'selectForm' &&
                        (<>
                            <button onClick={this.handlePaycheckForm}>Paycheck</button>
                            <button onClick={this.handleShiftForm}>Shift Earnings</button>
                        </>
                        )}
                    {this.state.moneyStep === 'paycheckForm' && (<PaycheckForm />)}
                    {this.state.moneyStep === 'shiftForm' && (<ShiftForm />)}
                </section>
            </>
        )
    }
}