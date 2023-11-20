import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/shared/seo";
import Img from "gatsby-image";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import Btn from "../components/shared/btn";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination]);

const ProductPage = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { t } = useTranslation();
  const { previous, next } = pageContext;

  let post = data;
  if (post.markdownRemark.frontmatter.featuredImage) {
    post.url = `/product${post.markdownRemark.fields.slug}`;
    post.type = post.markdownRemark.frontmatter.date;
    post.durationText = post.markdownRemark.frontmatter.description;
    post.title = post.markdownRemark.frontmatter.title;
    post.imageSrc =
      post.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
    post.locationText = post.markdownRemark.frontmatter.place;
    post.html = post.markdownRemark.html;
  }
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
          <div className=" flex flex-col">
            <ImageContainer>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {post && post.markdownRemark.frontmatter.galleryImages &&
                  post.markdownRemark.frontmatter.galleryImages.map((x) => {
                    return (
                      <SwiperSlide>
                        <Slide>
                          <Img
                            className="w-full max-w-sm"
                            fluid={x.childImageSharp.fluid}
                          />
                        </Slide>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </ImageContainer>
          </div>
          <Content>
            <Title>{post.markdownRemark.frontmatter.title}</Title>
            <Category>Category: {post.markdownRemark.frontmatter.category}</Category>
            <Desc>{parse(post.markdownRemark.html)}</Desc>
          </Content>
          <div className="flex w-full justify-center">
            <Btn to="/products" className="bg-primary-500 text-white mt-12 mr-16">
              {"< "}{t("products.product_subpage_go_back")}
            </Btn>
            <Btn to="/contact" className="bg-lightBlue text-white mt-12 ">
              {t("products.product_subpage_get_qote")}
            </Btn>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export const Wrapper = tw.div`min-h-screen pt-24 pb-10 px-4 flex flex-col items-center justify-center max-w-7xl `;
export const Container = tw(
  motion.div
)`flex flex-col md:flex-row flex-wrap bg-gray-200  mx-auto rounded-lg p-10 relative flex justify-center`;

export const Content = tw.div`w-full md:w-1/2 p-4 md:px-10 lg:px-16 `;
export const Title = tw.h1`font-bold text-3xl  text-primary-500`;
export const Desc = styled.div`
  ${tw`w-full  text-gray-700 mb-12 text-lg`}
  ul,
  ol {
    ${tw`pl-6`};
    li {
      ${tw`relative leading-none`};
      :after {
        content: "";
        top: calc(50% - 4px);
        left: -22px;
        ${tw`w-2 h-2 absolute bg-primary-100 rounded-xl`};
      }
    }
  }
  a {
    ${tw`text-primary-100 border-b-2 border-primary-100 hover:border-b-0`};
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    ${tw`text-3xl`};
  }
`;
export const Category = tw.p` text-primary-700 uppercase font-light text-lg tracking-wider my-4`;
export const Button = tw.button` text-primary-700 uppercase font-light text-lg tracking-wider my-4`;
export const Back = tw.button`absolute top-0 left-0 uppercase font-semibold text-secondary-500 hover:text-secondary-700 -mt-8`;
export const ImageContainer = tw.div`sticky h-144 w-144 w-full bg-transparentWhite max-w-144  flex justify-center rounded-lg pl-5`;
export const Slide = styled.div`
  ${tw`relative bg-white rounded-2xl shadow-lg p-8 m-3 mb-16  flex justify-center items-center h-128 w-128  flex justify-center overflow-hidden`}
`;

export default ProductPage;

export const pageQuery = graphql`
  query productPageBySlug($slug: String!) {
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
        category
        galleryImages {
          childImageSharp {
            fluid(quality: 99) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
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
