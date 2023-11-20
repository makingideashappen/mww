import Layout from "../components/Layout";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SEO from "../components/shared/seo";

import TechnicalInfoComponent from "../components/TechnicalInfo/TechnicalInfo"

const TechnicalInfo = ({ data }) => {
  const items = data.allMarkdownRemark.edges
  console.log(items, "items");

  return (
    <Layout>
      <SEO title={"Technincal info"} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.21, delay: 0.1, ease: "easeOut" },
        }}
      >
        <TechnicalInfoComponent infoRows={items} />
      </motion.div>
    </Layout >
  )
}

export default TechnicalInfo;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(techInfo)/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            heading
            subheading
            message
            cards {
              header
              description
              Image {
                childImageSharp {
                  fluid(quality: 99) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              File {
                absolutePath
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
