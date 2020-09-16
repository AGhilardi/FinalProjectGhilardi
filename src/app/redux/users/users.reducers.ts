import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/model/user.interface';
import { saveCurrentUser } from './users.actions';

export interface UsersState {
    currentUser: User;
}

export const initialState: UsersState = {
    currentUser: null
};

const usersReducerFun = createReducer(
    initialState,
    on(saveCurrentUser, (state, { user }) => ({ ...state, currentUser: user }))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
    return usersReducerFun(state, action);
}