// import { createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './phonebook-operations';

// const initialState = {
//   contacts: [],
//   filter: '',
//   loading: false,
// };

// const contactItems = createReducer(initialState.contacts, {
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,
//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const loading = createReducer(initialState.loading, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,

//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,

//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
// });
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contactItems: [], loading: false, error: null },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => ({
      ...state,
      contactItems: action.payload,
      loading: false,
      error: null,
    }),
    [fetchContacts.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [fetchContacts.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [addContact.fulfilled]: (state, action) => ({
      ...state,
      contactItems: [...state.contactItems, action.payload],
      loading: false,
      error: null,
    }),
    [addContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [addContact.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [deleteContact.fulfilled]: (state, action) => ({
      ...state,
      contactItems: state.contactItems.filter(
        ({ id }) => id !== action.payload,
      ),
      loading: false,
      error: null,
    }),
    [deleteContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [deleteContact.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export default contactsSlice.reducer;
