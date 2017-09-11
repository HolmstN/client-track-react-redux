import React, { Component } from 'react';
import '../styles/IssuesView.css';
import {UndoSymbol, CogSymbol, PlusSymbol, CheckmarkSymbol, ArrowUpSymbol} from '../svg/defs';

function IssuesView(props) {
    return (
        <div className="issues-view-all">
            <div className="issues-view">
                <TriageTable />
                <TicketsTable />
            </div>
        </div>
    );
}

function TriageTable(props) {
    return (
        <div className="triage-table">
            <h3>Triage</h3>
            <table>
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Title</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    { props.rows }
                </tbody>
            </table>
        </div>
    );
}

function TicketsTable(props) {
    return (
        <div className="ticket-table">
            <h3>My Tickets</h3>
            <table>
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Title</th>
                        <th>Age</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    { props.rows }
                </tbody>
            </table>
        </div>
    );
}

function TicketsRow(props) {
    return (
        <tr className="tickets-row">
            <td>{props.clientCode}</td>
            <td className="row-title tickets-row-title">{props.title}</td>
            <td>{props.age}</td>
            <td><TicketButtons /></td>
        </tr>
    );
}

function TriageRow(props) {
    return (
        <tr className="triage-row">
            <td>{props.clientCode}</td>
            <td className="row-title triage-row-title">{props.title}</td>
            <td><ButtonAssign /></td>
        </tr>
    );
}

function ButtonAssign(props) {
    return (
        <div>
            <button className="button assign-button">Assign</button>
        </div>
    );
}

function TicketButtons(props) {
    return (
        <div className="ticket-buttons">
            <div className="plus-symbol-button">
                <PlusSymbol viewBox="-25 -25 100 100" />
            </div>
            <div className="checkmark-symbol-button">
                <CheckmarkSymbol viewBox="-25 -25 100 100" />
            </div>
            <div className="arrow-symbol-button">
                <ArrowUpSymbol viewBox="-25 -25 100 100" />
            </div>
            <div className="undo-symbol-button">
                <UndoSymbol viewBox="-25 -25 100 100" />
            </div>
        </div>
    );
}

export default IssuesView;