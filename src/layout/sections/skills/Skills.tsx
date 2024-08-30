import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { Icon } from "../../../components/icon/Icon";
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
  // {
  //   iconId: "JavaScript",
  //   title: "JavaScript",
  // },
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
    <StyledSectionSkills>
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

const StyledSectionSkills = styled.section`
  /* background-color: #aa76b4; */
  /* min-height: 100vh; */
`;
