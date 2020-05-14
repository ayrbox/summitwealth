import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Button } from 'reactstrap';
import clsx from 'clsx';

const COOKIE_KEY = 'cookie-policy-accepted';

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem(COOKIE_KEY)) {
        setShow(true);
      }
    }, 2000);
  }, []);

  const handleAccept = e => {
    e.preventDefault();
    localStorage.setItem(COOKIE_KEY, true);
    setShow(false);
  };

  return (
    <div
      className={clsx({
        'cookie-container': true,
        active: show,
      })}
    >
      <Container>
        We use cookies to ensure we give you the best browsing experience on our
        website. This includes cookies from third party analytics providers to
        help us understand how you use our site so we can continually improve.
        You can delete and block cookies, but parts of our site won’t work
        without them.
        <br />
        If you’d like to find out more about how we use cookies and how we look
        after your data view our{' '}
        <Link to="/privacy-cookie-policy">Privacy and Cookies policy.</Link>.
        <Row>
          <Col>
            <Button color="danger" onClick={handleAccept}>
              OK
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CookieBanner;
