import React, { Component } from "react";
import './ytd.css'
import store from "../../store";

export default class YTD extends Component {

    render() {
        return (
            <div>
                <h2>YTD</h2>
                <CalculateYtd year={new Date().getFullYear()} />
            </div>
        )
    }
}

function CalculateYtd({ year }) {

    const filteredTips = store.shift.filter(tips => {
        if (tips.date.getFullYear() === year) {
            return tips
        }
    })
    const tipTotal = filteredTips.map(tips => { return tips.tips++ })
    const filteredChecks = store.paychecks.filter(checks => {
        if (checks.date.getFullYear() === year) {
            return checks
        }
    })
    const checkTotal = filteredChecks.map(check => { return check.paycheck++ })
    const tipSum = tipTotal.reduce((a, b) => a + b, 0)
    const checksum = checkTotal.reduce((a, b) => a + b, 0)
    const Ytd = tipSum + checksum
    return (
        <p>${Ytd}</p>
    )
}