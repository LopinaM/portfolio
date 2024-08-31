import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexContainer } from "../../../components/FlexContainer";
import { Project } from "./project/Project";
import project from "../../../assets/images/photo.jpg";
import { Container } from "../../../components/Container";

const WorkProps = [
  { title: "project1", src: project },
  { title: "project2", src: project },
  { title: "project3", src: project },
];
export const Projects = () => {
  return (
    <StyledSectionWorks id="Projects">
      <Container>
        <SectionTitle>My Project</SectionTitle>
        <FlexContainer wrap={"wrap"} justify={"space-between"}>
          {WorkProps.map((item, index) => (
            <Project key={index} title={item.title} src={item.src} />
          ))}
        </FlexContainer>
      </Container>
    </StyledSectionWorks>
  );
};

const StyledSectionWorks = styled.section``;
