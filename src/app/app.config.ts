import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { userReducer } from './features/users/user.reducers';
import { provideEffects } from '@ngrx/effects';
import { postsReducer } from './features/posts/post.reducers';
import { PostsEffects } from './features/posts/post.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore({
      userSlice: userReducer,
      postsSlice: postsReducer,
    }),
    provideEffects(PostsEffects),
  ],
};
