const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const remark = require("remark");
const remarkHTML = require("remark-html");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const newsPost = path.resolve(`./src/templates/news-page.js`);
  const productPost = path.resolve(`./src/templates/product-page.js`);

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fileAbsolutePath
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                heading
                subheading
                message
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts
    .filter((item) => item.node.frontmatter.templateKey !== "slider-posts")
    .forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fileAbsolutePath.includes("product")
          ? `/products${post.node.fields.slug}`
          : `/news${post.node.fields.slug}`,
        component: post.node.fileAbsolutePath.includes("news")
          ? newsPost
          : productPost,
        context: {
          slug: `${post.node.fields.slug}`,
          previous,
          next,
        },
      });
    });
};

const transformToHtml = (node, key) => {
  if (node.frontmatter && node.frontmatter[key]) {
    const markdown = node.frontmatter[key];
    node.frontmatter[key] = remark()
      .use(remarkHTML)
      .processSync(markdown)
      .toString();
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  transformToHtml(node, "description");

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
