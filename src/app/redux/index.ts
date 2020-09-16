import { GameState } from './games/games.reducers';
import { UsersState, usersReducer } from './users/users.reducers';
import { gameReducer } from './games/games.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface AppState {
    gameState: GameState;
    usersState: UsersState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
    gameState: gameReducer,
    usersState: usersReducer,
    router: routerReducer,
};