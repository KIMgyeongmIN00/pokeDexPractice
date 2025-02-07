import React from "react";
import {
  Box,
  BoxContainer,
  PokemonCardBox,
  PokemonImage,
  PokemonInfo,
} from "../styled/StyledComponents";
import MOCK_DATA from "../mocks/pokemonDate";
import { useDispatch, useSelector } from "react-redux";
import { handleRemovePoke } from "../redux/slices/pokeDexSlice";

const MyPokes = () => {
  const pokes = useSelector((ids) => ids.pokeDex.value);
  const dispatch = useDispatch();
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
                dispatch(handleRemovePoke(id));
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
