import { createSelector } from '@ngrx/store';
import { PostModel } from '../../models/post.model';

const postsSliceSelector = (state: any) => state.postsSlice as PostModel[];

export const postsSelector = createSelector(postsSliceSelector, (p) => p);
