import { GameState } from './games.reducers';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { Params } from '@angular/router';
import { selectRouteParams } from '../router';

export const selectGameState = (state: AppState) => state.gameState;
export const selectGames = createSelector(
    selectGameState,
    (state: GameState) => state.games
);

export const getGameById = createSelector(
    selectGameState,
    (state: GameState, props: { id: number }) => state.games.find(item => item.id === props.id)
);

export const getCurrentNavigatedGame = createSelector(
    selectGameState,
    selectRouteParams,
    (state: GameState, params: Params) => state.games.find(item => item.id === Number(params['id']))
);

export const getFirstGame = createSelector(
    selectGameState,
    (state: GameState) => state.games.length > 0 ? state.games[0] : null
);