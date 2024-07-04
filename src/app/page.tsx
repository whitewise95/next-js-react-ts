"use client"

import React from "react";
import Box from "@/components/Box";

export default function Home() {
  const [pokemonList, setPokemonList] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const getPokemonList = async () => {
      const response = await fetch("/api/pokemon");
      const data = await response.json();
      if (!data.error){
        setPokemonList(data);
      }
    }
    getPokemonList();
  }, [])

  return (
      <div className={"flex justify-center items-center flex-wrap gap-3"}>
        {pokemonList?.map(pokemon => <Box key={pokemon.id} pokemon={pokemon}/>)}
      </div>
  );
}
