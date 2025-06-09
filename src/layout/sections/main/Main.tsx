import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import Typewriter from "typewriter-effect";
import { AnimatedLaptop } from "../animatedLaptop/AnimatedLaptop";

export const Main: React.FC = () => {
  return (
    <FlexContainer>
      <Wrapper>
        <Titledescription>Lopina Maria</Titledescription>

        <Description>Front-end Developer</Description>

        <TypewriterStyled>
          <Typewriter
            options={{
              strings: ["Frontend Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </TypewriterStyled>

        <Button>Download CV</Button>
      </Wrapper>

      <AnimatedLaptop />
    </FlexContainer>
  );
};

const Button = styled.button`
  color: ${theme.colors.font};
  border: 1px solid ${theme.colors.accentBg};
  padding: 10px 10px;
  border-radius: 5px;
  font-weight: 600px;
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 200px;
  height: 50px;
  transition: all 0.5s;

  &:hover {
    background-color: ${theme.colors.accentBg};
  }
`;

const Titledescription = styled.h1`
  ${font({
    weight: 700,
    Fmax: 54,
    Fmin: 32,
  })}
  letter-spacing: 5px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;

  padding: 20px;

  @media ${theme.media.mobile}, ${theme.media.tablet} {
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 40px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Description = styled.h2`
  ${font({
    weight: 700,
    Fmax: 36,
    Fmin: 24,
  })}
  @media ${theme.media.mobile} {
    display: flex;
    align-items: center;
  }

  display: none;

  text-shadow: 1px 1px 0 ${theme.colors.accentBg},
    1px -1px 0 ${theme.colors.accentBg}, -1px 1px 0 ${theme.colors.accentBg},
    -1px -1px 0 ${theme.colors.accentBg};
  color: ${theme.colors.secondaryBg};
  transition: all 1s;
`;

const TypewriterStyled = styled.h2`
  ${font({
    weight: 700,
    Fmax: 36,
    Fmin: 24,
  })}

  display: flex;

  text-shadow: 1px 1px 0 ${theme.colors.accentBg},
    1px -1px 0 ${theme.colors.accentBg}, -1px 1px 0 ${theme.colors.accentBg},
    -1px -1px 0 ${theme.colors.accentBg};
  color: ${theme.colors.secondaryBg};
  transition: all 1s;

  @media ${theme.media.mobile} {
    display: none;
  }
`;
