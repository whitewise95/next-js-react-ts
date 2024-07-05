export const getDetailPokemon = async (id: string): Promise<Pokemon> => {
  const response = await fetch(`http://localhost:3000/api/pokemon/${id}`);
  return response.json();
}

export const getPokemonList = async (): Promise<Pokemon[]> => {
  const response = await fetch("/api/pokemon");
  return await response.json();
}
