import { createAction, props } from '@ngrx/store';
import { Game } from 'src/app/core/model/game.interface';

export const initGames = createAction('[Games] init', props<{games: Game[]}>());
export const insertGame = createAction('[Games] insert', props<{game: Game}>());
export const removeGame = createAction('[Games] remove', props<{id: number}>());
export const editGame = createAction('[Games] edit', props<{game: Game}>());
export const retrieveAllGames =  createAction('[Games] retrieve all');
export const updateGame = createAction('[Game] update', props<{game: Game}>());
export const postGame = createAction('[Game] add to server', props<{game: Game}>());