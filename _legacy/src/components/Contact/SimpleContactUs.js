import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

const FormContainer = styled.div`
  margin-left:auto;
  margin-right:auto;
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative md:min-w-864`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-2xl sm:text-2xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-lightBlue focus:outline-none transition duration-200`};
    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col lg:flex-row justify-between w-full`;
const Column = tw.div` flex flex-col`;
const Row = tw.div`flex`;
const InputContainer = styled.div`
min-width:42%;
${tw`relative py-5 mt-6`}`;

const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input`w-full`;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

export default () => {
  const { t } = useTranslation();

  return (
    <FormContainer>
      <div tw='mx-auto max-w-4xl'>
        <h2>{t("contact.form_title")}</h2>
        <form action='#'>
          <Row>
            <TwoColumn>
              <InputContainer>
                <Label htmlFor='name-input'>{t("contact.label_name")}</Label>
                <Input
                  id='name-input'
                  type='text'
                  name='name'
                  placeholder={t("contact.name_placeholder")}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor='email-input'>{t("contact.label_email")}</Label>
                <Input
                  id='email-input'
                  type='email'
                  name='email'
                  placeholder={t("contact.email_placeholder")}
                />
              </InputContainer>
            </TwoColumn>
          </Row>
          <Row>
            <Column className="flex w-full">
              <InputContainer className='flex w-full'>
                <Label htmlFor='title-input'>{t("contact.label_title")}</Label>
                <Input
                  id='title-input'
                  type='text'
                  name='title'
                  placeholder={t("contact.title_placeholder")}
                />
              </InputContainer>
              <InputContainer className='flex'>
                <Label htmlFor='name-input'>{t("contact.label_message")}</Label>
                <TextArea
                  id='message-input'
                  name='message'
                  placeholder={t("contact.message_placeholder")}
                />
              </InputContainer>
            </Column>
          </Row>

          <SubmitButton type='submit' value='Submit'>
            {t("contact.form_send_cta")}
          </SubmitButton>
        </form>
      </div>
    </FormContainer>
  );
};
