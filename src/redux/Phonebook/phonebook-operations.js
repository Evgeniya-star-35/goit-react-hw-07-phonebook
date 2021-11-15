import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://618fa5fff6bf450017484991.mockapi.io';
// import {
//   fetchAllContacts,
//   addContactApi,
//   deleteContactApi,
// } from '../../services/ApiContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    // try {
    //    const { data } = await axios.post("/contacts", contact);
    //    return data;
    // } catch (error) {
    //    return error.message;
    // }
    const { data } = await axios.post('/contacts', contact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const {
      data: { id },
    } = await axios.delete(`/contacts/${contactId}`);

    return id;
  },
);
