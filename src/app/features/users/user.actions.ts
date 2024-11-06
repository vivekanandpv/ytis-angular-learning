import { createAction, props } from '@ngrx/store';
import { ChangeFirstNamePayload } from '../../models/user.model';

export const changeFirstNameActionCreator = createAction(
  '[Container] change first name',
  props<ChangeFirstNamePayload>()
);
