// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../styles/ClientForm.css'

import ClientForm from './ClientForm'
// import AddClientButton from './AddClientButton'
import AddButton from './AddButton'
import { showClientForm } from '../actions/showClientForm'

const AddClients = ({onSubmit, clientFormOpen, onAddClick}) => {
    if (clientFormOpen) {
        return (
        <div>
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeaveTimeout={300}>
                <div>
                    <ClientForm onSubmit={onSubmit} key="clientForm" />
                    <AddButton  onClick={() => onAddClick(clientFormOpen) } 
                                text="Cancel" 
                                type="client"
                                key="AddClientButton" />
                </div>
        </ReactCSSTransitionGroup>
        </div>
        )
    }
    
    return (
        <AddButton  onClick={() => onAddClick(clientFormOpen) } 
                    text="Add New Client" 
                    type="client" />
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