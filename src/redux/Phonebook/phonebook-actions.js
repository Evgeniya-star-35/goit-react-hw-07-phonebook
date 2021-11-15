// import { v4 as uuidv4 } from 'uuid';

//reduxjs/toolkit
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add');
export const deleteContact = createAction('contact/delete');
export const changeFilter = createAction('contact/changeFilter');
