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
import styled from "styled-components"

const News = ({ data, location }) => {
  const { t } = useTranslation();
  const items = data.allMarkdownRemark.edges.map((item) => (item = item.node));
  console.log("news", items);
  return (
    <Layout>
      <SEO title={"news"} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.21, delay: 0.1, ease: "easeOut" },
        }}
        className='pt-24 '
      >
        <Heading1>{t("news.heading")}</Heading1>
        <List>
          {items.map((item) => {
            return (
              <Link key={item.id} to={`/news${item.fields.slug}`}>
                <ListItem key={item.id}>
                  <Img
                    className='w-full rounded-lg'
                    style={{ "max-height": "30vmin", "min-height": "296px" }}
                    fluid={item.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <Content>
                    <Data>
                      {new Date(item.frontmatter.date).toLocaleDateString(
                        "en-EN",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </Data>
                    <Title>{item.frontmatter.title}</Title>
                    <Desc> {parse(item.frontmatter.description)}</Desc>
                    <div className="flex justify-center">
                      <Btn className='bg-primary-500 text-white text-sm '>
                        {t("news.read_more_cta")}
                      </Btn>
                    </div>
                  </Content>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </motion.div>
    </Layout>
  );
};
const Heading1 = tw.h1`text-center font-bold text-4xl md:text-5xl text-primary-500 w-full  pb-4 px-4  border-b-2  mb-16 mx-auto`;

export const List = tw.div`flex flex-col max-w-4xl m-auto p-4`;
export const ListItem = styled.div`
box-shadow: 0 8px 16px 0 rgba( 31, 38, 135, 0.27 );
backdrop-filter: blur( 0.0px );
-webkit-backdrop-filter: blur( 0.0px );
${tw`w-full flex flex-col p-2 lg:p-5 mb-4 rounded-lg hover:shadow-md transition duration-100`}

`;
export const Content = tw.div`w-full flex flex-col  p-3 lg:p-5`;
export const Title = tw.h3`font-bold mb-2 text-lg lg:text-2xl text-primary-500  `;
export const Desc = tw.p`font-light text-sm text-gray-700`;
export const Data = tw.p` text-sm text-secondary-700`;

export default News;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(news)/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            place
            date
            description
            title
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
