import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

const SkillContent = [
  {
    iconId: "code",
    title: "HTML",
  },
  {
    iconId: "code",
    title: "CSS",
  },
  {
    iconId: "code",
    title: "React",
  },
  {
    iconId: "code",
    title: "TypeScript",
  },
  {
    iconId: "code",
    title: "TailWind",
  },
  {
    iconId: "code",
    title: "Styled-components",
  },
];

export const Skills = () => {
  return (
    <StyledSectionSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexContainer wrap={"wrap"} justify={"space-between"}>
        {SkillContent.map((item, index) => (
          <Skill key={index} iconId={item.iconId} title={item.title} />
        ))}
      </FlexContainer>
    </StyledSectionSkills>
  );
};

const StyledSectionSkills = styled.section`
  /* background-color: #aa76b4; */
  min-height: 100vh;
`;
