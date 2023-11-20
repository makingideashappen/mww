import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

export const SubmitButton = tw.button`px-8 py-3 mt-16  rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;

const form = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: ""
      }}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-demo", ...values })
        })
          .then(() => {
            alert("Success");
            actions.resetForm();
          })
          .catch(() => {
            alert("Error");
          })
          .finally(() => actions.setSubmitting(false));
      }}
      validate={values => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const errors = {};
        if (!values.name) {
          errors.name = t("contact.name_err");
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = t("contact.email_err");
        }
        if (!values.message) {
          errors.message = t("contact.message_err");
        }
        return errors;
      }}
    >
      {() => (
        <Form className={className} name="contact-demo" data-netlify={true}>
          <label htmlFor="name">{t("contact.label_name")}</label>
          <Field name="name" />
          <ErrorMessage name="name" />
          <label htmlFor="email">{t("contact.label_email")}</label>
          <Field name="email" />
          <ErrorMessage name="email" />
          <label htmlFor="message">{t("contact.label_message")}</label>
          <Field name="message" component="textarea" />
          <ErrorMessage name="message" />
          <SubmitButton type="submit">{t("contact.btn_confirm")}</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default styled(form)`

  ${tw`mt-8 md:mt-10 text-sm flex flex-col max-w-md w-128 mx-auto md:mx-0`}
  input,textarea {
    ${tw`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500  border border-primary-300`}
  }
  textarea {
    ${tw`h-24`}
  }
  
`;
