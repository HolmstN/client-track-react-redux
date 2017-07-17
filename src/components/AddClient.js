// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'

import ClientForm from './ClientForm'
import AddClientButton from './AddClientButton'
import { showClientForm } from '../actions/showClientForm'

const AddClients = ({onSubmit, clientFormOpen, onAddClick}) => {
    if (clientFormOpen) {
        return (
        <div>
            <ClientForm onSubmit={onSubmit} />
            <AddClientButton onClick={() => onAddClick(clientFormOpen) } text="Cancel" />
        </div>
        )
    }
    
    return (
        <AddClientButton onClick={() => onAddClick(clientFormOpen) } text="Add New Client"/>
    )
}


const mapStateToProps = state => {
    return {
        clientFormOpen: state.clientFormOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddClick: (clientFormOpen) => {
            dispatch(showClientForm(clientFormOpen))
        }
    }
}

const AddClient = connect(
    mapStateToProps, 
    mapDispatchToProps
)(AddClients)

export default AddClient