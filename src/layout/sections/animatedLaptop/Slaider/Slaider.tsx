import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Icon } from "../../../../components/icon/Icon";
import React from "react";

export const SkillData = [
  { iconId: "html" },
  { iconId: "css" },
  { iconId: "react" },
  { iconId: "TS" },
  { iconId: "JS" },
  { iconId: "mobx" },
  { iconId: "mui" },
  { iconId: "antd" },
  { iconId: "git" },
  { iconId: "tailwind" },
  { iconId: "swagger" },
  { iconId: "vite" },
];

const ITEMS_PER_PAGE = 4;
const AUTO_SCROLL_INTERVAL = 3000;
const ITEM_WIDTH = 50;
const GAP = 5;
const STEP = ITEM_WIDTH + GAP;

export const Slaider = () => {
  const totalItems = SkillData.length;

  const [index, setIndex] = React.useState(0);

  const onNext = () => {
    setIndex((prev) => prev + 1);
  };

  const onPrev = () => {
    setIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const visibleItems = Array.from({ length: ITEMS_PER_PAGE }, (_, i) => {
    const actualIndex = (index + i) % totalItems;
    return SkillData[actualIndex];
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <ButtonWrapper>
        <StyledButton onClick={onPrev}>ᐸ</StyledButton>

        <List>
          {visibleItems.map((item, i) => (
            <Slills key={i}>
              <Icon
                height={"30px"}
                width={"30px"}
                viewBox={"0 0 35 35"}
                iconId={item.iconId}
              />
            </Slills>
          ))}
        </List>

        <StyledButton onClick={onNext}>ᐳ</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 350px;
  height: 100px;
  background: linear-gradient(90deg, #b488ff9a, #00f5a09a, #b488ff9a);
  background-size: 200% auto;
  border-radius: 5px;
  color: #fff;
  font-size: 24px;
  overflow: hidden;
  z-index: 8;

  display: flex;
  align-items: center;

  transform: translateX(100%) rotateY(-20deg) translateY(15px) rotateX(10deg);

  animation: slideIn 0.6s ease-out forwards, gradientFlow 5s linear infinite;

  @keyframes gradientFlow {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateX(100%) rotateY(-20deg) translateY(15px)
        rotateX(10deg);
    }
    100% {
      transform: translateX(50%) rotateY(-20deg) translateY(15px) rotateX(10deg);
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const StyledButton = styled.button`
  font-size: 2rem;
  color: #fff;
  border-radius: 5px;
  padding: 0 10px;
  border: 1px solid ${theme.colors.accentBg};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:not(:disabled):hover {
    background-color: ${theme.colors.accentBg};
  }
`;

const Slills = styled.div`
  background-color: #70487d;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${theme.colors.accentBg};

  color: ${theme.colors.font};

  &:hover {
    background-color: transparent;
  }
`;
const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: ${STEP * ITEMS_PER_PAGE}px;
  overflow: hidden;
`;
