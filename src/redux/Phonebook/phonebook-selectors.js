export const getContacts = state => state.phoneBook.contactItems;
export const getFilter = state => state.filter;
// export const getLoading = state => state.phoneBook.loading;
export const getFiltredContacts = state => {
  const lowerCasedFilter = getFilter(state).toLowerCase();
  const filteredContacts = getContacts(state).filter(({ name }) =>
    name.toLowerCase().includes(lowerCasedFilter),
  );
  return filteredContacts;
};
