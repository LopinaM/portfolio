import React from "react";
import styled from "styled-components";

type WorkPropsType = {
  title: string;
  src: string;
};

export const Project = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.src} alt="" />
      </ImageWrapper>

      <Descriphion>
        <Title>{props.title}</Title>
        <Link href={"#"}>demo</Link>
        <Link href={"#"}>code</Link>
      </Descriphion>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0 0.3);
      backdrop-filter: blur(4px);
    }
  }
`;

const Image = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 15px;
`;

const Link = styled.a`
  & + a {
    margin-left: 100px;
  }

  &:hover {
    background-color: #5c9a23;
  }
`;

const Descriphion = styled.div`
  text-align: center;
`;
