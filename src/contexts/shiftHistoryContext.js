import React, { Component } from 'react'

const ShiftContext = React.createContext({
    shiftList: [],
    paychecksList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setShiftList: () => { },
    setPaycheckList: () => { },
})

export default ShiftContext

export class ShiftListProvider extends Component {
    state = {
        shiftList: [],
        paycheckList: [],
        error: null,
    }

    setShiftList = shiftList => {
        this.setState({ shiftList })
    }

    setPaycheckList = paycheckList => {
        this.setState({ paycheckList })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    render() {
        const value = {
            shifts: this.state.shiftList,
            paychecks: this.state.paycheckList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setShiftList: this.setShiftList,
            setPaycheckList: this.setPaycheckList
        }
        return (
            <ShiftContext.Provider value={value}>
                {this.props.children}
            </ShiftContext.Provider>
        )
    }
}