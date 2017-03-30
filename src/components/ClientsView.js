import React, { Component } from 'react';

import '../styles/ClientsView.css';

const CLIENTS = [
    {clientName: "Alphabet Soup", clientCode: "ABCS", connectionPrimary: "10.5.3.12", key: "0"},
    {clientName: "Infian, LLC", clientCode: "INFI", connectionPrimary: "255.255.255.255", key: "1"},
    {clientName: "BATMAN", clientCode: "DUNU", connectionPrimary: "10.93.222.8", key: "2"}
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
            <div className="table table--4cols">
                <div className="table-row table-head">
                    <div className="table-cell table-head-item">Client Name</div>
                    <div className="table-cell table-head-item">Client Code</div>
                    <div className="table-cell table-head-item">Primary Connection</div>
                    <div className="table-cell table-head-item">&nbsp;</div>
                </div>
                <ClientsArea clients={props.clients} />
            </div>
        </div>
    );
}

class ClientsArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedClient: ""
        };
        
        this.changeSelectedRow = this.changeSelectedRow.bind(this);
    }
    
    changeSelectedRow(clientCode) {
        this.setState({
            selectedClient: clientCode
        });
    }
    
    render() {
        let area = [];
        
        this.props.clients.map((client) => {
            if (this.state.selectedClient === client.clientCode) {
                area.push(
                    <div className="tbody" key={client.key}>
                        <ClientsRow 
                            clientName={client.clientName} 
                            clientCode={client.clientCode} 
                            connectionPrimary={client.connectionPrimary}
                            changeSelectedRow = {this.changeSelectedRow}
                        />
                        <ClientsDetail changeSelectedRow = {this.changeSelectedRow} />
                    </div>
                );
            } else {
                area.push(
                        <ClientsRow 
                            clientName={client.clientName} 
                            clientCode={client.clientCode} 
                            connectionPrimary={client.connectionPrimary}
                            key={client.key}
                            changeSelectedRow = {this.changeSelectedRow}
                        />
                );
            }
        });
        

        return (
            <div className="area">
                {area}
            </div>
        );
    }
}

class ClientsRow extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.props.changeSelectedRow(e);
    }
    
    render() {
        return (
            <div className="table-row" value={this.props.clientCode} onClick={() => this.handleClick(this.props.clientCode)}>
                <div className="table-cell">{this.props.clientName}</div>
                <div className="table-cell">{this.props.clientCode}</div>
                <div className="table-cell">{this.props.connectionPrimary}</div>
                <div className="table-cell"><ClientsButtons /></div>
            </div>
        );
    }
}

function ClientsButtons(props) {
    return (
        <div className="clients-buttons">
            <button className="more-button">More Info</button>
        </div>
    );
}

class ClientsDetail extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.props.changeSelectedRow(e);
    }
    
    render() {
        return(
            <div className="table-row">
                <div className="detail-cell">
                    <button value="" onClick={() => this.handleClick()}>Close</button>
                    <div class="detail-cell-header">CLIENTS DETAIL</div>
                </div>
            </div>
        ); 
    }
}

export default ClientsView;