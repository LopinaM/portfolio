import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId?: string;
  title?: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Wrapper>{props.iconId && <Icon iconId={props.iconId} />}</Wrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 100px;
  height: 100px;
  background: #111;
`;

const Wrapper = styled.div`
  text-decoration: none;
  color: #ffffff;
  /* border: 3px solid #70487d; */
  width: 100px;
  height: 100px;
  padding: 10px;
  position: relative;
  transition: all 0.5s;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-style: solid;
    border-color: transparent; //${theme.colors.accentBg};
    border-image: linear-gradient(135deg, #00f5a0, #b388ff) 1;
    transition: all 0.5s;

    top: 0rem;
    right: 0rem;
    border-width: 3px 3px 0 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-style: solid;
    border-color: transparent; // #50d8cd;
    border-image: linear-gradient(135deg, #00f5a0, #00d9f5) 1;
    transition: all 0.5s;

    bottom: 0rem;
    left: 0rem;
    border-width: 0px 0px 3px 3px;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }
  &:hover::after {
    border-color: #50d8cd;
  }

  &:hover::before {
    border-color: ${theme.colors.accentBg};
  }
`;
