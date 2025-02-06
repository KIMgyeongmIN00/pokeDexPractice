import React from "react";
import MOCK_DATA from "../mocks/pokemonDate";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
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
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Detail;
