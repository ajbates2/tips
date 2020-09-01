import React from "react";
import moment from "moment";

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
        const tipTotal = filteredTips.map(tips => { return Number(tips.tips) })
        const filteredChecks = props.paychecks.filter(checks => {
            if (new Date(checks.date_received).getMonth() === month) {
                return checks
            }
            else {
                return null
            }
        })
        const checkTotal = filteredChecks.map(check => { return Number(check.check_total) })
        const tipSum = tipTotal.reduce((a, b) => a + b, 0)
        const checksum = checkTotal.reduce((a, b) => a + b, 0)
        const Mtd = tipSum + checksum
        return (
            <h2>${Mtd}</h2>
        )
    }

    function getThisMonth(date) {
        return moment(date).format('MMMM')
    }

    return (
        <div>
            <CalculateMtd month={new Date().getMonth()} />
            <p>In {getThisMonth(new Date())}</p>
        </div>
    )
}