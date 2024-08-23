import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexContainer } from "../../components/FlexContainer";

const items = ["Home", "About me", "Skills", "Projects", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer justify={"space-between"} align={"center"}>
          <Logo />
          <Menu menuItems={items} />
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  /* background-color: #98fb98; */
  background: rgba(31, 31, 32, 0.9);
  /* padding: 20px 0; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;
