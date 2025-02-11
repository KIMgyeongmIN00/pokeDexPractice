import React, { useEffect } from "react";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import { useDispatch, useSelector } from "react-redux";

const Dex = () => {
  const dispatch = useDispatch();
  const scrollPosition = useSelector((state) => state.scroll.scrollPosition); // 저장된 스크롤 값을 가져오기

  // 페이지 변환 마다 저장된 스크롤 값을 적용
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
