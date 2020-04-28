import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col className="pb-5">
            <p className="lead text-justify">
              IMPORTANT: Your home may be repossessed if you do not keep up
              repayments on your mortgage. Our typical fee is £399 for purchases
              and £199 for remortgages but a fee of up to 1% is payable in some
              instances. Some commercial mortgages and most buy to let mortgages
              are not regulated by The Financial Conduct Authority.
            </p>
          </Col>
        </Row>
        <Row xs="1" sm="1" md="2">
          <Col>
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt="Summit Wealth Logo"
            />
            <h4>Summit Wealth</h4>
            Registered Office:
            <br />
            Riseley House, 4 New Road, <br />
            Rochester, Kent, ME1 1BD
          </Col>
          <Col className="d-flex align-items-center">
            Summit Wealth Ltd (840354) is an appointed representative of New
            Leaf Distribution Ltd which is authorised and regulated by the
            Financial Conduct Authority - FCA Number 460421
          </Col>
        </Row>
      </Container>
      <div className="copyright-section">
        <Container>
          <Row>
            <Col>
              &copy; {new Date().getFullYear()} Summit Wealth Finance. All
              Rights Reserved.
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
