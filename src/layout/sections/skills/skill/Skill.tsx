import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <StyledSkillTitle>{props.title}</StyledSkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  background-color: #76b4af;
  min-width: 200px;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledSkillTitle = styled.h3`
  background-color: #8cb331;
`;
