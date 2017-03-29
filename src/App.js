import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-virtualized/styles.css'

import { Provider } from 'react-redux';
import ProjectForm from './components/ProjectForm.js'

import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <nav role="main" className="nav-main">
              <ul className="nav-list">
                <li className="nav-list-item"><a href="/dashboard">Dashboard</a></li>
                <li className="nav-list-item"><a href="/kb">Knowledge Base</a></li>
                <li className="nav-list-item"><a href="/settings">Settings</a></li>
              </ul>
            </nav>
            
            <div className="App-header-content">
              <img src={logo} className="App-logo" alt="logo" />
                <h2 className="title-main">INFIAN Client Tracker</h2>
            </div>
          </div>

          <div className="App-intro">
            <Dashboard title="Dashboard" />
          </div>
        </div>
    );
  }
}

export default App;