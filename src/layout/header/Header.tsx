import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../components/FlexContainer";
import { DesktopMenu } from "./desktopMenu/DesktopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

const itemsDefault: {
  Main?: string;
  AboutMe: string;
  Skills: string;
  Projects: string;
  Contacts: string;
} = {
  Main: "Home",
  AboutMe: "About",
  Skills: "Skills",
  Projects: "Projects",
  Contacts: "Contact",
};

interface HeaderProps {
  islaptop?: boolean;
}

export const Header = ({ islaptop = false }: HeaderProps) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const items = islaptop ? { ...itemsDefault } : itemsDefault;
  if (islaptop) {
    delete items.Main;
  }

  return (
    <Container $laptop={islaptop}>
      <FlexContainer justify={"space-between"} align={"center"}>
        {!islaptop ? (
          <Logo href="/">
            ML<span>.</span>
          </Logo>
        ) : (
          "ML"
        )}
        {width < breakpoint ? (
          <MobileMenu menuItems={items} />
        ) : (
          <DesktopMenu menuItems={items} laptop={islaptop} />
        )}
      </FlexContainer>
    </Container>
  );
};

const Logo = styled.a`
  ${font({
    weight: 700,
    Fmax: 36,
    Fmin: 30,
  })}

  text-align: center;
  letter-spacing: 5px;

  span {
    color: ${theme.colors.accentBg};
  }
  &:hover {
    span {
      background: linear-gradient(135deg, #b388ff, #00f5a0);
      background-clip: text;
      -webkit-background-clip: text; /* для Safari */
      color: transparent;
      -webkit-text-fill-color: transparent; /* для Safari */
    }
  }
`;

export const Container = styled.div<{ $laptop?: boolean }>`
  max-width: 1300px; //1170px;
  width: 100%;

  letter-spacing: 2px;

  padding: ${({ $laptop }) => ($laptop ? "10px 15px" : "10px 10px 0 10px")};
  margin: 0 auto;
`;
