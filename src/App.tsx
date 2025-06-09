import React from "react";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import { Routing } from "./components/Routing";
import styled from "styled-components";
import { theme } from "./styles/Theme";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <WrapperContent>
        <Content>
          <Routing />
        </Content>
      </WrapperContent>

      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* height: 100%; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
`;

const WrapperContent = styled.section`
  flex-grow: 1;
  display: flex;

  /* @media ${theme.media.mobile} {
    padding-top: 20px;
  } */
`;

export const Content = styled.div`
  max-width: 1300px; //1170px; 1400px;
  width: 100%;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin: 0 auto;
  /* border: 1px solid red; */
`;
