import React from "react";
import { StyledDashBoardBox, Title } from "../styled/StyledComponents";
import MyPokes from "./MyPokes";

const DashBoard = () => {
  return (
    <StyledDashBoardBox>
      <Title>나의 포켓몬</Title>
      <MyPokes />
    </StyledDashBoardBox>
  );
};

export default DashBoard;
