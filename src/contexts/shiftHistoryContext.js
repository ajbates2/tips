import React, { Component } from 'react'

const ShiftContext = React.createContext({
    shiftList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setShiftList: () => { },
})

export default ShiftContext

export class ShiftListProvider extends Component {
    state = {
        shiftList: [],
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
            shiftList: this.state.shiftList,
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