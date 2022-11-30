import { IUser } from '../../models/user.model';
import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserError, loadUserSuccess } from '../actions';
export interface UserState {
  id: string | null;
  user: IUser | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const UserInitialState: UserState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

export const UserReducer = createReducer(
  UserInitialState,
  on(loadUser, (state, { id }) => ({ ...state, loading: true, id })),
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...user },
    error: null,
  })),
  on(loadUserError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    user: null,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);
