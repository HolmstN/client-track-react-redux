// eslint-disable-next-line
import React, { Component, PropTypes } from 'react'

function Client({onClick, clientCode, clientName, connectionPrimary, detailed, details}) {
    let clientData = 
            <div className="table-row" value={clientCode} onClick={onClick}>
                <div className="table-cell">{clientName}</div>
                <div className="table-cell">{clientCode}</div>
                <div className="table-cell">{connectionPrimary}</div>
                <div className="table-cell"><ClientsButtons /></div>
            </div>;
            
    if (detailed) {
        return (
            <div>
                {clientData}
                <div className="detail-cell">{details.notes}</div>
            </div>
        )
    } else {
        return (
            clientData
        )
    }
}

function ClientsButtons(props) {
    return (
        <div className="clients-buttons">
            <button className="more-button">More Info</button>
        </div>
    );
}

export default Client