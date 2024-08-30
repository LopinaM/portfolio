import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;
  margin-bottom: 70px;

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 1px;
    background-color: ${theme.colors.accentBg};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -15px;
  }
`;
