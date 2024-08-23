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
      <div>
        <Link href={"#"}>demo</Link>
        <Link href={"#"}>code</Link>
      </div>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #98fbee;
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
`;

const Image = styled.img`
  background-color: #e5fb98;
  /* width: 100%; */
  /* height: 100px; */

  width: 350px;
  height: 350px;
  object-fit: cover;
`;

const Title = styled.h3`
  background-color: #5c9a23;
`;

const Link = styled.a`
  background-color: #98cdfb;
  /* display: flex; */
  /* gap: 5px; */
`;
