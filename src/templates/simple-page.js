import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../components/layout';
import Banner from '../components/Banner';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout title={frontmatter.title}>
      <Banner
        image={frontmatter.image}
        title={frontmatter.title}
        lead={frontmatter.lead}
        links={frontmatter.links}
      />
      <Container>
        <Row>
          <Col>
            <div
              className="page-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        lead
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        links {
          title
          path
        }
      }
    }
  }
`;
