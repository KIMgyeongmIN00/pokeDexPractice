import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoBox, PokeLogo, StartButton } from "../styled/StyledComponents";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <LogoBox>
        <PokeLogo src="../public/pokeLogo.svg" alt="POKEDEX" />
      </LogoBox>
      <StartButton
        onClick={() => {
          navigate("/Dex");
        }}
      >
        포켓몬 도감 시작하기
      </StartButton>
    </>
  );
};

export default Home;
