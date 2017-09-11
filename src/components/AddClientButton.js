// eslint-disable-next-line
import React, {Component} from 'react'

import '../styles/AddClientButton.css'

const AddClientButton = ({onClick, clientFormOpen, text}) => {
    function button(color) {
        return (
            <div className="button-holder">
                <button className={'button button-' + color} name="addClientButton" onClick={onClick}>{text}</button>
            </div>
        )
    }
    
    switch(text.toLowerCase()) {
        case "cancel":

            return (
                button("red")
            )
        default:
            return (
                button("blue")
            )
    }
}

export default AddClientButton