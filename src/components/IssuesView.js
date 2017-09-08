// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'
let moment = require('moment')

import '../styles/IssuesView.css';
import {UndoSymbol, CogSymbol, PlusSymbol, CheckmarkSymbol, ArrowUpSymbol} from '../svg/defs';

const _IssuesView = ({issues, clients}) => {
    return (
        <div className="table table--3cols">
            <div className="table-row table-head">
                    <div className="table-cell table-head-item">Synopsis</div>
                    <div className="table-cell table-head-item">Opened</div>
                    <div className="table-cell table-head-item">Severity</div>
                    <div className="table-cell table-head-item">Client</div>
            </div>
            {
                issues.map(obj => {
                    return <IssueRow issue={obj} clients={clients} key={obj.id} />
                })
            }
        </div>
    )
}

const IssueRow = ({clients, issue}) => {
    let clientCode
    try {
        clientCode = clients.find(client => {
            return client.id === issue.clientId
        }).clientCode
    }
    catch (e) {
        console.error("Could not find matching client ID between issue and client")
        console.error(e)
    }
    
    
    return (
        <div className="table-row">
            <div className="table-cell">{issue.synopsis}</div>
            <div className="table-cell">{moment(issue.opened).format('lll')}</div>
            <div className="table-cell">{issue.severity}</div>
            <div className="table-cell">{clientCode}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        issues: state.issues,
        clients: state.clients
    })
}

let IssuesView = connect(
    mapStateToProps,
    null
)(_IssuesView)

export default IssuesView