import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import emailjs from "emailjs-com";

export const Contacts: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSuccessfully, setSuccessfully] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          // alert("Сообщение отправлено!");
          setSuccessfully(true);
          setFormData({ name: "", email: "", message: "" });
          formRef.current?.reset();

          setTimeout(() => {
            setSuccessfully(false); // скрываем сообщение через 3 секунды
          }, 3000);
        },
        (error) => {
          console.log("Ошибка: " + error.text);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <SectionTitle>Get in touch with me</SectionTitle>
      <Wrapper>
        <Description>
          Please fill out the form on this section to contact with me. I will
          answer you as soon as I receive your message.
        </Description>

        <Container ref={formRef} onSubmit={handleSubmit}>
          <StyledForm>
            <FloatLabelField>
              <Field id="name" name="name" placeholder=" " required />
              <label htmlFor="name">Your name</label>
            </FloatLabelField>
            <FloatLabelField>
              <Field id="email" name="email" placeholder=" " required />
              <label htmlFor="email">Your email</label>
            </FloatLabelField>
            <FloatLabelField>
              <Field
                id="message"
                name="message"
                as={"textarea"}
                placeholder=" "
                required
              />
              <label htmlFor="message">Message</label>
            </FloatLabelField>
          </StyledForm>
          <Button type={"submit"}>Send Message</Button>
        </Container>

        {isSuccessfully && (
          <Description style={{ color: `${theme.colors.accentBg}` }}>
            The message was sent successfully
          </Description>
        )}
      </Wrapper>
    </>
  );
};

const Description = styled.div`
  text-align: center;

  line-height: 1.5;
  font-size: 24px;
  padding-right: 20px;

  p + p {
    margin-top: 20px;
  }

  @media ${theme.media.mobile}, ${theme.media.tablet} {
    padding-right: 0;
    padding: 0 15px;
    font-size: 20px;
  }
`;

const Wrapper = styled.section`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const Container = styled.form`
  padding: 40px;

  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const StyledForm = styled.div`
  padding: 40px;

  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }

  background: #111;
  text-decoration: none;
  color: #ffffff;
  position: relative;
  transition: all 0.5s;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 3rem;
    height: 3rem;
    border-color: ${theme.colors.accentBg};
    border-style: solid;

    top: 0rem;
    right: 0rem;
    border-width: 3px 3px 0 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 3rem;
    border-style: solid;
    border-color: ${theme.colors.accentBg};

    bottom: 0rem;
    left: 0rem;
    border-width: 0px 0px 3px 3px;
  }
`;

const Field = styled.input`
  width: 100%;
  border-radius: 5px;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  letter-spacing: 0.05em;
  line-height: normal;
  align-items: center;

  color: ${theme.colors.font};

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    /* text-transform: uppercase; */
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accentBg};
  }
`;

const FloatLabelField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  font-size: 20px;
  align-items: center;
  line-height: normal;

  input,
  textarea {
    border: 1px solid ${theme.colors.borderColor};
    color: ${theme.colors.font};
    /* transition: all 0.3s ease; */

    &:focus {
      outline: none;
      border-color: ${theme.colors.accentBg};
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: -20px;
      left: 10px;
      font-size: 16px;
      color: ${theme.colors.accentBg};
    }
  }

  label {
    line-height: normal;
    position: absolute;
    pointer-events: none;
    left: 15px;
    top: 10px;
    transition: all 0.3s ease;
    color: ${theme.colors.placeholderColor};
    background: transparent;
  }
`;
