import React, { useEffect } from "react";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import { useDispatch, useSelector } from "react-redux";

const Dex = () => {
  const dispatch = useDispatch();
  const scrollPosition = useSelector((state) => state.scroll.scrollPosition);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [dispatch, scrollPosition]);
  return (
    <>
      <DashBoard />
      <br />
      <PokemonList />
    </>
  );
};

export default Dex;
