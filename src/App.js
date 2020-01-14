import React from 'react'
import './App.css'

// import connect function from react-redux to give the component access to state and actions
import { connect } from 'react-redux'

// import all(*) as actions
import * as actions from './actions'

// import API file from API.js
import API from './API'

const App = props => {
  const handleClick = () => {
    return API.getFirstTwentyPokemon()
      .then(resp => resp.json())
      .then(pokemon => props.getPokemon(pokemon.results))
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>GET POKEMON</button>
    </div>
  )
}
// connect the App component to state, in this case only the state for pokemon which starts as an empty array [].
// connect takes two arguments, mapping state to your component(can be left as null if you need the actions with no state)
// and actions, so now all actions are passed in as props
export default connect(state => ({ pokemon: state.pokemon }), actions)(App)
