import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// importing redux
import { createStore, combineReducers, compose } from 'redux'

// reducer to get pokemon
const getPokemon = (state = [], action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return action.payload
    default:
      return state
  }
}

// creating a store with devtools extension
const store = createStore(
  combineReducers({ pokemon: getPokemon }),
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

// passing store to app
ReactDOM.render(<App store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
