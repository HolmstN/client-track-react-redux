import React, { Component } from 'react';

import '../styles/HomeView.css';

import pluralize from 'pluralize'

import ClientList  from './ClientList'


function HomeView(props) {
    var list = [];
    props.categories.forEach((category) => list.push(<Area type={category.type} key={category.id}/>));

    return(
        <div className="all-areas">
            {list}
        </div>
    );
}

class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  render() {
    return (
      <div className={"area " + `Area-${this.props.type}`}>
        <NewButton type={pluralize.singular(this.props.type)} />
        <Search 
          type={this.props.type} 
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <FilteredList 
          items={ClientList}
          filterText={this.state.filterText} />
        <GoToAll type={this.props.type} />
      </div>
    );
  }
}

function NewButton(props) {
  return <a href="#">New {props.type}</a>;
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange() {
      this.props.onUserInput(this.filterTextInput.value);
    }
    
    render() {
      return (
      <form>
        <input 
          type="text" 
          className="search"
          placeholder="Search..." 
          value={this.props.filterText} 
          ref={(input) => this.filterTextInput = input}
          onChange={this.handleChange} 
        />
      </form>
    );
  }
}

function FilteredList(props) {
  var list = [];
  props.items.forEach((item) => {
    if (item.name.indexOf(props.filterText) === -1) { return; }
    list.push(<ListItem name={item.name} key={item.id}/>);
  });

  // console.log(list.forEach(item => item.name));
  
  return (
    <ul>{list}</ul>
  );
}

function ListItem(props) {
  return (
  <li>{props.name}</li>
  );
}

function GoToAll(props) {
  return <a href="#">go to all {props.type}</a>;
}

export default HomeView;