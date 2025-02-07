import React from "react";
import PokemonCard from "../components/PokemonCard";
import MOCK_DATA from "../mocks/pokemonDate.js";
import { ListContainer } from "../styled/StyledComponents";

const PokemonList = () => {
  return (
    <ListContainer>
      {MOCK_DATA.map((poke) => (
        <PokemonCard key={poke.id} poke={poke} />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
