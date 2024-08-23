import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexContainer } from "../../components/FlexContainer";

const SocialIcon = [
  {
    iconId: "code",
  },
  {
    iconId: "code",
  },
  {
    iconId: "code",
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexContainer direction={"row"} align={"center"} gap={"10px"}>
        {SocialIcon.map((item, index) => (
          <SocialList>
            <SocialItem>
              <SocialLink>
                <Icon key={index} iconId={item.iconId} />
              </SocialLink>
            </SocialItem>
          </SocialList>
        ))}
      </FlexContainer>
      <Copyright>© 2024 Lopina Maria, All Rights Reserved.</Copyright>

      {/* <SocialList>
        <FlexContainer direction={"row"} align={"center"} gap={"10px"}>
          {SocialIcon.map((item, index) => (
            <SocialItem>
              <SocialLink>
                <Icon key={index} iconId={item.iconId} />
              </SocialLink>
            </SocialItem>
          ))}
        </FlexContainer>
        <Copyright>© 2024 Lopina Maria, All Rights Reserved.</Copyright>
      </SocialList> */}
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #af98fb;
  min-height: 10vh;
`;

const SocialList = styled.ul`
  background-color: #fb98f8;
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  align-items: center;
`;

const SocialItem = styled.li`
  background-color: #98fba4;
`;

const SocialLink = styled.a`
  background-color: #a12353;
`;

const Copyright = styled.small`
  background-color: #cd4651;
`;
