// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../styles/HomeView.css';

import pluralize from 'pluralize'

import Search from './ClientsSearch'
import ClientsSearched from './ClientsSearchFilter'

const HomeView = () => {
  return (
    <div className="view home">
      <div>{ClientsArea()}</div>
      <div>{IssuesArea()}</div>
      <div>{ProjectsArea()}</div>
    </div>
  )
}

const ClientsArea = (props) => {
    return (
      <div className={"area " + `clients-area`}>
        <h3>Clients</h3>
        <Search />
        <ClientsSearched />
      </div>
  )
}

const ProjectsArea = (props) => {
  return (
    <div className={"area " + `projects-area`}>
      <h3>Projects</h3>
      <span className="coming-soon">Coming Soon</span>
    </div>
  )
}

const IssuesArea = (props) => {
  return (
    <div className={"area " + `issues-area`}>
      <h3>Issues</h3>
      <span className="coming-soon">Coming Soon</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients
  }
}

export default connect(mapStateToProps, null)(HomeView)