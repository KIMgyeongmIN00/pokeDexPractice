import React from "react";
import MOCK_DATA from "../mocks/pokemonDate";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledButton } from "../styled/StyledComponents";
import { handleAddPoke } from "../redux/slices/pokeDexSlice";
import { useDispatch } from "react-redux";
import { showToast } from "../redux/slices/toastSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const pokemonId = queryParams.get("id");

  const pokemon = MOCK_DATA.find((p) => p.id.toString() === pokemonId);

  return (
    <div>
      <h1>{pokemon.korean_name}</h1>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>No. {pokemon.id.toString().padStart(3, "0")}</p>
      <StyledButton onClick={() => navigate(-1)}>뒤로가기</StyledButton>
      <StyledButton
        onClick={() => {
          dispatch(handleAddPoke(pokemon.id));
          dispatch(showToast(pokemon.korean_name + "! 넌 내꺼야!"));
        }}
      >
        추가하기
      </StyledButton>
    </div>
  );
};

export default Detail;
