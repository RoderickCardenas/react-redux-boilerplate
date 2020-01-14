// reducer to get pokemon
const getPokemon = (state = [], action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return action.payload
    default:
      return state
  }
}

export default getPokemon
