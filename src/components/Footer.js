import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import logo from '../assets/images/logo.jpg';

const Footer = () => (
  <footer className="footer-section">
    <Container>
      <Row xs="1" sm="1" md="2">
        <Col>
          <address>
            <img src={logo} alt="Company Logo" />
            <h4>Summit Wealth</h4>
            Registered Office:
            <br />
            Riseley House, 4 New Road, <br />
            Rochester, Kent, ME1 1BD
          </address>
        </Col>
        <Col className="d-flex align-items-center">
          Summit Wealth Ltd (840354) is an appointed representative of New Leaf
          Distribution Ltd which is authorised and regulated by the Financial
          Conduct Authority - FCA Number 460421
        </Col>
      </Row>
      <Row>
        <Col>
          &copy; {new Date().getFullYear()} Summit Wealth Finance. All Rights
          Reserved.
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
