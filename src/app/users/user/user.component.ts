import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: IUser | null = null;
  loading: boolean = false;
  loaded: boolean = false;
  error: any = null;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('user').subscribe(({ user, loading, loaded, error }) => {
      this.user = user;
      this.loading = loading;
      this.loaded = loaded;
      this.error = error;
    });

    this.route.params.subscribe(({ id }) =>
      this.store.dispatch(loadUser({ id }))
    );
  }
}
