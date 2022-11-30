import { ActionReducerMap } from '@ngrx/store';
import { UsersState, usersReducer, UserState, UserReducer } from './reducers';

export interface AppState {
  users: UsersState;
  user: UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  users: usersReducer,
  user: UserReducer,
};
