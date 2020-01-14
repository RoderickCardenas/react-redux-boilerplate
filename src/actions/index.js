export const getPokemon = pokemon => {
  return {
    type: 'GET_POKEMON',
    payload: pokemon
  }
}
