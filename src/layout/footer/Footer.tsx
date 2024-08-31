import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexContainer } from "../../components/FlexContainer";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

const SocialIcon = [
  {
    iconId: "instagram",
  },
  {
    iconId: "telegram",
  },
  {
    iconId: "liked-id",
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexContainer direction={"column"} align={"center"} gap={"10px"}>
          <SocialList>
            {SocialIcon.map((item, index) => (
              <SocialList>
                <SocialItem>
                  <SocialLink>
                    <Icon iconId={item.iconId} />
                  </SocialLink>
                </SocialItem>
              </SocialList>
            ))}
          </SocialList>
          <Copyright>© 2024 Lopina Maria, All Rights Reserved.</Copyright>
        </FlexContainer>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0px;
`;

const SocialItem = styled.li`
  background-color: #98fba4;
`;

const SocialLink = styled.a`
  background-color: #a12353;
  /* width: 35px;
  height: 35px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(255, 255, 255 0.1); */
  border-radius: 50%;

  color: ${theme.colors.accentBg};

  &:hover {
    color: ${theme.colors.font};
    background-color: ${theme.colors.secondaryBg};
  }
`;

const Copyright = styled.small`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: ${theme.colors.font};
`;
