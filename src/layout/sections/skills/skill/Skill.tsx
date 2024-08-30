import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexContainer } from "../../../../components/FlexContainer";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexContainer direction={"column"} align={"center"}>
        <Wrapper>
          <Icon iconId={props.iconId} />
          <StyledSkillTitle>{props.title}</StyledSkillTitle>
        </Wrapper>
      </FlexContainer>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 220px;
  height: 220px;
  padding: 40px 10px;
`;

const Wrapper = styled.div`
  z-index: 0;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 150px;
    height: 150px;
    background: ${theme.colors.primaryBg};

    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    transform-origin: top left;

    top: 50%;
    left: 50%;

    z-index: -1;
  }
`;

const StyledSkillTitle = styled.h3`
  font-family: "Josefin Sans";
  font-size: 16px;
  font-weight: 700;
`;
