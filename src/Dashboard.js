import React, { Component } from 'react';

import HomeView from './components/HomeView';
import IssuesView from './components/IssuesView';
import ProjectsView from './components/ProjectsView';
import ClientsView from './components/ClientsView';

import './styles/nav.css';
import './styles/dashboard.css';

var TYPES = [
  {id: 0, type: "projects"},
  {id: 1, type: "clients"},
  {id: 2, type: "issues"},
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    // Could make this modular as a prop, but for now...    
    
    this.viewList = {
      home: <HomeView categories={TYPES} />,
      issues: <IssuesView />,
      projects: <ProjectsView />,
      clients: <ClientsView />
    };
    
    
    this.state = {
      currentView: this.viewList["home"],
      activeButton: "home"
    };
    
    this.handleViewChange = this.handleViewChange.bind(this);
    this.isActive = this.isActive.bind(this);
  }
  
  handleViewChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    
    this.setState({
      currentView: this.viewList[value],
      activeButton: value
    });
  }
  
  isActive(type) {
    return 'menu__item ' + ((type===this.state.activeButton) ? "menu__item--current" : "");
  }
  
  render() {
  return (
    <div className="Dashboard">
      <div className="Dashboard-title">
        <Title title="Dashboard" />
      </div>
    <nav className="menu menu--sebastian">
      <ul className="menu__list">
        <li className={this.isActive('home')}><button id="nav-button-home" className="menu__link nav-button" value="home" onClick={this.handleViewChange}>Home</button></li>
        <li className={this.isActive('issues')}><button id="nav-button-issues" className="menu__link nav-button" value="issues" onClick={this.handleViewChange}>Issues</button></li>
        <li className={this.isActive('projects')}><button id="nav-button-projects" className="menu__link nav-button" value="projects" onClick={this.handleViewChange}>Projects</button></li>
        <li className={this.isActive('clients')}><button id="nav-button-clients" className="menu__link nav-button" value="clients" onClick={this.handleViewChange}>Clients</button></li>
      </ul>
    </nav>
    
    {this.state.currentView}
    </div>
    );
  }
}


function Title(props) {
  return <h2>{props.title}</h2>;
}

export default Dashboard;