import React, { useState } from 'react';
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

import { sendContactEmail } from '../api';

const formInitialValue = {
  name: '',
  email: '',
  phone: '',
};

const formSchema = object().shape({
  name: string()
    .min(3)
    .required('Name is required.'),
  email: string()
    .email()
    .required('Email is required to contact you.'),
  phone: string().required('Phone or any other contact number is required.'),
});

const ContactBox = () => {
  const [contactError, setContactError] = useState();
  const [contactSuccess, setContactSuccess] = useState();

  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    setContactError(null);
    setContactSuccess(null);
    sendContactEmail(values)
      .then(() => {
        setContactSuccess(
          'Your contact detail has been sent. We will contact you back soon. Thank you.'
        );
        resetForm(formInitialValue);
      })
      .catch(err => {
        setContactError(
          'Unable to send your contact detail. Please try again later or give us a call.'
        );
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section className="contact-box">
      <Container>
        <Row className="contact-box-row">
          <Col sm={12} md={6}>
            <div className="contact-box-header">
              <h3>
                Want to talk to one of our advisors?
                <br />
                Leave your details, and we'll be in touch.
              </h3>
            </div>
          </Col>
          <Col sm={12} md={6}>
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
                    {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
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
                  {contactSuccess && (
                    <p className="alert alert-success">{contactSuccess}</p>
                  )}

                  {contactError && (
                    <p className="alert alert-danger">{contactError}</p>
                  )}

                  <Button color="danger" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>

                  <p className="form-note">
                    <span>* </span>
                    By submitting details on this form you’re agreeing to Summit
                    Wealth Ltd and it's business partners contacting you.
                  </p>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactBox;
