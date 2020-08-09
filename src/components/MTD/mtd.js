import React, { Component } from "react";
import './mtd.css'
import store from "../../store";

export default class MTD extends Component {

    render() {
        return (
            <div>
                <h2>MTD</h2>
                <CalculateMtd month={new Date().getMonth()} />
            </div>
        )
    }
}

function CalculateMtd({ month }) {

    const filteredTips = store.shift.filter(tips => {
        if (tips.date.getMonth() === month) {
            return tips
        }
    })
    const tipTotal = filteredTips.map(tips => { return tips.tips++ })
    const filteredChecks = store.paychecks.filter(checks => {
        if (checks.date.getMonth() === month) {
            return checks
        }
    })
    const checkTotal = filteredChecks.map(check => { return check.paycheck++ })
    const tipSum = tipTotal.reduce((a, b) => a + b, 0)
    const checksum = checkTotal.reduce((a, b) => a + b, 0)
    const Mtd = tipSum + checksum
    return (
        <p>${Mtd}</p>
    )
}