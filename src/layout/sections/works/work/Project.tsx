import React from "react";
import styled from "styled-components";

type WorkPropsType = {
  title: string;
  src: string;
};

export const Project = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <Link href={"#"}>demo </Link>
      <Link href={"#"}>code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #98fbee;
  min-width: 540px;
  width: 100%;
`;

const Image = styled.img`
  background-color: #e5fb98;
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const Title = styled.h3`
  background-color: #5c9a23;
`;

const Link = styled.a`
  background-color: #98cdfb;
`;
