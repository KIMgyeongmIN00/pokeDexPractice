import React, { useContext } from "react";
import {
  Box,
  BoxContainer,
  PokemonCardBox,
  PokemonImage,
  PokemonInfo,
} from "../styled/StyledComponents";
import MOCK_DATA from "../mocks/pokemonDate";
import { Context } from "../context/Context";

const MyPokes = () => {
  const { pokes, handleRemovePoke } = useContext(Context);
  const defaultArray = [null, null, null, null, null, null];
  const displayCards = [...pokes, ...defaultArray];

  return (
    <BoxContainer>
      {displayCards.slice(0, 6).map((id, index) => {
        const poke = MOCK_DATA.find((p) => p.id === id);
        return id ? (
          <PokemonCardBox key={poke.id}>
            <PokemonImage src={poke.img_url} alt={poke.korean_name} />
            <PokemonInfo>
              <h2>{poke.korean_name}</h2>
              <p>No. {poke.id.toString().padStart(3, "0")}</p>
            </PokemonInfo>
            <button
              onClick={() => {
                handleRemovePoke(id);
              }}
            >
              삭제
            </button>
          </PokemonCardBox>
        ) : (
          <Box key={`empty-${index}`} />
        );
      })}
    </BoxContainer>
  );
};

export default MyPokes;
