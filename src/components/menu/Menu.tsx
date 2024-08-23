import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => (
          <LiStyled key={index}>
            <Link href={`#${item}`}>
              {item}
              <Mask>
                <span>{item}</span>
              </Mask>
              <Mask>
                <span>{item}</span>
              </Mask>
            </Link>
          </LiStyled>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  /* background-color: #ffc0cb; */

  ul {
    display: flex;
    gap: 30px;
  }
`;

const Link = styled.a`
  font-family: Josefin Sans;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: transparent;
  /* color: #7572d5; */
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  /* outline: 1px solid red; */
  color: ${theme.colors.accentBg};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const LiStyled = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.accentBg};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;
