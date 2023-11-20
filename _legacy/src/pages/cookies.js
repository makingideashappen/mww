import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/shared/seo";

import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import Img from "gatsby-image";
import { motion } from "framer-motion";
import Link from "../components/shared/link";
import parse from "html-react-parser";
import Btn from "../components/shared/btn";

const Cookies = ({ data, location }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={"Cookies policy"} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.21, delay: 0.1, ease: "easeOut" },
        }}
        className='pt-24 px-4 max-w-5xl m-auto'
      >

      </motion.div>
    </Layout>
  );
};
const Heading1 = tw.h1`text-center font-bold text-4xl md:text-5xl text-primary-500 w-full  pb-4 px-4  border-b-2  mb-16 mx-auto`;
const Heading2 = tw.h2`font-bold text-3xl mb-4`;
const Text = tw.p` mb-10`;

export default Cookies;
