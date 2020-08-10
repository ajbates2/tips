import React, { Component } from 'react'
import store from '../store'

const ShiftContext = React.createContext({
    shift: [],
    paychecks: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setShiftList: () => { },
})

export default ShiftContext

export class ShiftListProvider extends Component {
    state = {
        shift: [],
        paychecks: [],
        error: null,
    }

    setShiftList = shiftList => {
        this.setState({ shiftList })
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
            shifts: store.shift,
            paychecks: store.paychecks,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setShiftList: this.setShiftList,
        }
        return (
            <ShiftContext.Provider value={value}>
                {this.props.children}
            </ShiftContext.Provider>
        )
    }
}