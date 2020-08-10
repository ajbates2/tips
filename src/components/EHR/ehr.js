import React from "react";
import './ehr.css'

export default function EHR(props) {

    function CalculateEhr() {
        const hoursIndex = props.data.shifts.map(hours => { return hours.hours++ })
        const totalHours = hoursIndex.reduce((a, b) => a + b, 0)
        const tipIndex = props.data.shifts.map(tips => { return tips.tips++ })
        const totalTips = tipIndex.reduce((a, b) => a + b, 0)
        const checkIndex = props.data.paychecks.map(checks => { return checks.paycheck++ })
        const totalPaychecks = checkIndex.reduce((a, b) => a + b, 0)
        const ehr = (totalPaychecks + totalTips) / totalHours

        return (
            <p>${ehr.toFixed(2)}/hr</p>
        )
    }

    return (
        <div>
            <h2>EHR</h2>
            <CalculateEhr />
        </div>
    )
}