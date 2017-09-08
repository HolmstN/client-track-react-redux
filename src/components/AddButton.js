// eslint-disable-next-line
import React, {Component} from 'react'

import '../styles/AddClientButton.css'

const AddButton = ({onClick, text, type}) => {
    const formatString = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }
    
    let name = `add${formatString(type)}Button`
    
    function button(color) {
        return (
            <div className="button-holder">
                <button className={'button button-' + color} name={name} onClick={onClick}>{text}</button>
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

export default AddButton