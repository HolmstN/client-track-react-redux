import React, { Component } from 'react';

const CLIENTS = [
    {clientName: "Alphabet Soup", clientCode: "ABCS", connectionPrimary: "10.5.3.12"},
    {clientName: "Infian, LLC", clientCode: "INFI", connectionPrimary: "255.255.255.255"},
    {clientName: "BATMAN", clientCode: "DUNU", connectionPrimary: "10.93.222.8"}
];

class ClientsView extends Component {
    render() {
        return (
            <div className="clients-view">
                <ClientsTable clients={CLIENTS}/>
            </div>
        );
    }
}

function ClientsTable(props) {
    return (
        <div className="clients-table">
            <table>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Client Code</th>
                        <th>Primary Connection</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <ClientsArea clients={props.clients} />
                </tbody>
            </table>
        </div>
    );
}

class ClientsArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedClient: ""
        };
    }
    
    changeSelectedRow(clientCode, e) {
        e.preventDefault();
        
        this.setState({
            selectedClient: clientCode
        });
    }
    
    render() {
        let area = [];
        
        this.props.clients.map((client) => {
            if (this.state.selectedClient === client.clientCode) {
                area.push(
                    <span className="detail-area">
                        <ClientsRow 
                            clientName={client.clientName} 
                            clientCode={client.clientCode} 
                            connectionPrimary={client.connectionPrimary}
                        />
                        <ClientsDetail />
                    </span>
                );
            } else {
                area.push(
                    <ClientsRow 
                        clientName={client.clientName} 
                        clientCode={client.clientCode} 
                        connectionPrimary={client.connectionPrimary}
                    />
                );
            }
        });
        
        console.log(area[0]);
        
        return (
            <span className="detail-area">
                <ClientsRow 
                    clientName={"ABCD"} 
                    clientCode={"ABCD"} 
                    connectionPrimary={"1.2.3.4"}
                />
                <ClientsDetail />
            </span>
        );
    }
}

function ClientsRow(props) {
    return (
        <tr className="clients-row" onClick={this.changeSelectedRow}>
            <td className="row-title clients-row-title">{props.clientName}</td>
            <td>{props.clientCode}</td>
            <td>{props.connectionPrimary}</td>
            <td><ClientsButtons /></td>
        </tr>
    );
}

function ClientsButtons(props) {
    return (
        <div className="clients-buttons">
            <button className="more-button">More Info</button>
        </div>
    );
}

function ClientsDetail(props) {
    return(
        <div><h3>CLIENTS DETAIL</h3></div>
    );    
}

export default ClientsView;