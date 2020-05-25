const functions = require('firebase-functions');
const express = require('express');
const app = express();
const mailgun = require('mailgun-js');

app.post('/contact-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailText = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message || ' - '}
  `;

  const data = {
    from: `${name} <${email}>`,
    to: 'srdx7@hotmail.com',
    subject: `Contact from ${name}`,
    text: mailText,
  };

  // Read keys from firebase config https://firebase.google.com/docs/functions/config-env
  // `firebase functions:config:get`
  const apiKey = functions.config().mailgun.api_key;
  const domain = functions.config().mailgun.domain;

  const mg = mailgun({ apiKey, domain });
  mg.messages().send(data, function(error, body) {
    res.end(body);
  });
});

exports.contactEmail = functions.https.onRequest(app);
