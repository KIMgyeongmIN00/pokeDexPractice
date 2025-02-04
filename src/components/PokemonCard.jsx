import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../mocks/pokemonDate";

const PokemonCard = () => {
  const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px;
    background-color: rgb(240, 240, 240);
  `;

  const PokemonCard = styled.div`
    max-width: 200px;
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
      transform: translateY(-5px);
    }
  `;

  const PokemonImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
  `;

  const PokemonInfo = styled.div`
    padding: 16px;
    text-align: center;
  `;

  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id}>
          <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
          <PokemonInfo>
            <h2>{pokemon.korean_name}</h2>
            <p>No. {pokemon.id.toString().padStart(3, "0")}</p>
          </PokemonInfo>
        </PokemonCard>
      ))}
    </ListContainer>
  );
};

export default PokemonCard;
