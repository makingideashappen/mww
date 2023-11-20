import React, { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/shared/seo";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import styled, { css } from "styled-components"; //eslint-disable-line
import Img from "gatsby-image";
import { motion } from "framer-motion";
import Link from "../components/shared/link";
import parse from "html-react-parser";
import { graphql } from "gatsby";
import { isMobile } from "react-device-detect";
import { Modal } from '../components/Modal/Modal';
import SimpleContactUs from "../components/Contact/SimpleContactUs.js";


const Products = ({ data, location }) => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);

  const items = data.allMarkdownRemark.edges
    .map((item) => (item = item.node))
    .filter((x) => {
      const formattedCategory = x.frontmatter.category.replace(" ", "");
      return (
        typeof window !== "undefined" &&
        (location.href.includes(formattedCategory) ||
          !location.href.includes("#"))
      );
    });

  const submenuLinks = [
    {
      heading: t("shared.nav_link1_submenu_title1"),
      links: [
        {
          name: t("shared.nav_link1_submenu_title1_item1"),
          url:
            "/products/#" +
            t("shared.nav_link1_submenu_title1") +
            t("shared.nav_link1_submenu_title1_item1"),
        },
        {
          name: t("shared.nav_link1_submenu_title1_item2"),
          url:
            "/products/#" +
            t("shared.nav_link1_submenu_title1") +
            t("shared.nav_link1_submenu_title1_item2"),
        },
        {
          name: t("products.ask_for_more"),
          url: "/products/#inquiury-steel" + t("shared.nav_link1_submenu_title2"),
        },
      ],
    },
    {
      heading: t("shared.nav_link1_submenu_title2"),
      links: [
        {
          name: t("shared.nav_link1_submenu_title2_item1"),
          url:
            "/products/#" +
            t("shared.nav_link1_submenu_title2") +
            t("shared.nav_link1_submenu_title2_item1"),
        },
        {
          name: t("shared.nav_link1_submenu_title2_item2"),
          url:
            "/products/#" +
            t("shared.nav_link1_submenu_title2") +
            t("shared.nav_link1_submenu_title2_item2"),
        },
        {
          name: t("shared.nav_link1_submenu_title2_item3"),
          url:
            "/products/#" +
            t("shared.nav_link1_submenu_title2_item3")
              .split(" ")
              .join(""),
        },
        {
          name: t("products.ask_for_more"),
          url: "/products/#inquiury-aluminium" + t("shared.nav_link1_submenu_title2"),
        },
      ],
    },
  ];

  return (
    <Layout>
      <SEO title='Products' />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.21, delay: 0.1, ease: "easeOut" },
        }}
        className='pt-24'
      >
        <Heading1>{t("products.heading")}</Heading1>
        <Container>
          <Navigation>
            <SubmenuLink
              isActive={location.pathname === "/products"}
              to={"/products"}
            >
              All products
            </SubmenuLink>
            {submenuLinks.map((item) => {
              return (
                <SubmenuBox>
                  <SubmenuHeading>{item.heading}</SubmenuHeading>
                  <LinksBox>
                    {item.links.map((item) => {
                      const isActive =
                        typeof window !== "undefined" &&
                        location.href.includes(item.url);
                      return (
                        <SubmenuLink
                          isActive={isActive}
                          key={item.url}
                          onClick={item.url.includes("inquiury-") ? () => setModal(true) : () => setModal(false)
                          }
                          to={item.url}
                        >
                          {item.name}
                        </SubmenuLink>
                      );
                    })}
                  </LinksBox>
                </SubmenuBox>
              );
            })}
          </Navigation>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.21, delay: 0.1, ease: "easeOut" },
            }}
            className='d-flex'

          >
            {modal && <FormContainer> <SimpleContactUs /></FormContainer>}
          </motion.div>
          {!modal && <List>
            {items.length < 1 ? <div className="font-bold m-5 text-primary-500">"No products in this category."</div> : items.map((item) => {
              return (
                <Link key={item.id} to={`/products${item.fields.slug}`}>
                  <ListItem>
                    <Img
                      className='w-32'
                      fluid={
                        item.frontmatter.featuredImage.childImageSharp.fluid
                      }
                    />
                    <Content>
                      <Title>{item.frontmatter.title}</Title>
                      <Desc> {parse(item.frontmatter.description)}</Desc>
                    </Content>
                  </ListItem>
                </Link>
              );
            })}
          </List>}

          {/* {modal && SimpleContactUs} */}

        </Container>
      </motion.div>
    </Layout >
  );
};

const Heading1 = tw.h1`text-center font-bold text-4xl md:text-5xl text-primary-500 w-full  pb-4 px-4  border-b-2  mb-16 mx-auto`;

export const Container = styled.div`
  ${tw`flex flex-col lg:flex-col justify-around   mx-auto relative p-2 md:p-0 mb-24 `}
`;
export const Navigation = styled.div`
  ${tw`flex flex-col md:flex-row justify-center w-full sticky p-2 mb-10 ml-auto mr-auto`};
  background: rgba( 255, 255, 255, 0.15 );
box-shadow: 0 8px 16px 0 rgba( 31, 38, 135, 0.27 );
backdrop-filter: blur( 0.0px );
-webkit-backdrop-filter: blur( 0.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
max-width:864px;
;
`;
export const List = tw.div`flex flex-col max-w-864 m-auto px-0 lg:px-4 min-h-144 mt-0`;
export const ListItem = styled.div`
box-shadow: 0 8px 16px 0 rgba( 31, 38, 135, 0.27 );
backdrop-filter: blur( 0.0px );
-webkit-backdrop-filter: blur( 0.0px );
${tw`w-full flex flex-col lg:flex-row bg-gray-200 hover:shadow-md  duration-100 ease-in-out p-5 mb-4 rounded-lg`}
`;
export const Content = tw.div`w-full flex flex-col pt-5  pl-0 lg:pl-4`;
export const Title = tw.h3`font-bold mb-2 text-2xl text-primary-500  `;
export const Desc = tw.p`font-light text-sm text-gray-700`;
export const SubmenuBox = styled.div`
  ${tw`flex flex-col mb-0 lg:mb-6 last:mb-2`}
`;
export const LinksBox = styled.div`
  ${tw`flex flex-row lg:flex-col flex-wrap`}
`;
export const SubmenuHeading = styled.span`
  ${tw`font-semibold border-secondary-500 py-8 px-4 pb-1 text-xl mb-2 uppercase`};
`;
export const SubmenuLink = styled(Link)`
  ${tw`m-2 mx-4 px-8 py-1  font-bold rounded border-primary-500 border text-primary-500 hocus:bg-primary-500 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 h-auto`}
  max-height:33px;
  max-width:180px;
 ${(props) =>
    props.isActive &&
    css`
${tw`m-2 mx-4 px-8 py-1  font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-500 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 h-auto`};
`}
`;

export const FormContainer = styled.div`
max-width:864px;
margin:0 auto;
`

export default Products;

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(products)/" } }
  ) {
    edges {
      node {
        id
        html
        frontmatter {
          date
          description
          title
          tags
          category
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
