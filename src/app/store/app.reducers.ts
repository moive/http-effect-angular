import { ActionReducerMap } from '@ngrx/store';
import { UserState, usersReducer } from './reducers';

export interface AppState {
  users: UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  users: usersReducer,
};
