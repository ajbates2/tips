import React from 'react'
import './ListSelector.css'

export default function ListSelector(props) {

    function activeListHighlight(string) {
        if (props.activeState === string) {
            return "active_list"
        }
    }

    return (
        <div className="state_switch">
            <span
                className={`sw_button ${activeListHighlight('tips')}`}
                onClick={props.updateList}
                data-txt="tips"
            >
                tips
            </span>
            <span
                className={`sw_button check_button ${activeListHighlight('paychecks')}`}
                onClick={props.updateList}
                data-txt="paychecks"
            >
                paychecks
            </span>
        </div >
    )
}