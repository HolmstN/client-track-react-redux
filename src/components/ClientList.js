import React, {Component} from 'react'
import Client from './Client'

export const ClientList = ({clients, onClientClick}) => (
    <div className="tbody">
        {clients.map(client =>
            <Client
                key={client.id}
                {...client}
                onClick={() => onClientClick(client.id)}
            />
        )}
    </div>
)


//  OLD STUFF BELOW

/*
class ClientList extends Component {
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
                        <Client 
                            clientName={client.clientName} 
                            clientCode={client.clientCode} 
                            connectionPrimary={client.connectionPrimary}
                            changeSelectedRow={this.changeSelectedRow}
                        />
                        <ClientsDetail changeSelectedRow={this.changeSelectedRow} />
                    </div>
                );
            } else {
                area.push(
                        <Client 
                            clientName={client.clientName} 
                            clientCode={client.clientCode} 
                            connectionPrimary={client.connectionPrimary}
                            key={client.key}
                            changeSelectedRow={this.changeSelectedRow}
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
                    <div className="detail-cell-header">CLIENTS DETAIL</div>
                </div>
            </div>
        ); 
    }
}

*/ 