import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { theme } from "../../styles/Theme";

const SocialIcon = [
  { iconId: "telegram", url: "https://t.me/ls_masha" },
  { iconId: "githubFooter", url: "https://github.com/LopinaM" },
  // { iconId: "liked-id", url: "" },
];

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Copyright>© Made by Lopina Maria, 2025</Copyright>
      {/* <Copyright>&&</Copyright> */}
      <SocialList>
        {SocialIcon.map((item, index) => (
          <SocialItem key={index}>
            <SocialLink
              href={item.url}
              target="_blank"
              // rel="noopener noreferrer"
            >
              <Icon
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21 21"}
                iconId={item.iconId}
              />
            </SocialLink>
          </SocialItem>
        ))}
      </SocialList>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  max-width: 1170px;
  width: 100%;

  padding: 10px 0;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 20px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 10px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  background-color: #433648;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  color: ${theme.colors.font};

  &:hover {
    background-color: ${theme.colors.accentBg};
  }
`;

const Copyright = styled.small`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: ${theme.colors.font};
`;
