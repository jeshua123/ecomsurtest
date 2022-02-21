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
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { headers })
  if (request.ok) {
    const jsonResponse = await request.json()
    return jsonResponse
  }
  return { name: "fetch error", request, json: await tryJson(request) }
};
export const tryJson = async (res) => {
  try {
    return await res.json()
  } catch (e) {
    return null
  }
}

