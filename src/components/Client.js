import React, { PropTypes } from 'react'

export const Client = ({onClick, clientName, clientCode, connectionPrimary}) => {
    <div className="table-row" value={clientCode} onClick={onClick}>
        <div className="table-cell">{clientName}</div>
        <div className="table-cell">{clientCode}</div>
        <div className="table-cell">{connectionPrimary}</div>
        <div className="table-cell"><ClientsButtons /></div>
    </div>
}

function ClientsButtons(props) {
    return (
        <div className="clients-buttons">
            <button className="more-button">More Info</button>
        </div>
    );
}