import React from "react";
import {
  AddButtons,
  PokemonCardBox,
  PokemonImage,
  PokemonInfo,
} from "../styled/StyledComponents";

const PokemonCard = ({ poke, handleAddPoke }) => {
  return (
    <PokemonCardBox key={poke.id}>
      <PokemonImage src={poke.img_url} alt={poke.korean_name} />
      <PokemonInfo>
        <h2>{poke.korean_name}</h2>
        <p>No. {poke.id.toString().padStart(3, "0")}</p>
      </PokemonInfo>
      <AddButtons onClick={() => handleAddPoke(poke.id)}>추가</AddButtons>
    </PokemonCardBox>
  );
};

export default PokemonCard;
