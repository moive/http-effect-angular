import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import { loadUser, loadUserError, loadUserSuccess } from '../actions';
import { mergeMap, map, catchError, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadUser),
      mergeMap((action) =>
        this.userService.getUserById(action.id).pipe(
          map((user) => loadUserSuccess({ user })),
          catchError((err) => of(loadUserError({ payload: err })))
        )
      )
    )
  );
}
