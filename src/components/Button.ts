import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  color: ${theme.colors.font};
  border: 1px solid ${theme.colors.accentBg};
  padding: 10px 10px;
  border-radius: 5px;
  font-weight: 600px;
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 200px;
  height: 50px;
  transition: all 0.5s;

  &:hover {
    background: linear-gradient(135deg, #b388ff, #00f5a0);
    background-clip: text;
    -webkit-background-clip: text; /* для Safari */
    color: transparent;
    -webkit-text-fill-color: transparent; /* для Safari */
  }
`;
