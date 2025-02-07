import React, { useContext } from "react";
import {
  AddButtons,
  PokemonCardBox,
  PokemonImage,
  PokemonInfo,
} from "../styled/StyledComponents";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const PokemonCard = ({ poke }) => {
  const { handleAddPoke } = useContext(Context);
  const navigate = useNavigate();

  const handleDetail = (event) => {
    if (event.target.closest("button")) {
      return;
    }

    navigate(`/Detail?id=${poke.id}`);
  };

  return (
    <PokemonCardBox onClick={handleDetail} key={poke.id}>
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
