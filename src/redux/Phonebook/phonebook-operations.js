import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import actions from './phonebook-actions';

axios.defaults.baseURL = 'https://618fa5fff6bf450017484991.mockapi.io/contacts';
export const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactRequest());
  axios
    .get('/contacts')
    .then(response => dispatch(actions.fetchContactSuccess(response.data)))
    .catch(error => dispatch(actions.fetchContactError(error)));
  //   const data = 'baseURL';
  //   return data;
};
export const addContact = (name, number) => dispatch => {
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', { id: uuidv4(), name, number })
    .then(response => dispatch(actions.addContactSuccess(response.data)))
    .catch(error => dispatch(actions.addContactError(error)));
};
export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};
