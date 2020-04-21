import React from 'react';
import { graphql } from 'gatsby';

export default function Template({
  data
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div className="simple-page">
      <h1>{frontmatter.title}</h1>
      <div
        className="simple-page-content"
        dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
