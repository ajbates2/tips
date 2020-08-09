import React, { Component } from "react";
import './ehr.css'
import store from "../../store";

export default class EHR extends Component {


    render() {
        return (
            <div>
                <h2>EHR</h2>
                <CalculateEhr />
            </div>
        )
    }
}


function CalculateEhr() {
    const hoursIndex = store.shift.map(hours => { return hours.hours++ })
    const totalHours = hoursIndex.reduce((a, b) => a + b, 0)
    const tipIndex = store.shift.map(tips => { return tips.tips++ })
    const totalTips = tipIndex.reduce((a, b) => a + b, 0)
    const checkIndex = store.paychecks.map(checks => { return checks.paycheck++ })
    const totalPaychecks = checkIndex.reduce((a, b) => a + b, 0)
    const ehr = (totalPaychecks + totalTips) / totalHours
    return (
        <p>${ehr.toFixed(2)}/hr</p>
    )
}