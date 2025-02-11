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

  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: clamp(1.5rem, 4vw, 2rem);
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 35px;
  position: relative;

  @media (max-width: 1230px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 380px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
  justify-items: center;

  @media (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`;

export const PokemonCardBox = styled.div`
  min-width: 130px;
  max-width: 180px;
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
  width: calc(100% - 32px);
  max-width: 300px;
  margin: 15px 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  font-size: clamp(0.9rem, 2vw, 1.1rem);

  &:active,
  &:focus:active {
    transform: scale(0.9);
    transition: transform 0.1s ease;
  }
`;

export const StartButton = styled.button`
  position: relative;
  padding: 1.5rem 3rem;
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  user-select: none;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.1s ease;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease;
  }

  @media (max-width: 768px) {
    padding: 1.2rem 2.5rem;
  }
  @media (max-width: 480px) {
    padding: 1rem 2rem;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
`;

export const PokeLogo = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
  }
`;

export const DetailTitle = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const DetailImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const DetailId = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: bold;
  color: #777;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const TopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #ff6b6b;
  color: #fff;
  border-radius: 50%;
  padding: 10px 15px;
  font-size: 18px;
  border: none;
`;
