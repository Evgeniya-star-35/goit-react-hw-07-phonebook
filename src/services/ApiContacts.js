import axios from 'axios';

axios.defaults.baseURL = 'https://618fa5fff6bf450017484991.mockapi.io';

export const fetchAllContacts = async () => {
  const data = await axios.get('/contacts').then(({ data }) => {
    return data;
  });
  return data;
};
export const addContactApi = async contact => {
  const data = await axios({
    method: 'post',
    url: '/contacts',
    data: contact,
  }).then(({ data }) => data);
  return data;
};

export const deleteContactApi = async contactId => {
  const deleteContact = await axios
    .delete(`/contacts/${contactId}`)
    .then(({ data }) => data.id);
  return deleteContact;
};
