import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  addContactApi,
  deleteContactApi,
} from '../../services/ApiContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await fetchAllContacts();
    return contacts;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const newContact = await addContactApi({ name, number });
    return newContact;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContactApi',
  async contactId => {
    const deleteContact = await deleteContactApi(contactId);
    return deleteContact;
  },
);
