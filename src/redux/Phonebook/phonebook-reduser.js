// import { createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { changeFilter } from './phonebook-actions';
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
    }),
    [fetchContacts.pending]: state => ({
      ...state,
      loading: true,
    }),
    [fetchContacts.rejected]: state => ({
      ...state,
      loading: false,
    }),

    [addContact.fulfilled]: (state, action) => ({
      ...state,
      contactItems: [...state.contactItems, action.payload],
      loading: false,
    }),
    [addContact.pending]: state => ({
      ...state,
      loading: true,
    }),
    [addContact.rejected]: state => ({
      ...state,
      loading: false,
    }),

    [deleteContact.fulfilled]: (state, action) => ({
      ...state,
      contactItems: state.contactItems.filter(
        ({ id }) => id !== action.payload,
      ),
      loading: false,
    }),
    [deleteContact.pending]: state => ({
      ...state,
      loading: true,
    }),
    [deleteContact.rejected]: state => ({
      ...state,
      loading: false,
    }),
  },
});

export default contactsSlice.reducer;
