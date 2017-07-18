// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../styles/HomeView.css';

import pluralize from 'pluralize'

import Search from './ClientsSearch'
import ClientsSearched from './ClientsSearchFilter'


function HomeView(props) {
    let list = [];
    props.categories.forEach((category) => list.push(<Area type={category.type} key={category.id}/>));

    return(
        <div className="all-areas">
            {list}
        </div>
    );
}

class Area extends Component {
  render() {
    return (
      <div className={"area " + `Area-${this.props.type}`}>
        <NewButton type={pluralize.singular(this.props.type)} />
        <Search />
        <ClientsSearched />
        <GoToAll type={this.props.type} />
      </div>
    );
  }
}

function NewButton(props) {
  return <a href="#">New {props.type}</a>;
}


function GoToAll(props) {
  return <a href="#">go to all {props.type}</a>;
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients
  }
}

export default connect(mapStateToProps, null)(HomeView)