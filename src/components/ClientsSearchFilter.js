// eslint-disable-next-line
import React, {Component} from 'react'
import { connect } from 'react-redux'
import ClientList from './ClientList'

const getSearchedClients = (clients, searchText) => {
  return clients.filter(c => {
        return c.clientName.toLowerCase().includes(searchText.toLowerCase())
  })
}

const mapStateToProps = (state) => {
  return {
    clients: getSearchedClients(state.clients, state.searchText)
  }
}

let ClientsSearched = connect(
    mapStateToProps,
    null
)(ClientList)

export default ClientsSearched