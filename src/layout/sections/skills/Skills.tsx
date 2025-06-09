import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { theme } from "../../../styles/Theme";
import { HardSkillsData, SkillData, SoftSkillsData } from "./SkillsData";

export const Skills: React.FC = () => {
  return (
    <>
      <SectionTitle>My Skills</SectionTitle>
      <WrapperContainer>
        <FlexContainer>
          {SkillData.map((item, index) => (
            <Skill key={index} iconId={item.iconId} />
          ))}
        </FlexContainer>

        <Container>
          <SkillsContainer>
            <Title>Soft</Title>
            <Description>
              {SoftSkillsData.map((item, index) => (
                <StyledSkill key={index}>
                  <TitleH3>{item.title}</TitleH3>
                </StyledSkill>
              ))}
            </Description>
          </SkillsContainer>
          <SkillsContainer>
            <Title>Hard</Title>
            <Description>
              {HardSkillsData.map((item, index) => (
                <StyledSkill key={index}>
                  <TitleH3>{item.title}</TitleH3>
                </StyledSkill>
              ))}
            </Description>
          </SkillsContainer>
        </Container>
      </WrapperContainer>
    </>
  );
};

const Title = styled.div`
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 20px;
  font-size: 24px;

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 1px;
    background-color: ${theme.colors.accentBg};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -15px;
  }
`;

const TitleH3 = styled.h3`
  padding: "0 20px";
  letter-spacing: "2px";
`;

const StyledSkill = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 10px 10px 30px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);

    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00f5a0, #b388ff);
  }

  &:hover {
    background: linear-gradient(135deg, #b388ff, #00f5a0);
    background-clip: text;
    -webkit-background-clip: text; /* для Safari */
    color: transparent;
    -webkit-text-fill-color: transparent; /* для Safari */
  }
`;

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; //space-evenly;
  gap: 20px;

  width: 100%;
  flex-grow: 1;
  /* border: 1px  solid red; */
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  width: 100%;
  padding: 0;
  overflow-y: auto;
  max-height: 520px; //520
  flex-grow: 1;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media ${theme.media.mobile}, ${theme.media.tablet} {
    flex-direction: column;
    /* padding-top: 20px; */
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  @media ${theme.media.mobile}, ${theme.media.tablet} {
    display: none;
  }
`;
