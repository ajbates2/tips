import React from "react";
import moment from "moment";

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
        const tipArray = filteredTips.map(tips => { return Number(tips.tips) })
        const filteredChecks = props.paychecks.filter(checks => {
            if (new Date(checks.date_received).getFullYear() === year) {
                return checks
            }
            return null
        })
        const checkArray = filteredChecks.map(check => { return Number(check.check_total) })
        const tipSum = tipArray.reduce((a, b) => a + b, 0)
        const checksum = checkArray.reduce((a, b) => a + b, 0)
        const Ytd = tipSum + checksum
        return (
            <h2>${Ytd.toFixed(2)}</h2>
        )
    }

    function getThisYear(date) {
        return moment(date).format('YYYY')
    }

    return (
        <div>
            <CalculateYtd year={new Date().getFullYear()} />
            <p>In {getThisYear(new Date())}</p>
        </div>
    )
}