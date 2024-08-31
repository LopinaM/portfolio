import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

const SkillContent = [
  {
    iconId: "code",
    title: "HTML",
  },
  {
    iconId: "css",
    title: "CSS",
  },
  {
    iconId: "react",
    title: "React",
  },
  {
    iconId: "TS",
    title: "TypeScript",
  },
  {
    iconId: "code",
    title: "TailWind",
  },
  {
    iconId: "styled-components",
    title: "Styled-components",
  },
];

export const Skills = () => {
  return (
    <StyledSectionSkills id="Skills">
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexContainer wrap={"wrap"}>
          {SkillContent.map((item, index) => (
            <Skill key={index} iconId={item.iconId} title={item.title} />
          ))}
        </FlexContainer>
      </Container>
    </StyledSectionSkills>
  );
};

const StyledSectionSkills = styled.section``;
