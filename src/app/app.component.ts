import {
  Component,
  signal,
  Signal,
  AfterViewChecked,
  inject,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { userSelector } from './features/users/user.selectors';
import { changeFirstNameActionCreator } from './features/users/user.actions';
import { loadPostsActionCreator } from './features/posts/post.actions';
import { postsSelector } from './features/posts/post.selector';

interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private store = inject(Store);

  posts$ = this.store.select(postsSelector);

  user$ = this.store.select(userSelector);

  changeFirstName() {
    this.store.dispatch(
      changeFirstNameActionCreator({ payload: { newFirstName: 'Rakesh' } })
    );
  }

  getPosts() {
    this.store.dispatch(loadPostsActionCreator());
  }
}
