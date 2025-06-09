import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { theme } from "../../styles/Theme";
import photo from "../../assets/images/my_photo3.jpg";

export const EducationData = [
  {
    title: (
      <>
        Front-End Developer
        <span style={{ fontWeight: 500 }}> - IT-Incubator</span>
        <div style={{ color: `${theme.colors.accentBg}` }}>2024 - present</div>
      </>
    ),
  },
  {
    title: (
      <>
        Free resources on the Internet
        <div style={{ color: `${theme.colors.accentBg}` }}>2019 - present</div>
      </>
    ),
  },
  {
    title: (
      <>
        Information systems and technologies
        <span style={{ fontWeight: 500 }}>
          {" "}
          - Perm National Research Polytechnic University
        </span>
        <div style={{ color: `${theme.colors.accentBg}` }}>2019-2023 </div>
      </>
    ),
  },
];

export const AboutMe = () => {
  return (
    <>
      <SectionTitle>Lopina Maria</SectionTitle>
      <Titledescription>Front-end Developer</Titledescription>

      <Container>
        <WrapperDescription>
          <TitleDescription>About Me</TitleDescription>

          <p>Hello! My name is Masha.</p>
          <p>
            I like to code and create web elements for amazing people around the
            world.
          </p>
          <p>I am enthusiastic team player.</p>
          <p>
            I work continuously on improving my professional skills and I
            welcome constructive criticism and am always happy to find new
            points of professional and personal growth.
          </p>
        </WrapperDescription>

        <Photo src={photo} alt="" />
      </Container>

      <SkillsContainer>
        <Title>My education</Title>
        <Description2>
          {EducationData.map((item, index) => (
            <StyledSkill key={index}>
              <h3
                style={{
                  padding: "0 20px",
                  letterSpacing: "2px",
                }}
              >
                {item.title}
              </h3>
            </StyledSkill>
          ))}
        </Description2>
      </SkillsContainer>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 50px;
  height: 100%;

  @media ${theme.media.mobile}, ${theme.media.tablet} {
    flex-direction: column;
    padding-top: 20px;
  }
`;

const WrapperDescription = styled.div`
  max-width: 700px;

  line-height: 1.5;
  font-size: 24px;
  padding-right: 20px;

  p + p {
    margin-top: 20px;
  }

  @media ${theme.media.mobile}, ${theme.media.tablet} {
    order: 2; // Будет вторым в колонке
    padding-right: 0;
    padding-top: 20px;
    font-size: 20px;
  }
`;

const TitleDescription = styled.div`
  text-align: start;
  letter-spacing: 5px;
  margin-bottom: 20px;
  font-size: 24px;

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 1px;
    background-color: ${theme.colors.accentBg};

    position: absolute;
    bottom: -15px;
  }
`;

const Photo = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  align-items: center;

  border: 5px solid #70487d;
  outline: 5px solid #fff;

  border-radius: 50%;
  /* box-shadow: 0 0 20px rgb(255, 255, 255);  */
  box-shadow: 0 0 30px #70487d;

  @media ${theme.media.mobile}, ${theme.media.tablet} {
    width: 250px;
    height: 250px;
    order: 1; // Будет первым в колонке
  }
`;

const Titledescription = styled.div`
  text-align: center;
  letter-spacing: 5px;

  font-size: 18px;
`;

const Description2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 24px;

  width: 100%;
  overflow-y: auto;
  max-height: 520px;
  flex-grow: 1;

  height: 100%;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  width: 100%;
  height: 100%;

  padding-top: 20px;
`;

const Title = styled.div`
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 20px;
  font-size: 24px;
  padding: 0 50px;

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 1px;
    background-color: ${theme.colors.accentBg};

    position: absolute;
    left: 30%;
    transform: translateX(-50%);
    bottom: -15px;
  }
`;

const StyledSkill = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 10px 10px 30px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background: linear-gradient(100deg, #00f5a0, #b388ff);
    background-clip: text;
    -webkit-background-clip: text; /* для Safari */
    color: transparent;
    -webkit-text-fill-color: transparent; /* для Safari */
  }
`;
