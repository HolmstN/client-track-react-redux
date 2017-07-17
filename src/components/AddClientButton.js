// eslint-disable-next-line
import React, {Component} from 'react'

const AddClientButton = ({onClick, clientFormOpen, text}) => {
    return (
        <button name="addClientButton" onClick={onClick}>{text}</button>
    )
}

export default AddClientButton