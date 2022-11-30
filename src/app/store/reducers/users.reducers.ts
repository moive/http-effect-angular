import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/models/user.model';
import { loadUsers, loadUsersSuccess, loadUsersError } from '../actions/';
export interface UserState {
  users: IUser[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UserState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

export const usersReducer = createReducer(
  usersInitialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),
  on(loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);
