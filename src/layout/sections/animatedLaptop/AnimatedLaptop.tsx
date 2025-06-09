import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { CodeSimulation } from "./CodeSimulation/CodeSimulation";
import { Slaider } from "./Slaider/Slaider";
import { Technologies } from "./Technologies/Technologies";
import { Keyboard } from "./Keyboard/Keyboard";
import { LaptopScreen } from "./LaptopScreen/LaptopScreen";

export const AnimatedLaptop: React.FC = () => {
  return (
    <LaptopContainer>
      <Laptop>
        <LaptopScreen />
        <Keyboard />
      </Laptop>

      <Technologies />
      <CodeSimulation />
      <Slaider />
    </LaptopContainer>
  );
};

const Laptop = styled.div``;

const LaptopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 550px;
  height: 425px;

  /* overflow: hidden; */

  @media ${theme.media.mobile} {
    display: none;
  }
`;
