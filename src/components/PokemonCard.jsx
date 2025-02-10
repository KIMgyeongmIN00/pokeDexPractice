import React from "react";
import {
  StyledButton,
  PokemonCardBox,
  PokemonImage,
  PokemonInfo,
} from "../styled/StyledComponents";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleAddPoke } from "../redux/slices/pokeDexSlice";
import { showToast } from "../redux/slices/toastSlice";

const PokemonCard = ({ poke }) => {
  const dispatch = useDispatch();
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
      <StyledButton
        onClick={() => {
          dispatch(handleAddPoke(poke.id));
          dispatch(showToast(poke.korean_name + "! 넌 내꺼야!"));
        }}
      >
        추가
      </StyledButton>
    </PokemonCardBox>
  );
};

export default PokemonCard;
