const functions = require('firebase-functions');
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

const DEST = 'info@summitwealth.co.uk';

// Read keys from firebase config https://firebase.google.com/docs/functions/config-env
// `firebase functions:config:get`
const {
  mailgun: { smtp, user, password },
} = functions.config();

const transporter = nodemailer.createTransport({
  host: smtp,
  auth: {
    user: user,
    pass: password,
  },
});

app.post('/contact-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailHtml = `
      <p>
        You have got contact request via summitwealth.co.uk for follow up. Please find the contact detail below.
      </p>
      <hr />
      Name: <strong>${name}</strong>
      <br/>
      Email: <strong>${email}</strong>
      <br/>
      Phone: <strong>${phone}</strong>
      <br/>
      Message:
      <br />
      <p>${message || ' - '}</p>
   `;

  const mailOptions = {
    from: `${name} <${email}>`,
    to: DEST,
    subject: `Contact from ${name}`,
    html: mailHtml,
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({
        msg: 'Error sending email.',
        detail: error
      });
    }
    return res.send('Email sent.');
  });
});

exports.contactEmail = functions.https.onRequest(app);
