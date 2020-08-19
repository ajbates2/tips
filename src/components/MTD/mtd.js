import React from "react";
import './mtd.css'

export default function MTD(props) {

    function CalculateMtd({ month }) {
        const filteredTips = props.shifts.filter(shift => {
            if (new Date(shift.date_worked).getMonth() === month) {
                return shift
            }
            else {
                return null
            }
        })
        const tipTotal = filteredTips.map(tips => { return tips.tips })
        const filteredChecks = props.paychecks.filter(checks => {
            if (new Date(checks.date_received).getMonth() === month) {
                return checks
            }
            else {
                return null
            }
        })
        const checkTotal = filteredChecks.map(check => { return check.check_total })
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