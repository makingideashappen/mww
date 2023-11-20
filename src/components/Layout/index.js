import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import StickySocials from "./StickySocials";
// import "../assets/stylesheets/layout.scss";
import { GlobalStyle } from "./GlobalStyle";
import { withTrans } from "../../i18n/withTrans";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
      <StickySocials />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTrans(Layout);
