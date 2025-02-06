import React, { useState } from "react";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [pokes, setPokes] = useState(() => {
    return JSON.parse(localStorage.getItem("pokes")) || [];
  });

  const handleAddPoke = (id) => {
    if (!pokes.includes(id)) {
      if (pokes.length < 6) {
        setPokes([...pokes, id]);
        localStorage.setItem("pokes", JSON.stringify([...pokes, id]));
      } else {
        alert("6개까지만 하세요!");
      }
    } else {
      alert("중복하여 고를 수 없습니다!");
    }
  };

  const handleRemovePoke = (id) => {
    setPokes(pokes.filter((pokeId) => pokeId !== id));
    localStorage.setItem(
      "pokes",
      JSON.stringify(pokes.filter((pokeId) => pokeId !== id))
    );
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
