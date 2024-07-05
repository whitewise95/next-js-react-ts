import {BeatLoader} from "react-spinners";
import Image from "next/image";

function Spinner() {
  return (
      <div className={"flex flex-col justify-center items-center mt-[100px]"}>
        <Image src={"/spinner_pokemon.gif"} alt={"포켓몬"} width={500} height={500}></Image>
        <BeatLoader></BeatLoader>
      </div>
  );
}

export default Spinner;