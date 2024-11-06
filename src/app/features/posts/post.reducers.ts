import { Action, createReducer, on } from '@ngrx/store';
import { PostLoadSuccessPayload, PostModel } from '../../models/post.model';
import { loadPostsSuccessActionCreator } from './post.actions';

export const postsReducer = createReducer<PostModel[]>(
  [],
  on(loadPostsSuccessActionCreator, (state: PostModel[], action: any) => {
    return action.payload.posts;
  })
);
