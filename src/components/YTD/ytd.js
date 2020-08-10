import React from "react";
import './ytd.css'

export default function YTD(props) {

    function CalculateYtd({ year }) {

        const filteredTips = props.shift.shifts.filter(tips => {
            if (tips.date.getFullYear() === year)
                return tips
        })
        const tipArray = filteredTips.map(tips => { return tips.tips++ })
        const filteredChecks = props.shift.paychecks.filter(checks => {
            if (checks.date.getFullYear() === year)
                return checks
        })
        const checkArray = filteredChecks.map(check => { return check.paycheck++ })
        const tipSum = tipArray.reduce((a, b) => a + b, 0)
        const checksum = checkArray.reduce((a, b) => a + b, 0)
        const Ytd = tipSum + checksum
        return (
            <p>${Ytd}</p>
        )
    }

    return (
        <div>
            <h2>YTD</h2>
            <CalculateYtd year={new Date().getFullYear()} />
        </div>
    )
}