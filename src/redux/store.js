import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterReducer } from './Phonebook/filter-reducer';
import contactsSlice from './Phonebook/phonebook-reduser';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    phoneBook: contactsSlice,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});
// export const persistor = persistStore(store);
export default store;
