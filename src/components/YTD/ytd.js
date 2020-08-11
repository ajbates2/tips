import React from "react";
import './ytd.css'

export default function YTD(props) {

    function CalculateYtd({ year }) {

        const filteredTips = props.data.shifts.filter(tips => {
            if (tips.date.getFullYear() === year)
                return tips
        })
        const tipArray = filteredTips.map(tips => { return tips.tips++ })
        const filteredChecks = props.data.paychecks.filter(checks => {
            if (checks.date.getFullYear() === year)
                return checks
        })
        const checkArray = filteredChecks.map(check => { return check.paycheck++ })
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