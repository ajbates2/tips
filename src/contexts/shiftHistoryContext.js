import React, { Component } from 'react'

const ShiftContext = React.createContext({
    shiftList: [],
    paychecksList: [],
    userData: {
        jobs: [],
        roles: []
    },
    error: null,
    setError: () => { },
    clearError: () => { },
    setShiftList: () => { },
    setPaycheckList: () => { },
    setUserData: () => { },
    deleteShift: () => { },
    setLoadingState: () => { },
})

export default ShiftContext

export class ShiftListProvider extends Component {
    state = {
        shiftList: [],
        paycheckList: [],
        loading: true,
        userData: {
            jobs: [],
            roles: []
        },
        error: null,
    }

    setShiftList = shiftList => {
        this.setState({ shiftList })
    }

    deleteShift = shiftId => {
        const newShifts = this.state.shiftList.filter(shift =>
            shift.id !== shiftId
        )
        this.setState({
            shiftList: newShifts
        })
    }

    setPaycheckList = paycheckList => {
        this.setState({ paycheckList })
    }

    setUserData = userData => {
        this.setState({ userData })
    }

    setLoadingState = () => {
        this.setState({ loading: false })
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
            loading: this.state.loading,
            userData: this.state.userData,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setShiftList: this.setShiftList,
            setPaycheckList: this.setPaycheckList,
            setUserData: this.setUserData,
            deleteShift: this.deleteShift,
            setLoadingState: this.setLoadingState,
        }
        return (
            <ShiftContext.Provider value={value}>
                {this.props.children}
            </ShiftContext.Provider>
        )
    }
}