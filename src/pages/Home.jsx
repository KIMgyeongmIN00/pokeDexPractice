import React from "react";
import { useNavigate } from "react-router-dom";
import { StartButton } from "../styled/StyledComponents";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>POKE DEX</h1>
      <StartButton
        onClick={() => {
          navigate("/Dex");
        }}
      >
        포켓몬 도감 시작하기
      </StartButton>
    </div>
  );
};

export default Home;
