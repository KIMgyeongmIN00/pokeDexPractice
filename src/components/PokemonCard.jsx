import React, { useEffect } from "react";
import {
  StyledButton,
  PokemonCardBox,
  PokemonImage,
  PokemonInfo,
} from "../styled/StyledComponents";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleAddPoke } from "../redux/slices/pokeDexSlice";
import { setScrollPosition } from "../redux/slices/scrollSlice";

const PokemonCard = ({ poke }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 디테일 정보창 전환 핸들링
  const handleDetail = (event) => {
    // 클릭 한 부분이 버튼이면 이벤트 취소
    if (event.target.closest("button")) {
      return;
    }

    dispatch(setScrollPosition(window.scrollY)); // 스크롤 값 저장을 위해 값 전달

    navigate(`/Detail?id=${poke.id}`); // 클릭한 포켓몬 카드의 id값에 해당하는 Detail 페이지로 이동
  };

  return (
    <PokemonCardBox onClick={handleDetail} key={poke.id}>
      <PokemonImage src={poke.img_url} alt={poke.korean_name} />
      <PokemonInfo>
        <h2>{poke.korean_name}</h2>
        <p>No. {poke.id.toString().padStart(3, "0")}</p>
      </PokemonInfo>
      <StyledButton
        onClick={() => {
          dispatch(handleAddPoke(poke));
        }}
      >
        추가
      </StyledButton>
    </PokemonCardBox>
  );
};

export default PokemonCard;
