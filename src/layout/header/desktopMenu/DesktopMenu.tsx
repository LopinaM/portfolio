import React from "react";
import styled from "styled-components";
import { Menu } from "../menu/Menu";

export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <StyledDesktopMenu>
      <Menu menuItems={props.menuItems} />
    </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;
