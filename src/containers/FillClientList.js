import { connect } from 'react-redux'
import { ClientList } from '../components/ClientList'
import makeSelectedClient from '../actions/clients'

const getVisibileClients = (clients, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return clients
        case 'SHOW_ACTIVE':
            return clients.filter(c => c.active)
        case 'SHOW_INACTIVE':
            return clients.filter(c => c.inactive)
    }
}

const mapStateToProps = (state) => {
    console.log("state in Client List:")
    console.log(state)
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

const FilledClientsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientList)

export default FilledClientsList