import { createSelector } from '@ngrx/store';
import { Person } from '../models/user.model';

const userSliceSelector = (state: any) => state.userSlice as Person;

export const userSelector = createSelector(userSliceSelector, (u) => u);
