// eslint-disable-next-line
import React, {Component} from 'react'
import Client from './Client'
import { connect } from 'react-redux'
import { makeSelectedClient } from '../actions/clients'

const ClientList = ({clients, onClientClick}) => {
    let shownClients = clients.map((client) => {
            return (
                <Client
                    key={client.id}
                    {...client}
                    onClick={() => onClientClick(client.id)}
                />
        )})
        
    return (
        <div className="tbody">
            {shownClients}
        </div>
    )
}


const getVisibileClients = (clients, visFilter) => {
    switch (visFilter) {
        case 'SHOW_ALL':
            return clients
        case 'SHOW_ACTIVE':
            return clients.filter(c => c.active)
        case 'SHOW_INACTIVE':
            return clients.filter(c => c.inactive)
        default:
            return clients
    }
}

const mapStateToProps = (state) => {
    return {
        clients: getVisibileClients(state.clients, state.visibilityFilter)
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClientClick: (id) => {
            dispatch(makeSelectedClient(id))
        }
    }
}

const VisibleClientList = connect(
    mapStateToProps, 
    mapDispatchToProps
)(ClientList)


export default VisibleClientList

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