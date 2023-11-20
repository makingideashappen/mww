import React from "react";

import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import SEO from "../components/shared/seo";

import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { motion } from "framer-motion";
import Layout from "../components/Layout";


const Row = tw.div`flex flex-col  md:flex-row max-w-6xl mx-auto px-4 h-72  md:h-144 items-center  text-lg`;
const Image = tw.img`w-96 md:ml-12 rounded-lg`;

export const Wrapper = tw(motion.div)`py-24`;
export const Left = tw.div`flex items-center justify-center w-full lg:w-1/2 bg-gray-300 py-12 px-6 mb-4 lg:mb-0 rounded-lg mr-4`;
export const Right = tw.div`w-full lg:w-1/2`;
const Heading1 = tw.h1`text-center font-bold text-5xl text-primary-500 w-full  pb-4 px-4  border-b-2  mb-4 mx-auto`;

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

const Legal = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={t("Legal notice")} />
      <Wrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.21, delay: 0.1, ease: "easeOut" },
        }}
      >
        <Heading1>{t("legal.heading")}</Heading1>
        <Row><Left>{parse(t("legal.body_html"))}</Left><Right><Image src={require("../assets/ldn.jpeg")} /></Right></Row>
      </Wrapper>
    </Layout>
  );
};

export default Legal;
