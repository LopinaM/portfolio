import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import { FlexContainer } from "../../../components/FlexContainer";

export const Main = () => {
  return (
    <StyledMain>
      <FlexContainer align={"center"} justify={"space-around"}>
        <div>
          <span>Hi There!</span>
          <h2>I am Lopina Maria</h2>
          <h1>A web Deweloper.</h1>
        </div>

        <Photo src={photo} alt="" />
      </FlexContainer>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  /* background-color: #b0c4de; */
  min-height: 100vh;
`;

const Photo = styled.img`
  background-color: #ff00ff;
  width: 350px;
  height: 350px;
  object-fit: cover;
`;
