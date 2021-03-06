import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Banner from '../components/Banner';

const homePage = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/home" } }) {
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

const IndexPage = () => {
  const data = useStaticQuery(homePage);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout title="Home">
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
};

export default IndexPage;
