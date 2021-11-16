import { createSelector } from 'reselect';
// import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phoneBook.contactItems;
export const getFilter = state => state.filter;
// export const getFiltredContacts = state => {
//   const lowerCasedFilter = getFilter(state).toLowerCase();
//   const filteredContacts = getContacts(state).filter(({ name }) =>
//     name.toLowerCase().includes(lowerCasedFilter),
//   );
//   return filteredContacts;
// };
// const getFilterToLowerCase = createSelector(getFilter, filter => {
//   const filterToLowerCase = filter.toLowerCase();
//   return filterToLowerCase;
// });

export const getFiltredContacts = createSelector(
  getContacts,
  getFilter,
  (contactItems, filter) =>
    contactItems.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
