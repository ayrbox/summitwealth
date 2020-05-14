import axios from 'axios';

const CONTACT_FORM_URL = 'https://samplecontactform.com';

export const sendContactInformation = async data => {
  await axios.post(CONTACT_FORM_URL, data);
};

export const mockSendContactInformation = async data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Data', JSON.stringify(data, null, 2));
      resolve();
      // reject(new Error('Unexpected error please try again.'));
    }, 3000);
  });
};
