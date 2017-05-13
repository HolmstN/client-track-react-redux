/* CURRENTLY UNUSED */

import React, { PropTypes } from 'react';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducers/index'

let store = createStore(rootReducer)

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;