import React from "react";
import Link from "next/link";
import Image from "next/image";

function Box({pokemon}: Pokemon) {

  return (
      <div
          key={pokemon.id}
          className="border-solid border-[1px] flex flex-col w-[150px] h-[150px] items-center gap-2'"
      >
        <Link href={`/${pokemon.id}`}>
          <Image
              id={"loadingLink"}
              src={pokemon.sprites.front_default}
              alt={"포켓몬"}
              width={96}
              height={96}
          />
          <div>{pokemon.korean_name}</div>
          <div>도감번호 {pokemon.id}</div>
        </Link>
      </div>
  )
}

export default Box;