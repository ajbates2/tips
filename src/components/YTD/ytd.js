import React from "react";
import './ytd.css'

export default function YTD(props) {

    function CalculateYtd({ year }) {

        const filteredTips = props.shifts.filter(tips => {
            if (new Date(tips.date_worked).getFullYear() === year) {
                return tips
            }
            else {
                return null
            }
        })
        const tipArray = filteredTips.map(tips => { return tips.tips })
        const filteredChecks = props.paychecks.filter(checks => {
            if (new Date(checks.date_received).getFullYear() === year) {
                return checks
            }
            return null
        })
        const checkArray = filteredChecks.map(check => { return check.check_total })
        const tipSum = tipArray.reduce((a, b) => a + b, 0)
        const checksum = checkArray.reduce((a, b) => a + b, 0)
        const Ytd = tipSum + checksum
        return (
            <h2>${Ytd}</h2>
        )
    }

    return (
        <div>
            <CalculateYtd year={new Date().getFullYear()} />
            <p>This year.</p>
        </div>
    )
}