import React from 'react';
import Layout from '../components/layout';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';
import { Formik } from 'formik';
import { object, string } from 'yup';
import Banner from '../components/Banner';
import Map from '../components/Map';

import { sendContactEmail } from '../api';

const formInitialValue = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const formSchema = object().shape({
  name: string()
    .min(3)
    .required('Name is required.'),
  email: string()
    .email()
    .required('Email is required to contact you.'),
  phone: string().required('Phone or any other contact number is required.'),
  message: string().required('Please tell us how can we help you'),
});

const Contact = () => {
  const handleFormSubmit = (values, { setSubmitting }) => {
    sendContactEmail(values)
      .then(() => {
        console.info('Contact information is sent.');
      })
      .catch(err => {
        console.log('Error sending contact information.', err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Layout title="Contact Us">
      <Banner title="Contact Us" />
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className="page-content">
              <h1>Head Office</h1>
              Riseley House, 4 New Road, Rochester, Kent, ME1 1BD
              <p>
                <FaPhone /> <a href="tel:+441634780460">01634 780 460</a>
              </p>
              <p>
                <FaEnvelope />{' '}
                <a href="mailto:info@summitwealth.co.uk">
                  info@summitwealth.co.uk
                </a>
              </p>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="page-content contact-page-form">
              <h1>Contact Us</h1>
              <Formik
                initialValues={formInitialValue}
                onSubmit={handleFormSubmit}
                validationSchema={formSchema}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  isSubmitting,
                  handleSubmit,
                  errors,
                }) => (
                  <Form onSubmit={handleSubmit} noValidate>
                    <FormGroup>
                      <Label for="name">
                        Your Full Name <span>*</span>
                      </Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Full Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        invalid={!!errors.name}
                      />
                      {errors.name && (
                        <FormFeedback>{errors.name}</FormFeedback>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">
                        Your Email Address <span>*</span>
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email Address"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        invalid={!!errors.email}
                      />
                      {errors.email && (
                        <FormFeedback>{errors.email}</FormFeedback>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="phone">
                        Your Phone Number <span>*</span>
                      </Label>
                      <Input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone Number"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <FormFeedback>{errors.phone}</FormFeedback>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="message">
                        How can we help? <span>*</span>
                      </Label>
                      <Input
                        type="textarea"
                        name="message"
                        id="message"
                        placeholder="Tell us how we can help you"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        invalid={!!errors.message}
                        rows={5}
                      />
                      {errors.message && (
                        <FormFeedback>{errors.message}</FormFeedback>
                      )}
                    </FormGroup>
                    <Button
                      color="danger"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>

                    <p className="form-note">
                      <span>* </span>
                      By submitting details on this form you’re agreeing to
                      Summit Wealth Ltd and it's business partners contacting
                      you to discuss the areas you've expressed an interest in.
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <div className="page-content">
              The guidance and/or advice contained within the website is subject
              to the UK regulatory regime and is therefore targeted at consumers
              based in the UK.
            </div>
          </Col>
        </Row>
      </Container>
      <Map />
    </Layout>
  );
};

export default Contact;
