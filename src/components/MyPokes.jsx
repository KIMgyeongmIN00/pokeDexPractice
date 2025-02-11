import React from "react";
import {
  Box,
  BoxContainer,
  PokemonCardBox,
  PokemonImage,
  PokemonInfo,
  StyledButton,
} from "../styled/StyledComponents";
import MOCK_DATA from "../mocks/pokemonDate";
import { useDispatch, useSelector } from "react-redux";
import { handleRemovePoke } from "../redux/slices/pokeDexSlice";

const MyPokes = () => {
  const pokes = useSelector((ids) => ids.pokeDex.value); // 저장되어 있는 포켓몬 id값 불러오기
  const dispatch = useDispatch();
  const defaultArray = [null, null, null, null, null, null]; // 대쉬보드 기본 포켓몬 볼 6개를 위한 임시 배열
  const displayCards = [...pokes, ...defaultArray]; // 저장된 포켓몬 id 값과 임시 배열의 합

  return (
    <BoxContainer>
      {displayCards.slice(0, 6).map((id, index) => {
        // 배열의 합에서 6개만 추출하여 map 메서드 실행
        const poke = MOCK_DATA.find((p) => p.id === id); // 저장된 id 값들과 목 데이터의 id값 비교해서 객체 할당
        return id ? ( // 해당하는 id값이 유효하면 해당 포켓몬 카드 생성
          <PokemonCardBox key={poke.id}>
            <PokemonImage src={poke.img_url} alt={poke.korean_name} />
            <PokemonInfo>
              <h2>{poke.korean_name}</h2>
              <p>No. {poke.id.toString().padStart(3, "0")}</p>
            </PokemonInfo>
            <StyledButton
              onClick={() => {
                dispatch(handleRemovePoke(poke));
              }}
            >
              삭제
            </StyledButton>
          </PokemonCardBox>
        ) : (
          <Box key={`empty-${index}`} /> // 그렇지 않을 경우 포켓몬 볼 카드 생성
        );
      })}
    </BoxContainer>
  );
};

export default MyPokes;
