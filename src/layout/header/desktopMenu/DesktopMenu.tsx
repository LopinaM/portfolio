import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import { Path } from "../../../components/Routing";
import { theme } from "../../../styles/Theme";

interface DesktopMenuProps {
  menuItems: Record<string, string>;
  laptop?: boolean;
}

export const DesktopMenu = ({
  menuItems,
  laptop = false,
}: DesktopMenuProps) => {
  return (
    <WrapperStyled>
      {Object.entries(menuItems).map(([key, values]) => (
        <NavLinkStyled
          key={key}
          to={Path[key as keyof typeof Path]}
          style={laptop ? { fontSize: 12, color: "#fff" } : {}}
        >
          {values}
        </NavLinkStyled>
      ))}
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLinkStyled = styled(NavLink)`
  color: #fff;
  position: relative;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.accentBg};
  }

  &.active {
    color: ${theme.colors.accentBg};

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.accentBg};
      transform: scaleX(0);
      transform-origin: left center;
      animation: underlineExpand 0.3s ease-out forwards;
    }
  }

  @keyframes underlineExpand {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;
