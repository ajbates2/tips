import React, { Component } from "react";
import './Dashboard.css'
import EHR from "../../components/EHR/ehr";
import MTD from "../../components/MTD/mtd";
import YTD from "../../components/YTD/ytd";
import ShiftHistoryList from "../../components/ShiftHistoryList/ShiftHistoryList";
import Header from "../../components/header/header"
import ShiftForm from "../../components/ShiftForm/ShiftForm";
import PaycheckForm from "../../components/PaycheckForm/PaycheckForm"
import ShiftContext from "../../contexts/shiftHistoryContext";

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

    render() {
        return (
            <>
                <Header />
                <main className='dashboard_main'>
                    <section className='ehr_box'>
                        <EHR data={this.context} />
                    </section>
                    <section className='mtd_box'>
                        <MTD data={this.context} />
                    </section>
                    <section className='ytd_box'>
                        <YTD data={this.context} />
                    </section>
                    <section className='shiftHistory_box'>
                        <ShiftHistoryList data={this.context} />
                    </section>
                </main>
                <section className='add_income_button'>
                    {this.state.moneyStep === 'noSelection' &&
                        (<button className="no_selection_button" onClick={this.handleMoneyForm}>+</button>)}
                    {this.state.moneyStep === 'selectForm' &&
                        (<div className="income_selection">
                            <button onClick={this.handlePaycheckForm}>Paycheck</button>
                            <button onClick={this.handleShiftForm}>Shift Earnings</button>
                        </div>
                        )}
                    {this.state.moneyStep === 'paycheckForm' && (<PaycheckForm />)}
                    {this.state.moneyStep === 'shiftForm' && (<ShiftForm />)}
                </section>
            </>
        )
    }
}