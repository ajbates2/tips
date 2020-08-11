import React from "react";
import './mtd.css'

export default function MTD(props) {

    function CalculateMtd({ month }) {
        const filteredTips = props.data.shifts.filter(tips => {
            if (tips.date.getMonth() === month)
                return tips
        })
        const tipTotal = filteredTips.map(tips => { return tips.tips++ })
        const filteredChecks = props.data.paychecks.filter(checks => {
            if (checks.date.getMonth() === month)
                return checks
        })
        const checkTotal = filteredChecks.map(check => { return check.paycheck++ })
        const tipSum = tipTotal.reduce((a, b) => a + b, 0)
        const checksum = checkTotal.reduce((a, b) => a + b, 0)
        const Mtd = tipSum + checksum
        return (
            <h2>${Mtd}</h2>
        )
    }

    return (
        <div>
            <CalculateMtd month={new Date().getMonth()} />
            <p>This month.</p>
        </div>
    )
}