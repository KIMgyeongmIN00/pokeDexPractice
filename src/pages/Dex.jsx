import React, { useState } from "react";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [pokes, setPokes] = useState([]);

  const handleAddPoke = (id) => {
    if (!pokes.includes(id)) {
      setPokes([...pokes, id]);
    } else {
      alert("중복하여 고를 수 없습니다!");
    }
  };

  const handleRemovePoke = (id) => {
    setPokes(pokes.filter((pokeId) => pokeId !== id));
  };

  return (
    <>
      <DashBoard pokes={pokes} handleRemovePoke={handleRemovePoke} />
      <br />
      <PokemonList handleAddPoke={handleAddPoke} />
    </>
  );
};

export default Dex;
