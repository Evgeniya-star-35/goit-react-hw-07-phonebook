import { createSelector } from 'reselect';

export const getContacts = state => state.phoneBook.contactItems;
export const getFilter = state => state.filter;

export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contactItems, filter) =>
    contactItems.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
