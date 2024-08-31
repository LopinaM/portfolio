import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
  return (
    <StyledContact id="Contact">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder={"Your name"} />
          <Field placeholder={"Your email"} />
          <Field placeholder={"Message"} as={"textarea"} />
          <Button type={"submit"}>Send Message</Button>
        </StyledForm>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section``;

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  border-radius: 5px;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;

  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.05em;

  color: ${theme.colors.font};

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: uppercase;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accentBg};
  }
`;
