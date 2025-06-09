import styled, { keyframes } from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Header } from "../../../header/Header";
import image from "../../../../assets/images/image.png";

export const LaptopScreen = () => {
  return (
    <Screen>
      <ScreenContent>
        <Wrapper>
          <Header islaptop />
          <WrapperPhoto>
            <Photo src={image} alt="" />
          </WrapperPhoto>
        </Wrapper>
      </ScreenContent>
    </Screen>
  );
};

const slideDownScreen = keyframes`
  0% {
    transform: translateY(-100px) rotateY(-40deg) rotateX(5deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotateY(-40deg) rotateX(5deg);
    opacity: 1;
  }
`;

const slideDownContent = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Screen = styled.div`
  width: 550px;
  height: 240px;
  transform: rotateY(-40deg) rotateX(5deg);
  border-radius: 15px;
  border: 10px solid ${theme.colors.accentBg};
  outline: 5px solid #70487d;
  box-shadow: 0 0 50px #70487d;

  background: ${theme.colors.accentBg};
  /* z-index: 2; */

  animation: ${slideDownScreen} 0.8s ease-out forwards;
  animation-delay: 0s;
`;

const ScreenContent = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #00f5a0 20%, #b388ff 70%);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  cursor: default;

  opacity: 0;
  animation: ${slideDownContent} 0.6s ease-out 0.6s forwards;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 8px;

  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in 1.2s forwards;
`;

const WrapperPhoto = styled.div`
  display: flex;
  justify-content: center;

  /* opacity: 0; */
  /* animation: ${fadeIn} 0.5s ease-in 1.4s forwards; */
`;

const Photo = styled.img`
  width: 250px;
  height: 160px;
  object-fit: cover;
  border-radius: 5px;

  /* opacity: 0; */
  /* animation: ${fadeIn} 0.5s ease-in 1.6s forwards; */
`;
