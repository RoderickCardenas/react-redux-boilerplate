const BASEURL = 'https://pokeapi.co/api/v2/pokemon/'
const limitTwenty = '?limit=20'

const getFirstTwentyPokemon = () => fetch(BASEURL + limitTwenty)

export default { getFirstTwentyPokemon }
