import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import project from "../../../assets/images/photo.jpg";
import todo from "../../../assets/images/todo.png";
import handScan from "../../../assets/images/handScan.png";
import counter1 from "../../../assets/images/counter1.png";
import counter2 from "../../../assets/images/counter2.png";
import portfolio from "../../../assets/images/portfolio.png";
import { theme } from "../../../styles/Theme";

const WorkData = [
  {
    title: "Animation",
    src: handScan,
    urlOnCode: "https://github.com/LopinaM/css_hand_scanning_animation",
    urlOnView: "https://lopinam.github.io/css_hand_scanning_animation/",
  },
  {
    title: "Counter",
    src: counter1,
    urlOnCode: "https://github.com/LopinaM/counter",
    urlOnView: "https://lopinam.github.io/counter/",
  },
  {
    title: "To Do List",
    src: todo,
    urlOnCode: "https://github.com/LopinaM/todolist",
    urlOnView: "https://lopinam.github.io/todolist/",
  },
  {
    title: "Counter With RTK",
    src: counter2,
    urlOnCode: "https://github.com/LopinaM/counter-with-rtk",
    urlOnView: "https://lopinam.github.io/counter-with-rtk/",
  },
  {
    title: "Portfolio",
    src: portfolio,
    urlOnCode: "https://github.com/LopinaM/portfolio",
    urlOnView: "",
  },
  // { title: "project6", src: project, urlOnCode: "", urlOnView: "" },
  // { title: "project7", src: project, urlOnCode: "", urlOnView: "" },
];

const ITEMS_PER_PAGE = 3;

export const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const totalPages = Math.ceil(WorkData.length / ITEMS_PER_PAGE);

  const onNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const onPrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleItems = WorkData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <SectionTitle>My Project</SectionTitle>

      <Wrapper>
        <FlexContainer>
          {visibleItems.map((item, index) => (
            <Project
              key={startIndex + index}
              title={item.title}
              src={item.src}
              urlOnCode={item.urlOnCode}
              urlOnView={item.urlOnView}
            />
          ))}
        </FlexContainer>

        <ButtonWrapper>
          <StyledButton onClick={onPrev} disabled={currentPage === 0}>
            ᐸ
          </StyledButton>

          <StyledButton
            onClick={onNext}
            disabled={currentPage === totalPages - 1}
          >
            ᐳ
          </StyledButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled.button`
  font-size: 2rem;
  color: #fff;
  border-radius: 5px;
  padding: 0 10px;
  border: 1px solid ${theme.colors.accentBg};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:not(:disabled):hover {
    background-color: ${theme.colors.accentBg};
  }
`;
