import { createAction, props } from '@ngrx/store';
import { PostLoadSuccessPayload } from '../../models/post.model';

export const loadPostsActionCreator = createAction(
  '[Posts] load posts initiated'
);

export const loadPostsSuccessActionCreator = createAction(
  '[Posts] load posts success',
  props<PostLoadSuccessPayload>()
);
