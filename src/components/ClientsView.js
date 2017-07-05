import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import '../styles/ClientsView.css';

import * as actionCreators from '../actions/clients'

import Client from './Client'
import FilledClientsList from '../containers/FillClientList'
import AddClientButton from './AddClientButton'
import ClientForm from '../components/ClientForm'

const CLIENTS = [
    {clientName: "Alphabet Soup", clientCode: "ABCS", connectionPrimary: "10.5.3.12"},
    {clientName: "Google", clientCode: "GOOG", connectionPrimary: "255.255.255.255"},
    {clientName: "BATMAN", clientCode: "DUNU", connectionPrimary: "10.93.222.8"}
];

let ClientsView = ({dispatch}) => {
    const doSubmit = (values) => {
        dispatch(actionCreators.addClient(values))
    }
    
    return (
        <div className="clients-view">
            <AddClientButton />
            <ClientForm onSubmit={doSubmit}/>
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
                <FilledClientsList />
            </div>
        </div>
    );
}


export default connect()(ClientsView);