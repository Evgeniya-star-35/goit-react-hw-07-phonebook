// import { v4 as uuidv4 } from 'uuid';

//reduxjs/toolkit
import { createAction } from '@reduxjs/toolkit';

// export const fetchContactRequest = createAction('contacts/fetchRequest');
// export const fetchContactSuccess = createAction('contacts/fetchSuccess');
// export const fetchContactError = createAction('contacts/fetchError');

// export const addContactRequest = createAction('contacts/addContactRequest');
// export const addContactSuccess = createAction('contacts/addContactSuccess');
// export const addContactError = createAction('contacts/addContactError');

// export const deleteContactRequest = createAction('contacts/deleteRequest');
// export const deleteContactSuccess = createAction('contacts/deleteSuccess');
// export const deleteContactError = createAction('contacts/deleteError');
export const addContact = createAction('contact/add');
export const deleteContact = createAction('contact/delete');
export const changeFilter = createAction('contact/changeFilter');
