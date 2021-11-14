import { v4 as uuidv4 } from 'uuid';

//reduxjs/toolkit
import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchRequest');
const fetchContactSuccess = createAction('contacts/fetchSuccess');
const fetchContactError = createAction('contacts/fetchError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

// const addContact = createAction('contacts/Add', ({ name, number }) => ({
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// }));
const deleteContactRequest = createAction('contacts/deleteRequest');
const deleteContactSuccess = createAction('contacts/deleteSuccess');
const deleteContactError = createAction('contacts/deleteError');

// const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/changeFilter');

const actions = {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  changeFilter,
};

export default actions;
