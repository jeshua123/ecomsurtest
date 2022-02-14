const headers = {
  "Content-Type": "application/json",
}

export const getAllPokemons = async (page) => {
  const pagerequest = `?offset=${page}&limit=20`
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon${pagerequest}`, { headers })
  const jsonResponse = await request.json()
  return jsonResponse
};
export const getAPokemonProfile = async (id) => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { headers })
  const jsonResponse = await request.json()
  return jsonResponse
};
export const getSearchPokemon = async (id) => {
  try {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { headers })
    const jsonResponse = await request.json()
    return jsonResponse
  } catch (error) {
    console.log("no sirve ");
  }
};
