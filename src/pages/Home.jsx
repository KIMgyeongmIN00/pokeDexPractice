import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoBox, PokeLogo, StartButton } from "../styled/StyledComponents";
import logoUrl from "../image/pokeLogo.svg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <LogoBox>
        <PokeLogo src={logoUrl} alt="POKEDEX" />
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
