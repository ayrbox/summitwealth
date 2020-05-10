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
  const handleFormSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 10000);
  };

  return (
    <section className="contact-box">
      <Container>
        <Row className="contact-box-row">
          <Col>
            <div className="contact-box-header">
              <h3>Are you in rush?</h3>
              <p>Leave you details, and we'll be in touch with you.</p>
            </div>
          </Col>
          <Col>
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
                  <Button color="danger" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>

                  <p className="form-note">
                    <span>*</span> Details submitted through this form are
                    confidential. The information therein is used only to
                    contact you to discuss the areas you've expressed an
                    interest in.
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
