import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/models/user.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: IUser[] }>()
);

export const loadUsersError = createAction(
  '[Users] Load Users Error',
  props<{ payload: any }>()
);
