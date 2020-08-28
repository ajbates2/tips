import React from "react";

export default function EHR(props) {

    function CalculateEhr() {
        const hoursIndex = props.shifts.map(hours => { return Number(hours.hours) })
        const totalHours = hoursIndex.reduce((a, b) => a + b, 0)
        const tipIndex = props.shifts.map(tips => { return Number(tips.tips) })
        const totalTips = tipIndex.reduce((a, b) => a + b, 0)
        const checkIndex = props.paychecks.map(checks => { return Number(checks.check_total) })
        const totalPaychecks = checkIndex.reduce((a, b) => a + b, 0)
        const ehr = (totalPaychecks + totalTips) / totalHours

        return (
            <h2>${ehr.toFixed(2)}/hr</h2>
        )
    }

    function prettyRender() {
        if (props.shifts.length === 0) {
            return (
                <h2>$0/hr</h2>
            )
        }
        else {
            return <CalculateEhr />
        }
    }

    return (
        <>
            {prettyRender()}
        </>
    )
}