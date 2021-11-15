import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import initialContacts from '../../contacts.json';
import { changeFilter } from './phonebook-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './phonebook-operations';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
};

const contactItems = createReducer(initialState.contacts, {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer(initialState.filter, {
  [changeFilter]: (_, { payload }) => payload,
});
const loading = createReducer(initialState.loading, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({ contactItems, filter, loading });
