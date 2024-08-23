import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexContainer } from "../../../components/FlexContainer";
import { Project } from "./project/Project";
import project from "../../../assets/images/photo.jpg";

const WorkProps = [
  { title: "project1", src: project },
  { title: "project2", src: project },
  { title: "project3", src: project },
];
export const Projects = () => {
  return (
    <StyledSectionWorks>
      <SectionTitle>My Project</SectionTitle>
      <FlexContainer wrap={"wrap"} justify={"space-between"}>
        {WorkProps.map((item, index) => (
          <Project key={index} title={item.title} src={item.src} />
        ))}
      </FlexContainer>
    </StyledSectionWorks>
  );
};

const StyledSectionWorks = styled.section`
  background-color: #79c182;
  min-height: 100vh;
`;
