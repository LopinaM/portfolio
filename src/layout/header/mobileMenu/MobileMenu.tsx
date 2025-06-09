import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { NavLink } from "react-router";
import { Path } from "../../../components/Routing";

interface MobileMenuProps {
  menuItems: Record<string, string>;
}

export const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onBurgerBtnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={isOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <WrapperStyled>
          {Object.entries(menuItems).map(([key, values]) => (
            <NavLink key={key} to={Path[key as keyof typeof Path]}>
              {values}
            </NavLink>
          ))}
        </WrapperStyled>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  gap: 30px;
`;

const StyledMobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  /* background-color: rgba(31, 31, 32, 0.9); */
  background-color: ${theme.colors.secondaryBg};
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 50px;
  height: 50px;
  z-index: 11;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 0px;
    bottom: 15px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0px);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          width: 36px;
          transform: rotate(45deg) translateY(0px);
        `}
    }
  }
`;
