// eslint-disable-next-line
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { makeSelectedClient } from '../actions/clients'
import ClientList from './ClientList'

const getVisibileClients = (clients, visFilter) => {
    switch (visFilter) {
        case 'SHOW_ALL':
            return clients
        case 'SHOW_ACTIVE':
            return clients.filter(c => c.active)
        case 'SHOW_INACTIVE':
            return clients.filter(c => c.inactive)
        default:
            return clients
    }
}

const mapStateToProps = (state) => {
    return {
        clients: getVisibileClients(state.clients, state.visibilityFilter)
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClientClick: (id) => {
            dispatch(makeSelectedClient(id))
        }
    }
}

const VisibleClientList = connect(
    mapStateToProps, 
    mapDispatchToProps
)(ClientList)


export default VisibleClientList