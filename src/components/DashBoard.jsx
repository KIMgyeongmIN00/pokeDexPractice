import React from "react";
import { StyledDashBoardBox, Title } from "../styled/StyledComponents";
import MyPokes from "./MyPokes";

const DashBoard = ({ pokes, handleRemovePoke }) => {
  return (
    <StyledDashBoardBox>
      <Title>나의 포켓몬</Title>
      <MyPokes pokes={pokes} handleRemovePoke={handleRemovePoke} />
    </StyledDashBoardBox>
  );
};

export default DashBoard;
