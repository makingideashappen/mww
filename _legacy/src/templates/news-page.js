import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/shared/seo";
import Img from "gatsby-image";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import Btn from "../components/shared/btn";
import GetStarted from "../components/Index/GetStarted";
import { motion } from "framer-motion";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  console.log(data);
  let post = data;

  post.url = `/news${post.markdownRemark.fields.slug}`;
  post.type = post.markdownRemark.frontmatter.date;
  post.durationText = post.markdownRemark.frontmatter.description;
  post.title = post.markdownRemark.frontmatter.title;
  post.imageSrc =
    post.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
  post.locationText = post.markdownRemark.frontmatter.place;
  post.html = post.markdownRemark.html;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.markdownRemark.frontmatter.title}
        description={post.markdownRemark.frontmatter.description}
      />

      <Wrapper>
        <Container
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3, ease: "easeOut" },
          }}
        >
          <Img className='w-full rounded-lg' fluid={post.imageSrc} />
          <Content>
            <Data>{post.markdownRemark.frontmatter.date}</Data>
            <Title>{post.markdownRemark.frontmatter.title}</Title>
            <Desc>{parse(post.markdownRemark.frontmatter.description)}</Desc>
            <div className="flex justify-center"> <Btn to="/news" className="bg-primary-500 text-white mt-12  mb-6">
              {"< "}Go back
              </Btn></div>
          </Content>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export const Wrapper = tw.div`min-h-screen pt-0 pb-10 px-4 flex flex-col items-center justify-center mt-24`;
export const Container = tw(
  motion.div
)`flex flex-col   mx-auto rounded-lg p-4 lg:p-10 relative max-w-5xl `;
export const Content = tw.div`w-full   pt-6`;
export const Title = tw.h1`font-bold text-xl lg:text-3xl  text-primary-500 mb-5`;
export const Desc = tw.p` text-sm  lg:text-base text-gray-700`;
export const Data = tw.p` text-sm text-secondary-700`;
export const Back = tw.button`absolute top-0 left-0 uppercase font-semibold text-secondary-500 hover:text-secondary-700 `;

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        place
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
`;
