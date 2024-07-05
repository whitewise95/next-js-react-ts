"use client"

import React from "react";
import Box from "@/components/Box";
import {useQuery} from "@tanstack/react-query";
import {getPokemonList} from "@/api/pokemon";
import Spinner from "@/components/Spinner";

export default function Home() {

  const {
    data: pokemonList,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemonList
  })

  if (isPending) {
    return <Spinner/>;
  }

  return (
      <div className={"flex justify-center items-center flex-wrap gap-3"}>
        {
          Array.isArray(pokemonList) ?
              pokemonList?.map(pokemon => <Box key={pokemon.id}
                                               pokemon={pokemon}/>) : location.reload() // 포켓몬 API timeout으로 에러나는 경우가 있음
        }
      </div>
  );
}
