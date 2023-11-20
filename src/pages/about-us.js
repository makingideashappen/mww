import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/shared/seo";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import FeaturesAbout from "../components/AboutUs/FeaturesAbout.js";
import AboutDescription from "../components/AboutUs/AboutDescription";
import TwoColSingleFeatureWithStats from "../components/AboutUs/TwoColSingleFeatureWithStats.js";
import ThreeColWithSideImageWithPrimaryBackground from "../components/AboutUs/ThreeColWithSideImageWithPrimaryBackground.js";
import tw from "twin.macro";

const Heading1 = tw.h1`text-center font-bold text-4xl md:text-5xl text-primary-500 w-full  pb-4 px-4  border-b-2  mb-16 mx-auto`;

const AboutUs = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={"About us"} />
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.21, delay: 0.1, ease: "easeOut" },
        }}
        className='text-gray-600 body-font pt-24'
      >
        <Heading1>{t("About")}</Heading1>
        {/* <FeaturesAbout /> */}
        <TwoColSingleFeatureWithStats />
        <AboutDescription />
        <ThreeColWithSideImageWithPrimaryBackground />
      </motion.section>
    </Layout >
  );
};

export default AboutUs;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
