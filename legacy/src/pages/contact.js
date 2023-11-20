import React from "react";

import { useTranslation } from "react-i18next";
import Layout from "../components/Layout";
import SEO from "../components/shared/seo";
import SimpleContactUs from "../components/Contact/SimpleContactUs.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { motion } from "framer-motion";

export const Wrapper = tw(motion.div)`py-24`;
const Row = styled.div`
max-width:1440px;
${tw`flex flex-col  md:flex-row mx-auto px-4`}`;

export const Left = styled.div`
 ${tw`flex items-center justify-center w-full lg:w-2/5 bg-gray-300 py-10 px-6 mb-4 lg:mb-0 rounded-lg mr-4`};
 backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
`

export const Right = tw.div`w-full lg:w-3/5`;
const Heading1 = tw.h1`text-center font-bold text-4xl md:text-5xl text-primary-500 w-full  pb-4 px-4  border-b-2  mb-16 mx-auto`;


export const Box = styled.section`
  ${tw``}
  h2 {
    ${tw`text-primary-500 text-2xl font-bold mb-5`}
  }

  span {
    ${tw`text-gray-500 text-sm`}
  }
  div {
    ${tw`flex flex-col font-bold text-xs  sm:text-base uppercase text-primary-400 mb-4`}
  }
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={"Contact"} />
      <Wrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3, ease: "easeOut" },
        }}
      >
        <Heading1>{t("contact.heading")}</Heading1>
        <Row>
          <Left>
            <Box>
              <h2>{t("contact.subtitle")}</h2>
              <div>
                <span>{t("contact.email_title")}</span>
                {t("contact.email_value")}
              </div>
              <div>
                <span>{t("contact.phone_title")}</span>
                {t("contact.phone_value")}
              </div>
              <div>
                <span>{t("contact.place_title")}</span>
                {t("contact.place_value")}
              </div>
              <div>
                <span>{t("contact.work_days_title")}</span>
                {t("contact.work_days_value_open")}
                <br></br>
                {t("contact.work_days_value_closed")}
              </div>
            </Box>
          </Left>
          <Right>
            <SimpleContactUs />
          </Right>
        </Row>
      </Wrapper>
    </Layout>
  );
};

export default Contact;
