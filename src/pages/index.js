import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <p>{data.site.siteMetadata.description}</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/mount.jpg"
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default IndexPage;
