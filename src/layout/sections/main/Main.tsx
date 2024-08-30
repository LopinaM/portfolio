import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import { FlexContainer } from "../../../components/FlexContainer";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain id="Home">
      <Container>
        <FlexContainer align={"center"} justify={"space-between"}>
          <div>
            <span>Hi There!</span>
            <NameStyled>I am Lopina Maria</NameStyled>
            <h1>A web Deweloper.</h1>
          </div>

          <Photo src={photo} alt="" />
        </FlexContainer>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  /* background-color: #b0c4de; */
  min-height: 100vh;
  display: flex;
`;

const Photo = styled.img`
  /* background-color: #ff00ff; */
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 10px 10px 10px ${theme.colors.accentBg};
  /* padding: 20px;
  box-shadow: inset 0 -2em 2em ${theme.colors.accentBg},
    0 0 0 1px rgb(255, 255, 255), 0.2em 0.2em 1em ${theme.colors.accentBg}; */
`;

const NameStyled = styled.h2`
  /* font-family: Josefin Sans; */
  font-size: 44px;
  font-weight: 700;
  /* line-height: 50px; */
  /* letter-spacing: 0.05em; */
  /* text-align: left; */
`;
