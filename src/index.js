import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from './middleware/logger'
import rootReducer from './reducers'
import './index.css'
import App from './App'

const initialState = {
  clients: [{clientCode: "INF", clientName: "Infian", connectionPrimary: "N/A", key: "001"}]
}

let store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
