import React from 'react';
import Layout from '../components/layout';
import { Container, Row, Col } from 'reactstrap';
import Banner from '../components/Banner';

const Contact = () => {
  return (
    <Layout title="Contact Us">
      <Banner title="Contact Us" />
      <Container>
        <Row>
          <Col>
            <div className="page-content">
              <h1>Underconstruction</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Contact;
