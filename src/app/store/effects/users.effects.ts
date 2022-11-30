import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs';
import { loadUsers, loadUsersSuccess } from '../actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService
          .getUsers()
          .pipe(map((users) => loadUsersSuccess({ users })))
      )
    )
  );
}
