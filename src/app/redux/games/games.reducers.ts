import { Action, createReducer, on } from '@ngrx/store';
import { Game } from 'src/app/core/model/game.interface';
import { editGame, initGames, insertGame, removeGame } from './games.actions';

export interface GameState {
    games: Game[];
    
}

export const initialState: GameState = {
    games: []
};

const gamesReducerFun = createReducer(
    initialState,
    on(initGames, (state, { games }) => ({ ...state, games: games })),
    on(insertGame, (state, { game }) => ({ ...state, games: [...state.games, game] })),
    on(removeGame, (state, { id }) => ({ ...state, games: state.games.filter(item => item.id !== id) })),
    on(editGame, (state, { game }) => ({ ...state, games: state.games.map(item => item.id === game.id ? game : item) }))
);

export function gameReducer(state: GameState | undefined, action: Action) {
    return gamesReducerFun(state, action);
}