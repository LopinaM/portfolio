import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../../../styles/Theme";

type KeyProps = {
  span?: number;
  column?: number;
  $space?: boolean;
  $pressed?: boolean;
  onClick?: () => void;
};

export const Keyboard = () => {
  const [pressedKey, setPressedKey] = React.useState<number | null>(null);

  const handleKeyPress = (keyIndex: number) => {
    setPressedKey(keyIndex);
    setTimeout(() => setPressedKey(null), 200);
  };

  const keyboardRows = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5],
    [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5],
    [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.25],
    [2.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.75],
    [1.25, 1.25, 1.25, 6.25, 1.25, 1.25, 1.25, 1.25],
  ];

  let keyIndex = 0;

  return (
    <>
      <KeyboardWrapper>
        <KeyboardSide />
        <KeyboardBottom />
        <Keys>
          {keyboardRows.map((row, rowIndex) => (
            <Row key={rowIndex} $rowIndex={rowIndex}>
              {row.map((keySize, keyInRowIndex) => {
                const currentIndex = keyIndex++;
                return (
                  <Key
                    key={currentIndex}
                    span={keySize}
                    $space={rowIndex === 5 && keyInRowIndex === 3}
                    $pressed={pressedKey === currentIndex}
                    onClick={() => handleKeyPress(currentIndex)}
                  />
                );
              })}
            </Row>
          ))}
        </Keys>
        <Touchpad />
      </KeyboardWrapper>
      <Wrapper />
    </>
  );
};

const slideUp = keyframes`
  from {
    transform: translateY(100px) rotateY(40deg) rotateX(-40deg) translateY(-23px) translateX(-60px);
    opacity: 0;
    visibility: hidden;
  }
  to {
    transform: rotateY(40deg) rotateX(-40deg) translateY(-23px) translateX(-60px);
    opacity: 1;
    visibility: visible;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
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

const keyPress = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(2px); }
  100% { transform: translateY(0); }
`;

const Wrapper = styled.div`
  width: 555px;
  height: 175px;
  background: #b488ffe7; //${theme.colors.accentBg};
  border-radius: 10px 10px 15px 15px;
  box-shadow: 15px 15px 30px #70487d, inset 0 -3px 5px rgba(255, 255, 255, 0.2);
  animation: ${slideUp} 0.4s ease-out forwards;
  position: relative;
  z-index: 1;
`;

const KeyboardWrapper = styled.div`
  width: 550px;
  height: 160px;
  background: linear-gradient(135deg, #b488ff 10%, #00f5a0 100%);
  border-radius: 10px 10px 15px 15px;
  box-shadow: 15px 25px 30px rgba(0, 0, 0, 0.4),
    inset 0 -3px 5px rgba(255, 255, 255, 0.2);
  transform: rotateY(40deg) rotateX(-40deg) translateY(-23px) translateX(-60px);
  position: absolute;
  z-index: 2;

  opacity: 0;
  visibility: hidden;

  animation: ${slideUp} 0.5s ease-out 0.4s forwards;
`;

const KeyboardSide = styled.div`
  position: absolute;
  width: 15px;
  height: 98%;
  background: #70487d;
  left: 100%;
  top: 5px;
  transform-origin: left;
  transform: rotateY(-90deg);
  border-radius: 0px 40px 10px 10px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3);
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out 0.5s forwards;
`;

const KeyboardBottom = styled.div`
  position: absolute;
  width: 98%;
  height: 15px;
  background: #70487d;
  bottom: -18px;
  left: 8px;
  transform-origin: top;
  transform: rotateX(90deg);
  border-radius: 5px 5px 5px 10px;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out 0.5s forwards;
`;

const Keys = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 45px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

interface RowProps {
  $rowIndex: number;
}

const Row = styled.div<RowProps>`
  display: flex;
  gap: 2px;
  opacity: 0;
  animation: ${slideDown} 0.3s ease-out
    ${(props) => 0.3 + props.$rowIndex * 0.2}s forwards;
`;

const Key = styled.div.attrs<KeyProps>({})<KeyProps>`
  background: ${(props) =>
    props.$space ? "#b488ffe7" : props.$pressed ? "#b488ffe7" : "#b488ffe7"};
  border-radius: 3px;
  box-shadow: ${(props) =>
    props.$pressed
      ? "inset 0 0 5px rgba(0,0,0,0.5)"
      : "inset 0 -2px 0 #5E2BFF"};
  height: 14px;
  flex: ${(props) => props.span || 1};
  transition: all 0.1s ease;
  cursor: pointer;
  animation: ${(props) => (props.$pressed ? keyPress : "none")} 0.2s ease;
  border: none;
  padding: 0;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;

  &:hover {
    background: #a06aff;
  }

  &:focus {
    outline: none;
  }
`;

const Touchpad = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 25px;
  background: #b488ffe7;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out 1s forwards;
`;
