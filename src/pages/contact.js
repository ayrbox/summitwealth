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

const formInitialValue = {
  name: '',
  email: '',
  phone: '',
  message: 'alskjdflakjs',
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
    setTimeout(() => {
      console.log('DATA', values);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Layout title="Contact Us">
      <Banner title="Contact Us" />
      <Container>
        <Row>
          <Col>
            <div className="page-content">
              <h1>Head Office</h1>
              Riseley House, 4 New Road, Rochester, Kent, ME1 1BD
              <p>
                <FaPhone /> <a href="tel:+442012345678">020 1234 5678</a>
              </p>
              <p>
                <FaEnvelope />{' '}
                <a href="mailto:info@summitwealth.co.uk">
                  info@summitwealth.co.uk
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <div className="page-content">
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
    </Layout>
  );
};

export default Contact;
