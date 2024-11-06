import { inject } from '@angular/core';
import { map, mergeMap, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  loadPostsSuccessActionCreator,
  loadPostsActionCreator,
} from './post.actions';
import { RestService } from '../../rest.service';
import { PostModel } from '../../models/post.model';
import { Store } from '@ngrx/store';
import { postsSelector } from './post.selector';

export class PostsEffects {
  actions$ = inject(Actions);
  restService = inject(RestService);
  store = inject(Store);

  loadPosts = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPostsActionCreator),
      mergeMap(() =>
        this.store.select(postsSelector).pipe(
          mergeMap((v) =>
            v.length === 0
              ? this.restService.get<PostModel[]>('posts').pipe(
                  map((v) =>
                    loadPostsSuccessActionCreator({
                      payload: {
                        posts: v,
                      },
                    })
                  )
                )
              : of(this.store.select(postsSelector)).pipe(
                  map((p) =>
                    loadPostsSuccessActionCreator({
                      payload: {
                        posts: v,
                      },
                    })
                  )
                )
          )
        )
      )
    );
  });
}
