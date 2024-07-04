export const getDetailPokemon = async (id: string):Promise<Pokemon> => {
  const response = await fetch(`http://localhost:3000/api/pokemon/${id}`);
  return response.json();
}