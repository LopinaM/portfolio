import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type ProjectPropsType = {
  title: string;
  src: string;
  urlOnCode: string;
  urlOnView: string;
};

export const Project = ({
  title,
  src,
  urlOnCode,
  urlOnView,
}: ProjectPropsType) => {
  return (
    <StyledWork>
      <ImageContainer>
        <Image src={src} alt={title} />
        <HoverOverlay>
          <StyledLink href={urlOnCode} target="_blank">
            CODE
          </StyledLink>
          {title !== "Portfolio" && (
            <StyledLink href={urlOnView} target="_blank">
              DEMO
            </StyledLink>
          )}
        </HoverOverlay>
      </ImageContainer>
      <Title>{title}</Title>
      <StaticLinks>
        <StyledLink href={urlOnCode} target="_blank">
          CODE
        </StyledLink>
        {title !== "Portfolio" && (
          <StyledLink href={urlOnView} target="_blank">
            DEMO
          </StyledLink>
        )}
      </StaticLinks>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  max-width: 370px;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 330px;
  height: 370px;
  border-radius: 5px;
  overflow: hidden;

  @media ${theme.media.mobile} {
    width: 100%;
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;

  @media ${theme.media.desktop} {
    ${ImageContainer}:hover & {
      filter: blur(2px) brightness(0.7);
      transform: scale(1.03);
    }
  }

  @media ${theme.media.mobile}, ${theme.media.tablet} {
    filter: none !important;
    transform: none !important;
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  gap: 30px;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media ${theme.media.desktop} {
    display: flex;

    ${ImageContainer}:hover & {
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 10px;
  font-size: 20px;
  padding: 0 50px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 70px;
    height: 1px;
    background-color: ${theme.colors.accentBg};
    position: absolute;
    transform: translateY(30px);
  }
`;

const StaticLinks = styled.div`
  display: flex;
  gap: 30px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  animation: fadeInUp 0.5s ease forwards;
  animation-delay: 0.2s;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media ${theme.media.desktop} {
    display: none;
  }
`;

const StyledLink = styled.a`
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
  border: 1px solid ${theme.colors.accentBg};

  &:hover {
    background-color: ${theme.colors.accentBg};
  }
`;
