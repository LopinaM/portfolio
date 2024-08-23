import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <StyledInput placeholder={"Your name"} />
        <StyledInput placeholder={"Your email"} />
        <StyledTextArea placeholder={"Message"} />
        <Button type={"submit"}>Send Message</Button>
      </StyledForm>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  background-color: #c0fb98;
  min-height: 50vh;
`;

const StyledForm = styled.form`
  background-color: #98f4fb;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  background-color: #98a7fb;
`;

const StyledTextArea = styled.textarea`
  background-color: #c198fb;
`;
