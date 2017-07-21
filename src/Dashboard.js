// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'

import HomeView from './components/HomeView';
import IssuesView from './components/IssuesView';
import ProjectsView from './components/ProjectsView';
import ClientsView from './components/ClientsView';

import { changeDashboardView } from './actions/changeDashboardView'

import './styles/nav.css';
import './styles/dashboard.css';

var TYPES = [
  {id: 0, type: "projects"},
  {id: 1, type: "clients"},
  {id: 2, type: "issues"},
];

const Dashboard_ = ({currentView, clickViewChange}) => {
  const isActive = (type) => {
    return 'menu__item ' + ((type===currentView) ? "menu__item--current" : "");
  }
  
  const showView = () => {
    switch (currentView) {
      case 'issues':
        return <IssuesView />
      case 'projects':
        return <ProjectsView />
      case 'clients':
        return <ClientsView />
      case 'home':
      default:
        return <HomeView categories={TYPES}/>
    }
  }
  
  return (
    <div className="Dashboard">
      <div className="Dashboard-title">
        <Title title="Dashboard" />
      </div>
    <nav className="menu menu--sebastian">
      <ul className="menu__list">
        <li className={isActive('home')}>
          <button id="nav-button-home" 
                  className="menu__link nav-button" 
                  value="home" 
                  onClick={(e) => clickViewChange(e.target.value)}>Home
          </button>
        </li>
        <li className={isActive('issues')}>
          <button id="nav-button-issues" 
                  className="menu__link nav-button" 
                  value="issues" 
                  onClick={(e) => clickViewChange(e.target.value)}>Issues
          </button>
        </li>
        <li className={isActive('projects')}>
          <button id="nav-button-projects" 
                  className="menu__link nav-button" 
                  value="projects" 
                  onClick={(e) => clickViewChange(e.target.value)}>Projects
          </button>
        </li>
        <li className={isActive('clients')}>
          <button id="nav-button-clients" 
                  className="menu__link nav-button" 
                  value="clients" 
                  onClick={(e) => clickViewChange(e.target.value)}>Clients
          </button>
        </li>
      </ul>
    </nav>
    
  {showView()}
    </div>
  )
}

function Title(props) {
  return <h2>{props.title}</h2>;
}

const mapStateToProps = (state) => {
  return {
    currentView: state.dashboardView
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickViewChange: (view) => {
      dispatch(changeDashboardView(view))
    }
  }
}

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard_)

export default Dashboard

/*

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
//     this.linkWorkInProgress = this.linkWorkInProgress.bind(this);
  }
  
//   linkWorkInProgress(event) {
//    alert("This area is not yet ready for use");
//  }
  
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
        <li className={this.isActive('home')}><button id="nav-button-home" className="menu__link nav-button" value="home" onClick={(e) => clickViewChange(e.target.value)}>Home</button></li>
        <li className={this.isActive('issues')}><button id="nav-button-issues" className="menu__link nav-button" value="issues" onClick={(e) => clickViewChange(e.target.value)}>Issues</button></li>
        <li className={this.isActive('projects')}><button id="nav-button-projects" className="menu__link nav-button" value="projects" onClick={(e) => clickViewChange(e.target.value)}>Projects</button></li>
        <li className={this.isActive('clients')}><button id="nav-button-clients" className="menu__link nav-button" value="clients" onClick={(e) => clickViewChange(e.target.value)}>Clients</button></li>
      </ul>
    </nav>
    
    {this.state.currentView}
    </div>
    );
  }
}




export default Dashboard;

*/