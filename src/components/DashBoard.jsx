import React, { useContext } from "react";
import { StyledDashBoardBox, Title } from "../styled/StyledComponents";
import MyPokes from "./MyPokes";
import { Context } from "../context/Context";

const DashBoard = () => {
  const { pokes, handleRemovePoke } = useContext(Context);
  return (
    <StyledDashBoardBox>
      <Title>나의 포켓몬</Title>
      <MyPokes pokes={pokes} handleRemovePoke={handleRemovePoke} />
    </StyledDashBoardBox>
  );
};

export default DashBoard;
