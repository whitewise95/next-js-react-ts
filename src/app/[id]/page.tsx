import React from "react";
import Image from "next/image";
import {getDetailPokemon} from "@/api/pokemon";

type paramsType = { params: { id: string } }

const Page = async ({params}: paramsType) => {
  const pokemon:Pokemon = await getDetailPokemon(params.id);
  debugger
  return (
      <div
          className={"border-[1px] border-solid w-[500px] h-auto flex flex-col gap-3 items-center mr-auto ml-auto  pt-1 pl-1 pr-1 pb-1"}>
        <div>{pokemon?.korean_name}</div>
        <div>No : {pokemon?.id}</div>
        <Image src={pokemon?.sprites?.front_default as string} width={200} height={200}></Image>
        <div>이름 : {pokemon?.korean_name}</div>
        <div className={"flex gap-5"}>
          <div>키 : {pokemon?.height} cm</div>
          <div>몸무게 : {pokemon?.weight} kg</div>
        </div>
        <div className={"flex gap-5"}>
          <div className={"flex gap-2"}> 타입
            <div className={"flex gap-1"}>
              {
                pokemon?.types?.map(data => <div
                    className={"bg-pink-500 text-cyan-50 w-auto h-auto rounded-[10px] text-[15px] text-center pt-1 pl-1 pr-1 pb-1"}
                    key={data.type.korean_name}>{data.type.korean_name}</div>)
              }
            </div>
          </div>
          <div className={"flex gap-2"}>특성 :
            <div className={"flex gap-1"}>
              {
                pokemon?.abilities?.map(data => <div
                    className={"bg-red-500 text-cyan-50 w-auto h-auto rounded-[10px] text-[15px] text-center pt-1 pl-1 pr-1 pb-1"}
                    key={data.ability.korean_name}>{data.ability.korean_name}</div>)
              }
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <div className={"bg-blue-800 text-cyan-50 w-[35px] h-[20px] rounded-[10px] text-[15px]"}>
            <div className={"text-center pt-[0.5px]"}>기술</div>
          </div>
          <div className={"flex gap-2 w-full flex-wrap"}>
            {
              pokemon?.moves?.map(data => <div
                  key={data.move.korean_name}>{data.move.korean_name}</div>)
            }
          </div>
        </div>
      </div>
  );
}

export default Page;