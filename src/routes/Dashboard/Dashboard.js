import React, { Component } from "react";
import './Dashboard.css'
import { Link } from "react-router-dom";
import EHR from "../../components/EHR/ehr";
import MTD from "../../components/MTD/mtd";
import YTD from "../../components/YTD/ytd";
import ShiftHistoryList from "../../components/ShiftHistoryList/ShiftHistoryList";
import Header from "../../components/header/header"

export default class Dashboard extends Component {

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
                    <Link to={'/paycheck'}>Paycheck</Link>
                    <Link to={'/shift'}>Shift income</Link>
                </section>
            </>
        )
    }
}