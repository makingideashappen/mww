import Layout from "../components/Layout";

import React from "react";
import SEO from "../components/shared/seo";
import { useTranslation } from "react-i18next";
import Hero from "../components/Index/Hero";
import HomeAbout from "../components/Index/HomeAbout";
import HomeAbout2 from "../components/Index/HomeAbout2";
import GetStarted from "../components/Index/GetStarted";
import LinearGradiendBackground from "../components/Index/LinearGradiendBackground";
import Features from "../components/Index/Features";
import Clients from "../components/Index/Clients";
import Testimonials from "../components/Index/Testimonials";
import { motion } from "framer-motion";

const IndexPage = ({ data, location }) => {
  const { t } = useTranslation();
  const edges = data.allMarkdownRemark.edges;
  const sliderItems = edges
    .map((item) => (item = item.node))
    .filter((item) => item.frontmatter.templateKey === "slider-posts");
  const features = edges
    .map((item) => (item = item.node))
    .filter((item) => item.frontmatter.templateKey === "features");


  return (
    <Layout>
      <SEO title="Home" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.21, delay: 0.1, ease: "easeOut" },
        }}
      >
        <Hero sliderItems={sliderItems} />
        <HomeAbout />
        <Features features={features} />
        <HomeAbout2 />
        <Testimonials />
        <LinearGradiendBackground>
          <Clients />
          <GetStarted />
        </LinearGradiendBackground>
      </motion.div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            subtitle
            link
            description
            templateKey
            featuredImage {
              childImageSharp {
                fluid(quality: 99) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
