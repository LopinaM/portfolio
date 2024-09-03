import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import { FlexContainer } from "../../../components/FlexContainer";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain id="Home">
      <Container>
        <FlexContainer align={"center"} justify={"space-between"} wrap={"wrap"}>
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
  /* justify-content: center; */
`;

const Photo = styled.img`
  /* background-color: #ff00ff; */
  width: 350px;
  height: 430px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 10px 10px 10px ${theme.colors.accentBg};
  /* padding: 20px;
  box-shadow: inset 0 -2em 2em ${theme.colors.accentBg},
    0 0 0 1px rgb(255, 255, 255), 0.2em 0.2em 1em ${theme.colors.accentBg}; */

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const NameStyled = styled.h2`
  ${font({
    weight: 700,
    Fmax: 50,
    Fmin: 32,
  })}
  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;
