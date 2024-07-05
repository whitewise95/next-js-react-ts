export const getDetailPokemon = async (id: string): Promise<Pokemon> => {
  const response = await fetch(`http://localhost:3000/api/pokemon/${id}`);
  errorCheck(response);
  return response.json();
}

export const getPokemonList = async (): Promise<Pokemon[]> => {
  const response = await fetch("/api/pokemon");
  errorCheck(response);
  return await response.json();
}

const errorCheck = (response:Response) => {
  if (!response.ok) {
    throw new Error("에러발생");
  }
}
