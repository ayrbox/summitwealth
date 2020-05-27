import axios from 'axios';

const CONTACT_FORM_URL = '/contact-email';

export const sendContactEmail = async data => {
  await axios.post(CONTACT_FORM_URL, data);
};
