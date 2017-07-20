// eslint-disable-next-line
import React, { Component, PropTypes } from 'react'

// Give client several types:  
//
// 1. small; only clientCode
// 2. medium; clientCode, connectionPrimary and clientName,
// 3. large; everything
//
//
// Possibly add some fallback functionality for onClick if it's not passed in
//

function Client({onClick, clientCode, clientName, connectionPrimary, detailed, details, size}) {
    switch (size) {
        case "small":
            return (
                <div className="table-row" value={clientCode} onClick={onClick}>
                        <div className="table-cell">{clientCode}</div>
                </div>
            )
            
        case "large":
            let clientData = 
                    <div className="table-row" value={clientCode} onClick={onClick}>
                        <div className="table-cell">{clientName}</div>
                        <div className="table-cell">{clientCode}</div>
                        <div className="table-cell">{connectionPrimary}</div>
                        <div className="table-cell"><ClientsButtons /></div>
                    </div>;
                    
            if (detailed) {
                if (details) { return (
                        <div>
                            {clientData}
                            <div className="detail-cell">{details.notes}</div>
                        </div>
                )} else { return (
                  <div>
                      {clientData}
                      <div className="detail-cell">No Detailed Info</div>
                  </div>
                 )}
            }
            return (
                clientData
            )
    
        case "medium":
        default:
            return (
                    <div className="table-row" value={clientCode} onClick={onClick}>
                        <div className="table-cell">{clientCode}</div>
                        <div className="table-cell">{connectionPrimary}</div>
                    </div>
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