// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../styles/ClientsView.css';

import * as actionCreators from '../actions/clients'

import AddClientButton from './AddClientButton'
import ClientForm from '../components/ClientForm'
import ClientList from './ClientList'


const ClientsView = ({dispatch}) => {
    const doSubmit = (client) => {
        dispatch(actionCreators.addClient(client))
    }
    
    return (
        <div className="clients-view">
            <AddClientButton />
            <ClientForm onSubmit={doSubmit} />
            <ClientsTable />
        </div>
    );
}


function ClientsTable(props) {
    return (
        <div className="clients-table">
            <div className="table table--4cols">
                <div className="table-row table-head">
                    <div className="table-cell table-head-item">Client Name</div>
                    <div className="table-cell table-head-item">Client Code</div>
                    <div className="table-cell table-head-item">Primary Connection</div>
                    <div className="table-cell table-head-item">&nbsp;</div>
                </div>
                <ClientList />
            </div>
        </div>
    );
}


export default connect()(ClientsView);