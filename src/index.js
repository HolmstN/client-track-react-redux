import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from './middleware/logger'
import rootReducer from './reducers'
import './index.css'
import App from './App'

const initialState = {
  clients: [{clientCode: "HOG", clientName: "Hogwarts", connectionPrimary: "192.168.0.0", id: 0, key: "0"}]
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
