import React from "react";
import PokemonCard from "../components/PokemonCard";
import MOCK_DATA from "../mocks/pokemonDate.js";
import { ListContainer } from "../styled/StyledComponents";

const PokemonList = ({ handleAddPoke }) => {
  return (
    <ListContainer>
      {MOCK_DATA.map((poke) => (
        <PokemonCard key={poke.id} poke={poke} handleAddPoke={handleAddPoke} />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
