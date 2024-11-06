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
import { userSelector } from './features/user.selectors';
import { changeFirstNameActionCreator } from './features/user.actions';

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
  private restService = inject(RestService);
  private store = inject(Store);

  posts$ = this.restService.get<PostModel[]>('posts');

  user$ = this.store.select(userSelector);

  changeFirstName() {
    this.store.dispatch(
      changeFirstNameActionCreator({ newFirstName: 'Rakesh' })
    );
  }
}
