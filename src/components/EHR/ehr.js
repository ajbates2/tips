import React from "react";

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
            <h2>${ehr.toFixed(2)}/hr</h2>
        )
    }

    return (
        <>
            <CalculateEhr />
        </>
    )
}