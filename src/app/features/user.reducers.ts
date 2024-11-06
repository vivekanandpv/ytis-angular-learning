import { createReducer, on } from '@ngrx/store';
import { Person } from '../models/user.model';
import { changeFirstNameActionCreator } from './user.actions';

export const userReducer = createReducer<Person>(
  {
    firstName: 'John',
    lastName: 'Doe',
  },
  on(changeFirstNameActionCreator, (state: Person, action: any) => {
    const newState = { ...state };
    newState.firstName = action.payload.newFirstName;
    return newState;
  })
);
