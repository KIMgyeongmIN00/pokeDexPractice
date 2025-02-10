import styled from "styled-components";

export const StyledDashBoardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f8f8f8;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 85px;
`;

export const Box = styled.div`
  width: 128px;
  height: 128px;
  background-image: url("https://www.shareicon.net/data/128x128/2016/12/13/863563_ball_512x512.png");
  background-size: cover;
  background-position: center;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;
  background-color: rgb(240, 240, 240);
`;

export const PokemonCardBox = styled.div`
  max-width: 200px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const PokemonInfo = styled.div`
  padding: 16px;
  text-align: center;
`;

export const StyledButton = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 700;
  cursor: pointer;
  width: calc(100% - 32px); // 카드 패딩 고려
  margin: 15px 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  & :active,
  &:focus:active {
    transform: scale(0.9);
    transition: transform 0.1s ease;
  }
`;

export const StartButton = styled.button`
  position: relative;
  padding: 1.5rem 3rem;
  font-size: clamp(1.2rem, 4vw, 1.5rem); /* 반응형 폰트 */
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  user-select: none;
`;
