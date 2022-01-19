const headers = {
  "Content-Type": "application/json",
}

export const getAllPokemons = async () => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon`, { headers })
  const jsonResponse = await request.json()
  return jsonResponse
};
