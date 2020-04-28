import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';

const homePage = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/home" } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(homePage);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout title="Home">
      <h1>{frontmatter.title}</h1>
      <div
        className="simple-page-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export default IndexPage;
