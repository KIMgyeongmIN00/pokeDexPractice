import React from "react";
import MOCK_DATA from "../mocks/pokemonDate";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  DetailContainer,
  DetailId,
  DetailImage,
  DetailTitle,
  StyledButton,
} from "../styled/StyledComponents";
import { handleAddPoke } from "../redux/slices/pokeDexSlice";
import { useDispatch } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search); // 쿼리스트링 부분 반환
  const pokemonId = queryParams.get("id"); // 쿼리스트링 부분 반환된 id값 가져오기

  const pokemon = MOCK_DATA.find((p) => p.id.toString() === pokemonId); // 기존 목 데이터와 현재 쿼리스트링에 들어있는 id값 대조

  // 대조 유효성 검사
  if (!pokemon) {
    return (
      <DetailContainer>
        <DetailTitle>올바르지 못한 접근입니다!</DetailTitle>
        <StyledButton onClick={() => navigate(-1)}>뒤로가기</StyledButton>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <DetailTitle>{pokemon.korean_name}</DetailTitle>
      <DetailImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <DetailId>No. {pokemon.id.toString().padStart(3, "0")}</DetailId>
      <ButtonContainer>
        <StyledButton onClick={() => navigate(-1)}>뒤로가기</StyledButton>
        <StyledButton
          onClick={() => {
            dispatch(handleAddPoke(pokemon));
          }}
        >
          추가하기
        </StyledButton>
      </ButtonContainer>
    </DetailContainer>
  );
};

export default Detail;
