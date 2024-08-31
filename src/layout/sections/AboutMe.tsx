import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { Container } from "../../components/Container";

export const AboutMe = () => {
  return (
    <StyledSectionAboutMe id="About me">
      <Container>
        <SectionTitle>About Me</SectionTitle>
      </Container>
    </StyledSectionAboutMe>
  );
};

const StyledSectionAboutMe = styled.section`
  min-height: 100vh;
`;
